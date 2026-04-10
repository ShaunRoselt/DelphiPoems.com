(function () {
  window.DelphiPoemsComponents = window.DelphiPoemsComponents || {};

  function renderSearchBand(siteData) {
    return `
      <section class="footer-search-band">
        <div class="container-xxl">
          <div class="footer-search-panel">
            <h2 class="footer-search-title">${siteData.footerSearchTitle}</h2>
            <form class="footer-search-form" data-search-form="global">
              <label class="visually-hidden" for="footer-search-input">${siteData.footerSearchLabel}</label>
              <input
                id="footer-search-input"
                name="search"
                type="search"
                class="form-control"
                placeholder="${siteData.footerSearchPlaceholder}"
              />
              <button type="submit" class="btn btn-dp-secondary">Search</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  window.DelphiPoemsComponents.renderFooter = function renderFooter({ siteData }) {
    return `
      ${renderSearchBand(siteData)}
      <footer class="site-footer">
        <div class="container-xxl text-center">
          <p class="site-footer__copy">
            Copyright &copy; 2026 -
            <a href="${siteData.copyrightUrl}">${siteData.copyrightName}</a>
          </p>
        </div>
      </footer>
    `;
  };
})();