(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{62:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return i}));var a=t(2),o=t(6),l=(t(0),t(90)),r={id:"typescript",title:"Typescript Style Guide",sidebar_label:"TypeScript"},c={unversionedId:"typescript",id:"typescript",isDocsHomePage:!1,title:"Typescript Style Guide",description:"WWNorton TypeScript Style Guide",source:"@site/docs/typescript-style.md",permalink:"/style/docs/typescript",editUrl:"https://github.com/wwnorton/style/edit/docs-docusaurus/guides-website/docs/typescript-style.md",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1598655076,sidebar_label:"TypeScript",sidebar:"docs",previous:{title:"React Style Guide",permalink:"/style/docs/react"},next:{title:"CSS/SASS Style Guide",permalink:"/style/docs/css-sass"}},b=[{value:"Official Typescript Documentation",id:"official-typescript-documentation",children:[]},{value:"General",id:"general",children:[]},{value:"Variables and Function",id:"variables-and-function",children:[]},{value:"Array",id:"array",children:[]},{value:"Strings",id:"strings",children:[]},{value:"Class",id:"class",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Type",id:"type",children:[]},{value:"Type vs. Interface",id:"type-vs-interface",children:[]},{value:"Namespace",id:"namespace",children:[]},{value:"Null vs. Undefined",id:"null-vs-undefined",children:[]},{value:"Tabs vs. Spaces",id:"tabs-vs-spaces",children:[]},{value:"Semicolons",id:"semicolons",children:[]}],s={rightToc:b};function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"WWNorton TypeScript Style Guide")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/Typescript-Lint-Setup-06cef0036d0b4887b4e07b57def202e4"}),"Typescript Lint Setup")),Object(l.b)("h2",{id:"official-typescript-documentation"},"Official Typescript Documentation"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/home.html"}),"Familiar With TypeScript already?")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.staging-typescript.org/docs/home"}),"The starting point for learning TypeScript")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://levelup.gitconnected.com/typescript-best-practices-semicolons-and-spacing-5be9c5963604"}),"TypeScript Best Practices\u200a-\u200aSemicolons and Spacing")),Object(l.b)("h2",{id:"general"},"General"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"No Unused Expressions"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We shouldn't have unused expressions in our code. If we have them, we should remove them.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\na + b;\n\n// Good \ud83d\udc4d\nlet add = a + b;\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Filename"))),Object(l.b)("p",null,"Name files with ",Object(l.b)("inlineCode",{parentName:"p"},"camelCase"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Conventional across many JS teams.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"accordion.tsx\nmyControl.tsx\nstringUtils.ts\nmap.ts \n")),Object(l.b)("h2",{id:"variables-and-function"},"Variables and Function"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"camelCase")," for variable and function names"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Conventional JavaScript")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nvar FooVar;\nfunction BarFunc() { }\n\n// Good \ud83d\udc4d\nvar fooVar;\nfunction barFunc() { }\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"No Unused Variables"))),Object(l.b)("p",null,"@typescript-eslint/no-unused-vars"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Likewise, if we have unused variables, then we should remove them.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nvar num1 = 10;\nvar num2 = 7;\n\nvar result = num1 + 7;\n\n// Good \ud83d\udc4d\nvar num1 = 10;\n\nvar result = num1 + 7;\n\n// Good \ud83d\udc4d\nvar num1 = 10;\nvar num2 = 7;\n\nvar result = num1 + num2;\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Don\u2019t Use Variables Before they\u2019re Defined"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"With variables that are declared with\xa0var we can reference the variable before they\u2019re defined, but the value will be\xa0undefined. This is because the variable is hoisted. let and\xa0const solve this problem since they aren\u2019t hoisted. Therefore, we should use\xa0let or\xa0const variables. This way, if we reference those variables, we\u2019ll get an error.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nvar hoisted;\nconsole.log(hoisted); // will be undefined;\n\n// Good \ud83d\udc4d\nlet notHoisted;\nconst alsoNotHoisted;\n\nconsole.log(notHoisted); // Will throw an error (which is what we want in this case);\nconsole.log(alsoNotHoisted); // Will also throw an error (which is what we want in this case);\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Replace Magic Numbers with Named Constants"))),Object(l.b)("p",null,"@typescript-eslint/prefer-as-const"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If we have numbers that are used as constants repeatedly but aren\u2019t assigned to a constant, then we should assign it to one. This way, we can change it once and the value will be reflected everywhere. Also, named constants tell us the meaning of the number. Therefore, instead of writing:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nenum Foo { bar = 1 }\n\n// Good \ud83d\udc4d\nconst NUMBER_OF_BARS = 1;\nenum Foo { bar = NUMBER_OF_BARS }\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Don\u2019t Use async if await isn\u2019t Used Inside the Function"))),Object(l.b)("p",null,"@typescript-eslint/require-await"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We should use\xa0",Object(l.b)("inlineCode",{parentName:"p"},"async"),"\xa0functions only if we have to\xa0",Object(l.b)("inlineCode",{parentName:"p"},"await"),"\xa0something inside it.")),Object(l.b)("p",null,"For instance, if we have something like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'// Bad \ud83d\udc4e\nconst foo = async () => "bar";\n\n// Good \ud83d\udc4d\nconst foo = async () => {\n    const url = "some.domain.com";\n    let response = await fetch(url, {\n      method: \'GET\'\n  });\n}\n')),Object(l.b)("p",null,"then we should use a normal function."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Return Awaited Values Consistently"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We should not have\xa0",Object(l.b)("inlineCode",{parentName:"p"},"return"),"\xa0and\xa0",Object(l.b)("inlineCode",{parentName:"p"},"await"),"\xa0on the same line since the promises may not have resolved yet.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Instead, put them on separate lines. The only exception to this is that we can put\xa0",Object(l.b)("inlineCode",{parentName:"p"},"return"),"\xa0and\xa0",Object(l.b)("inlineCode",{parentName:"p"},"await"),"\xa0on the same line inside a\xa0",Object(l.b)("inlineCode",{parentName:"p"},"try"),"\xa0block to catch errors from another promised-based function")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nasync function foo() {\n  return await bar();\n}\n\n// Good \ud83d\udc4d\nasync function foo() {\n  const val = await bar();\n  return val;\n}\n\n// Good \ud83d\udc4d\nasync function foo() {\n  try {\n    return await bar();\n  } catch (error) {}\n}\n")),Object(l.b)("h2",{id:"array"},"Array"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Annotate arrays as ",Object(l.b)("inlineCode",{parentName:"strong"},"foos:Foo[]")," instead of ",Object(l.b)("inlineCode",{parentName:"strong"},"foos:Array<Foo>"),"."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reasons: Its easier to read. Its used by the TypeScript team. Makes easier to know something is an array as the mind is trained to detect [].")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nfoos:Array<Foo>;\n\n// Good \ud83d\udc4d \nfoos:Foo[];\n")),Object(l.b)("h2",{id:"strings"},"Strings"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Prefer single quotes (",Object(l.b)("inlineCode",{parentName:"strong"},"'"),") unless escaping."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: More JavaScript teams do this (e.g. airbnb, standard, npm, node, google/angular, facebook/react). Its easier to type (no shift needed on most keyboards). Prettier team recommends single quotes as well")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Double quotes are not without merit: Allows easier copy paste of objects into JSON. Allows people to use other languages to work without changing their quote character. Allows you to use apostrophes e.g. He's not going.. But I'd rather not deviate from where the JS Community is fairly decided.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// bad \ud83d\udc4e\nvar foo = \"bad\";\n\n// good \ud83d\udc4d\nvar foo = 'bar';\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"When you can't use double quotes, try using back ticks (","`",")."))),Object(l.b)("p",null,"@typescript-eslint/restrict-template-expressions"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: These generally represent the intent of complex enough strings.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// good \ud83d\udc4d\nvar foo = `this foo has a dynamic ${bar}`;\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Have Consistent Use of Backticks, Double Quotes or Single Quotes"))),Object(l.b)("p",null,"We should use backticks or quotes in a consistent manner for declaring strings. Better yet, we should use backticks since they\u2019ll create template strings, which are more flexible. They allow expressions to be embedded in it."),Object(l.b)("h2",{id:"class"},"Class"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"PascalCase")," for class names."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: This is actually fairly conventional in standard JavaScript.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nclass fooBoo { }\n\n// Good \ud83d\udc4d\nclass FooBoo { }\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"camelCase")," of class members and methods"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Naturally follows from variable and function naming convention.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nclass Foo {\n    BarVar: number;\n    BazFunc() { }\n}\n\n// Good \ud83d\udc4d\nclass Foo {\n    barVar: number;\n    bazFunc() { }\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"No Useless Constructors"))),Object(l.b)("p",null,"@typescript-eslint/no-useless-constructor"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We shouldn\u2019t have useless constructors.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nclass A {\n  constructor () {\n  }\n}\n\n// Bad \ud83d\udc4e\nclass B extends A {\n  constructor (value) {\n    super(value);\n  }\n}\n")),Object(l.b)("p",null,"They\u2019re both redundant so they should be removed."),Object(l.b)("h2",{id:"interface"},"Interface"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"U",Object(l.b)("strong",{parentName:"li"},"se ",Object(l.b)("inlineCode",{parentName:"strong"},"PascalCase")," for name."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Similar to class")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\ninterface themeProps {\n    color: string;\n}\n\n// Good \ud83d\udc4d\ninterface ThemeProps {\n    color: string;\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"camelCase")," for members."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Similar to class")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\ninterface ColorProps {\n    FirstColor: string;\n    second-color: string;\n}\n\n// Good \ud83d\udc4d\ninterface ColorProps {\n    firstColor: string;\n    secondColor: string;\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Don't prefix with ",Object(l.b)("inlineCode",{parentName:"strong"},"I")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Unconventional. lib.d.ts defines important interfaces without an I (e.g. Window, Document etc).")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\ninterface IFoo {\n}\n\n// Good \ud83d\udc4d\ninterface Foo {\n}\n")),Object(l.b)("h2",{id:"type"},"Type"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"PascalCase")," for name."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Similar to class")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\ntype infoBaseProps = 'htmlFor' | 'className' | 'children' | 'id';\n\n// Good \ud83d\udc4d\ntype InfoBaseProps = 'htmlFor' | 'className' | 'children' | 'id';\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"camelCase")," for members."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Similar to class")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\ntype Animal = {\n  animalrace: string\n}\n\n// Good \ud83d\udc4d\ntype Animal = {\n  animalRace: string\n}\n")),Object(l.b)("h2",{id:"type-vs-interface"},"Type vs. Interface"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"type")," when you ",Object(l.b)("em",{parentName:"strong"},"might")," need a union or intersection:"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Good \ud83d\udc4d\ntype Foo = number | { someProperty: number }\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"interface")," when you want ",Object(l.b)("inlineCode",{parentName:"strong"},"extends")," or ",Object(l.b)("inlineCode",{parentName:"strong"},"implements")," e.g"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Good \ud83d\udc4d\ninterface Foo {\n  foo: string;\n}\n\ninterface FooBar extends Foo {\n  bar: string;\n}\n\nclass X implements FooBar {\n  foo: string;\n  bar: string;\n}\n")),Object(l.b)("h2",{id:"namespace"},"Namespace"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"PascalCase")," for names"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Convention followed by the TypeScript team. Namespaces are effectively just a class with static members. Class names are PascalCase => Namespace names are PascalCase")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nnamespace fooBaz {\n}\n\n// Good \ud83d\udc4d\nnamespace FooBaz {\n}\n")),Object(l.b)("h1",{id:"enum"},"Enum"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"PascalCase")," for enum names"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Similar to Class. Is a Type.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nenum colorOne {\n}\n\n// Good \ud83d\udc4d\nenum ColorOne {\n}\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"PascalCase")," for enum member"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Convention followed by TypeScript team i.e. the language creators e.g SyntaxKind.StringLiteral. Also helps with translation (code generation) of other languages into TypeScript")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nenum Color {\n    redHue\n}\n\n// Good \ud83d\udc4d\nenum Color {\n    RedHue\n}\n")),Object(l.b)("h2",{id:"null-vs-undefined"},"Null vs. Undefined"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Prefer not to use either for explicit unavailability"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: these values are commonly used to keep a consistent structure between values. In TypeScript you use types to denote the structure")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nlet foo = { x:123, y:undefined };\n\n// Good \ud83d\udc4d\nlet foo:{ x:number, y?:number } = { x:123 };\n\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"undefined")," in general (do consider returning an object like ",Object(l.b)("inlineCode",{parentName:"strong"},"{valid:boolean,value?:Foo}")," instead)"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nreturn null;\n\n// Good \ud83d\udc4d\nreturn undefined;\n\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"null")," where its a part of the API or conventional"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: It is conventional in Node.js e.g. error is null for NodeBack style callbacks.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\ncb(undefined)\n\n// Good \ud83d\udc4d\ncb(null)\n\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("em",{parentName:"strong"},"truthy")," check for objects being ",Object(l.b)("inlineCode",{parentName:"strong"},"null")," or ",Object(l.b)("inlineCode",{parentName:"strong"},"undefined")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nif (error === null)\n\n// Good \ud83d\udc4d\nif (error)\n\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use ",Object(l.b)("inlineCode",{parentName:"strong"},"== null")," / ",Object(l.b)("inlineCode",{parentName:"strong"},"!= null")," (not ",Object(l.b)("inlineCode",{parentName:"strong"},"===")," / ",Object(l.b)("inlineCode",{parentName:"strong"},"!=="),") to check for ",Object(l.b)("inlineCode",{parentName:"strong"},"null")," / ",Object(l.b)("inlineCode",{parentName:"strong"},"undefined")," on primitives as it works for both ",Object(l.b)("inlineCode",{parentName:"strong"},"null"),"/",Object(l.b)("inlineCode",{parentName:"strong"},"undefined")," but not other falsy values (like ",Object(l.b)("inlineCode",{parentName:"strong"},"''"),",",Object(l.b)("inlineCode",{parentName:"strong"},"0"),",",Object(l.b)("inlineCode",{parentName:"strong"},"false"),") e.g."))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nif (error !== null) // does not rule out undefined\n\n// Good \ud83d\udc4d\nif (error != null) // rules out both null and undefined\n\n")),Object(l.b)("h2",{id:"tabs-vs-spaces"},"Tabs vs. Spaces"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use tabs over spaces."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reason: Use tabs for indenting your code. With tabs users can choose their desired width. This has positive implications for accessibility and screenreaders, putting people in control of how they want to view the code.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// bad \ud83d\udc4e\nfunction foo() {\n\u2219\u2219let name;\n}\n\n// bad \ud83d\udc4e\nfunction bar() {\n\u2219let name;\n}\n\n// good \ud83d\udc4d\nfunction baz() {\n\u2219 let name;\n}\n")),Object(l.b)("h2",{id:"semicolons"},"Semicolons"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Use semicolons."))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reasons: The usage of semicolons is a core value of our community. Consider the points of the opposition, but be a traditionalist when it comes to abusing error correction mechanisms for cheap syntactic pleasures. Explicit semicolons helps language formatting tools give consistent results. Missing ASI (automatic semicolon insertion) can trip new devs.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nlet x = 5\n\n// Good \ud83d\udc4d\nlet x = 5;\n")),Object(l.b)("p",null,"We should put in semicolons in our code instead of letting the JavaScript interpreter add them for us in unexpected places."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Remove Useless Semicolons"))),Object(l.b)("p",null,"@typescript-eslint/no-extra-semi"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We should remove duplicate semicolons in our code. We only need one semicolon at the end of a statement.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nlet x = 5;;\n\n// Good \ud83d\udc4d\nlet x = 5;\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Require Semicolons Instead of Automatic Semicolon Insertion"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Instead of letting the Javascript interpreter put in semicolons for us, we should put them in ourselves.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// Bad \ud83d\udc4e\nfunction returnObject() {\n    return //<-----semi colon will be inserted causing an error.\n    {\n        key: value\n    };\n}\n\n// Good \ud83d\udc4d\nfunction returnObject() {\n    return {\n        key: value\n    };\n}\n")))}i.isMDXComponent=!0}}]);