# DelphiPoems.com

Static single-page recreation of DelphiPoems.com using HTML, CSS, JavaScript, Bootstrap, and Bootstrap Icons.

## Run locally

Open `index.html` directly in your browser.

Examples:

- `index.html?page=home`
- `index.html?page=vcl`
- `index.html?page=vcl/tbutton`
- `index.html?page=search&q=button`

## Routes

- `?page=home`
- `?page=about`
- `?page=contact`
- `?page=delphi-poems`
- `?page=vcl`
- `?page=fmx-poems`
- `?page=vcl/<slug>` for implemented poem routes

## Notes

- Images used by the recreated pages are bundled locally under `assets/images`.
- Route parsing and history handling live in `assets/js/router.js`.
- Shared UI such as the header and footer lives under `components/`.
- Page-specific renderers live under `pages/` at the repository root.
- Catalog and poem data live under `data/` as plain script files rather than JSON so the site works when opened directly from `file://` without a build step.
- About and Contact have dedicated page files under `pages/`.