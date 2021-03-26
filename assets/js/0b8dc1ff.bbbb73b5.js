(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{261:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(n),d=s,u=h["".concat(o,".").concat(d)]||h[d]||m[d]||r;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var s=n(3),a=n(7),r=(n(0),n(261)),o={id:"stitch-schema-extensions",title:"Extending stitched schemas",sidebar_label:"Schema extensions"},i={unversionedId:"stitch-schema-extensions",id:"stitch-schema-extensions",isDocsHomePage:!1,title:"Extending stitched schemas",description:"Schema extensions add gateway-level type definitions and resolvers into a combined API, which is useful for establishing connections between types that exist in separate subschemas.",source:"@site/docs/stitch-schema-extensions.md",slug:"/stitch-schema-extensions",permalink:"/docs/stitch-schema-extensions",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/stitch-schema-extensions.md",version:"current",sidebar_label:"Schema extensions",sidebar:"someSidebar",previous:{title:"Directives SDL",permalink:"/docs/stitch-directives-sdl"},next:{title:"Stitching API",permalink:"/docs/stitch-api"}},c=[{value:"Basic example",id:"basic-example",children:[{value:"selectionSet",id:"selectionset",children:[]},{value:"resolve",id:"resolve",children:[]}]},{value:"Batch delegation",id:"batch-delegation",children:[]},{value:"Passing gateway arguments",id:"passing-gateway-arguments",children:[{value:"Via delegation",id:"via-delegation",children:[]},{value:"Via selectionSet",id:"via-selectionset",children:[]}]},{value:"Extending transformed schemas",id:"extending-transformed-schemas",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Schema extensions add gateway-level type definitions and resolvers into a combined API, which is useful for establishing connections between types that exist in separate subschemas."),Object(r.b)("p",null,"When considering these capabilities, be sure to compare them with the newer automated features available through ",Object(r.b)("a",{parentName:"p",href:"/docs/stitch-type-merging"},"type merging"),". While type merging frequently eliminates the need for schema extensions, it does not preclude their use."),Object(r.b)("h2",{id:"basic-example"},"Basic example"),Object(r.b)("p",null,"Going back to the posts and users service example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\n\nlet postSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      text: String\n      userId: ID!\n    }\n\n    type Query {\n      postById(id: ID!): Post\n      postsByUserId(userId: ID!): [Post!]!\n    }\n  `\n});\n\nlet userSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String\n    }\n\n    type Query {\n      userById(id: ID!): User\n    }\n  `\n});\n\n// just mock the schemas for now to make them return dummy data\npostSchema = addMocksToSchema({ schema: postSchema });\nuserSchema = addMocksToSchema({ schema: userSchema });\n\n// setup subschema config objects\nexport const postsSubschema = { schema: postSchema };\nexport const usersSubschema = { schema: userSchema };\n")),Object(r.b)("p",null,"We may want to navigate from a particular user to their posts, or from a post to its user. This is possible within our service architecture by connecting an existing key of each object to a corresponding root query:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Post.userId -> userById(id)")," gets a Post's user."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"User.id -> postsByUserId(userId)")," gets a User's posts.")),Object(r.b)("p",null,"To formalize this navigation within our gateway schema, we can ",Object(r.b)("em",{parentName:"p"},"extend")," each type with a new field that will translate its respective key into an actual object association:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { stitchSchemas } from '@graphql-tools/stitch';\n\nexport const schema = stitchSchemas({\n  subschemas: [\n    postsSubschema,\n    usersSubschema,\n  ],\n  typeDefs: `\n    extend type Post {\n      user: User!\n    }\n    extend type User {\n      posts: [Post!]!\n    }\n  `\n});\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"typeDefs")," option provides type extensions (using the ",Object(r.b)("inlineCode",{parentName:"p"},"extend")," keyword) that add additional fields into the ",Object(r.b)("em",{parentName:"p"},"combined")," gateway schema, and therefore may cross-reference types from any subschema."),Object(r.b)("p",null,"However, these extensions alone won't do anything until they have corresponding resolvers. A complete example would look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { stitchSchemas } from '@graphql-tools/stitch';\nimport { delegateToSchema } from '@graphql-tools/delegate';\n\nexport const schema = stitchSchemas({\n  subschemas: [\n    postsSubschema,\n    usersSubschema,\n  ],\n  typeDefs: `\n    extend type Post {\n      user: User!\n    }\n    extend type User {\n      posts: [Post!]!\n    }\n  `,\n  resolvers: {\n    User: {\n      posts: {\n        selectionSet: `{ id }`,\n        resolve(user, args, context, info) {\n          return delegateToSchema({\n            schema: postsSubschema,\n            operation: 'query',\n            fieldName: 'postsByUserId',\n            args: { userId: user.id },\n            context,\n            info,\n          });\n        },\n      },\n    },\n    Post: {\n      user: {\n        selectionSet: `{ userId }`,\n        resolve(post, args, context, info) {\n          return delegateToSchema({\n            schema: usersSubschema,\n            operation: 'query',\n            fieldName: 'userById',\n            args: { id: post.userId },\n            context,\n            info,\n          });\n        },\n      },\n    },\n  }\n});\n")),Object(r.b)("p",null,"When resolving ",Object(r.b)("inlineCode",{parentName:"p"},"User.posts")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Post.user"),", we ",Object(r.b)("em",{parentName:"p"},"delegate")," each key reference to its corresponding root query. Note that the structure of stitching resolvers has a ",Object(r.b)("inlineCode",{parentName:"p"},"selectionSet")," property and a ",Object(r.b)("inlineCode",{parentName:"p"},"resolve")," method."),Object(r.b)("h3",{id:"selectionset"},"selectionSet"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Post: {\n  user: {\n    selectionSet: `{ userId }`,\n    // ... resolve\n  },\n},\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"selectionSet")," specifies the key field(s) needed from an object to query for its associations. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"Post.user")," will require that a Post provide its ",Object(r.b)("inlineCode",{parentName:"p"},"userId"),". Rather than relying on incoming queries to manually request this key for the association, the selection set will automatically be included in subschema requests to guarantee that these fields are fetched. Dynamic selection sets are also possible by providing a function that receives a GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"FieldNode")," (the gateway field) and returns a ",Object(r.b)("inlineCode",{parentName:"p"},"SelectionSetNode"),"."),Object(r.b)("h3",{id:"resolve"},"resolve"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Post: {\n  user: {\n    // ... selectionSet\n    resolve(post, args, context, info) {\n      return delegateToSchema({\n        schema: usersSubschema,\n        operation: 'query',\n        fieldName: 'userById',\n        args: { id: post.userId },\n        context,\n        info,\n      });\n    },\n  },\n},\n")),Object(r.b)("p",null,"Resolvers use the ",Object(r.b)("inlineCode",{parentName:"p"},"delegateToSchema")," function to forward parts of queries (or even whole new queries) to any other schema","\u2014","inside ",Object(r.b)("em",{parentName:"p"},"or outside")," of the stitched schema. When delegating to a stitched subschema, always provide the complete ",Object(r.b)("a",{parentName:"p",href:"/docs/stitch-combining-schemas#subschema-configs"},"subschema config")," object as the ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," option."),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"delegateToSchema")," assumes that the delegated operation will return the same GraphQL type as the resolved field (ex: a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," field would delegate to a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," query). If this is not the case, then you should manually provide a ",Object(r.b)("inlineCode",{parentName:"p"},"returnType")," option citing the expected GraphQL return type, and transform the result accordingly in the resolver."),Object(r.b)("h2",{id:"batch-delegation"},"Batch delegation"),Object(r.b)("p",null,"The drawback of performing individual ",Object(r.b)("inlineCode",{parentName:"p"},"delegateToSchema")," calls is that they can be fairly inefficient. Say we request ",Object(r.b)("inlineCode",{parentName:"p"},"Post.user")," from an array of ten posts","\u2014","that would delegate ten individual ",Object(r.b)("inlineCode",{parentName:"p"},"userById")," queries while resolving each user! To improve this, we can instead delegate in ",Object(r.b)("em",{parentName:"p"},"batches"),", where many instances of a field resolver are consolidated into one delegation."),Object(r.b)("p",null,"To setup batching, the first thing we'll need is a new query in the users service that allows fetching many users at once:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"usersByIds(ids: [ID!]!): [User]!\n")),Object(r.b)("p",null,"With this many-users query available, we can now delegate the ",Object(r.b)("inlineCode",{parentName:"p"},"Post.user")," field in batches across many records:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { batchDelegateToSchema } from '@graphql-tools/batch-delegate';\n\nconst schema = stitchSchemas({\n  subschemas: [\n    postsSubschema,\n    usersSubschema,\n  ],\n  typeDefs: `\n    extend type Post {\n      user: User!\n    }\n  `,\n  resolvers: {\n    Post: {\n      user: {\n        selectionSet: `{ userId }`,\n        resolve(post, _args, context, info) {\n          return batchDelegateToSchema({\n            schema: usersSubschema,\n            operation: 'query',\n            fieldName: 'usersByIds',\n            key: post.userId,\n            argsFromKeys: (ids) => ({ ids }),\n            context,\n            info,\n          });\n        },\n      },\n    },\n  },\n});\n")),Object(r.b)("p",null,"Internally, ",Object(r.b)("inlineCode",{parentName:"p"},"batchDelegateToSchema")," wraps a single ",Object(r.b)("inlineCode",{parentName:"p"},"delegateToSchema")," call in a ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/dataloader"},"DataLoader")," scoped by context, field, arguments, and query selection. It assumes that the delegated operation will return an array of objects matching the gateway field's named GraphQL type (ex: a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," field delegates to a ",Object(r.b)("inlineCode",{parentName:"p"},"[User]")," query). If this is not the case, then you should manually provide a ",Object(r.b)("inlineCode",{parentName:"p"},"returnType")," option citing the expected GraphQL return type."),Object(r.b)("p",null,"Batch delegation is generally preferable over plain delegation because it eliminates the redundancy of requesting the same field across an array of parent objects. Even so, delegation costs can add up because there is still one subschema request made ",Object(r.b)("em",{parentName:"p"},"per batched field"),"\u2014","for remote services, this may create many network requests sent to the same service. Consider enabling an additional layer of network-level batching with a package such as ",Object(r.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/link/links/batch-http/"},"apollo-link-batch-http")," to consolidate requests per subschema."),Object(r.b)("h2",{id:"passing-gateway-arguments"},"Passing gateway arguments"),Object(r.b)("p",null,"Exhaustive accessors like ",Object(r.b)("inlineCode",{parentName:"p"},"User.posts")," do not scale well (...what happens when a user has tens of thousands of posts?), so the gateway should probably accept scoping arguments and pass them through to the underlying subschemas. Let's add a ",Object(r.b)("inlineCode",{parentName:"p"},"pageNumber")," argument to the ",Object(r.b)("inlineCode",{parentName:"p"},"User.posts")," schema extension:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"extend type User {\n  posts(pageNumber: Int=1): [Post]!\n}\n")),Object(r.b)("p",null,"This argument only exists in the gateway schema and won't do anything until passed through to subschemas. How we pass this input through depends on which subservice owns the association data..."),Object(r.b)("h3",{id:"via-delegation"},"Via delegation"),Object(r.b)("p",null,"First, let's say that the Posts service defines this association. The first thing we'll need is a corresponding argument in the posts query; and while we're at it, let's also support batching:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"postPagesByUserIds(userIds: [ID!]!, pageNumber: Int=1): [[Post!]!]!\n")),Object(r.b)("p",null,"This ",Object(r.b)("inlineCode",{parentName:"p"},"postPagesByUserIds")," query is a very primitive example of pagination, and simply returns an array of posts for each user ID. Now we just need to pass the resolver's page number argument through to ",Object(r.b)("inlineCode",{parentName:"p"},"batchDelegateToSchema"),", and manually specify a ",Object(r.b)("inlineCode",{parentName:"p"},"returnType")," that matches the pagination format:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"User: {\n  posts: {\n    selectionSet: `{ id }`,\n    resolve(user, args, context, info) {\n      return batchDelegateToSchema({\n        schema: postsSubschema,\n        operation: 'query',\n        fieldName: 'postPagesByUserIds',\n        key: user.id,\n        argsFromKeys: (userIds) => ({ userIds, pageNumber: args.pageNumber }),\n        returnType: new GraphQLList(new GraphQLList(postsSubschema.schema.getType('Post'))),\n        context,\n        info,\n      });\n    },\n  },\n}\n")),Object(r.b)("h3",{id:"via-selectionset"},"Via selectionSet"),Object(r.b)("p",null,"Alternatively, let's say that users and posts have a many-to-many relationship and the users service owns the association data. That might give us a ",Object(r.b)("inlineCode",{parentName:"p"},"User.postIds")," field to stitch from:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"User.postIds(pageNumber: Int=1): [ID]!\n")),Object(r.b)("p",null,"In this configuration, resolver arguments will need to pass through with the initial ",Object(r.b)("inlineCode",{parentName:"p"},"selectionSet"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"forwardArgsToSelectionSet")," helper handles this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { forwardArgsToSelectionSet } from '@graphql-tools/stitch';\n//...\nUser: {\n  posts: {\n    selectionSet: forwardArgsToSelectionSet('{ postIds }'),\n    resolve(user, args, context, info) {\n      return batchDelegateToSchema({\n        schema: postsSubschema,\n        operation: 'query',\n        fieldName: 'postsByIds',\n        key: user.postIds,\n        argsFromKeys: (ids) => ({ ids }),\n        context,\n        info,\n      });\n    },\n  },\n}\n")),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"forwardArgsToSelectionSet")," will pass through all arguments from the gateway field to ",Object(r.b)("em",{parentName:"p"},"all")," root fields in the selection set. For complex selections that request multiple fields, you may provide an additional mapping of selection names with their respective arguments:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"forwardArgsToSelectionSet('{ id postIds }', { postIds: ['pageNumber'] })\n")),Object(r.b)("h2",{id:"extending-transformed-schemas"},"Extending transformed schemas"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/stitch-combining-schemas#adding-transforms"},"Transformed schemas")," are nuanced because they involve two versions of the same schema: the original schema, and the transformed gateway schema. When extending a transformed schema, we extend the gateway schema but delegate to the original schema. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\nimport { stitchSchemas } from '@graphql-tools/stitch';\nimport { delegateToSchema } from '@graphql-tools/delegate';\nimport { FilterRootFields, RenameTypes } from '@graphql-tools/wrap';\n\nconst postSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      text: String\n      userId: ID!\n    }\n    type Query {\n      postById(id: ID!): Post\n      postsByUserId(userId: ID!): [Post]!\n    }\n  `\n});\n\nconst postsSubschema = {\n  schema: addMocksToSchema({ schema: postSchema }),\n  transforms: [\n    // remove the \"postsByUserId\" root field\n    new FilterRootFields((op, field) => field !== 'postsByUserId'),\n    // prefix all type names with \"Post_\"\n    new RenameTypes((name) => `Post_${name}`),\n  ],\n};\n\nconst userSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String\n    }\n\n    type Query {\n      userById(id: ID!): User\n    }\n  `\n});\n\nconst usersSubschema = {\n  schema: addMocksToSchema({ schema: userSchema })\n};\n\nconst stitchedSchema = stitchSchemas({\n  subschemas: [\n    postsSubschema,\n    usersSubschema,\n  ],\n  typeDefs: `\n    extend type User {\n      posts: [Post_Post!]!\n    }\n    extend type Post_Post {\n      user: User!\n    }\n  `,\n  resolvers: {\n    User: {\n      posts: {\n        selectionSet: `{ id }`,\n        resolve(user, args, context, info) {\n          return delegateToSchema({\n            schema: postsSubschema,\n            operation: 'query',\n            fieldName: 'postsByUserId',\n            args: { userId: user.id },\n            context,\n            info,\n          });\n        },\n      },\n    },\n    Post_Post: {\n      user: {\n        selectionSet: `{ userId }`,\n        resolve(post, args, context, info) {\n          return delegateToSchema({\n            schema: usersSubschema,\n            operation: 'query',\n            fieldName: 'userById',\n            args: { id: post.userId },\n            context,\n            info,\n          });\n        },\n      },\n    },\n  },\n});\n")),Object(r.b)("p",null,"A few key points to note here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"All schema extensions and their resolvers exist in the gateway schema, and therefore refer to the transformed type name ",Object(r.b)("inlineCode",{parentName:"p"},"Post_Post"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Delegations refer to the original subschema, and therefore may reference fields such as ",Object(r.b)("inlineCode",{parentName:"p"},"postsByUserId")," that have been removed from the gateway schema."))))}p.isMDXComponent=!0}}]);