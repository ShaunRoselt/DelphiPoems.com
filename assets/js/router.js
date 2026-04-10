(function () {
  const { getCatalogItemBySlug, getPoemBySlug, getPoemCollectionByListPage, siteData } = window.DelphiPoemsContent;
  const catalogSortKeys = new Set(["category", "name", "description", "poem"]);

  function getPageParam(params = new URLSearchParams(window.location.search)) {
    return (params.get("page") || "home").replace(/^\/+|\/+$/g, "").toLowerCase();
  }

  function getQueryParam(params = new URLSearchParams(window.location.search)) {
    return params.get("q") || "";
  }

  function getCatalogSortParam(params = new URLSearchParams(window.location.search)) {
    const sort = (params.get("sort") || "").toLowerCase();
    return catalogSortKeys.has(sort) ? sort : "";
  }

  function getCatalogSortDirectionParam(params = new URLSearchParams(window.location.search)) {
    return (params.get("dir") || "").toLowerCase() === "desc" ? "desc" : "asc";
  }

  function buildUrl(page, extraParams = {}) {
    const pairs = [`page=${encodeURIComponent(page).replace(/%2F/g, "/")}`];

    Object.entries(extraParams).forEach(([key, value]) => {
      if (value) {
        pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    });

    return `?${pairs.join("&")}`;
  }

  function getRoute() {
    const params = new URLSearchParams(window.location.search);
    const page = getPageParam(params);
    const query = getQueryParam(params);

    if (page === "home") {
      return { kind: "home", page, query };
    }

    if (page === "search") {
      return { kind: "search", page, query };
    }

    const collection = getPoemCollectionByListPage(page);
    if (collection) {
      return {
        kind: "catalog",
        page,
        query,
        sort: getCatalogSortParam(params),
        dir: getCatalogSortDirectionParam(params),
        collectionKey: collection.key,
        collection,
      };
    }

    if (page === "about") {
      return { kind: "about", page, query, aboutPage: siteData.staticPages.about };
    }

    if (page === "contact") {
      return { kind: "contact", page, query, contactPage: siteData.staticPages.contact };
    }

    const matchedCollection = Object.values(siteData.poemCollections).find((entry) => page.startsWith(`${entry.listPage}/`));
    if (matchedCollection) {
      const slug = page.slice(matchedCollection.listPage.length + 1);
      const poem = getPoemBySlug(matchedCollection.key, slug);
      const catalogItem = getCatalogItemBySlug(matchedCollection.key, slug);

      if (poem && catalogItem) {
        return {
          kind: "poem",
          page,
          query,
          slug,
          poem,
          catalogItem,
          collectionKey: matchedCollection.key,
          collection: matchedCollection,
        };
      }
    }

    if (page in siteData.sectionPages) {
      return { kind: "section", page, query, section: siteData.sectionPages[page] };
    }

    return { kind: "not-found", page: "home", query };
  }

  function getDocumentTitle(route) {
    if (route.kind === "home") {
      return "Delphi Programming Poems - Learn Delphi through Poetry";
    }

    if (route.kind === "catalog") {
      return `${route.collection.listTitle} - Delphi Programming Poems`;
    }

    if (route.kind === "search") {
      return route.query
        ? `Search: ${route.query} - Delphi Programming Poems`
        : "Search - Delphi Programming Poems";
    }

    if (route.kind === "poem") {
      return `${route.poem.name} - ${route.collection.navTitle} - Delphi Programming Poems`;
    }

    if (route.kind === "section") {
      return `${route.section.title} - Delphi Programming Poems`;
    }

    if (route.kind === "about") {
      return `${route.aboutPage.title} - Delphi Programming Poems`;
    }

    if (route.kind === "contact") {
      return `${route.contactPage.title} - Delphi Programming Poems`;
    }

    return "Delphi Programming Poems";
  }

  function createRouter({ onRouteChange }) {
    if (typeof onRouteChange !== "function") {
      throw new Error("Router requires an onRouteChange callback.");
    }

    function notifyRouteChange() {
      onRouteChange(getRoute());
    }

    function setRoute(page, extraParams = {}, options = {}) {
      const { replace = false, scrollToTop = true } = options;
      const url = buildUrl(page, extraParams);

      if (replace) {
        window.history.replaceState({}, "", url);
      } else {
        window.history.pushState({}, "", url);
      }

      notifyRouteChange();

      if (scrollToTop) {
        window.scrollTo({ top: 0 });
      }
    }

    function navigate(page, extraParams = {}) {
      setRoute(page, extraParams, { replace: false, scrollToTop: true });
    }

    function start() {
      window.addEventListener("popstate", notifyRouteChange);
      notifyRouteChange();
    }

    return {
      buildUrl,
      getDocumentTitle,
      getRoute,
      navigate,
      setRoute,
      start,
    };
  }

  window.DelphiPoemsRouter = {
    createRouter,
  };
})();