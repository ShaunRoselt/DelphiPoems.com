const homeIntro = [
  `Delphi programming can be quite a task,
But with our poems, you’ll learn it fast.
From the basics to advanced topics,
Our website has it all in topics.`,
  `We cover everything from variables to loops,
And even how to create your own groups.
With our poems, you’ll learn with ease,
And become a Delphi master with great expertise.`,
  `So come and visit our website today,
And learn Delphi programming in a fun way.`,
];

const sharedCards = [
  {
    page: "delphi-poems",
    title: "Delphi Poems",
    description: "Poems about programming in Delphi and the Delphi IDE",
    image: "assets/images/logo.png",
  },
  {
    page: "vcl-poems",
    title: "VCL Poems",
    description: "Poems about the Visual Component Library in Delphi",
    image: "assets/images/VCL-Logo-1024x1024.png",
  },
  {
    page: "fmx-poems",
    title: "FMX Poems",
    description: "Poems about the FireMonkey Framework in Delphi",
    image: "assets/images/FMX-Logo-1024x1024.png",
  },
];

const staticPages = {
  about: {
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
  },
};
const dataStore = window.DelphiPoemsData || {};

function getComponentIconPath(collectionKey, componentName, assetPath) {
  if (typeof assetPath === "string" && assetPath) {
    return assetPath.replace(/^assets\/images\/(vcl|fmx)\//, "assets/images/icons/");
  }

  if ((collectionKey === "vcl" || collectionKey === "fmx") && componentName) {
    return `assets/images/icons/${componentName}128.png`;
  }

  return assetPath;
}

function normalizePoems(collectionKey, poems) {
  return Object.fromEntries(
    Object.entries(poems).map(([slug, poem]) => [
      slug,
      {
        ...poem,
        icon: getComponentIconPath(collectionKey, poem.name, poem.icon),
      },
    ]),
  );
}

function normalizeCatalog(collectionKey, catalog, poems, transformItem) {
  return catalog.map((item) => {
    const transformedItem = transformItem ? transformItem(item) : item;

    return {
      ...transformedItem,
      image: getComponentIconPath(collectionKey, transformedItem.name, transformedItem.image),
      available: Boolean(poems[transformedItem.slug]),
    };
  });
}

const rawDelphiPoems =
  dataStore.delphiPoems && typeof dataStore.delphiPoems === "object" ? dataStore.delphiPoems : {};
const rawVclPoems = dataStore.vclPoems && typeof dataStore.vclPoems === "object" ? dataStore.vclPoems : {};
const rawFmxPoems = dataStore.fmxPoems && typeof dataStore.fmxPoems === "object" ? dataStore.fmxPoems : {};

const poemCollections = {
  delphi: {
    key: "delphi",
    listPage: "delphi-poems",
    navTitle: "Delphi Poems",
    listTitle: "Delphi Poems",
    description: sharedCards[0].description,
    heroImage: sharedCards[0].image,
    card: sharedCards[0],
    poems: normalizePoems("delphi", rawDelphiPoems),
  },
  vcl: {
    key: "vcl",
    listPage: "vcl-poems",
    navTitle: "VCL Poems",
    listTitle: "Delphi VCL Poems",
    description: sharedCards[1].description,
    heroImage: sharedCards[1].image,
    card: sharedCards[1],
    poems: normalizePoems("vcl", rawVclPoems),
  },
  fmx: {
    key: "fmx",
    listPage: "fmx-poems",
    navTitle: "FMX Poems",
    listTitle: "Delphi FMX Poems",
    description: sharedCards[2].description,
    heroImage: sharedCards[2].image,
    card: sharedCards[2],
    poems: normalizePoems("fmx", rawFmxPoems),
  },
};

poemCollections.delphi.catalog = normalizeCatalog(
  "delphi",
  Array.isArray(dataStore.delphiCatalog) ? dataStore.delphiCatalog : [],
  poemCollections.delphi.poems,
);

poemCollections.vcl.catalog = normalizeCatalog(
  "vcl",
  Array.isArray(dataStore.vclCatalog) ? dataStore.vclCatalog : [],
  poemCollections.vcl.poems,
  (item) => ({
    ...item,
    description:
      item.slug === "tbitbtn"
        ? "TBitBtn is a Delphi component that represents a button with an optional glyph and predefined button kinds for common dialog actions."
        : item.description,
  }),
);

poemCollections.fmx.catalog = normalizeCatalog(
  "fmx",
  Array.isArray(dataStore.fmxCatalog) ? dataStore.fmxCatalog : [],
  poemCollections.fmx.poems,
);

const siteData = {
  siteName: "Delphi Programming Poems",
  tagline: "Learn Delphi through Poetry",
  copyrightName: "Shaun Roselt",
  copyrightUrl: "https://shaunroselt.com/",
  home: {
    page: "home",
    title: "Delphi Programming Poems",
    heroImage: "assets/images/image-1024x544.png",
    intro: homeIntro,
    cards: sharedCards,
  },
  sectionPages: {
    "delphi-poems": sharedCards[0],
    "vcl-poems": sharedCards[1],
    "fmx-poems": sharedCards[2],
  },
  footerSearchTitle: "Looking for a specific poem?",
  footerSearchLabel: "Search for a poem:",
  footerSearchPlaceholder: "Search for a poem...",
  sharedCards,
  poemCollections,
};

function getPoemCollection(collectionKey) {
  return poemCollections[collectionKey] ?? null;
}

function getPoemCollectionByListPage(page) {
  return Object.values(poemCollections).find((collection) => collection.listPage === page) ?? null;
}

function getPoemBySlug(collectionKey, slug) {
  return poemCollections[collectionKey]?.poems[slug] ?? null;
}

function getCatalogItemBySlug(collectionKey, slug) {
  return poemCollections[collectionKey]?.catalog.find((item) => item.slug === slug) ?? null;
}

function searchCatalog(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [];
  }

  return Object.values(poemCollections).flatMap((collection) =>
    collection.catalog
      .filter((item) => {
        const haystack = `${item.category} ${item.name} ${item.description}`.toLowerCase();
        return haystack.includes(normalized);
      })
      .map((item) => ({
        ...item,
        collectionKey: collection.key,
        listPage: collection.listPage,
        detailPage: `${collection.listPage}/${item.slug}`,
      })),
  );
}

window.DelphiPoemsContent = {
  getCatalogItemBySlug,
  getPoemBySlug,
  getPoemCollection,
  getPoemCollectionByListPage,
  searchCatalog,
  siteData,
};