const CACHE_VERSION = "delphi-poems-v2";
const APP_SHELL_CACHE = `${CACHE_VERSION}-app-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const EXTERNAL_ORIGINS = new Set(["https://cdn.jsdelivr.net"]);
const APP_SHELL_ASSETS = [
  "./",
  "./index.html",
  "./?page=home",
  "./manifest.webmanifest",
  "./assets/css/site.css",
  "./assets/js/app.js",
  "./assets/js/content.js",
  "./assets/js/router.js",
  "./components/category-cards.js",
  "./components/footer.js",
  "./components/header.js",
  "./pages/about.js",
  "./pages/catalog.js",
  "./pages/home.js",
  "./pages/not-found.js",
  "./pages/poem.js",
  "./pages/search.js",
  "./pages/section.js",
  "./data/delphi-catalog.js",
  "./data/delphi-poems.js",
  "./data/fmx-catalog.js",
  "./data/fmx-poems.js",
  "./data/vcl-catalog.js",
  "./data/vcl-poems.js",
  "./assets/images/logo.png",
  "./assets/images/image-1024x544.png",
  "./assets/images/VCL-Logo-1024x1024.png",
  "./assets/images/FMX-Logo-1024x1024.png",
  "./assets/images/pwa/apple-touch-icon.png",
  "./assets/images/pwa/icon-192.png",
  "./assets/images/pwa/icon-512.png"
];
const EXTERNAL_ASSETS = [
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
];
const OFFLINE_FALLBACK_URL = new URL("./index.html", self.location.href).toString();

function isHttpRequest(request) {
  return request.url.startsWith("http://") || request.url.startsWith("https://");
}

async function cacheAppShell() {
  const cache = await caches.open(APP_SHELL_CACHE);

  await Promise.all(
    APP_SHELL_ASSETS.map(async (asset) => {
      const request = new Request(new URL(asset, self.location.href).toString(), { cache: "reload" });
      const response = await fetch(request);

      if (!response.ok) {
        throw new Error(`Failed to cache ${request.url}`);
      }

      await cache.put(request, response);
    })
  );

  await Promise.all(
    EXTERNAL_ASSETS.map(async (asset) => {
      try {
        const request = new Request(asset, { cache: "reload", mode: "no-cors" });
        const response = await fetch(request);
        await cache.put(request, response);
      } catch (error) {
        console.warn("Failed to precache external asset.", asset, error);
      }
    })
  );
}

async function clearOldCaches() {
  const cacheNames = await caches.keys();

  await Promise.all(
    cacheNames
      .filter((cacheName) => ![APP_SHELL_CACHE, RUNTIME_CACHE].includes(cacheName))
      .map((cacheName) => caches.delete(cacheName))
  );
}

async function handleNavigationRequest(request) {
  const cache = await caches.open(APP_SHELL_CACHE);

  try {
    const response = await fetch(request);

    if (response.ok) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch {
    return (await cache.match(request)) || (await cache.match(OFFLINE_FALLBACK_URL));
  }
}

async function handleAssetRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  const networkResponsePromise = fetch(request)
    .then(async (response) => {
      if (response.ok || response.type === "opaque") {
        await cache.put(request, response.clone());
      }

      return response;
    })
    .catch(() => cachedResponse);

  return cachedResponse || networkResponsePromise;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    cacheAppShell().then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    clearOldCaches().then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || !isHttpRequest(request)) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  const url = new URL(request.url);

  if (url.origin === self.location.origin || EXTERNAL_ORIGINS.has(url.origin)) {
    event.respondWith(handleAssetRequest(request));
  }
});