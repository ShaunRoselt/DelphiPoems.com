"use strict";

(function () {
  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  window.DelphiPoemsPages.section = function renderSectionPage(context) {
    const { escapeHtml, renderCategoryCards, section } = context;

    return `
      <section class="hero-panel hero-section">
        <div class="container-xxl">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <h1 class="cover-title">${escapeHtml(section.title)}</h1>
              <p class="cover-copy cover-copy--single">${escapeHtml(section.description)}</p>
              <a class="btn btn-dp-primary" href="?page=home" data-route="home">Back to Home</a>
            </div>
            <div class="col-lg-6 text-center">
              <img src="${section.image}" alt="${escapeHtml(section.title)}" class="section-art" />
            </div>
          </div>
        </div>
      </section>
      ${renderCategoryCards()}
    `;
  };
})();