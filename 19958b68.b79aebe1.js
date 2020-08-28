(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),o=(t(0),t(90)),i={id:"react",title:"React Style Guide",sidebar_label:"React"},l={unversionedId:"react",id:"react",isDocsHomePage:!1,title:"React Style Guide",description:"W.W. Norton & Company recommends using the Airbnb React/JSX style guide.",source:"@site/docs/react-style.md",permalink:"/style/docs/react",editUrl:"https://github.com/wwnorton/style/edit/docs-docusaurus/guides-website/docs/react-style.md",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1598655076,sidebar_label:"React",sidebar:"docs",previous:{title:"Javascript Style Guide",permalink:"/style/docs/javascript"},next:{title:"Typescript Style Guide",permalink:"/style/docs/typescript"}},b=[{value:"Basic Rules",id:"basic-rules",children:[]},{value:"Class vs <code>React.createClass</code> vs stateless",id:"class-vs-reactcreateclass-vs-stateless",children:[]},{value:"Mixins",id:"mixins",children:[]},{value:"Naming",id:"naming",children:[]},{value:"Declaration",id:"declaration",children:[]},{value:"Alignment",id:"alignment",children:[]},{value:"Quotes",id:"quotes",children:[]},{value:"Spacing",id:"spacing",children:[]},{value:"Props",id:"props",children:[]},{value:"Refs",id:"refs",children:[]},{value:"Parentheses",id:"parentheses",children:[]},{value:"Tags",id:"tags",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Ordering",id:"ordering",children:[]},{value:"<code>isMounted</code>",id:"ismounted",children:[]}],c={rightToc:b};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"W.W. Norton & Company recommends using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/airbnb/javascript/tree/master/react"}),"Airbnb React/JSX style guide"),".")),Object(o.b)("p",null,"This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide."),Object(o.b)("h2",{id:"basic-rules"},"Basic Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Only include one React component per file.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"However, multiple ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/react/docs/reusable-components.html#stateless-functions"}),"Stateless, or Pure, Components")," are allowed per file. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless"}),Object(o.b)("inlineCode",{parentName:"a"},"react/no-multi-comp")),"."))),Object(o.b)("li",{parentName:"ul"},"Always use JSX syntax."),Object(o.b)("li",{parentName:"ul"},"Do not use ",Object(o.b)("inlineCode",{parentName:"li"},"React.createElement")," unless you\u2019re initializing the app from a file that is not JSX."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/forbid-prop-types"))," will allow ",Object(o.b)("inlineCode",{parentName:"li"},"arrays")," and ",Object(o.b)("inlineCode",{parentName:"li"},"objects")," only if it is explicitly noted what ",Object(o.b)("inlineCode",{parentName:"li"},"array")," and ",Object(o.b)("inlineCode",{parentName:"li"},"object")," contains, using ",Object(o.b)("inlineCode",{parentName:"li"},"arrayOf"),", ",Object(o.b)("inlineCode",{parentName:"li"},"objectOf"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"shape"),".")),Object(o.b)("h2",{id:"class-vs-reactcreateclass-vs-stateless"},"Class vs ",Object(o.b)("inlineCode",{parentName:"h2"},"React.createClass")," vs stateless"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you have internal state and/or refs, prefer ",Object(o.b)("inlineCode",{parentName:"p"},"class extends React.Component")," over ",Object(o.b)("inlineCode",{parentName:"p"},"React.createClass"),". eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/prefer-es6-class"))," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/prefer-stateless-function"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nconst Listing = React.createClass({\n  // ...\n  render() {\n    return <div>{this.state.hello}</div>;\n  }\n});\n\n// good\nclass Listing extends React.Component {\n  // ...\n  render() {\n    return <div>{this.state.hello}</div>;\n  }\n}\n")),Object(o.b)("p",{parentName:"li"},"And if you don\u2019t have state or refs, prefer normal functions (not arrow functions) over classes:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nclass Listing extends React.Component {\n  render() {\n    return <div>{this.props.hello}</div>;\n  }\n}\n\n// bad (relying on function name inference is discouraged)\nconst Listing = ({ hello }) => (\n  <div>{hello}</div>\n);\n\n// good\nfunction Listing({ hello }) {\n  return <div>{hello}</div>;\n}\n")))),Object(o.b)("h2",{id:"mixins"},"Mixins"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html"}),"Do not use mixins"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.")))),Object(o.b)("h2",{id:"naming"},"Naming"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Extensions"),": Use ",Object(o.b)("inlineCode",{parentName:"p"},".jsx")," extension for React components. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-filename-extension")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Filename"),": Use PascalCase for filenames. E.g., ",Object(o.b)("inlineCode",{parentName:"p"},"ReservationCard.jsx"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Reference Naming"),": Use PascalCase for React components and camelCase for their instances. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-pascal-case"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nimport reservationCard from './ReservationCard';\n\n// good\nimport ReservationCard from './ReservationCard';\n\n// bad\nconst ReservationItem = <ReservationCard />;\n\n// good\nconst reservationItem = <ReservationCard />;\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Component Naming"),": Use the filename as the component name. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"ReservationCard.jsx")," should have a reference name of ",Object(o.b)("inlineCode",{parentName:"p"},"ReservationCard"),". However, for root components of a directory, use ",Object(o.b)("inlineCode",{parentName:"p"},"index.jsx")," as the filename and use the directory name as the component name:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nimport Footer from './Footer/Footer';\n\n// bad\nimport Footer from './Footer/index';\n\n// good\nimport Footer from './Footer';\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Higher-order Component Naming"),": Use a composite of the higher-order component\u2019s name and the passed-in component\u2019s name as the ",Object(o.b)("inlineCode",{parentName:"p"},"displayName")," on the generated component. For example, the higher-order component ",Object(o.b)("inlineCode",{parentName:"p"},"withFoo()"),", when passed a component ",Object(o.b)("inlineCode",{parentName:"p"},"Bar")," should produce a component with a ",Object(o.b)("inlineCode",{parentName:"p"},"displayName")," of ",Object(o.b)("inlineCode",{parentName:"p"},"withFoo(Bar)"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? A component\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"displayName")," may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nexport default function withFoo(WrappedComponent) {\n  return function WithFoo(props) {\n    return <WrappedComponent {...props} foo />;\n  }\n}\n\n// good\nexport default function withFoo(WrappedComponent) {\n  function WithFoo(props) {\n    return <WrappedComponent {...props} foo />;\n  }\n\n  const wrappedComponentName = WrappedComponent.displayName\n    || WrappedComponent.name\n    || 'Component';\n\n  WithFoo.displayName = `withFoo(${wrappedComponentName})`;\n  return WithFoo;\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Props Naming"),": Avoid using DOM component prop names for different purposes."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? People expect props like ",Object(o.b)("inlineCode",{parentName:"p"},"style")," and ",Object(o.b)("inlineCode",{parentName:"p"},"className")," to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<MyComponent style="fancy" />\n\n// bad\n<MyComponent className="fancy" />\n\n// good\n<MyComponent variant="fancy" />\n')))),Object(o.b)("h2",{id:"declaration"},"Declaration"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Do not use ",Object(o.b)("inlineCode",{parentName:"p"},"displayName")," for naming components. Instead, name the component by reference."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nexport default React.createClass({\n  displayName: 'ReservationCard',\n  // stuff goes here\n});\n\n// good\nexport default class ReservationCard extends React.Component {\n}\n")))),Object(o.b)("h2",{id:"alignment"},"Alignment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Follow these alignment styles for JSX syntax. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-closing-bracket-location"))," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-closing-tag-location"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<Foo superLongParam="bar"\n     anotherSuperLongParam="baz" />\n\n// good\n<Foo\n  superLongParam="bar"\n  anotherSuperLongParam="baz"\n/>\n\n// if props fit in one line then keep it on the same line\n<Foo bar="bar" />\n\n// children get indented normally\n<Foo\n  superLongParam="bar"\n  anotherSuperLongParam="baz"\n>\n  <Quux />\n</Foo>\n\n// bad\n{showButton &&\n  <Button />\n}\n\n// bad\n{\n  showButton &&\n    <Button />\n}\n\n// good\n{showButton && (\n  <Button />\n)}\n\n// good\n{showButton && <Button />}\n')))),Object(o.b)("h2",{id:"quotes"},"Quotes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always use double quotes (",Object(o.b)("inlineCode",{parentName:"p"},'"'),") for JSX attributes, but single quotes (",Object(o.b)("inlineCode",{parentName:"p"},"'"),") for all other JS. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/rules/jsx-quotes"}),Object(o.b)("inlineCode",{parentName:"a"},"jsx-quotes"))),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\n<Foo bar='bar' />\n\n// good\n<Foo bar=\"bar\" />\n\n// bad\n<Foo style={{ left: \"20px\" }} />\n\n// good\n<Foo style={{ left: '20px' }} />\n")))),Object(o.b)("h2",{id:"spacing"},"Spacing"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always include a single space in your self-closing tag. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/rules/no-multi-spaces"}),Object(o.b)("inlineCode",{parentName:"a"},"no-multi-spaces")),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-tag-spacing"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\n<Foo/>\n\n// very bad\n<Foo                 />\n\n// bad\n<Foo\n />\n\n// good\n<Foo />\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Do not pad JSX curly braces with spaces. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-curly-spacing"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\n<Foo bar={ baz } />\n\n// good\n<Foo bar={baz} />\n")))),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always use camelCase for prop names."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<Foo\n  UserName="hello"\n  phone_number={12345678}\n/>\n\n// good\n<Foo\n  userName="hello"\n  phoneNumber={12345678}\n/>\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Omit the value of the prop when it is explicitly ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-boolean-value"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\n<Foo\n  hidden={true}\n/>\n\n// good\n<Foo\n  hidden\n/>\n\n// good\n<Foo hidden />\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always include an ",Object(o.b)("inlineCode",{parentName:"p"},"alt")," prop on ",Object(o.b)("inlineCode",{parentName:"p"},"<img>")," tags. If the image is presentational, ",Object(o.b)("inlineCode",{parentName:"p"},"alt")," can be an empty string or the ",Object(o.b)("inlineCode",{parentName:"p"},"<img>")," must have ",Object(o.b)("inlineCode",{parentName:"p"},'role="presentation"'),". eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md"}),Object(o.b)("inlineCode",{parentName:"a"},"jsx-a11y/alt-text"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<img src="hello.jpg" />\n\n// good\n<img src="hello.jpg" alt="Me waving hello" />\n\n// good\n<img src="hello.jpg" alt="" />\n\n// good\n<img src="hello.jpg" role="presentation" />\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Do not use words like "image", "photo", or "picture" in ',Object(o.b)("inlineCode",{parentName:"p"},"<img>")," ",Object(o.b)("inlineCode",{parentName:"p"},"alt")," props. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md"}),Object(o.b)("inlineCode",{parentName:"a"},"jsx-a11y/img-redundant-alt"))),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? Screenreaders already announce ",Object(o.b)("inlineCode",{parentName:"p"},"img")," elements as images, so there is no need to include this information in the alt text.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<img src="hello.jpg" alt="Picture of me waving hello" />\n\n// good\n<img src="hello.jpg" alt="Me waving hello" />\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use only valid, non-abstract ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria/#usage_intro"}),"ARIA roles"),". eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md"}),Object(o.b)("inlineCode",{parentName:"a"},"jsx-a11y/aria-role"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad - not an ARIA role\n<div role="datepicker" />\n\n// bad - abstract ARIA role\n<div role="range" />\n\n// good\n<div role="button" />\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Do not use ",Object(o.b)("inlineCode",{parentName:"p"},"accessKey")," on elements. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md"}),Object(o.b)("inlineCode",{parentName:"a"},"jsx-a11y/no-access-key"))),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<div accessKey="h" />\n\n// good\n<div />\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Avoid using an array index as ",Object(o.b)("inlineCode",{parentName:"p"},"key")," prop, prefer a stable ID. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/no-array-index-key"))))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Why? Not using a stable ID ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318"}),"is an anti-pattern")," because it can negatively impact performance and cause issues with component state.")),Object(o.b)("p",null,"We don\u2019t recommend using indexes for keys if the order of items may change."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\n{todos.map((todo, index) =>\n  <Todo\n    {...todo}\n    key={index}\n  />\n)}\n\n// good\n{todos.map(todo => (\n  <Todo\n    {...todo}\n    key={todo.id}\n  />\n))}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always define explicit defaultProps for all non-required props."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? propTypes are a form of documentation, and providing defaultProps means the reader of your code doesn\u2019t have to assume as much. In addition, it can mean that your code can omit certain type checks.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nfunction SFC({ foo, bar, children }) {\n  return <div>{foo}{bar}{children}</div>;\n}\nSFC.propTypes = {\n  foo: PropTypes.number.isRequired,\n  bar: PropTypes.string,\n  children: PropTypes.node,\n};\n\n// good\nfunction SFC({ foo, bar, children }) {\n  return <div>{foo}{bar}{children}</div>;\n}\nSFC.propTypes = {\n  foo: PropTypes.number.isRequired,\n  bar: PropTypes.string,\n  children: PropTypes.node,\n};\nSFC.defaultProps = {\n  bar: '',\n  children: null,\n};\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use spread props sparingly."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? Otherwise you\u2019re more likely to pass unnecessary props down to components. And for React v15.6.1 and older, you could ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html"}),"pass invalid HTML attributes to the DOM"),".")),Object(o.b)("p",{parentName:"li"},"Exceptions:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"HOCs that proxy down props and hoist propTypes"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function HOC(WrappedComponent) {\n  return class Proxy extends React.Component {\n    Proxy.propTypes = {\n      text: PropTypes.string,\n      isLoading: PropTypes.bool\n    };\n\n    render() {\n      return <WrappedComponent {...this.props} />\n    }\n  }\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha\u2019s beforeEach construct."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export default function Foo {\n  const props = {\n    text: '',\n    isPublished: false\n  }\n\n  return (<div {...props} />);\n}\n")),Object(o.b)("p",{parentName:"li"},"Notes for use:\nFilter out unnecessary props when possible. Also, use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/prop-types-exact"}),"prop-types-exact")," to help prevent bugs."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nrender() {\n  const { irrelevantProp, ...relevantProps } = this.props;\n  return <WrappedComponent {...this.props} />\n}\n\n// good\nrender() {\n  const { irrelevantProp, ...relevantProps } = this.props;\n  return <WrappedComponent {...relevantProps} />\n}\n")))),Object(o.b)("h2",{id:"refs"},"Refs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always use ref callbacks. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/no-string-refs"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<Foo\n  ref="myRef"\n/>\n\n// good\n<Foo\n  ref={(ref) => { this.myRef = ref; }}\n/>\n')))),Object(o.b)("h2",{id:"parentheses"},"Parentheses"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Wrap JSX tags in parentheses when they span more than one line. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-wrap-multilines"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\nrender() {\n  return <MyComponent variant="long body" foo="bar">\n           <MyChild />\n         </MyComponent>;\n}\n\n// good\nrender() {\n  return (\n    <MyComponent variant="long body" foo="bar">\n      <MyChild />\n    </MyComponent>\n  );\n}\n\n// good, when single line\nrender() {\n  const body = <div>hello</div>;\n  return <MyComponent>{body}</MyComponent>;\n}\n')))),Object(o.b)("h2",{id:"tags"},"Tags"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always self-close tags that have no children. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/self-closing-comp"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<Foo variant="stuff"></Foo>\n\n// good\n<Foo variant="stuff" />\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If your component has multiline properties, close its tag on a new line. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-closing-bracket-location"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// bad\n<Foo\n  bar="bar"\n  baz="baz" />\n\n// good\n<Foo\n  bar="bar"\n  baz="baz"\n/>\n')))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/"}),"do not massively hurt performance"),", in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function ItemList(props) {\n  return (\n    <ul>\n      {props.items.map((item, index) => (\n        <Item\n          key={item.key}\n          onClick={(event) => { doSomethingWith(event, item.name, index); }}\n        />\n      ))}\n    </ul>\n  );\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Bind event handlers for the render method in the constructor. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/jsx-no-bind"))),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? A bind call in the render path creates a brand new function on every single render. Do not use arrow functions in class fields, because it makes them ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1"}),"challenging to test and debug, and can negatively impact performance"),", and because conceptually, class fields are for data, not logic.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nclass extends React.Component {\n  onClickDiv() {\n    // do stuff\n  }\n\n  render() {\n    return <div onClick={this.onClickDiv.bind(this)} />;\n  }\n}\n\n// very bad\nclass extends React.Component {\n  onClickDiv = () => {\n    // do stuff\n  }\n\n  render() {\n    return <div onClick={this.onClickDiv} />\n  }\n}\n\n// good\nclass extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.onClickDiv = this.onClickDiv.bind(this);\n  }\n\n  onClickDiv() {\n    // do stuff\n  }\n\n  render() {\n    return <div onClick={this.onClickDiv} />;\n  }\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Do not use underscore prefix for internal methods of a React component."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/airbnb/javascript/issues/1024"}),"#1024"),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/airbnb/javascript/issues/490"}),"#490")," for a more in-depth discussion.")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nReact.createClass({\n  _onClickSubmit() {\n    // do stuff\n  },\n\n  // other stuff\n});\n\n// good\nclass extends React.Component {\n  onClickSubmit() {\n    // do stuff\n  }\n\n  // other stuff\n}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Be sure to return a value in your ",Object(o.b)("inlineCode",{parentName:"p"},"render")," methods. eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/require-render-return"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// bad\nrender() {\n  (<div />);\n}\n\n// good\nrender() {\n  return (<div />);\n}\n")))),Object(o.b)("h2",{id:"ordering"},"Ordering"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ordering for ",Object(o.b)("inlineCode",{parentName:"li"},"class extends React.Component"),":")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"optional ",Object(o.b)("inlineCode",{parentName:"li"},"static")," methods"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"constructor")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"getChildContext")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillMount")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentDidMount")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillReceiveProps")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"shouldComponentUpdate")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillUpdate")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentDidUpdate")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillUnmount")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"clickHandlers or eventHandlers")," like ",Object(o.b)("inlineCode",{parentName:"li"},"onClickSubmit()")," or ",Object(o.b)("inlineCode",{parentName:"li"},"onChangeDescription()")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"getter methods for ",Object(o.b)("inlineCode",{parentName:"em"},"render"))," like ",Object(o.b)("inlineCode",{parentName:"li"},"getSelectReason()")," or ",Object(o.b)("inlineCode",{parentName:"li"},"getFooterContent()")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"optional render methods")," like ",Object(o.b)("inlineCode",{parentName:"li"},"renderNavigation()")," or ",Object(o.b)("inlineCode",{parentName:"li"},"renderProfilePicture()")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"render"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"How to define ",Object(o.b)("inlineCode",{parentName:"p"},"propTypes"),", ",Object(o.b)("inlineCode",{parentName:"p"},"defaultProps"),", ",Object(o.b)("inlineCode",{parentName:"p"},"contextTypes"),", etc..."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst propTypes = {\n  id: PropTypes.number.isRequired,\n  url: PropTypes.string.isRequired,\n  text: PropTypes.string,\n};\n\nconst defaultProps = {\n  text: 'Hello World',\n};\n\nclass Link extends React.Component {\n  static methodsAreOk() {\n    return true;\n  }\n\n  render() {\n    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;\n  }\n}\n\nLink.propTypes = propTypes;\nLink.defaultProps = defaultProps;\n\nexport default Link;\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ordering for ",Object(o.b)("inlineCode",{parentName:"p"},"React.createClass"),": eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/sort-comp"))))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"displayName")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"propTypes")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"contextTypes")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"childContextTypes")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"mixins")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"statics")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"defaultProps")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"getDefaultProps")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"getInitialState")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"getChildContext")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillMount")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentDidMount")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillReceiveProps")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"shouldComponentUpdate")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillUpdate")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentDidUpdate")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"componentWillUnmount")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"clickHandlers or eventHandlers")," like ",Object(o.b)("inlineCode",{parentName:"li"},"onClickSubmit()")," or ",Object(o.b)("inlineCode",{parentName:"li"},"onChangeDescription()")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"getter methods for ",Object(o.b)("inlineCode",{parentName:"em"},"render"))," like ",Object(o.b)("inlineCode",{parentName:"li"},"getSelectReason()")," or ",Object(o.b)("inlineCode",{parentName:"li"},"getFooterContent()")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"optional render methods")," like ",Object(o.b)("inlineCode",{parentName:"li"},"renderNavigation()")," or ",Object(o.b)("inlineCode",{parentName:"li"},"renderProfilePicture()")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"render"))),Object(o.b)("h2",{id:"ismounted"},Object(o.b)("inlineCode",{parentName:"h2"},"isMounted")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Do not use ",Object(o.b)("inlineCode",{parentName:"p"},"isMounted"),". eslint: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md"}),Object(o.b)("inlineCode",{parentName:"a"},"react/no-is-mounted"))),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Why? ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html"}),Object(o.b)("inlineCode",{parentName:"a"},"isMounted")," is an anti-pattern"),", is not available when using ES6 classes, and is on its way to being officially deprecated.")))))}s.isMDXComponent=!0}}]);