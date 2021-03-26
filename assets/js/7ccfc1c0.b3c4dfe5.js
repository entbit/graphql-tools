(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),i=(r(0),r(261)),o={id:"relay-operation-optimizer",title:"Optimizing operations using Relay Compiler",sidebar_label:"Relay Operation Optimizer"},l={unversionedId:"relay-operation-optimizer",id:"relay-operation-optimizer",isDocsHomePage:!1,title:"Optimizing operations using Relay Compiler",description:"@graphql-tools/relay-operation-optimizer is a package for bringing the benefits of Relay Compiler to GraphQL tools. This package is used in flattenGeneratedTypes feature of GraphQL Code Generator.",source:"@site/docs/relay-operation-optimizer.md",slug:"/relay-operation-optimizer",permalink:"/docs/relay-operation-optimizer",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/relay-operation-optimizer.md",version:"current",sidebar_label:"Relay Operation Optimizer",sidebar:"someSidebar",previous:{title:"Extracting GraphQL definitions from code files",permalink:"/docs/graphql-tag-pluck"},next:{title:"Migration to v7",permalink:"/docs/migration-from-tools"}},s=[{value:"Current List of Features",id:"current-list-of-features",children:[]},{value:"Install Instructions",id:"install-instructions",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@graphql-tools/relay-operation-optimizer")," is a package for bringing the benefits of Relay Compiler to GraphQL tools. This package is used in ",Object(i.b)("a",{parentName:"p",href:"https://graphql-code-generator.com/docs/plugins/relay-operation-optimizer"},Object(i.b)("inlineCode",{parentName:"a"},"flattenGeneratedTypes")," feature of GraphQL Code Generator"),"."),Object(i.b)("p",null,"This package has been created by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/n1ru4l"},"Laurin Quast (n1ru4l)")," as ",Object(i.b)("a",{parentName:"p",href:"https://github.com/n1ru4l/graphql-codegen-relay-plugins"},"a GraphQL Code Generator plugin"),"."),Object(i.b)("h3",{id:"current-list-of-features"},"Current List of Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://relay.dev/docs/en/compiler-architecture#transforms"},"Optimize Queries")," TL;DR: reduce query size",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Inline Fragments"),Object(i.b)("li",{parentName:"ul"},"Flatten Transform"),Object(i.b)("li",{parentName:"ul"},"Skip Redundant Node Transform"))),Object(i.b)("li",{parentName:"ul"},"FragmentArguments",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://relay.dev/docs/en/graphql-in-relay#argumentdefinitions"},Object(i.b)("inlineCode",{parentName:"a"},"@argumentsDefinition"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://relay.dev/docs/en/graphql-in-relay#arguments"},Object(i.b)("inlineCode",{parentName:"a"},"@arguments")))))),Object(i.b)("h2",{id:"install-instructions"},"Install Instructions"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn add -D -E @graphql-tools/relay-operation-optimizer")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Taken from the blog post ",Object(i.b)("a",{parentName:"p",href:"https://the-guild.dev/blog/graphql-codegen-relay-compiler"},"Optimizing your Apollo Operations with GraphQL Code Generator and the Relay Compiler"),".")),Object(i.b)("p",null,"Let\u2019s take a look at the following Fragment:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"fragment UserAvatar on User {\n  id\n  avatar(width: 10, height: 10) {\n    id\n    url\n  }\n}\n")),Object(i.b)("p",null,"How would you reuse this fragment with different values for the ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," arguments?"),Object(i.b)("p",null,"Previously there have been two ways:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1. Write a new fragment with different parameters")),Object(i.b)("p",null,"Well, just creating a new document for our avatar won\u2019t really solve the reusability issue."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. Use variables and rely on the query to have those defined")),Object(i.b)("p",null,"Actually, you can already use variables inside fragments. We just need to ensure that the query that uses the fragment also has those variables in the variable definition."),Object(i.b)("p",null,"Fragment Definition:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"fragment UserAvatar on User {\n  id\n  avatar(width: $width, height: $height) {\n    id\n    url\n  }\n}\n")),Object(i.b)("p",null,"Query Definition:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query ProfileQuery($width: Int!, $height: Int!) {\n  me {\n    ...UserAvatar\n  }\n}\n")),Object(i.b)("p",null,"However, we now rely on having those parameters provided in each query that uses that fragment."),Object(i.b)("p",null,"This does not really make the fragment reusable. Imagine having a profile query of a with a friend list. The profile picture should be bigger than the ones of the friends."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query ProfileQuery($width: Int!, $height: Int!) {\n  me {\n    id\n    ...UserAvatar\n    friends(first: 10) {\n      id\n      ...UserAvatar\n    }\n  }\n}\n")),Object(i.b)("p",null,"It is basically impossible to use a different width and height for the second usage of the fragment in that query."),Object(i.b)("p",null,"Furthermore, when using different fragments you have to be really careful with your variable names, because of variable name clashes."),Object(i.b)("p",null,"Given those limitations, it is pretty obvious that this \u201csolution\u201d does not scale well."),Object(i.b)("p",null,"Relay simply uses custom GraphQL directives to address this issue."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Defining Fragment Variables with ",Object(i.b)("inlineCode",{parentName:"strong"},"@argumentDefinitions"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"fragment UserAvatar on User @argumentDefinitions(\n  width: { type: \u201cInt\u201d, defaultValue: 10 },\n  height: { type: \u201cInt\u201d, defaultValue: 10 }\n) {\n  id\n  avatar(width: $width, height: $height) {\n    id\n    url\n  }\n}\n")),Object(i.b)("p",null,"Providing Fragment Variables with ",Object(i.b)("inlineCode",{parentName:"p"},"@arguments")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query ProfileQuery {\n  me {\n    id\n    ...UserAvatar @arguments(height: 20, width: 20)\n    friends(first: 10) {\n      id\n      ...UserAvatar # fallback to defaultValue here\n    }\n  }\n}\n")),Object(i.b)("p",null,"Pretty powerful, right?"),Object(i.b)("p",null,"Unfortunately, you cannot simply use those fragments with your existing GraphQL Server. ",Object(i.b)("inlineCode",{parentName:"p"},"@argumentDefinitions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@arguments")," are some custom directives that need to be understood by the server in order to process them."),Object(i.b)("p",null,"However, instead of implementing those directives on the serverside Relay went another route. The ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," removes those directives at build time. That means after our query has been processed it looks something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query ProfileQuery {\n  me {\n    id\n    ... on User {\n      id\n      avatar(width: 20, height: 20) {\n        id\n        url\n      }\n    }\n    friends(first: 10) {\n      id\n      ... on User {\n        id\n        avatar(width: 10, height: 10) {\n          id\n          url\n        }\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"Pretty neat. This allows the query the be accepted by every GraphQL server (that, of course, provides the correct schema), without relying on those custom directives."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The ",Object(i.b)("inlineCode",{parentName:"strong"},"relay-compiler")," is awesome!")),Object(i.b)("p",null,"It comes with a lot more transforms. Some of those are specific to the ",Object(i.b)("inlineCode",{parentName:"p"},"relay-runtime")," (which as the name says is executed in the browser of the user like react-apollo), but others are definitely also beneficial to non-relay users."),Object(i.b)("p",null,"Besides the so-called ",Object(i.b)("inlineCode",{parentName:"p"},"RelayApplyFragmentArgumentTransform")," there is a bunch of more useful stuff."),Object(i.b)("p",null,"E.g. the ",Object(i.b)("inlineCode",{parentName:"p"},"FlattenTransform")," can improve our query even more:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query ProfileQuery {\n  me {\n    id\n    avatar(width: 20, height: 20) {\n      id\n      url\n    }\n    friends(first: 10) {\n      id\n      avatar(width: 10, height: 10) {\n        id\n        url\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/n1ru4l"},"Laurin Quast")," also built a ",Object(i.b)("a",{parentName:"p",href:"https://relay-compiler-repl.netlify.com/"},"relay-compiler REPL")," (use it for convincing your team \ud83d\ude09)."),Object(i.b)("p",null,"Of course, you can also read more about those in the ",Object(i.b)("a",{parentName:"p",href:"https://relay.dev/docs/en/compiler-architecture#transforms"},"Official Relay Documentation"),"."),Object(i.b)("p",null,"Especially on big queries, that utilize many fragments, those transforms can drastically reduce the query payload size, resulting in faster response times. For developers that cannot use persisted queries (because they do not own the server), this is a must-have!"))}c.isMDXComponent=!0},261:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(o,".").concat(h)]||u[h]||b[h]||i;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);