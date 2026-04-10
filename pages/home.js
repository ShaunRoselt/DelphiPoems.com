(function () {
  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  window.DelphiPoemsPages.home = function renderHomePage(context) {
    const { escapeHtml, renderCategoryCards, siteData } = context;

    return `
      <section class="hero-panel hero-home">
        <div class="container-xxl">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <div class="hero-home__content">
                <h1 class="cover-title">${siteData.home.title}</h1>
                ${siteData.home.intro
                  .map((paragraph) => `<p class="cover-copy">${escapeHtml(paragraph).replaceAll("\n", "<br />")}</p>`)
                  .join("")}
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-home__image-wrap">
                <img src="${siteData.home.heroImage}" alt="" class="hero-home__image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      ${renderCategoryCards()}
    `;
  };
})();