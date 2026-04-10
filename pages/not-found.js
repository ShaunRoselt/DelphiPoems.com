(function () {
  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  window.DelphiPoemsPages.notFound = function renderNotFoundPage() {
    return `
      <section class="hero-panel hero-section">
        <div class="container-xxl text-center">
          <h1 class="cover-title">Delphi Programming Poems</h1>
          <p class="cover-copy cover-copy--single">The requested page could not be found in this SPA route set.</p>
          <button class="btn btn-dp-primary" data-route="home">Return Home</button>
        </div>
      </section>
    `;
  };
})();