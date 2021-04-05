(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(180)),i={id:"federation-tracing",title:"Federation Tracing"},c={unversionedId:"schema-generator/federation/federation-tracing",id:"schema-generator/federation/federation-tracing",isDocsHomePage:!1,title:"Federation Tracing",description:"Support for Apollo Federation tracing is added to the graphql-kotlin-federation package by using the apollographql/federation-jvm library.",source:"@site/docs/schema-generator/federation/federation-tracing.md",slug:"/schema-generator/federation/federation-tracing",permalink:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/federation-tracing.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1617649717,sidebar:"docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"},next:{title:"GraphQLServer",permalink:"/graphql-kotlin/docs/server/graphql-server"}},p=[{value:"<code>FederatedGraphQLContext</code>",id:"federatedgraphqlcontext",children:[]}],l={toc:p};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Support for Apollo Federation tracing is added to the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," package by using the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apollographql/federation-jvm"},"apollographql/federation-jvm")," library."),Object(o.b)("h3",{id:"federatedgraphqlcontext"},Object(o.b)("inlineCode",{parentName:"h3"},"FederatedGraphQLContext")),Object(o.b)("p",null,"To best support tracing, the context must implement a specific method to get the HTTP headers from the request.\nThis is done by implementing the ",Object(o.b)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface instead of just the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLContext")," interface from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."))}d.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(r),f=n,m=s["".concat(i,".").concat(f)]||s[f]||u[f]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);