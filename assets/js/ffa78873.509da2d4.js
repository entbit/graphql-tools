(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{257:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return c}));var r=t(3),o=t(7),l=(t(0),t(261)),a={id:"schema-merging",title:"Schema merging",sidebar_label:"Schema merging"},s={unversionedId:"schema-merging",id:"schema-merging",isDocsHomePage:!1,title:"Schema merging",description:"Schema merging (@graphql-tools/merge) consolidates the type definitions and resolvers from many local schema instances into a single executable schema. This is useful for building a local service schema from many individually-managed parts. This should not be confused with schema stitching, which builds a combined proxy schema atop numerous service APIs.",source:"@site/docs/schema-merging.md",slug:"/schema-merging",permalink:"/docs/schema-merging",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/schema-merging.md",version:"current",sidebar_label:"Schema merging",sidebar:"someSidebar",previous:{title:"Schema wrapping",permalink:"/docs/schema-wrapping"},next:{title:"Combining schemas",permalink:"/docs/stitch-combining-schemas"}},i=[{value:"Getting started",id:"getting-started",children:[]},{value:"Merging type definitions",id:"merging-type-definitions",children:[{value:"Manual imports",id:"manual-imports",children:[]},{value:"File loading",id:"file-loading",children:[]},{value:"Print merged typeDefs",id:"print-merged-typedefs",children:[]},{value:"Nested Types",id:"nested-types",children:[]},{value:"Directives",id:"directives",children:[]}]},{value:"Merging resolvers",id:"merging-resolvers",children:[]}],p={toc:i};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Schema merging (",Object(l.b)("inlineCode",{parentName:"p"},"@graphql-tools/merge"),") consolidates the type definitions and resolvers from many local schema instances into a single executable schema. This is useful for building a local service schema from many individually-managed parts. This should not be confused with ",Object(l.b)("a",{parentName:"p",href:"/docs/stitch-combining-schemas"},"schema stitching"),", which builds a combined proxy schema atop numerous service APIs."),Object(l.b)("h2",{id:"getting-started"},"Getting started"),Object(l.b)("p",null,"You can use ",Object(l.b)("inlineCode",{parentName:"p"},"mergeSchemas")," to merge ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," objects together with extra ",Object(l.b)("inlineCode",{parentName:"p"},"typeDefs")," and ",Object(l.b)("inlineCode",{parentName:"p"},"resolvers"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"const { mergeSchemas } = require('@graphql-tools/merge');\n\nconst mergedSchema = mergeSchemas({\n  schemas: [\n    BarSchema,\n    BazSchema,\n  ],\n  typeDefs: `\n    type ExtraType {\n      foo: String\n    }\n  `,\n  resolvers: {\n    ExtraType: {\n      foo: () => 'FOO',\n    }\n  }\n});\n")),Object(l.b)("p",null,"There is also ",Object(l.b)("inlineCode",{parentName:"p"},"mergeSchemasAsync")," as a faster asynchronous alternative."),Object(l.b)("h2",{id:"merging-type-definitions"},"Merging type definitions"),Object(l.b)("p",null,"Originally implemented in ",Object(l.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules"},"graphql-modules"),". This tool merges GraphQL type definitions and schema. It aims to merge all possible types, interfaces, enums and unions, without conflicts."),Object(l.b)("p",null,"Let's say this is your current schema:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"type Client {\n  id: ID!\n  name: String\n  age: Int\n  products: [Product]\n}\n\ntype Product {\n  id: ID!\n  description: String\n  price: Int\n}\n\ntype Query {\n  clients: [Client]\n  client(id: ID!): Client\n  products: [Product]\n  product(id: ID!): Product\n}\n\ntype Mutation {\n  addClient(name: String!, age: Int!): Client\n}\n")),Object(l.b)("p",null,"Knowing that your app will grow, you want to move your definitions to separate files that should look like the following."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/types/clientType.js\nmodule.exports = `\n  type Client {\n    id: ID!\n    name: String\n    age: Int\n    products: [Product]\n  }\n\n  type Query {\n    clients: [Client]\n    client(id: ID!): Client\n  }\n\n  type Mutation {\n    addClient(name: String!, age: Int!): Client\n  }\n`;\n\n// ./graphql/types/productType.js\nmodule.exports =  `\n  type Product {\n    id: ID!\n    description: String\n    price: Int\n    client: Client\n  }\n\n  type Query {\n    products: [Product]\n    product(id: ID!): Product\n  }\n`;\n")),Object(l.b)("p",null,"There are two ways you can use this package:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"manually import each type"),Object(l.b)("li",{parentName:"ul"},"import everything from a specified folder")),Object(l.b)("h3",{id:"manual-imports"},"Manual imports"),Object(l.b)("p",null,"If you decide to have manual control of each file that gets merged, all you need is the ",Object(l.b)("inlineCode",{parentName:"p"},"mergeTypeDefs(types)")," function from ",Object(l.b)("inlineCode",{parentName:"p"},"@graphql-tools/merge")," package:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const { mergeTypeDefs } = require('@graphql-tools/merge');\nconst clientType = require('./clientType');\nconst productType = require('./productType');\n\nconst types = [\n  clientType,\n  productType,\n];\n\nmodule.exports = mergeTypeDefs(types);\n")),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"https://www.graphql-tools.com/docs/api/modules/merge/#mergetypedefs"},Object(l.b)("inlineCode",{parentName:"a"},"mergeTypeDefs"))," for more details."),Object(l.b)("h3",{id:"file-loading"},"File loading"),Object(l.b)("p",null,"In this way we use the ",Object(l.b)("inlineCode",{parentName:"p"},"loadFilesSync")," function from ",Object(l.b)("inlineCode",{parentName:"p"},"@graphql-tools/load-files")," to import all files from the specified folder."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/typeDefs.js\nconst path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, './types'));\n\nmodule.exports = mergeTypeDefs(typesArray);\n")),Object(l.b)("p",null,"When using the ",Object(l.b)("inlineCode",{parentName:"p"},"loadFilesSync")," function you can also implement your type definitions using ",Object(l.b)("inlineCode",{parentName:"p"},".graphql")," or ",Object(l.b)("inlineCode",{parentName:"p"},".gql")," or ",Object(l.b)("inlineCode",{parentName:"p"},".graphqls")," files."),Object(l.b)("p",null,"You can also load files with specified extensions by setting the extensions option.\nOnly these values are supported now. ",Object(l.b)("inlineCode",{parentName:"p"},"'ts', 'js', 'gql', 'graphql', 'graphqls'")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/typeDefs.js\nconst path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, './types'), { extensions: ['graphql'] });\n\nmodule.exports = mergeTypeDefs(typesArray);\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"By default, the ",Object(l.b)("inlineCode",{parentName:"p"},"loadFilesSync")," function will not ignore files named ",Object(l.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(l.b)("inlineCode",{parentName:"p"},"index.ts"),", but you can set the ",Object(l.b)("inlineCode",{parentName:"p"},"ignoreIndex")," option to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," to enable this behavior. This allows you to create your index file inside the actual types folder if desired.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"# ./graphql/types/clientType.graphql\ntype Client {\n  id: ID!\n  name: String\n  age: Int\n  products: [Product]\n}\n\ntype Query {\n  clients: [Client]\n  client(id: ID!): Client\n}\n\ntype Mutation {\n  addClient(name: String!, age: Int!): Client\n}\n\n# ./graphql/types/productType.graphql\ntype Product {\n  id: ID!\n  description: String\n  price: Int\n  client: Client\n}\n\ntype Query {\n  products: [Product]\n  product(id: ID!): Product\n}\n")),Object(l.b)("p",null,"You can also load files in nested folders by setting the ",Object(l.b)("inlineCode",{parentName:"p"},"recursive")," option."),Object(l.b)("p",null,"Given the file structure below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+-- graphql\n|   +-- types\n|   |   +-- subGroupA\n|   |   |   +-- typeA1.graphql\n|   |   |   +-- typeA2.graphql\n|   |   +-- subGroupB\n|   |   |   +-- typeB1.graphql\n|   |   |   +-- typeB2.graphql\n|   |   +-- index.js\n")),Object(l.b)("p",null,"Here's how your ",Object(l.b)("inlineCode",{parentName:"p"},"index")," file could look like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, '.'), { recursive: true })\n\nmodule.exports = mergeTypeDefs(typesArray)\n")),Object(l.b)("p",null,"You can also load files in different folders by passing a glob pattern in ",Object(l.b)("inlineCode",{parentName:"p"},"loadFilesSync"),"."),Object(l.b)("p",null,"Given the file structure below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+-- graphql\n|   +-- subGroupA\n|   |   +-- typeA1.graphql\n|   |   +-- typeA2.graphql\n|   +-- subGroupB\n|   |   +-- typeB1.graphql\n|   |   +-- typeB2.graphql\n|   +-- index.js\n")),Object(l.b)("p",null,"Here's how your ",Object(l.b)("inlineCode",{parentName:"p"},"index")," file could look like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, 'graphql/**/*.graphql'))\n\nmodule.exports = mergeTypeDefs(typesArray)\n")),Object(l.b)("h3",{id:"print-merged-typedefs"},"Print merged typeDefs"),Object(l.b)("p",null,"Since the output of ",Object(l.b)("inlineCode",{parentName:"p"},"mergeTypeDefs")," is a GraphQL ",Object(l.b)("inlineCode",{parentName:"p"},"DocumentNode"),", you may print the merged result as a string to be passed around to other systems. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\nconst { print } = require('graphql');\nconst fs = require('fs');\n\nconst loadedFiles = loadFilesSync(`${__dirname}/schema/**/*.graphql`);\nconst typeDefs = mergeTypeDefs(loadedFiles);\nconst printedTypeDefs = print(typeDefs);\nfs.writeFileSync('joined.graphql', printedTypeDefs);\n")),Object(l.b)("h3",{id:"nested-types"},"Nested Types"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"mergeTypeDefs")," function also allows merging multiple schemas. In situations where you would like to have nested subfolders, you can merge your types by subfolder, and then everything into one single schema. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+-- graphql\n|   +-- types\n|   |   +-- subGroupA\n|   |   |   +-- index.js <<< Merges all types in subGroupA\n|   |   |   +-- typeA1.graphql\n|   |   |   +-- typeA2.graphql\n|   |   +-- subGroupB\n|   |   |   +-- index.js <<< Merges all types in subGroupB\n|   |   |   +-- typeB1.graphql\n|   |   |   +-- typeB2.graphql\n|   |   +-- index.js <<< Merges exports from subGroupA and subGroupB\n")),Object(l.b)("h3",{id:"directives"},"Directives"),Object(l.b)("p",null,"Merged directives will be stacked on top of each other, in the order of declaration. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"type Query {\n  client: Client @foo\n}\ntype Query {\n  client: Client @bar\n}\n")),Object(l.b)("p",null,"Becomes:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"type Query {\n  client: Client @foo @bar\n}\n")),Object(l.b)("h2",{id:"merging-resolvers"},"Merging resolvers"),Object(l.b)("p",null,"Resolvers are implemented as simple JS objects and then merged using deep-merge. Resolver implementations can be separated across multiple objects and then merged into a single ",Object(l.b)("inlineCode",{parentName:"p"},"resolvers")," object. Following the previous examples, for the types we implemented our resolvers should look like the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers/clientResolver.js\nmodule.exports = {\n  Query: {\n    clients: () => {},\n    client: () => {},\n  },\n  Mutation: {\n    addClient: () => {},\n  },\n  Client: {\n    products: () => {},\n  },\n}\n\n// ./graphql/resolvers/productResolver.js\nmodule.exports = {\n  Query: {\n    products: () => {},\n    product: () => {},\n  },\n  Product: {\n    client: () => {},\n  },\n}\n")),Object(l.b)("p",null,"Just like your type definitions, you can choose to import files manually:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers/index.js\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst clientResolver = require('./clientResolver');\nconst productResolver = require('./productResolver');\n\nconst resolvers = [\n  clientResolver,\n  productResolver,\n];\n\nmodule.exports = mergeResolvers(resolvers);\n")),Object(l.b)("p",null,"Or automatically:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers.js\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));\n\nmodule.exports = mergeResolvers(resolversArray);\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Beware that ",Object(l.b)("inlineCode",{parentName:"p"},"mergeResolvers")," is simply merging plain JavaScript objects together.\nThis means that you should be careful with Queries, Mutations or Subscriptions with naming conflicts.")),Object(l.b)("p",null,"You can also load files with specified extensions by setting the extensions option.\nOnly these values are supported now: ",Object(l.b)("inlineCode",{parentName:"p"},"ts, js, gql, graphql, graphqls"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers.js\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, './resolvers'), { extensions: ['js'] });\n\nmodule.exports = mergeResolvers(resolversArray);\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Optional: Automatic with Resolver Naming Convention")),Object(l.b)("p",null,"If you would like to use the automated ",Object(l.b)("inlineCode",{parentName:"p"},"fileLoader")," approach ",Object(l.b)("em",{parentName:"p"},"but")," would like complete\nfreedom over the structure of your resolver files, then simply use a resolver file naming\nconvention like, ",Object(l.b)("inlineCode",{parentName:"p"},"[file].resolvers.js/ts"),"."),Object(l.b)("p",null,"Then setup your ",Object(l.b)("inlineCode",{parentName:"p"},"fileLoader")," like so, and you're in business:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers/index.js/ts\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, \"./**/*.resolvers.*\"));\nmodule.exports = mergeResolvers(resolversArray);\n")),Object(l.b)("p",null,"With this approach, you're free to structure resolver files as you see fit. Of course,\nunique naming of Queries, Mutations and Subscriptions still applies!"),Object(l.b)("p",null,"Now you can structure by ",Object(l.b)("strong",{parentName:"p"},"function"),"..."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+-- graphql\n|   +-- resolvers\n|   |   +-- author.resolvers.js/ts\n|   |   +-- book.resolvers.js/ts\n|   |   +-- index.ts  <<< Merges all `*.resolvers.*` files\n")),Object(l.b)("p",null,"Or by ",Object(l.b)("strong",{parentName:"p"},"type"),"..."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+-- graphql\n|   +-- entity\n|   |   +-- author\n|   |   |   +-- author.resolvers.js/ts\n|   |   |   +-- ...\n|   |   +-- book\n|   |   |   +-- book.resolvers.js/ts\n|   |   |   +-- ...\n|   |   +-- index.ts <<< Merges all `*.resolvers.*` files\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Custom extraction from exports")),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"loadFiles")," checks export names ",Object(l.b)("inlineCode",{parentName:"p"},"typeDefs"),", ",Object(l.b)("inlineCode",{parentName:"p"},"resolvers")," and ",Object(l.b)("inlineCode",{parentName:"p"},"schema"),". But you can change the way it extracts the content from the exported values."),Object(l.b)("p",null,"Let's say you have a factory function inside your resolvers like below;"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"module.exports = customQueryTypeName = ({\n  [customQueryTypeName]: {\n    foo: () => 'FOO',\n  }\n})\n")),Object(l.b)("p",null,"And you can define custom ",Object(l.b)("inlineCode",{parentName:"p"},"extractExports")," like below;"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolvers = loadFilesSync(join(__dirname, './resolvers/**/*.js'), {\n  extractExports: fileExport => {\n    if (typeof fileExport === 'function') {\n      return fileExport('query_root');\n    }\n    return fileExport;\n  }\n})\n")))}c.isMDXComponent=!0},261:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),c=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||l;return t?o.a.createElement(m,s(s({ref:n},p),{},{components:t})):o.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<l;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);