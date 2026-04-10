(function () {
  window.DelphiPoemsComponents = window.DelphiPoemsComponents || {};

  window.DelphiPoemsComponents.renderHeader = function renderHeader({ activePage, router, siteData }) {
    const poemRoutes = Object.values(siteData.poemCollections).map((collection) => collection.listPage);
    const poemsActive = poemRoutes.some((page) => activePage === page || activePage.startsWith(`${page}/`));
    const aboutActive = activePage === "about";
    const contactActive = activePage === "contact";
    const headerClass = activePage === "home" ? "site-header" : "site-header site-header--lined";

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
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="${router.buildUrl("delphi-poems")}" data-route="delphi-poems">Delphi Poems</a></li>
                      <li><a class="dropdown-item" href="${router.buildUrl("vcl-poems")}" data-route="vcl-poems">VCL Poems</a></li>
                      <li><a class="dropdown-item" href="${router.buildUrl("fmx-poems")}" data-route="fmx-poems">FMX Poems</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ${aboutActive ? "is-active" : ""}" href="${router.buildUrl("about")}" data-route="about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ${contactActive ? "is-active" : ""}" href="${router.buildUrl("contact")}" data-route="contact">Contact</a>
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