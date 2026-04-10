(function () {
  window.DelphiPoemsData = window.DelphiPoemsData || {};

  window.DelphiPoemsData.vclPoems = {
    tbutton: {
      name: "TButton",
      title: "A poem about the TButton component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TButton128.png",
      code: `begin  // VCL
\tvar myButton := TButton.Create(Application);
\tmyButton.Parent := MainForm;
\tmyButton.Caption := 'I am TButton';
\tmyButton.Align := TAlign.alTop;
\tmyButton.Height := 100;
\tmyButton.Margins.SetBounds(20,20,20,20);
\tmyButton.AlignWithMargins := True;
end;`,
      poem: `In Delphi's realm of code and art,
The TButton plays a vital part.
A click, a press, an action made,
A function called, a task conveyed.

With properties to change its face,
Its color, font, and size in place.
It stands there waiting on the form,
For user input to perform.

A simple tool, yet oh so grand,
A building block at programmer's hand.
The TButton, a trusty friend,
On which we oftentimes depend.

So here's to you, dear TButton,
A component true and never sudden.
In Delphi's world of code and might,
You help us bring our dreams to light.`,
      articleImage: {
        src: "assets/images/TButton.png",
        alt: "Dynamically created TButton on form (Delphi Programming | Object Pascal Programming)",
      },
    },
    tlabel: {
      name: "TLabel",
      title: "A poem about the TLabel component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TLabel128.png",
      code: `begin  // VCL
  var myLabel := TLabel.Create(Application);
  myLabel.Parent := MainForm;
  myLabel.Caption := 'I am TLabel';
  myLabel.Align := TAlign.alTop;
  myLabel.Margins.SetBounds(25,25,25,25);
  myLabel.AlignWithMargins := True;
  myLabel.Font.Size := 18;
  myLabel.Alignment := TAlignment.taCenter;
end;`,
      poem: `In Delphi's world of code and GUI,
The TLabel stands so plain to see.
A simple text upon the screen,
Its purpose clear and often unseen.

With properties to change its style,
Its color, font, and text compile.
It stands there static on the form,
Displaying information warm.

A humble tool, yet oh so great,
A building block we often create.
The TLabel, a trusty guide,
Displaying text with effortless pride.

So here's to you, dear TLabel,
A component true and never frail.
In Delphi's world of code and GUI,
You help us display our text so smoothly.`,
      articleImage: {
        src: "assets/images/TLabel.png",
        alt: "",
      },
    },
    tedit: {
      name: "TEdit",
      title: "A poem about the TEdit component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TEdit128.png",
      code: `begin  // VCL
  var myEdit := TEdit.Create(Application);
  myEdit.Parent := MainForm;
  myEdit.TextHint := 'What are you?';
  myEdit.Text := 'I am TEdit';
  myEdit.Align := TAlign.alTop;
  myEdit.Margins.SetBounds(25,25,25,25);
  myEdit.AlignWithMargins := True;
end;`,
      poem: `In Delphi's world of code and type,
The TEdit stands so plain in sight.
A box for text input to flow,
Its purpose clear and easy to know.

With properties to change its style,
Its color, font, and text compile.
It stands there waiting on the form,
For user input to take its norm.

A handy tool, yet oh so fine,
A building block we often define.
The TEdit, a trusty field,
For user input to be revealed.

So here's to you, dear TEdit,
A component true and never fetid.
In Delphi's world of code and light,
You help us capture text just right.`,
    },
    timage: {
      name: "TImage",
      title: "A poem about the TImage component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TImage128.png",
      code: `begin  // VCL
  var myImg := TImage.Create(Application);
  myImg.Parent := MainForm;
  myImg.Align := TAlign.alClient;
  myImg.Margins.SetBounds(30,30,30,30);
  myImg.AlignWithMargins := True;
  myImg.Stretch := True;
  myImg.Picture.LoadFromFile('Delphi Logo.png');
end;`,
      poem: `A TImage on the form, a sight to see,
A canvas for pictures, a place to be.
Load from file or assign at run,
A visual delight, second to none.

In Delphi code, it's easy to use,
A component so versatile, you cannot refuse.
Display a bitmap or a JPEG too,
The options are endless, it's up to you.

Stretch or center, align with care,
The TImage component is always there.
A tool for developers, a friend indeed,
A TImage on the form is all you need.

So next time you code in Delphi land,
Remember the TImage, always at hand.
A component so simple, yet so grand,
The TImage in Delphi is simply grand.`,
      articleImage: {
        src: "assets/images/TImage.png",
        alt: "",
      },
    },
    tcombobox: {
      name: "TComboBox",
      title: "A poem about the TComboBox component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TComboBox128.png",
      code: `begin  // VCL
  var myCB := TComboBox.Create(Application);
  myCB.Parent := MainForm;
  myCB.Align := TAlign.alTop;
  myCB.Margins.SetBounds(25,25,25,25);
  myCB.AlignWithMargins := True;
  myCB.Items.Add('I am TComboBox');
  myCB.Items.Add('I am Delphi');
  myCB.Items.Add('I am RAD Studio');
end;`,
      poem: `In Delphi's world of code and choice,
The TComboBox stands with poise.
A list of options to select,
Its purpose clear and oft direct.

With properties to change its face,
Its color, font, and size in place.
It stands there waiting on the form,
For user input to take its norm.

A helpful tool, yet oh so grand,
A building block at programmer's hand.
The TComboBox, a trusty pick,
For user choices to be quick.

So here's to you, dear TComboBox,
A component true and never wan.
In Delphi's world of code and might,
You help us choose with ease and light.`,
    },
    tmemo: {
      name: "TMemo",
      title: "A poem about the TMemo component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TMemo128.png",
      code: `begin  // VCL
  var myMemo := TMemo.Create(Application);
  myMemo.Parent := MainForm;
  myMemo.Align := TAlign.alClient;
  myMemo.Margins.SetBounds(30,30,30,30);
  myMemo.AlignWithMargins := True;
  myMemo.Lines.Add('I am TMemo' + sLineBreak);
  myMemo.Lines.Add('I am Delphi' + sLineBreak);
  myMemo.Lines.Add('I am RAD Studio');
end;`,
      poem: `In Delphi's world of code and text,
The TMemo stands so plain in context.
A box for multiline input to show,
Its purpose clear and often to know.

With properties to change its style,
Its color, font, and text compile.
It stands there waiting on the form,
For user input to take its norm.

A useful tool, yet oh so great,
A building block we often create.
The TMemo, a trusty field,
For user input to be revealed.

So here's to you, dear TMemo,
A component true and never slow.
In Delphi's world of code and sight,
You help us capture text just right.`,
    },
    tpanel: {
      name: "TPanel",
      title: "A poem about the TPanel component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TPanel128.png",
      code: `begin  // VCL
  var myPanel := TPanel.Create(Application);
  myPanel.Parent := MainForm;
  myPanel.Caption := 'I am TPanel';
  myPanel.Align := TAlign.alClient;
  myPanel.Margins.SetBounds(30,30,30,30);
  myPanel.AlignWithMargins := True;
  myPanel.Color := TColors.Aqua;
  myPanel.StyleElements := [];
end;`,
      poem: `In Delphi's world of code and form,
The TPanel stands so strong and warm.
A container for controls to rest,
Its purpose clear and often expressed.

With properties to change its look,
Its color, font, and size it took.
It stands there holding on the form,
Organizing controls in a swarm.

A useful tool, yet oh so neat,
A building block we often repeat.
The TPanel, a trusty base,
Holding controls in its embrace.

So here's to you, dear TPanel,
A component true and never banal.
In Delphi's world of code and sight,
You help us organize with might.`,
    },
    tlistbox: {
      name: "TListBox",
      title: "A poem about the TListBox component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TListBox128.png",
      code: `begin  // VCL
  var myLS := TListBox.Create(Application);
  myLS.Parent := MainForm;
  myLS.Align := TAlign.alClient;
  myLS.Margins.SetBounds(30,30,30,30);
  myLS.AlignWithMargins := True;
  myLS.Items.Add('I am TListBox');
  myLS.Items.Add('I am Delphi');
  myLS.Items.Add('I am RAD Studio');
end;`,
      poem: `In Delphi's world of code and might,
A component stands, both strong and bright,
TListBox is its given name,
A list of items, its primary aim.

With items added, and selected too,
It displays a list, for me and you,
A useful tool for choice and selection,
In user interfaces, it finds perfection.

In code, its properties we set with care,
Items, Color, Font, and more to spare,
To create a list so pleasing to see,
For the user's eyes, a visual spree.

So here's to TListBox, a component so grand,
In Delphi's toolkit, it does stand,
A list of items for all to view,
In user interfaces, it does ensue.`,
    },
    tcheckbox: {
      name: "TCheckBox",
      title: "A poem about the TCheckBox component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TCheckBox128.png",
      code: `begin  // VCL
  var myCB := TCheckBox.Create(Application);
  myCB.Parent := MainForm;
  myCB.Caption := 'I am TCheckBox';
  myCB.Align := TAlign.alTop;
  myCB.Margins.SetBounds(25,25,25,25);
  myCB.AlignWithMargins := True;
  myCB.Checked := True;
end;`,
      poem: `In Delphi's realm of code and form,
A component stands, both true and norm,
TCheckBox is its given name,
A simple box, yet not so plain.

With just a click, its state can change,
From checked to unchecked, it can range,
A useful tool for choice and selection,
In user interfaces, it finds perfection.

In code, its properties we set,
Caption, Color, Font, and yet,
Its most important feature to see,
Is the Checked property, true or false it can be.

So here's to TCheckBox, a component so fine,
In Delphi's toolkit, it does shine,
A simple box with power untold,
In user interfaces, it does unfold.`,
    },
    tmainmenu: {
      name: "TMainMenu",
      title: "A poem about the TMainMenu component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TMainMenu128.png",
      code: `begin  // VCL
  var mainMenu := TMainMenu.Create(MainForm);
  MainForm.Menu := mainMenu;

  var fileItem := TMenuItem.Create(mainMenu);
  fileItem.Caption := '&File';
  mainMenu.Items.Add(fileItem);

  var exitItem := TMenuItem.Create(mainMenu);
  exitItem.Caption := 'E&xit';
  fileItem.Add(exitItem);
end;`,
      poem: `The TMainMenu crowns the window wide,
With steady commands along the tide.
It gathers actions row by row,
And tells the user where to go.

From File to Help its branches bloom,
Bringing order to the room.
In every desktop app we see,
It frames the work elegantly.`,
    },
    tform: {
      name: "TForm",
      title: "A poem about the TForm component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/Frames128.png",
      code: `begin  // VCL
  var childForm := TForm.Create(Application);
  childForm.Caption := 'Poem Preview';
  childForm.Position := poScreenCenter;
  childForm.ClientWidth := 520;
  childForm.ClientHeight := 280;
  childForm.Show;
end;`,
      poem: `A TForm is where the story starts,
The painted stage for Delphi arts.
It holds the buttons, grids, and prose,
And gives the program shape that grows.

With border, caption, size, and light,
It welcomes every click in sight.
Behind each window, calm and warm,
There stands the patient TForm.`,
    },
    tradiobutton: {
      name: "TRadioButton",
      title: "A poem about the TRadioButton component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TRadioButton128.png",
      code: `begin  // VCL
  var radioOne := TRadioButton.Create(MainForm);
  radioOne.Parent := MainForm;
  radioOne.Caption := 'Morning build';
  radioOne.Align := TAlign.alTop;
  radioOne.Checked := True;

  var radioTwo := TRadioButton.Create(MainForm);
  radioTwo.Parent := MainForm;
  radioTwo.Caption := 'Evening build';
  radioTwo.Align := TAlign.alTop;
end;`,
      poem: `TRadioButton speaks in single choice,
One clear answer, one calm voice.
It keeps a group from drifting wide,
And lets one option safely guide.

Round and small yet firm in aim,
It brings selection into frame.
When only one reply should win,
TRadioButton steps in.`,
    },
    tframe: {
      name: "TFrame",
      title: "A poem about the TFrame component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/Frames128.png",
      code: `begin  // VCL
  var contentFrame := TFrame.Create(MainForm);
  contentFrame.Parent := MainForm;
  contentFrame.Align := TAlign.alClient;
  contentFrame.Padding.SetBounds(16,16,16,16);
  contentFrame.Hint := 'Reusable VCL content';
end;`,
      poem: `A TFrame is a crafted part,
Reusable design made smart.
It holds a pattern, neat and light,
Then drops it in where needed right.

Across many forms its value stays,
Repeating proven interface ways.
For modular work that must remain,
Delphi leans on TFrame.`,
    },
    tgroupbox: {
      name: "TGroupBox",
      title: "A poem about the TGroupBox component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TGroupBox128.png",
      code: `begin  // VCL
  var optionsBox := TGroupBox.Create(MainForm);
  optionsBox.Parent := MainForm;
  optionsBox.Caption := 'Compile Options';
  optionsBox.Align := TAlign.alTop;
  optionsBox.Height := 120;
  optionsBox.AlignWithMargins := True;
end;`,
      poem: `TGroupBox draws a quiet line,
Around related thoughts that shine.
It gathers settings in one place,
And gives the screen a clearer face.

With caption set above the fold,
Its little border makes things bold.
When controls belong as one,
TGroupBox has the grouping done.`,
    },
    tpopupmenu: {
      name: "TPopupMenu",
      title: "A poem about the TPopupMenu component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TPopupMenu128.png",
      code: `begin  // VCL
  var popupMenu := TPopupMenu.Create(MainForm);

  var renameItem := TMenuItem.Create(popupMenu);
  renameItem.Caption := 'Rename';
  popupMenu.Items.Add(renameItem);

  MainForm.PopupMenu := popupMenu;
end;`,
      poem: `TPopupMenu waits just out of sight,
Until a right click calls the light.
It rises quick beside the place,
With focused choices, trimmed in grace.

No clutter left upon the form,
No button row in crowded swarm.
For context rich and sharply true,
TPopupMenu knows what to do.`,
    },
    tradiogroup: {
      name: "TRadioGroup",
      title: "A poem about the TRadioGroup component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TRadioGroup128.png",
      code: `begin  // VCL
  var modeGroup := TRadioGroup.Create(MainForm);
  modeGroup.Parent := MainForm;
  modeGroup.Caption := 'Output Mode';
  modeGroup.Items.Add('Console');
  modeGroup.Items.Add('Desktop');
  modeGroup.Items.Add('Service');
  modeGroup.ItemIndex := 1;
  modeGroup.Align := TAlign.alTop;
end;`,
      poem: `TRadioGroup keeps choices near,
Framed together, crisp and clear.
Its buttons line in ordered rows,
So one selected answer shows.

It saves the form from scattered tone,
And makes decision making known.
For settings packed in tidy loop,
Delphi turns to TRadioGroup.`,
    },
    tactionlist: {
      name: "TActionList",
      title: "A poem about the TActionList component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TActionList128.png",
      code: `begin  // VCL
  var actionList := TActionList.Create(MainForm);

  var saveAction := TAction.Create(actionList);
  saveAction.ActionList := actionList;
  saveAction.Caption := 'Save poem';
  saveAction.ShortCut := TextToShortCut('Ctrl+S');
end;`,
      poem: `TActionList collects intent,
Where captions, keys, and clicks are spent.
One command can feed a menu bar,
A toolbar, button, near or far.

It keeps behavior in one place,
Reducing duplicate interface.
For shared commands that must stay bright,
There is the steady TActionList.`,
    },
    tprogressbar: {
      name: "TProgressBar",
      title: "A poem about the TProgressBar component in the VCL framework within Delphi",
      category: "Win32",
      icon: "assets/images/vcl/TProgressBar128.png",
      code: `begin  // VCL
  var progressBar := TProgressBar.Create(MainForm);
  progressBar.Parent := MainForm;
  progressBar.Align := TAlign.alTop;
  progressBar.Min := 0;
  progressBar.Max := 100;
  progressBar.Position := 42;
end;`,
      poem: `TProgressBar moves block by block,
And gives long work a living clock.
It tells the user, calm and plain,
How much is left in heavy strain.

Across installs and files that stream,
It keeps a promise on the screen.
When waiting needs a measured star,
Delphi shows TProgressBar.`,
    },
    tscrollbar: {
      name: "TScrollBar",
      title: "A poem about the TScrollBar component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TScrollBar128.png",
      code: `begin  // VCL
  var scrollBar := TScrollBar.Create(MainForm);
  scrollBar.Parent := MainForm;
  scrollBar.Align := TAlign.alRight;
  scrollBar.Kind := sbVertical;
  scrollBar.Min := 0;
  scrollBar.Max := 500;
  scrollBar.PageSize := 50;
end;`,
      poem: `TScrollBar marks the hidden range,
Where larger worlds require a change.
It slides through text or canvas wide,
And helps the eye and hand to glide.

Small in shape yet rich in reach,
It moves beyond the visible beach.
For content taller than the page,
TScrollBar sets the stage.`,
    },
    tscrollbox: {
      name: "TScrollBox",
      title: "A poem about the TScrollBox component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TScrollBox128.png",
      code: `begin  // VCL
  var scrollBox := TScrollBox.Create(MainForm);
  scrollBox.Parent := MainForm;
  scrollBox.Align := TAlign.alClient;
  scrollBox.AutoScroll := True;
  scrollBox.BorderStyle := bsSingle;
end;`,
      poem: `A TScrollBox makes room to roam,
When content grows beyond its home.
It wraps a region large and free,
Then lets the viewer move with ease.

Panels, editors, custom art,
Can live inside its moving heart.
For surfaces that overflow,
Use TScrollBox and onward go.`,
    },
    tbitbtn: {
      name: "TBitBtn",
      title: "A poem about the TBitBtn component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TBitBtn128.png",
      code: `begin  // VCL
  var okButton := TBitBtn.Create(MainForm);
  okButton.Parent := MainForm;
  okButton.Align := TAlign.alTop;
  okButton.Kind := bkOK;
  okButton.Caption := 'Build and Close';
end;`,
      poem: `TBitBtn blends image and word,
So purpose can be quickly heard.
It offers glyph and meaning both,
A stronger cue in single growth.

For dialogs and tasks well known,
Its preset kinds are widely shown.
When button text should shine with sign,
TBitBtn works just fine.`,
    },
    ttrackbar: {
      name: "TTrackBar",
      title: "A poem about the TTrackBar component in the VCL framework within Delphi",
      category: "Win32",
      icon: "assets/images/vcl/TTrackBar128.png",
      code: `begin  // VCL
  var trackBar := TTrackBar.Create(MainForm);
  trackBar.Parent := MainForm;
  trackBar.Align := TAlign.alTop;
  trackBar.Min := 0;
  trackBar.Max := 10;
  trackBar.Position := 7;
  trackBar.Frequency := 1;
end;`,
      poem: `The TTrackBar glides from low to high,
With thumb and scale beneath the eye.
It turns a range to tactile play,
And lets the value slide its way.

For zoom and volume, speed and hue,
Its moving handle feels precise and true.
When numbers need a softer art,
Reach for the smooth TTrackBar part.`,
    },
    ttoggleswitch: {
      name: "TToggleSwitch",
      title: "A poem about the TToggleSwitch component in the VCL framework within Delphi",
      category: "Windows 10",
      icon: "assets/images/vcl/TToggleSwitch128.png",
      code: `begin  // VCL
  var toggleSwitch := TToggleSwitch.Create(MainForm);
  toggleSwitch.Parent := MainForm;
  toggleSwitch.Align := TAlign.alTop;
  toggleSwitch.StateCaptions.CaptionOn := 'On';
  toggleSwitch.StateCaptions.CaptionOff := 'Off';
  toggleSwitch.State := tssOn;
end;`,
      poem: `TToggleSwitch is crisp and spare,
Two simple states with modern air.
It flips from off to active glow,
And makes intent easy to know.

For dark mode, sync, or live update,
It signals small but decisive state.
When binary choices should feel fresh,
TToggleSwitch fits the mesh.`,
    },
    tsplitter: {
      name: "TSplitter",
      title: "A poem about the TSplitter component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TSplitter128.png",
      code: `begin  // VCL
  var leftPanel := TPanel.Create(MainForm);
  leftPanel.Parent := MainForm;
  leftPanel.Align := TAlign.alLeft;
  leftPanel.Width := 220;

  var splitter := TSplitter.Create(MainForm);
  splitter.Parent := MainForm;
  splitter.Align := TAlign.alLeft;
end;`,
      poem: `TSplitter sits between two views,
And lets the user shape the news.
One drag can widen code or chart,
And tune the balance of each part.

It gives the layout breathing room,
Instead of fixing every column.
For panes that ought to flex with grace,
TSplitter finds the place.`,
    },
    tmaskedit: {
      name: "TMaskEdit",
      title: "A poem about the TMaskEdit component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TMaskEdit128.png",
      code: `begin  // VCL
  var maskEdit := TMaskEdit.Create(MainForm);
  maskEdit.Parent := MainForm;
  maskEdit.Align := TAlign.alTop;
  maskEdit.EditMask := '!\(999\) 000-0000;1;_';
  maskEdit.TextHint := 'Phone number';
end;`,
      poem: `TMaskEdit keeps wandering keys,
Inside a pattern set with ease.
Dates and phones and codes align,
Because the input follows line.

It guides the user while they type,
And trims mistakes before they ripen.
For structured text that must stay fit,
Choose the faithful TMaskEdit.`,
    },
    tstatusbar: {
      name: "TStatusBar",
      title: "A poem about the TStatusBar component in the VCL framework within Delphi",
      category: "Win32",
      icon: "assets/images/vcl/TStatusBar128.png",
      code: `begin  // VCL
  var statusBar := TStatusBar.Create(MainForm);
  statusBar.Parent := MainForm;
  statusBar.Align := TAlign.alBottom;
  statusBar.SimplePanel := True;
  statusBar.SimpleText := 'Ready to compile poems';
end;`,
      poem: `Along the foot of every screen,
TStatusBar keeps watch serene.
It whispers hints and changing state,
Without demanding user weight.

Ready, saving, loading too,
It shares the small but useful view.
For quiet messages that steer,
TStatusBar stays near.`,
    },
    ttoolbar: {
      name: "TToolBar",
      title: "A poem about the TToolBar component in the VCL framework within Delphi",
      category: "Win32",
      icon: "assets/images/vcl/TToolBar128.png",
      code: `begin  // VCL
  var toolBar := TToolBar.Create(MainForm);
  toolBar.Parent := MainForm;
  toolBar.Align := TAlign.alTop;

  var toolButton := TToolButton.Create(toolBar);
  toolButton.Parent := toolBar;
  toolButton.Caption := 'Build';
end;`,
      poem: `TToolBar lines the top with pace,
Fast commands in reachable space.
Its buttons stand where action starts,
Like little levers for our charts.

When routine tasks repeat all day,
It keeps the common moves in play.
For quick command and steady flow,
TToolBar helps the work to go.`,
    },
    ttreeview: {
      name: "TTreeView",
      title: "A poem about the TTreeView component in the VCL framework within Delphi",
      category: "Win32",
      icon: "assets/images/vcl/TTreeView128.png",
      code: `begin  // VCL
  var treeView := TTreeView.Create(MainForm);
  treeView.Parent := MainForm;
  treeView.Align := TAlign.alClient;

  var rootNode := treeView.Items.Add(nil, 'Components');
  treeView.Items.AddChild(rootNode, 'Standard');
  treeView.Items.AddChild(rootNode, 'Win32');
  rootNode.Expand(True);
end;`,
      poem: `TTreeView grows in branching lines,
Where hierarchy clearly shines.
Folders, nodes, and nested lore,
Invite the user to explore.

Collapsed or wide, it keeps the map,
So deep structures stay on track.
For parent child relations true,
TTreeView offers the view.`,
    },
    tlistview: {
      name: "TListView",
      title: "A poem about the TListView component in the VCL framework within Delphi",
      category: "Win32",
      icon: "assets/images/vcl/TListView128.png",
      code: `begin  // VCL
  var listView := TListView.Create(MainForm);
  listView.Parent := MainForm;
  listView.Align := TAlign.alClient;
  listView.ViewStyle := vsReport;
  listView.Columns.Add.Caption := 'Component';
  listView.Columns.Add.Caption := 'Category';

  var item := listView.Items.Add;
  item.Caption := 'TButton';
  item.SubItems.Add('Standard');
end;`,
      poem: `TListView wears many forms with ease,
Icons, reports, and ordered trees.
It can present a simple row,
Or detailed columns users know.

For files and records lined in sight,
It balances density with light.
When rich collections need review,
TListView pulls them through.`,
    },
    timagelist: {
      name: "TImageList",
      title: "A poem about the TImageList component in the VCL framework within Delphi",
      category: "Win32",
      icon: "assets/images/vcl/TImageList128.png",
      code: `begin  // VCL
  var imageList := TImageList.Create(MainForm);
  imageList.Width := 24;
  imageList.Height := 24;

  var toolBar := TToolBar.Create(MainForm);
  toolBar.Parent := MainForm;
  toolBar.Images := imageList;
end;`,
      poem: `TImageList keeps small art aligned,
Ready when controls need icons assigned.
One shared source for many views,
So images can travel where they choose.

Toolbars, trees, and lists agree,
On one compact repository.
For visual cues in tidy twist,
There waits the calm TImageList.`,
    },
    tspeedbutton: {
      name: "TSpeedButton",
      title: "A poem about the TSpeedButton component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TSpeedButton128.png",
      code: `begin  // VCL
  var speedButton := TSpeedButton.Create(MainForm);
  speedButton.Parent := MainForm;
  speedButton.Align := TAlign.alTop;
  speedButton.Caption := 'Preview';
  speedButton.Flat := True;
end;`,
      poem: `TSpeedButton moves with lighter frame,
Quick in look and quick in aim.
Often flat upon the bar,
It keeps fast tools exactly where they are.

For toggles, modes, or instant press,
It offers swiftness with less dress.
When compact action is the goal,
TSpeedButton fills the role.`,
    },
    tstringgrid: {
      name: "TStringGrid",
      title: "A poem about the TStringGrid component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TStringGrid128.png",
      code: `begin  // VCL
  var stringGrid := TStringGrid.Create(MainForm);
  stringGrid.Parent := MainForm;
  stringGrid.Align := TAlign.alClient;
  stringGrid.ColCount := 3;
  stringGrid.RowCount := 4;
  stringGrid.Cells[0,0] := 'Name';
  stringGrid.Cells[1,0] := 'Category';
  stringGrid.Cells[0,1] := 'TButton';
end;`,
      poem: `TStringGrid sets rows in place,
Table logic with a classic face.
Cells can hold the facts we need,
Fast to show and fast to read.

Headers, values, notes in line,
It turns plain text to ordered sign.
For editable tables, clear and brisk,
TStringGrid earns the task at risk.`,
    },
    tdrawgrid: {
      name: "TDrawGrid",
      title: "A poem about the TDrawGrid component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TDrawGrid128.png",
      code: `begin  // VCL
  var drawGrid := TDrawGrid.Create(MainForm);
  drawGrid.Parent := MainForm;
  drawGrid.Align := TAlign.alClient;
  drawGrid.ColCount := 6;
  drawGrid.RowCount := 8;
  drawGrid.DefaultDrawing := False;
end;`,
      poem: `TDrawGrid gives the painter room,
To color every cell in bloom.
Its structure stays, but style is yours,
Across the rows and little doors.

Calendars, heat maps, custom plans,
Can all be drawn by careful hands.
For grids that need a special skin,
TDrawGrid lets you begin.`,
    },
    tshape: {
      name: "TShape",
      title: "A poem about the TShape component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TShape128.png",
      code: `begin  // VCL
  var shape := TShape.Create(MainForm);
  shape.Parent := MainForm;
  shape.Align := TAlign.alTop;
  shape.Height := 48;
  shape.Shape := stRoundRect;
  shape.Brush.Color := TColors.Cadetblue;
end;`,
      poem: `A TShape can mark a path,
With ellipse, square, or rounded math.
It brings a visual note or frame,
Without a bitmap to its name.

For badges, panels, soft design,
Its simple geometry can shine.
When interface needs form, not text,
TShape appears there next.`,
    },
    tmediaplayer: {
      name: "TMediaPlayer",
      title: "A poem about the TMediaPlayer component in the VCL framework within Delphi",
      category: "System",
      icon: "assets/images/vcl/TMediaPlayer128.png",
      code: `begin  // VCL
  var mediaPlayer := TMediaPlayer.Create(MainForm);
  mediaPlayer.Parent := MainForm;
  mediaPlayer.Align := TAlign.alTop;
  mediaPlayer.FileName := 'intro.mp3';
  mediaPlayer.VisibleButtons := [btPlay, btPause, btStop];
end;`,
      poem: `TMediaPlayer hums with sound,
And lets rich motion gather round.
Play and pause sit close at hand,
For clips a desktop app has planned.

Though older in the VCL sea,
It still can serve utility.
When audio must join the layer,
Delphi calls TMediaPlayer.`,
    },
    tbevel: {
      name: "TBevel",
      title: "A poem about the TBevel component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TBevel128.png",
      code: `begin  // VCL
  var bevel := TBevel.Create(MainForm);
  bevel.Parent := MainForm;
  bevel.Align := TAlign.alTop;
  bevel.Height := 12;
  bevel.Shape := bsTopLine;
  bevel.Style := bsLowered;
end;`,
      poem: `TBevel does a modest thing,
It draws a line, a softened ring.
It separates without demand,
And guides the eye with gentle hand.

No headline needed, no loud art,
Just quiet structure set apart.
For borders light and spacing clear,
TBevel works right here.`,
    },
    tchecklistbox: {
      name: "TCheckListBox",
      title: "A poem about the TCheckListBox component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TCheckListBox128.png",
      code: `begin  // VCL
  var checklistBox := TCheckListBox.Create(MainForm);
  checklistBox.Parent := MainForm;
  checklistBox.Align := TAlign.alClient;
  checklistBox.Items.Add('Buttons');
  checklistBox.Items.Add('Menus');
  checklistBox.Checked[0] := True;
end;`,
      poem: `TCheckListBox pairs list and tick,
For many choices chosen quick.
It keeps the items all in view,
And marks which paths the user knew.

Better than scattered checks alone,
It gives selection a compact zone.
For option sets that travel fast,
TCheckListBox is built to last.`,
    },
    tcalendar: {
      name: "TCalendar",
      title: "A poem about the TCalendar component in the VCL framework within Delphi",
      category: "Samples",
      icon: "assets/images/vcl/TCalendar128.png",
      code: `begin  // VCL
  var calendar := TCalendar.Create(MainForm);
  calendar.Parent := MainForm;
  calendar.Align := TAlign.alTop;
  calendar.CalendarDate := Date;
  calendar.Height := 220;
end;`,
      poem: `TCalendar unfolds the days,
In ordered weeks and readable ways.
It turns a date from typed command,
To something chosen by the hand.

For schedules, logs, and plans in sight,
Its little grid feels calm and bright.
When time itself should be selectable,
TCalendar feels dependable.`,
    },
    tstatictext: {
      name: "TStaticText",
      title: "A poem about the TStaticText component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TStaticText128.png",
      code: `begin  // VCL
  var staticText := TStaticText.Create(MainForm);
  staticText.Parent := MainForm;
  staticText.Align := TAlign.alTop;
  staticText.Caption := 'Compilation completed successfully';
  staticText.BorderStyle := sbsSingle;
end;`,
      poem: `TStaticText speaks clear and still,
For captions that do not need skill.
It can look lighter than a label frame,
Yet still present the message plain.

Status hints and notes that stay,
Fit neatly in its quiet way.
When read only text should settle next,
There stands TStaticText.`,
    },
    tlinklabel: {
      name: "TLinkLabel",
      title: "A poem about the TLinkLabel component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TLinkLabel128.png",
      code: `begin  // VCL
  var linkLabel := TLinkLabel.Create(MainForm);
  linkLabel.Parent := MainForm;
  linkLabel.Align := TAlign.alTop;
  linkLabel.Caption := 'Read more at <a href="https://docwiki.embarcadero.com">DocWiki</a>';
end;`,
      poem: `TLinkLabel turns text to trail,
A sentence with a clickable sail.
It keeps the form both clean and light,
Yet opens paths beyond the site.

For help, docs, or guided start,
It blends hyperlink with label art.
When plain text wants a little reach,
TLinkLabel starts to teach.`,
    },
    tcontrolbar: {
      name: "TControlBar",
      title: "A poem about the TControlBar component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TControlBar128.png",
      code: `begin  // VCL
  var controlBar := TControlBar.Create(MainForm);
  controlBar.Parent := MainForm;
  controlBar.Align := TAlign.alTop;
  controlBar.AutoSize := True;
end;`,
      poem: `TControlBar keeps tools in line,
Yet lets their hosted windows slide and shine.
Bands can shift as work demands,
Responsive under user hands.

It offers docking with a frame,
So movable controls can play the game.
For classic layouts built to flow,
TControlBar helps them grow.`,
    },
    tapplicationevents: {
      name: "TApplicationEvents",
      title: "A poem about the TApplicationEvents component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TApplicationEvents128.png",
      code: `begin  // VCL
  var applicationEvents := TApplicationEvents.Create(MainForm);
  applicationEvents.OnIdle := ApplicationIdle;
  applicationEvents.OnHint := ApplicationHint;
  applicationEvents.OnException := ApplicationException;
end;`,
      poem: `TApplicationEvents listens wide,
Beyond one form or one control's side.
It hears the idle, hint, and fall,
The global rhythm of them all.

For cross app hooks that must remain,
It catches signals clean and plain.
When lifecycle events must meet,
TApplicationEvents keeps beat.`,
    },
    tnumberbox: {
      name: "TNumberBox",
      title: "A poem about the TNumberBox component in the VCL framework within Delphi",
      category: "Windows 10",
      icon: "assets/images/vcl/TNumberBox128.png",
      code: `begin  // VCL
  var numberBox := TNumberBox.Create(MainForm);
  numberBox.Parent := MainForm;
  numberBox.Align := TAlign.alTop;
  numberBox.MinValue := 0;
  numberBox.MaxValue := 100;
  numberBox.Value := 12.5;
end;`,
      poem: `TNumberBox keeps digits tight,
With numeric rules that feel just right.
No stray letters drift inside,
Only values meant to guide.

For counts, prices, ranges, scale,
It helps valid data prevail.
When numbers should arrive with care,
TNumberBox is there.`,
    },
    tspinedit: {
      name: "TSpinEdit",
      title: "A poem about the TSpinEdit component in the VCL framework within Delphi",
      category: "Samples",
      icon: "assets/images/vcl/TSpinEdit128.png",
      code: `begin  // VCL
  var spinEdit := TSpinEdit.Create(MainForm);
  spinEdit.Parent := MainForm;
  spinEdit.Align := TAlign.alTop;
  spinEdit.MinValue := 1;
  spinEdit.MaxValue := 12;
  spinEdit.Value := 4;
  spinEdit.Increment := 1;
end;`,
      poem: `TSpinEdit lets numbers climb,
One step at a measured time.
Its arrows nudge the value near,
Making small adjustments clear.

For counts and limits, day by day,
It offers a deliberate way.
When typed input should have a guide,
TSpinEdit stands beside.`,
    },
    tcomboedit: {
      name: "TComboEdit",
      title: "A poem about the TComboEdit component in the VCL framework within Delphi",
      category: "Standard",
      icon: "assets/images/vcl/TComboEdit128.png",
      code: `begin  // VCL
  var comboEdit := TComboEdit.Create(MainForm);
  comboEdit.Parent := MainForm;
  comboEdit.Align := TAlign.alTop;
  comboEdit.Text := 'Choose a component';
  comboEdit.TextHint := 'Open the drop down';
end;`,
      poem: `TComboEdit joins field and cue,
Typed text with a chooser view.
It leaves room for manual say,
Yet offers help along the way.

For paths or values often known,
It blends two patterns into one.
When edit and pick should coexist,
TComboEdit makes the list.`,
    },
    tvaluelisteditor: {
      name: "TValueListEditor",
      title: "A poem about the TValueListEditor component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TValueListEditor128.png",
      code: `begin  // VCL
  var valueListEditor := TValueListEditor.Create(MainForm);
  valueListEditor.Parent := MainForm;
  valueListEditor.Align := TAlign.alClient;
  valueListEditor.InsertRow('Theme', 'Poetry', True);
  valueListEditor.InsertRow('Framework', 'VCL', True);
end;`,
      poem: `TValueListEditor writes in pairs,
Names and values set in squares.
Config screens and metadata,
Fit its tidy, readable data.

It makes editing direct and bright,
Without inventing custom sight.
For property sheets built with care,
TValueListEditor is there.`,
    },
    tlabelededit: {
      name: "TLabeledEdit",
      title: "A poem about the TLabeledEdit component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TLabeledEdit128.png",
      code: `begin  // VCL
  var labeledEdit := TLabeledEdit.Create(MainForm);
  labeledEdit.Parent := MainForm;
  labeledEdit.Align := TAlign.alTop;
  labeledEdit.EditLabel.Caption := 'Component Name';
  labeledEdit.Text := 'TButton';
end;`,
      poem: `TLabeledEdit keeps field and name,
As one small unit in the frame.
No need to place a label near,
Its paired design is already here.

For forms with many inputs shown,
It cuts the setup overhead down.
When clarity should come pre tied,
TLabeledEdit takes that stride.`,
    },
    tbuttonededit: {
      name: "TButtonedEdit",
      title: "A poem about the TButtonedEdit component in the VCL framework within Delphi",
      category: "Additional",
      icon: "assets/images/vcl/TButtonedEdit128.png",
      code: `begin  // VCL
  var buttonedEdit := TButtonedEdit.Create(MainForm);
  buttonedEdit.Parent := MainForm;
  buttonedEdit.Align := TAlign.alTop;
  buttonedEdit.TextHint := 'Search poems';
  buttonedEdit.RightButton.Visible := True;
  buttonedEdit.RightButton.Hint := 'Run search';
end;`,
      poem: `TButtonedEdit keeps a field,
But adds a trigger at the shield.
Search, browse, or clear can live inside,
Right where typed words already bide.

It saves a little screen side room,
And makes compact workflows bloom.
When edit and action should be wed,
TButtonedEdit moves ahead.`,
    },
    ttimer: {
      name: "TTimer",
      title: "A poem about the TTimer component in the VCL framework within Delphi",
      category: "System",
      icon: "assets/images/vcl/TTimer128.png",
      code: `begin  // VCL
  var timer := TTimer.Create(MainForm);
  timer.Interval := 1000;
  timer.Enabled := True;
  timer.OnTimer := TimerTick;
end;`,
      poem: `TTimer marks a measured beat,
Recurring work in silent feet.
A second passed, a poll to make,
A status light to gently wake.

Invisible yet full of use,
It gives periodic logic a truce.
When time itself must send a chime,
Delphi leans on TTimer time.`,
    },
    twebbrowser: {
      name: "TWebBrowser",
      title: "A poem about the TWebBrowser component in the VCL framework within Delphi",
      category: "Internet",
      icon: "assets/images/vcl/TWebBrowser128.png",
      code: `begin  // VCL
  var webBrowser := TWebBrowser.Create(MainForm);
  webBrowser.Parent := MainForm;
  webBrowser.Align := TAlign.alClient;
  webBrowser.Navigate('https://www.embarcadero.com');
end;`,
      poem: `TWebBrowser opens the page,
Bringing the wider web on stage.
Docs and portals, forms and feeds,
Can live beside desktop needs.

Though old in engine, still it can,
Embed a browsing workspace span.
When web content must share the view,
TWebBrowser will do.`,
    },
  };
})();