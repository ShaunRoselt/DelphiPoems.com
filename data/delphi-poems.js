(function () {
  window.DelphiPoemsData = window.DelphiPoemsData || {};

  const sharedIcon = "assets/images/logo.png";

  function createEntry({ name, category, code, poem, icon, title }) {
    return {
      name,
      title: title || `A poem about ${name} in Delphi programming`,
      category,
      icon: icon || sharedIcon,
      code,
      poem,
    };
  }

  window.DelphiPoemsData.delphiPoems = {
    units: createEntry({
      name: "Units",
      category: "Language",
      code: `unit Poetry.Tools;

interface

procedure RenderVerse;

implementation

procedure RenderVerse;
begin
end;

end.`,
      poem: `A Delphi unit marks the seam,
Between a promise and a scheme.
Interface speaks what others need,
Implementation plants the seed.

It keeps the code in ordered parts,
With cleaner files and calmer starts.
For modular design done right,
Units bring the light.`,
    }),
    records: createEntry({
      name: "Records",
      category: "Language",
      code: `type
  TVerseStats = record
    Lines: Integer;
    Words: Integer;
    function Summary: string;
  end;`,
      poem: `Records hold their values near,
Compact, direct, and crystal clear.
They travel light from stack to call,
Strong little shapes that hold it all.

With helpers, methods, fields aligned,
They balance power with simple mind.
For value types that stay precise,
Records are concise.`,
    }),
    classes: createEntry({
      name: "Classes",
      category: "Language",
      code: `type
  TPoemBook = class
  public
    procedure AddVerse(const AText: string);
  end;`,
      poem: `Classes give an object form,
State and method, rich and warm.
They inherit craft from lines before,
And open every extensible door.

Reference based and widely used,
They help abstractions stay well fused.
For software built to grow with grace,
Classes set the pace.`,
    }),
    generics: createEntry({
      name: "Generics",
      category: "Language",
      code: `uses
  System.Generics.Collections;

var verses := TList<string>.Create;`,
      poem: `Generics keep the types in line,
Reusable patterns by design.
One container, many kinds,
Without the casting older minds.

They bring both safety and reuse,
A sharper, cleaner way to choose.
For strongly typed abstraction work,
Generics never shirk.`,
    }),
    interfaces: createEntry({
      name: "Interfaces",
      category: "Language",
      code: `type
  IPoemSource = interface
    ['{2E3C5D02-6B9D-43B9-B083-934A6F7E2A10}']
    function NextLine: string;
  end;`,
      poem: `Interfaces describe the shape,
Without declaring concrete weight.
They promise what a type can do,
And let the implementations vary through.

Loose coupling gains a stronger voice,
Where code depends on contract choice.
For flexible systems, calm and bright,
Interfaces keep it light.`,
    }),
    properties: createEntry({
      name: "Properties",
      category: "Language",
      code: `type
  TPoem = class
  private
    FTitle: string;
  public
    property Title: string read FTitle write FTitle;
  end;`,
      poem: `Properties make state feel clean,
A polished layer in between.
They read like fields to those outside,
Yet hidden logic can reside.

Simple syntax, guarded core,
They offer ease and something more.
For expressive APIs done well,
Properties cast the spell.`,
    }),
    exceptions: createEntry({
      name: "Exceptions",
      category: "Runtime",
      code: `try
  LoadPoem('missing.txt');
except
  on E: Exception do
    ShowMessage(E.Message);
end;`,
      poem: `Exceptions rise when paths go wrong,
Breaking the silence sharp and strong.
Yet Delphi gives a structured way,
To catch the fall and still proceed the day.

With try and except guarding flow,
Failures become things we can know.
For resilient code through stormy sections,
Trust well-shaped exceptions.`,
    }),
    rtti: createEntry({
      name: "RTTI",
      category: "Runtime",
      code: `uses
  System.Rtti;

var context := TRttiContext.Create;
var rttiType := context.GetType(TPoem);`,
      poem: `RTTI lets the runtime see,
The shape of types reflectively.
Names and members, metadata too,
Become available for code to review.

Frameworks lean on this quiet art,
For binding data part by part.
When code must reason about its own tree,
RTTI sets it free.`,
    }),
    "anonymous-methods": createEntry({
      name: "Anonymous Methods",
      category: "Language",
      code: `var formatLine: TFunc<string, string>;

formatLine :=
  function(const AValue: string): string
  begin
    Result := AValue.ToUpper;
  end;`,
      poem: `Anonymous methods gather scope,
Capturing nearby state and hope.
They live inline where logic starts,
Small closures with expressive hearts.

Callbacks, tasks, and queued design,
All benefit from this compact line.
When behavior should travel as data in flight,
Anonymous methods feel right.`,
    }),
    packages: createEntry({
      name: "Packages",
      category: "Language",
      code: `package PoetryRuntime;

requires
  rtl,
  vcl;

contains
  Poetry.Tools in 'Poetry.Tools.pas';`,
      poem: `Packages gather units tight,
Into runtime and design-time light.
They ship extensions, shared and neat,
Where tools and libraries can meet.

Binary boundaries help divide,
What large solutions keep inside.
For reusable modules, strong and staged,
Packages keep things gauged.`,
    }),
    "code-editor": createEntry({
      name: "Code Editor",
      category: "IDE",
      code: `procedure TMainForm.Render;
begin
  // With code completion and navigation,
  // the editor stays close to the thought.
end;`,
      poem: `The code editor is where thought lands,
Between the keyboard and your plans.
Completion, hints, and colored tone,
Turn plain text into working stone.

Across each refactor, jump, and scan,
It stays the center of the plan.
For daily craft in Delphi weather,
The editor holds it together.`,
    }),
    debugger: createEntry({
      name: "Debugger",
      category: "IDE",
      code: `procedure TMainForm.ButtonClick(Sender: TObject);
begin
  var lineCount := Memo1.Lines.Count;
  Assert(lineCount >= 0);
end;`,
      poem: `The debugger slows the rushing stream,
And lets the hidden state be seen.
Breakpoints pause the moving thread,
So facts replace what guesses said.

Watches, stacks, and step-by-step,
Give tangled bugs a cleaner depth.
For truth within execution's stir,
The debugger delivers.`,
    }),
  };
})();