(function () {
  const catalogTextCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

  function compareCatalogItems(leftItem, rightItem, sortKey) {
    switch (sortKey) {
      case "category": {
        return (
          catalogTextCollator.compare(leftItem.category, rightItem.category) ||
          catalogTextCollator.compare(leftItem.name, rightItem.name)
        );
      }
      case "name": {
        return (
          catalogTextCollator.compare(leftItem.name, rightItem.name) ||
          catalogTextCollator.compare(leftItem.category, rightItem.category)
        );
      }
      case "description": {
        return (
          catalogTextCollator.compare(leftItem.description, rightItem.description) ||
          catalogTextCollator.compare(leftItem.name, rightItem.name)
        );
      }
      case "poem": {
        return Number(rightItem.available) - Number(leftItem.available) || catalogTextCollator.compare(leftItem.name, rightItem.name);
      }
      default:
        return 0;
    }
  }

  function sortCatalogItems(items, sortKey, direction) {
    if (!sortKey) {
      return items;
    }

    const directionFactor = direction === "desc" ? -1 : 1;
    return [...items].sort((leftItem, rightItem) => directionFactor * compareCatalogItems(leftItem, rightItem, sortKey));
  }

  function renderCatalogPage(context) {
    const { buildUrl, escapeHtml, route } = context;
    const { collection } = route;
    const query = route.query.trim().toLowerCase();
    const filteredItems = collection.catalog.filter((item) => {
      if (!query) {
        return true;
      }

      return `${item.category} ${item.name} ${item.description}`.toLowerCase().includes(query);
    });

    const sortedItems = sortCatalogItems(filteredItems, route.sort, route.dir);
    const columns = [
      { key: "category", label: "Type / Category" },
      { key: "name", label: "Name" },
      { key: "description", label: "Description" },
      { key: "poem", label: "Poem" },
    ];

    const headerCells = columns
      .map((column) => {
        const isActive = route.sort === column.key;
        const ariaSort = isActive ? (route.dir === "desc" ? "descending" : "ascending") : "none";
        const indicator = isActive
          ? `<span class="table-sort__indicator" aria-hidden="true">${route.dir === "desc" ? "&darr;" : "&uarr;"}</span>`
          : "";

        return `
          <th scope="col" aria-sort="${ariaSort}">
            <button type="button" class="table-sort${isActive ? " is-active" : ""}" data-sort-key="${column.key}">
              <span>${column.label}</span>
              ${indicator}
            </button>
          </th>
        `;
      })
      .join("");

    const rows =
      sortedItems.length > 0
        ? sortedItems
            .map(
              (item) => `
                <tr>
                  <td>${escapeHtml(item.category)}</td>
                  <td>
                    ${
                      item.available
                        ? `<a class="component-link" href="${buildUrl(`${collection.listPage}/${item.slug}`)}" data-route="${collection.listPage}/${item.slug}"><span class="name-cell"><img src="${item.image}" alt="" class="name-cell__icon" onerror="this.remove();" /><span>${escapeHtml(item.name)}</span></span></a>`
                        : `<span class="name-cell"><img src="${item.image}" alt="" class="name-cell__icon" onerror="this.remove();" /><span>${escapeHtml(item.name)}</span></span>`
                    }
                  </td>
                  <td>${escapeHtml(item.description)}</td>
                  <td class="read-cell">
                    ${
                      item.available
                        ? `<a class="read-link" href="${buildUrl(`${collection.listPage}/${item.slug}`)}" data-route="${collection.listPage}/${item.slug}">READ <span aria-hidden="true">&rarr;</span></a>`
                        : `<span class="read-link read-link--disabled">READ <span aria-hidden="true">&rarr;</span></span>`
                    }
                  </td>
                </tr>
              `,
            )
            .join("")
        : `
          <tr>
            <td colspan="4" class="no-results">No poems found.</td>
          </tr>
        `;

    return `
      <section class="page-strip">
        <div class="container-xxl">
          <div class="page-strip__head">
            <h1 class="page-title">${escapeHtml(collection.listTitle)}</h1>
            <form class="catalog-search" data-search-form="catalog">
              <label class="visually-hidden" for="catalog-search-input">Search ${escapeHtml(collection.navTitle)}</label>
              <input
                id="catalog-search-input"
                class="form-control"
                type="search"
                name="search"
                value="${escapeHtml(route.query)}"
                placeholder="Search..."
              />
            </form>
          </div>
          <div class="table-responsive vcl-table-wrap">
            <table class="table vcl-table align-middle mb-0">
              <thead>
                <tr>${headerCells}</tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }

  window.DelphiPoemsPages = window.DelphiPoemsPages || {};
  window.DelphiPoemsPages.catalog = renderCatalogPage;
})();