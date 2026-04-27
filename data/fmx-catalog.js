"use strict";

(function () {
  window.DelphiPoemsData = window.DelphiPoemsData || {};

  function createItem({ name, slug, description, image }) {
    return {
      category: "Standard",
      name,
      slug,
      description,
      image: image || `assets/images/icons/${name}128.png`,
    };
  }

  window.DelphiPoemsData.fmxCatalog = [
    createItem({
      name: "TMainMenu",
      slug: "tmainmenu",
      description: "TMainMenu is an FMX component that provides a traditional application menu structure.",
    }),
    createItem({
      name: "TPopupMenu",
      slug: "tpopupmenu",
      description: "TPopupMenu is an FMX component that shows contextual commands near the focused control.",
    }),
    createItem({
      name: "TActionList",
      slug: "tactionlist",
      description: "TActionList is an FMX component that centralizes commands shared by controls and menus.",
    }),
    createItem({
      name: "TLang",
      slug: "tlang",
      description: "TLang is an FMX component used to manage localized resources and translated strings.",
    }),
    createItem({
      name: "TStyleBook",
      slug: "tstylebook",
      description: "TStyleBook is an FMX component that stores and applies custom visual styles.",
    }),
    createItem({
      name: "TButton",
      slug: "tbutton",
      description: "TButton is an FMX component that triggers an action when the user taps or clicks it.",
    }),
    createItem({
      name: "TCheckBox",
      slug: "tcheckbox",
      description: "TCheckBox is an FMX component that lets the user toggle a true or false state.",
    }),
    createItem({
      name: "TRadioButton",
      slug: "tradiobutton",
      description: "TRadioButton is an FMX component used for a single choice inside a group.",
    }),
    createItem({
      name: "TGroupBox",
      slug: "tgroupbox",
      description: "TGroupBox is an FMX component that visually groups related controls together.",
    }),
    createItem({
      name: "TPopupBox",
      slug: "tpopupbox",
      description: "TPopupBox is an FMX component that presents a selectable drop-down list of values.",
    }),
    createItem({
      name: "TPanel",
      slug: "tpanel",
      description: "TPanel is an FMX component that acts as a styled surface for child controls.",
    }),
    createItem({
      name: "TCalloutPanel",
      slug: "tcalloutpanel",
      description: "TCalloutPanel is an FMX component that highlights content with a callout pointer.",
    }),
    createItem({
      name: "TLabel",
      slug: "tlabel",
      description: "TLabel is an FMX component that displays styled text on a form.",
    }),
    createItem({
      name: "TImageControl",
      slug: "timagecontrol",
      description: "TImageControl is an FMX component that displays scalable images with style support.",
    }),
    createItem({
      name: "TPathLabel",
      slug: "tpathlabel",
      description: "TPathLabel is an FMX component that renders text using path-based vector geometry.",
    }),
    createItem({
      name: "TProgressBar",
      slug: "tprogressbar",
      description: "TProgressBar is an FMX component that visualizes progress through a range of values.",
    }),
    createItem({
      name: "TScrollBar",
      slug: "tscrollbar",
      description: "TScrollBar is an FMX component that scrolls content along a horizontal or vertical axis.",
    }),
    createItem({
      name: "TSmallScrollBar",
      slug: "tsmallscrollbar",
      description: "TSmallScrollBar is a compact FMX scrollbar designed for tighter layouts.",
    }),
    createItem({
      name: "TExpander",
      slug: "texpander",
      description: "TExpander is an FMX component that reveals or hides a section of content.",
    }),
    createItem({
      name: "TTrackBar",
      slug: "ttrackbar",
      description: "TTrackBar is an FMX component that selects a value by sliding a thumb across a track.",
    }),
    createItem({
      name: "TSwitch",
      slug: "tswitch",
      description: "TSwitch is an FMX component that toggles between on and off states with a mobile-friendly design.",
    }),
    createItem({
      name: "TSplitter",
      slug: "tsplitter",
      description: "TSplitter is an FMX component that resizes adjacent controls at runtime.",
    }),
    createItem({
      name: "TMenuBar",
      slug: "tmenubar",
      description: "TMenuBar is an FMX component that hosts styled top-level menu commands.",
    }),
    createItem({
      name: "TStatusBar",
      slug: "tstatusbar",
      description: "TStatusBar is an FMX component that shows lightweight state and contextual information.",
    }),
    createItem({
      name: "TToolBar",
      slug: "ttoolbar",
      description: "TToolBar is an FMX component that arranges actions and controls across a horizontal strip.",
    }),
    createItem({
      name: "TSizeGrip",
      slug: "tsizegrip",
      description: "TSizeGrip is an FMX component that indicates and enables window resizing.",
    }),
    createItem({
      name: "TListBox",
      slug: "tlistbox",
      description: "TListBox is an FMX component that displays a vertically scrollable list of items.",
    }),
    createItem({
      name: "TComboBox",
      slug: "tcombobox",
      description: "TComboBox is an FMX component that combines a text field with a list of choices.",
    }),
    createItem({
      name: "TMemo",
      slug: "tmemo",
      description: "TMemo is an FMX component for editing and displaying multiple lines of text.",
    }),
    createItem({
      name: "TEdit",
      slug: "tedit",
      description: "TEdit is an FMX component for single-line text entry with styling support.",
    }),
    createItem({
      name: "TMaskEdit",
      slug: "tmaskedit",
      description: "TMaskEdit is an FMX component that constrains input to a specified pattern.",
    }),
    createItem({
      name: "TTreeView",
      slug: "ttreeview",
      description: "TTreeView is an FMX component that presents hierarchical data with expandable nodes.",
    }),
    createItem({
      name: "TListView",
      slug: "tlistview",
      description: "TListView is an FMX component optimized for rich, styled item lists.",
    }),
    createItem({
      name: "TPopup",
      slug: "tpopup",
      description: "TPopup is an FMX component that displays floating content anchored to another control.",
    }),
    createItem({
      name: "TImageList",
      slug: "timagelist",
      description: "TImageList is an FMX component that stores images used by other styled controls.",
    }),
  ];
})();