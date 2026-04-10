(function () {
  window.DelphiPoemsData = window.DelphiPoemsData || {};

  const sharedImage = "assets/images/logo.png";

  function createItem({ category, name, slug, description, image }) {
    return {
      category,
      name,
      slug,
      description,
      image: image || sharedImage,
    };
  }

  window.DelphiPoemsData.delphiCatalog = [
    createItem({
      category: "Language",
      name: "Units",
      slug: "units",
      description: "Units are Delphi modules that organize code into reusable interfaces and implementations.",
    }),
    createItem({
      category: "Language",
      name: "Records",
      slug: "records",
      description: "Records are value types in Delphi used to group related data and behavior.",
    }),
    createItem({
      category: "Language",
      name: "Classes",
      slug: "classes",
      description: "Classes are Delphi reference types that define objects, inheritance, and methods.",
    }),
    createItem({
      category: "Language",
      name: "Generics",
      slug: "generics",
      description: "Generics let Delphi code define reusable types and containers with strong typing.",
    }),
    createItem({
      category: "Language",
      name: "Interfaces",
      slug: "interfaces",
      description: "Interfaces define contracts in Delphi and support abstraction and reference counting patterns.",
    }),
    createItem({
      category: "Language",
      name: "Properties",
      slug: "properties",
      description: "Properties expose state in Delphi through readable, writable, and computed members.",
    }),
    createItem({
      category: "Runtime",
      name: "Exceptions",
      slug: "exceptions",
      description: "Exceptions provide structured error handling in Delphi through try, except, and finally blocks.",
    }),
    createItem({
      category: "Runtime",
      name: "RTTI",
      slug: "rtti",
      description: "RTTI gives Delphi code access to type information and metadata at runtime.",
    }),
    createItem({
      category: "Language",
      name: "Anonymous Methods",
      slug: "anonymous-methods",
      description: "Anonymous methods let Delphi capture local scope inside inline procedures and functions.",
    }),
    createItem({
      category: "Language",
      name: "Packages",
      slug: "packages",
      description: "Packages bundle Delphi units into binary modules for design-time and runtime reuse.",
    }),
    createItem({
      category: "IDE",
      name: "Code Editor",
      slug: "code-editor",
      description: "The Delphi code editor is where navigation, refactoring, and language tooling come together.",
    }),
    createItem({
      category: "IDE",
      name: "Debugger",
      slug: "debugger",
      description: "The Delphi debugger helps inspect variables, break on conditions, and trace program flow.",
    }),
  ];
})();