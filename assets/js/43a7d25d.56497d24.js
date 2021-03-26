(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{119:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return d}));var t=a(3),o=a(7),r=(a(0),a(261)),l={id:"loaders",title:"Loaders",sidebar_label:"Loaders"},c={unversionedId:"loaders",id:"loaders",isDocsHomePage:!1,title:"Loaders",description:"There are a lot of loaders that load your schemas and documents from different sources. You need to provide those loaders under loaders parameter like below;",source:"@site/docs/loaders.md",slug:"/loaders",permalink:"/docs/loaders",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/loaders.md",version:"current",sidebar_label:"Loaders"},s=[{value:"GraphQL File Loader",id:"graphql-file-loader",children:[]},{value:"JSON File Loader",id:"json-file-loader",children:[]},{value:"Code File Loader",id:"code-file-loader",children:[]},{value:"URL Loader",id:"url-loader",children:[]}],i={toc:s};function d(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},i,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are a lot of loaders that load your schemas and documents from different sources. You need to provide those loaders under ",Object(r.b)("inlineCode",{parentName:"p"},"loaders")," parameter like below;"),Object(r.b)("h3",{id:"graphql-file-loader"},"GraphQL File Loader"),Object(r.b)("p",null,"This loader loads your GraphQLSchema from ",Object(r.b)("inlineCode",{parentName:"p"},".graphql")," files like below;"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// schema is `GraphQLSchema` instance\nconst schema = await loadSchema('schema.graphql', {  // load from a single schema file\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\n// You can add resolvers to that schema\nconst schemaWithResolvers = addResolversToSchema({\n  schema,\n  resolvers: {\n    Query: {...}\n  }\n});\n")),Object(r.b)("p",null,"This loader also supports glob pattern;"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const schema = await loadSchema('graphql/**/*.graphql', {  // load files and merge them into a single schema object\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n")),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"loadDocuments"),", it gives you an array of document source objects;"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const documents = await loadSchema('graphql/**/*.graphql', {  // load files and merge them into a single schema object\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This loader only supports Node environment because it relies on File System of your platform.")),Object(r.b)("h3",{id:"json-file-loader"},"JSON File Loader"),Object(r.b)("p",null,"This loader handles schema introspection and document nodes in ",Object(r.b)("inlineCode",{parentName:"p"},".json")," files."),Object(r.b)("p",null,"Introspection is handled in the example below;"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const schema = await loadSchema('schema-introspection.json', {\n  loaders: [\n    new JsonFileLoader(),\n  ]\n});\n\n// Mocked non-executable schema generated from an introspection\nconst mockedSchema = addMocksToSchema({ schema });\n")),Object(r.b)("p",null,"This loader handles ",Object(r.b)("inlineCode",{parentName:"p"},"json")," files if they represent ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentNode"),", and returns an array of document sources."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const documents = await loadDocuments('**/*-document.json', {\n  loaders: [\n    new JsonFileLoader(),\n  ]\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This loader only supports Node environment because it relies on File System of your platform.")),Object(r.b)("h3",{id:"code-file-loader"},"Code File Loader"),Object(r.b)("p",null,"This loader extracts GraphQL SDL string, exported ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," and ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentNode")," from TypeScript and JavaScript code files.\nLet's say you have the following code file;"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const ME_QUERY = gql`\n  query Me {\n    me {\n      id\n      name\n      username\n      age\n    }\n  }\n`;\n")),Object(r.b)("p",null,"And the following code will extract ",Object(r.b)("inlineCode",{parentName:"p"},"Me")," query operation from that code file without executing it using ",Object(r.b)("a",{parentName:"p",href:"/docs/graphql-tag-pluck"},"GraphQL Tag Pluck"),". It understands ",Object(r.b)("inlineCode",{parentName:"p"},"/* GraphQL */")," magic comment and ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," literals. You can configure ",Object(r.b)("a",{parentName:"p",href:"/docs/graphql-tag-pluck"},"GraphQL Tag Pluck")," using ",Object(r.b)("inlineCode",{parentName:"p"},"pluckConfig"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { loadDocuments } from '@graphql-tools/load';\nimport { CodeFileLoader } from '@graphql-tools/code-file-loader';\n\nconst documents = await loadDocuments('./src/**/graphql/*.ts', {\n  loaders:[\n    new CodeFileLoader()\n  ],\n  pluckConfig: {\n    ...\n  }\n})\n")),Object(r.b)("p",null,"You can also load your schema from code files like below;"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// typeDefs.ts\nexport const typeDefs = /* GraphQL */`\n  type Query {\n    foo: String\n  }\n`\n// or schema.ts\nexport const schema = new GraphQLSchema(...);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This loader only supports Node environment because it relies on File System of your platform.")),Object(r.b)("h3",{id:"url-loader"},"URL Loader"),Object(r.b)("p",null,"This loader generates ",Object(r.b)("a",{parentName:"p",href:"/docs/remote-schemas"},"(a fully executable remote schema using @graphql-tools/wrap)")," from a URL endpoint."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const schema = await loadSchema('http://localhost:3000/graphql', {\n  loaders: [\n    new UrlLoader(),\n  ]\n});\n")),Object(r.b)("p",null,"You can provide custom headers, HTTP method and custom W3C fetch method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const schema = await loadSchema('http://localhost:3000/graphql', {\n  loaders: [\n    new UrlLoader(),\n  ],\n  headers: {\n    Accept: 'application/json',\n  },\n  method: 'POST',\n  fetch: myFetch,\n});\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This loader supports both browser and node environments.")),Object(r.b)("p",null,"In browser this remote schema can be called using vanilla GraphQL-js and act like a simple GraphQL client."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const schema = await loadSchema('http://localhost:3000/graphql', {\n  loaders: [\n    new UrlLoader(),\n  ]\n});\n\nconst response = await graphql(schema, /* GraphQL */`\n  {\n    foo {\n      bar {\n        baz\n      }\n    }\n  }\n`);\n\nconsole.log(response);\n")))}d.isMDXComponent=!0},261:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return m}));var t=a(0),o=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),d=function(e){var n=o.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},p=function(e){var n=d(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=t,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return a?o.a.createElement(m,c(c({ref:n},i),{},{components:a})):o.a.createElement(m,c({ref:n},i))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);