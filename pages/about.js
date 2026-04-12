(function () {
  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  const aboutPage = {
    title: "About",
    paragraphs: [
      "Delphi Programming Poems is a website that teaches Delphi in a lighter, more memorable format. Instead of presenting everything as dense reference material, it pairs short poems with code examples so each topic is easier to approach and easier to remember.",
      "The site brings together Delphi language topics, VCL components, and FMX components in one place. That makes it easy to move between core programming concepts and the UI building blocks used to create real applications.",
      "Each page is designed to be quick to read while still staying practical. The poems give the topic a clear identity, and the accompanying code keeps it grounded in actual Delphi usage rather than turning it into novelty content.",
    ],
    highlights: [
      "Short poems paired with focused Delphi code examples.",
      "Coverage across Delphi topics, VCL components, and FMX components.",
      "A simple browseable format for learning, revising, and exploring concepts quickly.",
    ],
  };

  window.DelphiPoemsPages.about = function renderAboutPage(context) {
    const { escapeHtml } = context;

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