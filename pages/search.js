"use strict";

(function () {
  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  window.DelphiPoemsPages.search = function renderSearchPage(context) {
    const { buildUrl, escapeHtml, route } = context;
    const { searchCatalog, siteData } = window.DelphiPoemsContent;
    const query = route.query.trim();
    const results = query ? searchCatalog(query) : [];

    const rows =
      results.length > 0
        ? results
            .map(
              (item) => `
                <tr>
                  <td>${escapeHtml(siteData.poemCollections[item.collectionKey]?.navTitle || "Poems")}</td>
                  <td>${escapeHtml(item.category)}</td>
                  <td>
                    ${
                      item.available
                        ? `<a class="component-link" href="${buildUrl(item.detailPage)}" data-route="${item.detailPage}"><span class="name-cell"><img src="${item.image}" alt="" class="name-cell__icon" onerror="this.remove();" /><span>${escapeHtml(item.name)}</span></span></a>`
                        : `<span class="name-cell"><img src="${item.image}" alt="" class="name-cell__icon" onerror="this.remove();" /><span>${escapeHtml(item.name)}</span></span>`
                    }
                  </td>
                  <td>${escapeHtml(item.description)}</td>
                  <td class="read-cell">
                    ${
                      item.available
                        ? `<a class="read-link" href="${buildUrl(item.detailPage)}" data-route="${item.detailPage}">READ <span aria-hidden="true">&rarr;</span></a>`
                        : `<span class="read-link read-link--disabled">READ <span aria-hidden="true">&rarr;</span></span>`
                    }
                  </td>
                </tr>
              `,
            )
            .join("")
        : `
          <tr>
            <td colspan="5" class="no-results">
              ${query ? `No search results found for &ldquo;${escapeHtml(query)}&rdquo;.` : "Enter a search term to browse matching poems."}
            </td>
          </tr>
        `;

    return `
      <section class="page-strip">
        <div class="container-xxl">
          <div class="page-strip__head page-strip__head--stacked">
            <div>
              <h1 class="page-title">Search Results</h1>
              <p class="page-subtitle">
                ${query ? `${results.length} result${results.length === 1 ? "" : "s"} for &ldquo;${escapeHtml(query)}&rdquo;.` : "Search across Delphi, VCL, and FMX poems."}
              </p>
            </div>
            <form class="catalog-search" data-search-form="global">
              <label class="visually-hidden" for="catalog-search-input">Search poems</label>
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
                <tr>
                  <th scope="col">Collection</th>
                  <th scope="col">Type / Category</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Poem</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  };
})();