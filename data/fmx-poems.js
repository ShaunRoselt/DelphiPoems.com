"use strict";

(function () {
  window.DelphiPoemsData = window.DelphiPoemsData || {};

  function createEntry({ name, code, poem, icon, title }) {
    return {
      name,
      title: title || `A poem about the ${name} component in the FMX framework within Delphi`,
      category: "Standard",
      icon: icon || `assets/images/icons/${name}128.png`,
      code,
      poem,
    };
  }

  window.DelphiPoemsData.fmxPoems = {
    tmainmenu: createEntry({
      name: "TMainMenu",
      code: `begin  // FMX
  var mainMenu := TMainMenu.Create(Form1);
  mainMenu.Parent := Form1;

  var fileItem := TMenuItem.Create(mainMenu);
  fileItem.Text := 'File';
  mainMenu.AddObject(fileItem);
end;`,
      poem: `TMainMenu frames the app with grace,
And sets command paths into place.
Across desktop glass its headers gleam,
A steady map for every screen.

It keeps the options clean and near,
So broad intent stays calm and clear.
When structure matters from the start,
TMainMenu does its part.`,
    }),
    tpopupmenu: createEntry({
      name: "TPopupMenu",
      code: `begin  // FMX
  var popupMenu := TPopupMenu.Create(Form1);

  var copyItem := TMenuItem.Create(popupMenu);
  copyItem.Text := 'Copy';
  popupMenu.AddObject(copyItem);
end;`,
      poem: `TPopupMenu waits in quiet air,
Until a focused click says where.
It brings the needed choices near,
Without a crowded interface here.

Context lives inside its fold,
Quick and local, neat and bold.
For actions tied to place and view,
TPopupMenu shines through.`,
    }),
    tactionlist: createEntry({
      name: "TActionList",
      code: `begin  // FMX
  var actionList := TActionList.Create(Form1);

  var saveAction := TAction.Create(actionList);
  saveAction.ActionList := actionList;
  saveAction.Text := 'Save';
end;`,
      poem: `TActionList collects intent,
Where labels, keys, and taps are sent.
One shared command can reach them all,
From toolbar edge to menu call.

It keeps behavior in one stream,
A practical and tidy theme.
When many controls should act as one,
TActionList gets it done.`,
    }),
    tlang: createEntry({
      name: "TLang",
      code: `begin  // FMX
  var lang := TLang.Create(Form1);
  lang.Name := 'AppLang';
  lang.Stored := True;
  lang.Enabled := True;
end;`,
      poem: `TLang gives software many tongues,
So one design can speak to thousands.
It swaps the words while flows remain,
And carries meaning without strain.

Across each locale, near or far,
It helps the interface stay clear.
For apps that travel, wide and long,
TLang keeps language strong.`,
    }),
    tstylebook: createEntry({
      name: "TStyleBook",
      code: `begin  // FMX
  var styleBook := TStyleBook.Create(Form1);
  Form1.StyleBook := styleBook;
  Form1.StyleLookup := 'backgroundstyle';
end;`,
      poem: `TStyleBook keeps the visual tone,
So every control feels fully grown.
It gathers brushes, looks, and light,
And makes one theme hold through the night.

Consistent style is more than paint,
It keeps the interface from going faint.
For polished apps with branded look,
FMX leans on TStyleBook.`,
    }),
    tbutton: createEntry({
      name: "TButton",
      code: `begin  // FMX
  var button := TButton.Create(Form1);
  button.Parent := Form1;
  button.Align := TAlignLayout.Top;
  button.Text := 'Tap to render';
end;`,
      poem: `TButton in FMX feels light and quick,
Ready for touch or mouse to click.
Styled in motion, sharp in form,
It carries action bright and warm.

From phone to desktop, wide and true,
It keeps interaction flowing through.
For direct intent and simple fun,
Work often starts with TButton.`,
    }),
    tcheckbox: createEntry({
      name: "TCheckBox",
      code: `begin  // FMX
  var checkBox := TCheckBox.Create(Form1);
  checkBox.Parent := Form1;
  checkBox.Align := TAlignLayout.Top;
  checkBox.Text := 'Enable live preview';
  checkBox.IsChecked := True;
end;`,
      poem: `TCheckBox marks a modest choice,
One quiet flag with steady voice.
It tells the state in single view,
A yes or no the user knew.

Styled for touch and clear in place,
It fits the modern FMX space.
For optional paths that must be shown,
TCheckBox stands alone.`,
    }),
    tradiobutton: createEntry({
      name: "TRadioButton",
      code: `begin  // FMX
  var radioButton := TRadioButton.Create(Form1);
  radioButton.Parent := Form1;
  radioButton.Align := TAlignLayout.Top;
  radioButton.Text := 'Use dark theme';
  radioButton.IsChecked := True;
end;`,
      poem: `TRadioButton chooses one,
And tells the rest their turn is done.
Within a set it holds the line,
Keeping selection clear and fine.

No drifting state, no double claim,
Just one bright answer in the frame.
For exclusive choices, clean and lean,
TRadioButton keeps it keen.`,
    }),
    tgroupbox: createEntry({
      name: "TGroupBox",
      code: `begin  // FMX
  var groupBox := TGroupBox.Create(Form1);
  groupBox.Parent := Form1;
  groupBox.Align := TAlignLayout.Top;
  groupBox.Text := 'Playback options';
  groupBox.Height := 140;
end;`,
      poem: `TGroupBox gathers kindred parts,
Settings, switches, small control hearts.
It frames the content with a name,
And keeps related choices tame.

In styled containers, crisp and bright,
It brings loose pieces into sight.
When groups should read as one at once,
TGroupBox makes the sense.`,
    }),
    tpopupbox: createEntry({
      name: "TPopupBox",
      code: `begin  // FMX
  var popupBox := TPopupBox.Create(Form1);
  popupBox.Parent := Form1;
  popupBox.Align := TAlignLayout.Top;
  popupBox.Items.Add('Classic');
  popupBox.Items.Add('Modern');
end;`,
      poem: `TPopupBox keeps choices small,
Until the user asks for all.
It saves the screen from list-filled weight,
Yet opens options on demand straight.

Compact above, expressive below,
It helps selection gently flow.
When space is tight but options stay,
TPopupBox leads the way.`,
    }),
    tpanel: createEntry({
      name: "TPanel",
      code: `begin  // FMX
  var panel := TPanel.Create(Form1);
  panel.Parent := Form1;
  panel.Align := TAlignLayout.Client;
  panel.Padding.Rect := TRectF.Create(16, 16, 16, 16);
end;`,
      poem: `TPanel offers room with style,
A grounded place that spans a while.
It hosts the controls beneath its skin,
And keeps the layout ordered in.

Whether subtle, bright, or deep,
It gives the screen a structured sweep.
For content blocks that should stay clear,
TPanel settles here.`,
    }),
    tcalloutpanel: createEntry({
      name: "TCalloutPanel",
      code: `begin  // FMX
  var calloutPanel := TCalloutPanel.Create(Form1);
  calloutPanel.Parent := Form1;
  calloutPanel.Align := TAlignLayout.Top;
  calloutPanel.CalloutPosition := TCalloutPosition.Top;
end;`,
      poem: `TCalloutPanel points the eye,
To notes that should not drift nearby.
Its little arrow gives a cue,
That this small message matters to you.

Helpful hints and featured state,
Can live inside its styled shape.
For guidance with a visual sign,
TCalloutPanel works just fine.`,
    }),
    tlabel: createEntry({
      name: "TLabel",
      code: `begin  // FMX
  var labelControl := TLabel.Create(Form1);
  labelControl.Parent := Form1;
  labelControl.Align := TAlignLayout.Top;
  labelControl.Text := 'Rendering complete';
end;`,
      poem: `TLabel speaks without demand,
Plain text placed by a careful hand.
It names a field or marks a state,
And does its work without debate.

Styled softly in the FMX flow,
It helps the rest of meaning show.
For quiet words that still must tell,
We often trust TLabel.`,
    }),
    timagecontrol: createEntry({
      name: "TImageControl",
      code: `begin  // FMX
  var imageControl := TImageControl.Create(Form1);
  imageControl.Parent := Form1;
  imageControl.Align := TAlignLayout.Client;
  imageControl.WrapMode := TImageWrapMode.Stretch;
end;`,
      poem: `TImageControl carries light,
Through pixels scaled for every sight.
It shows the artwork, logo, scene,
With styled edges in between.

Responsive, smooth, and easy to place,
It helps visuals fill the space.
When pictures matter to the role,
FMX turns to TImageControl.`,
    }),
    tpathlabel: createEntry({
      name: "TPathLabel",
      code: `begin  // FMX
  var pathLabel := TPathLabel.Create(Form1);
  pathLabel.Parent := Form1;
  pathLabel.Align := TAlignLayout.Top;
  pathLabel.Text := 'Vector verse';
end;`,
      poem: `TPathLabel draws text as art,
Vector curves with scalable heart.
It keeps the letters sharp and bold,
Across each size the app may hold.

For stylized headings, strong and clear,
It brings geometric tone right here.
When words should feel designed, not flat,
TPathLabel answers that.`,
    }),
    tprogressbar: createEntry({
      name: "TProgressBar",
      code: `begin  // FMX
  var progressBar := TProgressBar.Create(Form1);
  progressBar.Parent := Form1;
  progressBar.Align := TAlignLayout.Top;
  progressBar.Max := 100;
  progressBar.Value := 68;
end;`,
      poem: `TProgressBar gives waiting shape,
A measured climb, a moving tape.
It tells the user what remains,
And eases long-running task-like strains.

Across devices, quick and clear,
It says the finish line is near.
For visible progress through the day,
TProgressBar leads the way.`,
    }),
    tscrollbar: createEntry({
      name: "TScrollBar",
      code: `begin  // FMX
  var scrollBar := TScrollBar.Create(Form1);
  scrollBar.Parent := Form1;
  scrollBar.Align := TAlignLayout.Right;
  scrollBar.Orientation := TOrientation.Vertical;
end;`,
      poem: `TScrollBar guards the hidden length,
And gives the interface smooth strength.
It slides through views too large to hold,
Revealing what the frame controlled.

Small in width, but broad in use,
It helps long content stay produced.
When motion through the page is key,
TScrollBar sets it free.`,
    }),
    tsmallscrollbar: createEntry({
      name: "TSmallScrollBar",
      code: `begin  // FMX
  var smallScrollBar := TSmallScrollBar.Create(Form1);
  smallScrollBar.Parent := Form1;
  smallScrollBar.Align := TAlignLayout.Bottom;
  smallScrollBar.Value := 24;
end;`,
      poem: `TSmallScrollBar trims the chrome,
For tighter shells and compact home.
It keeps the same directional aim,
But fits a lighter layout frame.

When every pixel matters most,
It serves the view without a boast.
For subtle scrolling, neat and spare,
TSmallScrollBar is there.`,
    }),
    texpander: createEntry({
      name: "TExpander",
      code: `begin  // FMX
  var expander := TExpander.Create(Form1);
  expander.Parent := Form1;
  expander.Align := TAlignLayout.Top;
  expander.Text := 'Advanced settings';
  expander.IsExpanded := True;
end;`,
      poem: `TExpander opens folded space,
Showing more when called in place.
It keeps the busy screen concise,
But lets deeper options surface nice.

Collapsed or wide, it keeps the tone,
Content revealed only when shown.
For progressive detail done with care,
TExpander lives there.`,
    }),
    ttrackbar: createEntry({
      name: "TTrackBar",
      code: `begin  // FMX
  var trackBar := TTrackBar.Create(Form1);
  trackBar.Parent := Form1;
  trackBar.Align := TAlignLayout.Top;
  trackBar.Max := 10;
  trackBar.Value := 6;
end;`,
      poem: `TTrackBar lets a value glide,
With one smooth gesture side to side.
It turns a range to living motion,
A tactile measure, calm as ocean.

For brightness, zoom, or volume line,
Its sliding thumb feels quite refined.
When numbers ought to move, not type,
TTrackBar feels just right.`,
    }),
    tswitch: createEntry({
      name: "TSwitch",
      code: `begin  // FMX
  var switchControl := TSwitch.Create(Form1);
  switchControl.Parent := Form1;
  switchControl.Align := TAlignLayout.Top;
  switchControl.IsChecked := True;
end;`,
      poem: `TSwitch is built for touch and flow,
On or off in one soft glow.
Its mobile shape feels quick and clean,
An easy state kept on the screen.

For instant toggles, bold yet neat,
It gives the form a modern beat.
When binary actions should feel fresh,
TSwitch fits the mesh.`,
    }),
    tsplitter: createEntry({
      name: "TSplitter",
      code: `begin  // FMX
  var splitter := TSplitter.Create(Form1);
  splitter.Parent := Form1;
  splitter.Align := TAlignLayout.Left;
  splitter.Width := 8;
end;`,
      poem: `TSplitter shares the space between,
Two neighboring panes upon the screen.
It lets the user tune the span,
And shape the view by hand again.

Adaptive layouts gain from this,
A movable boundary done with bliss.
For balanced panes that flex at sight,
TSplitter sets them right.`,
    }),
    tmenubar: createEntry({
      name: "TMenuBar",
      code: `begin  // FMX
  var menuBar := TMenuBar.Create(Form1);
  menuBar.Parent := Form1;
  menuBar.Align := TAlignLayout.Top;
end;`,
      poem: `TMenuBar stretches top and wide,
Where styled menu commands reside.
It gives a place for items to stand,
Ordered neatly, close at hand.

In desktop forms it sets the tone,
For structured actions plainly shown.
When menus need a polished base,
TMenuBar owns the space.`,
    }),
    tstatusbar: createEntry({
      name: "TStatusBar",
      code: `begin  // FMX
  var statusBar := TStatusBar.Create(Form1);
  statusBar.Parent := Form1;
  statusBar.Align := TAlignLayout.Bottom;
end;`,
      poem: `TStatusBar rests at footer line,
With quiet hints that help align.
It tells the state without a shout,
And keeps the user well informed throughout.

Subtle, steady, easy to read,
It answers small contextual need.
For bottom edge communication,
TStatusBar brings completion.`,
    }),
    ttoolbar: createEntry({
      name: "TToolBar",
      code: `begin  // FMX
  var toolBar := TToolBar.Create(Form1);
  toolBar.Parent := Form1;
  toolBar.Align := TAlignLayout.Top;
end;`,
      poem: `TToolBar brings the actions near,
In one horizontal working tier.
Buttons, search, and toggles stay,
Ready for the quickest way.

It shortens travel, speeds the pace,
And adds momentum to the space.
For frequent tools that must stay clear,
TToolBar belongs right here.`,
    }),
    tsizegrip: createEntry({
      name: "TSizeGrip",
      code: `begin  // FMX
  var sizeGrip := TSizeGrip.Create(Form1);
  sizeGrip.Parent := Form1;
  sizeGrip.Align := TAlignLayout.MostBottom;
end;`,
      poem: `TSizeGrip marks the corner bright,
Where windows stretch to better fit.
Small and simple, yet it shows,
That the frame can flex and grow.

For resizable shells on desktop ground,
It gives the user a visual sound.
When form edges need a subtle cue,
TSizeGrip comes through.`,
    }),
    tlistbox: createEntry({
      name: "TListBox",
      code: `begin  // FMX
  var listBox := TListBox.Create(Form1);
  listBox.Parent := Form1;
  listBox.Align := TAlignLayout.Client;
  listBox.Items.Add('Draft one');
  listBox.Items.Add('Draft two');
end;`,
      poem: `TListBox lines the options down,
For one long scroll through items found.
It keeps selection plain and quick,
With styled rows the user picks.

For menus, queues, or light data,
It gives the form a simple manner.
When readable lists must take the stage,
TListBox fills the page.`,
    }),
    tcombobox: createEntry({
      name: "TComboBox",
      code: `begin  // FMX
  var comboBox := TComboBox.Create(Form1);
  comboBox.Parent := Form1;
  comboBox.Align := TAlignLayout.Top;
  comboBox.Items.Add('Poetry');
  comboBox.Items.Add('Reference');
end;`,
      poem: `TComboBox keeps the form concise,
Choices hidden, clean, and nice.
One field above, a list below,
Opened only when to show.

It balances detail with reserve,
Giving options room they deserve.
When forms need choice but must stay trim,
TComboBox grows slim.`,
    }),
    tmemo: createEntry({
      name: "TMemo",
      code: `begin  // FMX
  var memo := TMemo.Create(Form1);
  memo.Parent := Form1;
  memo.Align := TAlignLayout.Client;
  memo.Lines.Text := 'First line' + sLineBreak + 'Second line';
end;`,
      poem: `TMemo gives long thoughts a home,
Where paragraphs can stretch and roam.
Multiple lines in styled array,
Ready for notes throughout the day.

For logs and drafts that need more room,
It lets the text expand and bloom.
When words arrive in more than one,
TMemo gets it done.`,
    }),
    tedit: createEntry({
      name: "TEdit",
      code: `begin  // FMX
  var editControl := TEdit.Create(Form1);
  editControl.Parent := Form1;
  editControl.Align := TAlignLayout.Top;
  editControl.TextPrompt := 'Enter a title';
end;`,
      poem: `TEdit takes the focused line,
One concise field by clean design.
It captures names and short replies,
With styling fit for many sizes.

Prompt and caret, soft and clear,
Invite the typed intent right here.
For compact text the form will keep,
TEdit runs deep.`,
    }),
    tmaskedit: createEntry({
      name: "TMaskEdit",
      code: `begin  // FMX
  var maskEdit := TMaskEdit.Create(Form1);
  maskEdit.Parent := Form1;
  maskEdit.Align := TAlignLayout.Top;
  maskEdit.FilterChar := '_';
  maskEdit.Text := '2026-04-09';
end;`,
      poem: `TMaskEdit shapes the text in flight,
So structured values land just right.
It guides the hands through fixed design,
And keeps loose input in a line.

Dates and codes can settle fast,
With fewer mistakes left to last.
For patterned text that should stay neat,
TMaskEdit feels complete.`,
    }),
    ttreeview: createEntry({
      name: "TTreeView",
      code: `begin  // FMX
  var treeView := TTreeView.Create(Form1);
  treeView.Parent := Form1;
  treeView.Align := TAlignLayout.Client;
  treeView.Items.Add.Text := 'Pages';
end;`,
      poem: `TTreeView climbs through nested tiers,
Holding branches, leaves, and peers.
It gives deep data room to show,
Expanded only where to go.

With hierarchy plain and bright,
It keeps complex structure in sight.
For layered models, ordered and true,
TTreeView sees it through.`,
    }),
    tlistview: createEntry({
      name: "TListView",
      code: `begin  // FMX
  var listView := TListView.Create(Form1);
  listView.Parent := Form1;
  listView.Align := TAlignLayout.Client;
  listView.Items.Add.Text := 'FMX poem draft';
end;`,
      poem: `TListView brings rich rows to life,
Styled items shaped without much strife.
It suits the touch-first, modern flow,
Where dynamic lists should smoothly go.

Fast to browse and easy to theme,
It fits the FMX design dream.
For elegant data on the move,
TListView finds the groove.`,
    }),
    tpopup: createEntry({
      name: "TPopup",
      code: `begin  // FMX
  var popup := TPopup.Create(Form1);
  popup.Parent := Form1;
  popup.PlacementTarget := Form1;
  popup.IsOpen := False;
end;`,
      poem: `TPopup floats above the form,
Detached from ordinary norm.
It hosts a panel, menu, hint,
In anchored space with polished tint.

Transient views can live inside,
Then close again when done to guide.
For layered surfaces, small and true,
TPopup comes into view.`,
    }),
    timagelist: createEntry({
      name: "TImageList",
      code: `begin  // FMX
  var imageList := TImageList.Create(Form1);
  imageList.Width := 24;
  imageList.Height := 24;
end;`,
      poem: `TImageList keeps visuals packed,
Ready when styled controls are stacked.
Small icons, states, and artful cues,
Can feed the lists and tools we use.

Shared resources, neatly stored,
Help the interface stay well accorded.
For reusable images kept concise,
TImageList works nice.`,
    }),
  };
})();