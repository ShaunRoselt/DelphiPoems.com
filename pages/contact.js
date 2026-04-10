(function () {
  window.DelphiPoemsPages = window.DelphiPoemsPages || {};

  window.DelphiPoemsPages.contact = function renderContactPage(context) {
    const { escapeHtml, route } = context;
    const { contactPage } = route;

    return `
      <section class="content-page">
        <div class="container-xxl">
          <div class="content-card content-card--form">
            <h1 class="page-title content-card__title">${escapeHtml(contactPage.title)}</h1>
            <p class="content-copy content-copy--lead">${escapeHtml(contactPage.intro || "")}</p>
            <form class="contact-form" data-contact-form data-contact-email="${escapeHtml(contactPage.email || "")}">
              ${contactPage.fields
                .map((field) => {
                  const control =
                    field.type === "textarea"
                      ? `<textarea id="${field.id}" name="${field.name}" class="form-control" rows="7" required></textarea>`
                      : `<input id="${field.id}" name="${field.name}" type="${field.type}" class="form-control" required />`;

                  return `
                    <div class="contact-form__field">
                      <label class="contact-form__label" for="${field.id}">${escapeHtml(field.label)}</label>
                      ${control}
                    </div>
                  `;
                })
                .join("")}
              <button type="submit" class="btn btn-dp-primary contact-form__submit">${escapeHtml(contactPage.submitLabel || "Submit")}</button>
              <p class="contact-form__status" data-contact-status hidden>${escapeHtml(contactPage.statusMessage || "")}</p>
            </form>
          </div>
        </div>
      </section>
    `;
  };
})();