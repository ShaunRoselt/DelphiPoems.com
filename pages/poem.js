(function () {
  function renderBreadcrumb(poemName, poemRoute, collection, buildUrl, escapeHtml) {
    return `
      <nav aria-label="Breadcrumb" class="breadcrumb-nav">
        <ol class="breadcrumb-list">
          <li><a href="${buildUrl("home")}" data-route="home">Home</a></li>
          <li><i class="bi bi-chevron-right" aria-hidden="true"></i></li>
          <li><a href="${buildUrl(collection.listPage)}" data-route="${collection.listPage}">${escapeHtml(collection.navTitle)}</a></li>
          <li><i class="bi bi-chevron-right" aria-hidden="true"></i></li>
          <li><a href="${buildUrl(poemRoute)}" data-route="${poemRoute}" class="is-current">${escapeHtml(poemName)}</a></li>
        </ol>
      </nav>
    `;
  }

  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  window.DelphiPoemsPages.poem = function renderPoemPage(context) {
    const { buildUrl, escapeHtml, highlightDelphiCode, route } = context;
    const { collection, poem } = route;
    const hasArticleImage = Boolean(poem.articleImage && poem.articleImage.src);

    return `
      <section class="hero-panel hero-poem">
        <div class="container-xxl">
          ${renderBreadcrumb(poem.name, route.page, collection, buildUrl, escapeHtml)}
          <div class="poem-hero__inner">
            <p class="poem-hero__label">${escapeHtml(poem.name)}</p>
            <img src="${poem.icon}" alt="" class="poem-hero__icon" onerror="this.hidden = true;" />
            <h1 class="poem-hero__headline">${escapeHtml(poem.title)}</h1>
          </div>
        </div>
      </section>
      <section class="poem-detail-section">
        <div class="container-xxl">
          <div class="row g-4 g-xl-5 align-items-start poem-detail-grid${hasArticleImage ? " poem-detail-grid--with-image" : " poem-detail-grid--no-image"}" data-poem-layout>
            <div class="col-lg-6">
              <div class="code-card-wrap">
                <button type="button" class="code-copy-button" aria-label="Copy Delphi code">Copy</button>
                <pre class="code-card"><code>${highlightDelphiCode(poem.code)}</code></pre>
              </div>
            </div>
            <div class="col-lg-6">
              ${
                hasArticleImage
                  ? `<figure class="poem-illustration"><img src="${poem.articleImage.src}" alt="${escapeHtml(poem.articleImage.alt)}" class="poem-illustration__image" onerror="const layout = this.closest('[data-poem-layout]'); const inlineVerse = layout && layout.querySelector('[data-inline-verse]'); const fullVerse = layout && layout.parentElement && layout.parentElement.querySelector('[data-full-verse]'); if (inlineVerse) inlineVerse.hidden = false; if (fullVerse) fullVerse.hidden = true; this.parentElement.hidden = true;" /></figure>
                  <div class="poem-inline-verse" data-inline-verse hidden>
                    <pre class="verse-card verse-card--inline">${escapeHtml(poem.poem)}</pre>
                  </div>`
                  : `<div class="poem-inline-verse" data-inline-verse>
                    <pre class="verse-card verse-card--inline">${escapeHtml(poem.poem)}</pre>
                  </div>`
              }
            </div>
          </div>
          ${hasArticleImage ? `<div class="verse-card-wrap verse-card-wrap--full" data-full-verse><pre class="verse-card">${escapeHtml(poem.poem)}</pre></div>` : ""}
        </div>
      </section>
    `;
  };
})();