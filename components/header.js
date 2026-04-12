(function () {
  window.DelphiPoemsComponents = window.DelphiPoemsComponents || {};

  window.DelphiPoemsComponents.renderHeader = function renderHeader({ activePage, router, siteData }) {
    const poemRoutes = Object.values(siteData.poemCollections).map((collection) => collection.listPage);
    const poemsActive = poemRoutes.some((page) => activePage === page || activePage.startsWith(`${page}/`));
    const aboutActive = activePage === "about";
    const headerClass = activePage === "home" ? "site-header" : "site-header site-header--lined";
    const poemMenuItems = Object.values(siteData.poemCollections)
      .map((collection) => {
        const isActive = activePage === collection.listPage || activePage.startsWith(`${collection.listPage}/`);

        return `
          <li>
            <a
              class="dropdown-item poems-menu__item ${isActive ? "is-current" : ""}"
              href="${router.buildUrl(collection.listPage)}"
              data-route="${collection.listPage}"
            >
              <span class="poems-menu__icon-wrap">
                <img src="${collection.card.image}" alt="" class="poems-menu__icon" />
              </span>
              <span class="poems-menu__body">
                <span class="poems-menu__title">${collection.navTitle}</span>
                <span class="poems-menu__description">${collection.description}</span>
              </span>
            </a>
          </li>
        `;
      })
      .join("");

    return `
      <header class="${headerClass}">
        <div class="site-shell container-xxl">
          <nav class="navbar navbar-expand-lg px-0 py-0" aria-label="Primary Site Navigation">
            <div class="container-fluid px-0 align-items-center">
              <a class="navbar-brand brand-lockup" href="${router.buildUrl("home")}" data-route="home">
                <img src="assets/images/logo.png" alt="Delphi Logo" class="brand-mark" />
                <span class="brand-copy">
                  <span class="brand-title">${siteData.siteName}</span>
                  <span class="brand-tagline">${siteData.tagline}</span>
                </span>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#primaryNavigation"
                aria-controls="primaryNavigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="primaryNavigation">
                <ul class="navbar-nav align-items-lg-center ms-auto">
                  <li class="nav-item">
                    <a class="nav-link ${activePage === "home" ? "is-active" : ""}" href="${router.buildUrl("home")}" data-route="home">Home</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle ${poemsActive ? "is-active" : ""}"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Poems
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end poems-menu">
                      ${poemMenuItems}
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ${aboutActive ? "is-active" : ""}" href="${router.buildUrl("about")}" data-route="about">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    `;
  };
})();