(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=o(a),s=n,g=m["".concat(l,".").concat(s)]||m[s]||d[s]||p;return a?r.a.createElement(g,b(b({ref:t},i),{},{components:a})):r.a.createElement(g,b({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<p;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),p=(a(0),a(261)),l={id:"graphql-tag-pluck",title:"@graphql-tools/graphql-tag-pluck",sidebar_label:"graphql-tag-pluck"},b={unversionedId:"api/modules/graphql-tag-pluck",id:"api/modules/graphql-tag-pluck",isDocsHomePage:!1,title:"@graphql-tools/graphql-tag-pluck",description:"- GraphQLTagPluckOptions",source:"@site/docs/api/modules/graphql_tag_pluck_src.md",slug:"/api/modules/graphql-tag-pluck",permalink:"/docs/api/modules/graphql-tag-pluck",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/graphql_tag_pluck_src.md",version:"current",sidebar_label:"graphql-tag-pluck",sidebar:"someSidebar",previous:{title:"@graphql-tools/delegate",permalink:"/docs/api/modules/delegate"},next:{title:"@graphql-tools/import",permalink:"/docs/api/modules/import"}},c=[{value:"Functions",id:"functions",children:[]},{value:"Functions",id:"functions-1",children:[{value:"gqlPluckFromCodeString",id:"gqlpluckfromcodestring",children:[]},{value:"gqlPluckFromCodeStringSync",id:"gqlpluckfromcodestringsync",children:[]},{value:"parseCode",id:"parsecode",children:[]}]}],i={toc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},"GraphQLTagPluckOptions"))),Object(p.b)("h3",{id:"functions"},"Functions"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/docs/api/modules/graphql-tag-pluck#gqlpluckfromcodestring"},"gqlPluckFromCodeString")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/docs/api/modules/graphql-tag-pluck#gqlpluckfromcodestringsync"},"gqlPluckFromCodeStringSync")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/docs/api/modules/graphql-tag-pluck#parsecode"},"parseCode"))),Object(p.b)("h2",{id:"functions-1"},"Functions"),Object(p.b)("h3",{id:"gqlpluckfromcodestring"},"gqlPluckFromCodeString"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("inlineCode",{parentName:"p"},"Const"),Object(p.b)("strong",{parentName:"p"},"gqlPluckFromCodeString"),"(",Object(p.b)("inlineCode",{parentName:"p"},"filePath"),": ",Object(p.b)("em",{parentName:"p"},"string"),", ",Object(p.b)("inlineCode",{parentName:"p"},"code"),": ",Object(p.b)("em",{parentName:"p"},"string"),", ",Object(p.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(p.b)("a",{parentName:"p",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},Object(p.b)("em",{parentName:"a"},"GraphQLTagPluckOptions")),"): ",Object(p.b)("em",{parentName:"p"},"Promise"),"<","string\\",">"),Object(p.b)("p",null,"Asynchronously plucks GraphQL template literals from a single file."),Object(p.b)("p",null,"Supported file extensions include: ",Object(p.b)("inlineCode",{parentName:"p"},".js"),", ",Object(p.b)("inlineCode",{parentName:"p"},".jsx"),", ",Object(p.b)("inlineCode",{parentName:"p"},".ts"),", ",Object(p.b)("inlineCode",{parentName:"p"},".tsx"),", ",Object(p.b)("inlineCode",{parentName:"p"},".flow"),", ",Object(p.b)("inlineCode",{parentName:"p"},".flow.js"),", ",Object(p.b)("inlineCode",{parentName:"p"},".flow.jsx"),", ",Object(p.b)("inlineCode",{parentName:"p"},".vue")),Object(p.b)("h4",{id:"parameters"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:"left"},"Name"),Object(p.b)("th",{parentName:"tr",align:"left"},"Type"),Object(p.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"filePath")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("em",{parentName:"td"},"string")),Object(p.b)("td",{parentName:"tr",align:"left"},"Path to the file containing the code. Required to detect the file type")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"code")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("em",{parentName:"td"},"string")),Object(p.b)("td",{parentName:"tr",align:"left"},"The contents of the file being parsed.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"options")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("a",{parentName:"td",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},Object(p.b)("em",{parentName:"a"},"GraphQLTagPluckOptions"))),Object(p.b)("td",{parentName:"tr",align:"left"},"Additional options for determining how a file is parsed.")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," ",Object(p.b)("em",{parentName:"p"},"Promise"),"<","string\\",">"),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/graphql-tag-pluck/src/index.ts#L127"},"packages/graphql-tag-pluck/src/index.ts:127")),Object(p.b)("hr",null),Object(p.b)("h3",{id:"gqlpluckfromcodestringsync"},"gqlPluckFromCodeStringSync"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("inlineCode",{parentName:"p"},"Const"),Object(p.b)("strong",{parentName:"p"},"gqlPluckFromCodeStringSync"),"(",Object(p.b)("inlineCode",{parentName:"p"},"filePath"),": ",Object(p.b)("em",{parentName:"p"},"string"),", ",Object(p.b)("inlineCode",{parentName:"p"},"code"),": ",Object(p.b)("em",{parentName:"p"},"string"),", ",Object(p.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(p.b)("a",{parentName:"p",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},Object(p.b)("em",{parentName:"a"},"GraphQLTagPluckOptions")),"): ",Object(p.b)("em",{parentName:"p"},"string")),Object(p.b)("p",null,"Synchronously plucks GraphQL template literals from a single file"),Object(p.b)("p",null,"Supported file extensions include: ",Object(p.b)("inlineCode",{parentName:"p"},".js"),", ",Object(p.b)("inlineCode",{parentName:"p"},".jsx"),", ",Object(p.b)("inlineCode",{parentName:"p"},".ts"),", ",Object(p.b)("inlineCode",{parentName:"p"},".tsx"),", ",Object(p.b)("inlineCode",{parentName:"p"},".flow"),", ",Object(p.b)("inlineCode",{parentName:"p"},".flow.js"),", ",Object(p.b)("inlineCode",{parentName:"p"},".flow.jsx"),", ",Object(p.b)("inlineCode",{parentName:"p"},".vue")),Object(p.b)("h4",{id:"parameters-1"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:"left"},"Name"),Object(p.b)("th",{parentName:"tr",align:"left"},"Type"),Object(p.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"filePath")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("em",{parentName:"td"},"string")),Object(p.b)("td",{parentName:"tr",align:"left"},"Path to the file containing the code. Required to detect the file type")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"code")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("em",{parentName:"td"},"string")),Object(p.b)("td",{parentName:"tr",align:"left"},"The contents of the file being parsed.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"options")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("a",{parentName:"td",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},Object(p.b)("em",{parentName:"a"},"GraphQLTagPluckOptions"))),Object(p.b)("td",{parentName:"tr",align:"left"},"Additional options for determining how a file is parsed.")))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," ",Object(p.b)("em",{parentName:"p"},"string")),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/graphql-tag-pluck/src/index.ts#L154"},"packages/graphql-tag-pluck/src/index.ts:154")),Object(p.b)("hr",null),Object(p.b)("h3",{id:"parsecode"},"parseCode"),Object(p.b)("p",null,"\u25b8 ",Object(p.b)("strong",{parentName:"p"},"parseCode"),"(",Object(p.b)("inlineCode",{parentName:"p"},"__namedParameters"),": { ",Object(p.b)("inlineCode",{parentName:"p"},"code"),": ",Object(p.b)("em",{parentName:"p"},"string")," ; ",Object(p.b)("inlineCode",{parentName:"p"},"filePath"),": ",Object(p.b)("em",{parentName:"p"},"string")," ; ",Object(p.b)("inlineCode",{parentName:"p"},"options"),": ",Object(p.b)("a",{parentName:"p",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},Object(p.b)("em",{parentName:"a"},"GraphQLTagPluckOptions")),"  }): PluckedContent[]"),Object(p.b)("h4",{id:"parameters-2"},"Parameters:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:"left"},"Name"),Object(p.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"__namedParameters")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("em",{parentName:"td"},"object"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"__namedParameters.code")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("em",{parentName:"td"},"string"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"__namedParameters.filePath")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("em",{parentName:"td"},"string"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("inlineCode",{parentName:"td"},"__namedParameters.options")),Object(p.b)("td",{parentName:"tr",align:"left"},Object(p.b)("a",{parentName:"td",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},Object(p.b)("em",{parentName:"a"},"GraphQLTagPluckOptions")))))),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Returns:")," PluckedContent[]"),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/graphql-tag-pluck/src/index.ts#L172"},"packages/graphql-tag-pluck/src/index.ts:172")))}o.isMDXComponent=!0}}]);