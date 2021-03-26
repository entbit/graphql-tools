(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{254:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),a=n(7),o=(n(0),n(261)),c={id:"merge-schemas",title:"GraphQLSchema merging",sidebar_label:"GraphQLSchema merging"},i={unversionedId:"merge-schemas",id:"merge-schemas",isDocsHomePage:!1,title:"GraphQLSchema merging",description:"Schema merging (@graphql-tools/merge) combines the type definitions and resolvers from many local schema instances into a single executable schema. This is useful for building a local service schema from many individually-managed parts.",source:"@site/docs/merge-schemas.md",slug:"/merge-schemas",permalink:"/docs/merge-schemas",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/merge-schemas.md",version:"current",sidebar_label:"GraphQLSchema merging"},s=[],m={toc:s};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},m,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Schema merging (",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-tools/merge"),") combines the type definitions and resolvers from many local schema instances into a single executable schema. This is useful for building a local service schema from many individually-managed parts."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/schema-merging"},"Learn more about schema merging")))}l.isMDXComponent=!0},261:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return d}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),l=function(e){var r=a.a.useContext(m),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return a.a.createElement(m.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=t,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?a.a.createElement(d,i(i({ref:r},m),{},{components:n})):a.a.createElement(d,i({ref:r},m))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var m=2;m<o;m++)c[m]=n[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);