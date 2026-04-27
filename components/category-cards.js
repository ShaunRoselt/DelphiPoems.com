"use strict";

(function () {
  window.DelphiPoemsComponents = window.DelphiPoemsComponents || {};

  window.DelphiPoemsComponents.renderCategoryCards = function renderCategoryCards({ buildUrl, escapeHtml, siteData }) {
    return `
      <section class="cards-section">
        <div class="container-xxl">
          <div class="row g-4 g-xl-5 justify-content-center">
            ${siteData.sharedCards
              .map(
                (card) => `
                  <div class="col-md-6 col-xl-4">
                    <article class="poem-card text-center h-100">
                      <img src="${card.image}" alt="${escapeHtml(card.title)}" class="poem-card__image" />
                      <h2 class="poem-card__title">${escapeHtml(card.title)}</h2>
                      <p class="poem-card__copy">${escapeHtml(card.description)}</p>
                      <a class="btn btn-dp-primary" href="${buildUrl(card.page)}" data-route="${card.page}">Learn through Poetry</a>
                    </article>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  };
})();