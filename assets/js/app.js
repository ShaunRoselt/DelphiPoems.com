window.DelphiPoemsAppBootError = null;

try {
  const { searchCatalog, siteData } = window.DelphiPoemsContent;
  const { createRouter } = window.DelphiPoemsRouter;
  const components = window.DelphiPoemsComponents || {};
  const pages = window.DelphiPoemsPages || {};

  const app = document.querySelector("#app");

  if (!app) {
    throw new Error("Missing application mount point.");
  }

  if (typeof createRouter !== "function") {
    throw new Error("Router module did not load.");
  }

  ["renderCategoryCards", "renderFooter", "renderHeader"].forEach((componentName) => {
    if (typeof components[componentName] !== "function") {
      throw new Error(`Component module \"${componentName}\" did not load.`);
    }
  });

  ["home", "section", "about", "contact", "catalog", "search", "poem", "notFound"].forEach((pageName) => {
    if (typeof pages[pageName] !== "function") {
      throw new Error(`Page module \"${pageName}\" did not load.`);
    }
  });

  const scrollThreshold = 320;
  const delphiKeywords = new Set([
    "and",
    "array",
    "as",
    "begin",
    "case",
    "class",
    "const",
    "constructor",
    "destructor",
    "div",
    "do",
    "downto",
    "else",
    "end",
    "except",
    "finalization",
    "finally",
    "for",
    "function",
    "if",
    "implementation",
    "in",
    "inherited",
    "interface",
    "is",
    "mod",
    "not",
    "object",
    "of",
    "or",
    "out",
    "override",
    "private",
    "procedure",
    "program",
    "property",
    "protected",
    "public",
    "published",
    "record",
    "repeat",
    "set",
    "then",
    "to",
    "try",
    "type",
    "unit",
    "until",
    "uses",
    "var",
    "virtual",
    "while",
    "with",
    "xor",
  ]);
  const delphiConstants = new Set(["false", "nil", "slinebreak", "true"]);
  const delphiKnownTypes = new Set(["application", "mainform", "talign", "talignment", "tcolors"]);
  const router = createRouter({ onRouteChange: render });

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !/^https?:$/.test(window.location.protocol)) {
    return Promise.resolve();
  }

  return navigator.serviceWorker.register("./service-worker.js").catch((error) => {
    console.warn("Service worker registration failed.", error);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function highlightDelphiCode(code) {
  let output = "";
  let index = 0;

  while (index < code.length) {
    const current = code[index];
    const next = code[index + 1];

    if (current === "/" && next === "/") {
      const start = index;
      index += 2;

      while (index < code.length && code[index] !== "\n" && code[index] !== "\r") {
        index += 1;
      }

      output += `<span class="token-comment">${escapeHtml(code.slice(start, index))}</span>`;
      continue;
    }

    if (current === "'") {
      const start = index;
      index += 1;

      while (index < code.length) {
        if (code[index] === "'") {
          if (code[index + 1] === "'") {
            index += 2;
            continue;
          }

          index += 1;
          break;
        }

        index += 1;
      }

      output += `<span class="token-string">${escapeHtml(code.slice(start, index))}</span>`;
      continue;
    }

    if (/[A-Za-z_]/.test(current)) {
      const start = index;
      index += 1;

      while (index < code.length && /[A-Za-z0-9_]/.test(code[index])) {
        index += 1;
      }

      const word = code.slice(start, index);
      const lowerWord = word.toLowerCase();
      let tokenClass = "";

      if (delphiKeywords.has(lowerWord)) {
        tokenClass = "token-keyword";
      } else if (delphiConstants.has(lowerWord)) {
        tokenClass = "token-constant";
      } else if (delphiKnownTypes.has(lowerWord) || /^T[A-Z]/.test(word)) {
        tokenClass = "token-type";
      }

      output += tokenClass ? `<span class="${tokenClass}">${escapeHtml(word)}</span>` : escapeHtml(word);
      continue;
    }

    if (/\d/.test(current)) {
      const start = index;
      index += 1;

      while (index < code.length && /[\d_.]/.test(code[index])) {
        index += 1;
      }

      output += `<span class="token-number">${escapeHtml(code.slice(start, index))}</span>`;
      continue;
    }

    output += escapeHtml(current);
    index += 1;
  }

  return output;
}

function renderLayout(route, mainContent) {
  return `
    <div class="app-shell">
      ${components.renderHeader({ activePage: route.page, router, siteData })}
      <main id="content" class="site-main">
        ${mainContent}
      </main>
      ${components.renderFooter({ siteData })}
      <button class="scroll-top" type="button" aria-label="Scroll to top">
        <i class="bi bi-chevron-up" aria-hidden="true"></i>
      </button>
    </div>
  `;
}

function render(route = router.getRoute()) {
  document.title = router.getDocumentTitle(route);

  let mainContent = "";
  const pageContext = {
    buildUrl: router.buildUrl,
    escapeHtml,
    highlightDelphiCode,
    renderCategoryCards: () => components.renderCategoryCards({ buildUrl: router.buildUrl, escapeHtml, siteData }),
    route,
    siteData,
  };

  switch (route.kind) {
    case "home":
      mainContent = pages.home(pageContext);
      break;
    case "catalog":
      mainContent = pages.catalog(pageContext);
      break;
    case "search":
      mainContent = pages.search(pageContext);
      break;
    case "poem":
      mainContent = pages.poem(pageContext);
      break;
    case "about":
      mainContent = pages.about(pageContext);
      break;
    case "contact":
      mainContent = pages.contact(pageContext);
      break;
    case "section":
      mainContent = pages.section({ ...pageContext, section: route.section });
      break;
    default:
      mainContent = pages.notFound(pageContext);
      break;
  }

  app.innerHTML = renderLayout(route, mainContent);
  wireInteractions(route);
}

function submitGlobalSearch(rawQuery) {
  const query = rawQuery.trim();
  router.navigate("search", query ? { q: query } : {});
}

function wireInteractions(route) {
  document.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const targetRoute = element.getAttribute("data-route");
      if (targetRoute) {
        event.preventDefault();
        router.navigate(targetRoute);
      }
    });
  });

  document.querySelectorAll("[data-search-form='global']").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      submitGlobalSearch(String(formData.get("search") || ""));
    });
  });

  const catalogForm = document.querySelector("[data-search-form='catalog']");
  if (catalogForm) {
    const input = catalogForm.querySelector("input[name='search']");
    const sortParams = route.kind === "catalog" && route.sort ? { sort: route.sort, dir: route.dir } : {};

    input?.addEventListener("input", (event) => {
      router.setRoute(route.page, { q: event.target.value.trim(), ...sortParams }, { replace: true, scrollToTop: false });
    });

    catalogForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(catalogForm);
      router.navigate(route.page, { q: String(formData.get("search") || ""), ...sortParams });
    });
  }

  document.querySelectorAll("[data-sort-key]").forEach((element) => {
    element.addEventListener("click", () => {
      if (route.kind !== "catalog") {
        return;
      }

      const sortKey = element.getAttribute("data-sort-key");
      if (!sortKey) {
        return;
      }

      const nextDirection = route.sort === sortKey && route.dir === "asc" ? "desc" : "asc";
      router.setRoute(route.page, { q: route.query, sort: sortKey, dir: nextDirection }, { replace: false, scrollToTop: false });
    });
  });

  const scrollTopButton = document.querySelector(".scroll-top");
  if (scrollTopButton) {
    const syncScrollTopState = () => {
      scrollTopButton.classList.toggle("is-visible", window.scrollY > scrollThreshold);
    };

    syncScrollTopState();
    window.onscroll = syncScrollTopState;
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (route.kind === "catalog" || route.kind === "search") {
    const input = document.querySelector("#catalog-search-input");
    if (input && route.query) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = contactForm.querySelector("[data-contact-status]");
      const formData = new FormData(contactForm);
      const recipient = String(contactForm.getAttribute("data-contact-email") || "").trim();
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const subject = name ? `Delphi Poems enquiry from ${name}` : "Delphi Poems enquiry";
      const body = [
        name ? `Name: ${name}` : "",
        email ? `Email: ${email}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n");

      const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (status) {
        status.hidden = false;
      }

      window.location.href = mailtoUrl;
    });
  }

  document.querySelectorAll(".code-copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const codeBlock = button.parentElement?.querySelector(".code-card code");
      const codeText = codeBlock?.textContent ?? "";

      if (!codeText) {
        return;
      }

      const originalLabel = button.textContent || "Copy";

      const markCopied = (label) => {
        button.textContent = label;
        window.setTimeout(() => {
          button.textContent = originalLabel;
        }, 1800);
      };

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(codeText);
          markCopied("Copied");
          return;
        }

        const textArea = document.createElement("textarea");
        textArea.value = codeText;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        markCopied("Copied");
      } catch {
        markCopied("Copy failed");
      }
    });
  });
}

  void registerServiceWorker();
  router.start();
} catch (error) {
  window.DelphiPoemsAppBootError = {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : "",
  };

  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = `
      <main class="content-page" id="content">
        <div class="container-xxl">
          <div class="content-card">
            <h1 class="page-title content-card__title">Application Error</h1>
            <p class="content-copy">The SPA could not start.</p>
            <pre class="code-card"><code>${String(
              error instanceof Error ? error.stack || error.message : error,
            ).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</code></pre>
          </div>
        </div>
      </main>
    `;
  }

  throw error;
}