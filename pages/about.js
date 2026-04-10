(function () {
  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  window.DelphiPoemsPages.about = function renderAboutPage(context) {
    const { escapeHtml, route } = context;
    const { aboutPage } = route;

    return `
      <section class="content-page">
        <div class="container-xxl">
          <div class="content-card">
            <h1 class="page-title content-card__title">${escapeHtml(aboutPage.title)}</h1>
            ${aboutPage.paragraphs.map((paragraph) => `<p class="content-copy">${escapeHtml(paragraph)}</p>`).join("")}
            ${Array.isArray(aboutPage.highlights) && aboutPage.highlights.length > 0
              ? `
                <div class="content-highlights">
                  <h2 class="content-highlights__title">What You’ll Find Here</h2>
                  <ul class="content-highlights__list">
                    ${aboutPage.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                  </ul>
                </div>
              `
              : ""}
          </div>
        </div>
      </section>
    `;
  };
})();