(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(180)),i={id:"maven-plugin-goals",title:"Maven Plugin Goals",sidebar_label:"Goals"},b={unversionedId:"plugins/maven-plugin-goals",id:"plugins/maven-plugin-goals",isDocsHomePage:!1,title:"Maven Plugin Goals",description:"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/docs/plugins/maven-plugin-goals.md",slug:"/plugins/maven-plugin-goals",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-goals",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/maven-plugin-goals.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1617649717,sidebar_label:"Goals",sidebar:"docs",previous:{title:"Gradle Plugin Usage",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-usage"},next:{title:"Maven Plugin Usage",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage"}},c=[{value:"Goals",id:"goals",children:[{value:"download-sdl",id:"download-sdl",children:[]},{value:"generate-client",id:"generate-client",children:[]},{value:"generate-sdl",id:"generate-sdl",children:[]},{value:"generate-test-client",id:"generate-test-client",children:[]},{value:"introspect-schema",id:"introspect-schema",children:[]}]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"GraphQL Kotlin Maven Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"NOTE: This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled.")),Object(l.b)("h2",{id:"goals"},"Goals"),Object(l.b)("p",null,"You can find detailed information about ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-maven-plugin")," and all its goals by running ",Object(l.b)("inlineCode",{parentName:"p"},"mvn help:describe -Dplugin=com.expediagroup:graphql-kotlin-maven-plugin -Ddetail"),"."),Object(l.b)("h3",{id:"download-sdl"},"download-sdl"),Object(l.b)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. This Mojo attempts to download schema from the specified ",Object(l.b)("inlineCode",{parentName:"p"},"graphql.endpoint"),", validates the\nresult whether it is a valid schema and saves it locally in a specified target file (defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"schema.graphql")," under\nbuild directory). In general, this goal provides limited functionality by itself and instead should be used to generate\ninput for the subsequent ",Object(l.b)("inlineCode",{parentName:"p"},"generate-client")," goal."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",Object(l.b)("inlineCode",{parentName:"li"},"generate-sources"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endpoint")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"headers")),Object(l.b)("td",{parentName:"tr",align:null},"Map<String, Any>"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"timeoutConfiguration")),Object(l.b)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default values are:"),Object(l.b)("br",null),"connect timeout = 5000",Object(l.b)("br",null),"read timeout = 15000.",Object(l.b)("br",null))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target schema file.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")),Object(l.b)("h3",{id:"generate-client"},"generate-client"),Object(l.b)("p",null,"Generate GraphQL client code based on the provided GraphQL schema and target queries."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",Object(l.b)("inlineCode",{parentName:"li"},"generate-sources")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Requires Maven Project")),Object(l.b)("li",{parentName:"ul"},"Generated classes are automatically added to the list of compiled sources.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"false"),".",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"customScalars")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<CustomScalar>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"outputDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-sources/graphql"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"packageName")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target package name for generated code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"src/main/resources"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<File>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"serializer")),Object(l.b)("td",{parentName:"tr",align:null},"GraphQLSerializer"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<customScalars>\n    <customScalar>\n        \x3c!-- custom scalar UUID type --\x3e\n        <scalar>UUID</scalar>\n        \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n        <type>java.util.UUID</type>\n        \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n          used to convert to/from raw JSON and scalar type --\x3e\n        <converter>com.example.UUIDScalarConverter</converter>\n    </customScalar>\n</customScalars>\n")))),Object(l.b)("h3",{id:"generate-sdl"},"generate-sdl"),Object(l.b)("p",null,"Generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"\nto generate the schema from classes implementing ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",Object(l.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Mutation")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Subscription")," interfaces.\nIn order to limit the amount of packages to scan, this mojo requires users to provide a list of ",Object(l.b)("inlineCode",{parentName:"p"},"packages")," that can contain\nGraphQL types."),Object(l.b)("p",null,"This MOJO utilizes ",Object(l.b)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",Object(l.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",Object(l.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service\nprovider. Configuration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",Object(l.b)("inlineCode",{parentName:"li"},"process-classes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Requires Maven Project"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"packages")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<String>")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"List of supported packages that can be scanned to generate SDL.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))))),Object(l.b)("h3",{id:"generate-test-client"},"generate-test-client"),Object(l.b)("p",null,"Generate GraphQL test client code based on the provided GraphQL schema and target queries."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",Object(l.b)("inlineCode",{parentName:"li"},"generate-test-sources")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Requires Maven Project")),Object(l.b)("li",{parentName:"ul"},"Generated classes are automatically added to the list of test compiled sources.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"false"),".",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.allowDeprecatedFields"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"customScalars")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<CustomScalar>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"outputDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target directory where to store generated files.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"${project.build.directory}/generated-test-sources/graphql"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"packageName")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target package name for generated code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.packageName"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"src/test/resources"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"queryFiles")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"List<File>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can also specify ",Object(l.b)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory containing all the files. If this property is specified it will take precedence over the corresponding directory property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"serializer")),Object(l.b)("td",{parentName:"tr",align:null},"GraphQLSerializer"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is:")," ",Object(l.b)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"customScalars")," - List of custom GraphQL scalars. Objects contain target GraphQL scalar name, corresponding Java type\nand converter that should be used to serialize/deserialize values.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"\n<customScalars>\n  <customScalar>\n      \x3c!-- custom scalar UUID type --\x3e\n      <scalar>UUID</scalar>\n      \x3c!-- fully qualified Java class name of a custom scalar type --\x3e\n      <type>java.util.UUID</type>\n      \x3c!-- fully qualified Java class name of a custom com.expediagroup.graphql.client.converter.ScalarConverter\n        used to convert to/from raw JSON and scalar type --\x3e\n      <converter>com.example.UUIDScalarConverter</converter>\n  </customScalar>\n</customScalars>\n\n")),Object(l.b)("h3",{id:"introspect-schema"},"introspect-schema"),Object(l.b)("p",null,"Executes GraphQL introspection query against specified ",Object(l.b)("inlineCode",{parentName:"p"},"graphql.endpoint")," and saves the result locally to a target file\n(defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory). In general, this goal provides limited functionality by itself and\ninstead should be used to generate input for the subsequent ",Object(l.b)("inlineCode",{parentName:"p"},"generate-client")," goal."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Attributes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Default Lifecycle Phase"),": ",Object(l.b)("inlineCode",{parentName:"li"},"generate-sources"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Property"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endpoint")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.endpoint"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"headers")),Object(l.b)("td",{parentName:"tr",align:null},"Map<String, Any>"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"timeoutConfiguration")),Object(l.b)("td",{parentName:"tr",align:null},"TimeoutConfiguration"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Optional timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default values are:"),Object(l.b)("br",null),"connect timeout = 5000",Object(l.b)("br",null),"read timeout = 15000.",Object(l.b)("br",null))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"schemaFile")),Object(l.b)("td",{parentName:"tr",align:null},"File"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target schema file.",Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"Default value is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"${project.build.directory}/schema.graphql"),Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"User property is"),": ",Object(l.b)("inlineCode",{parentName:"td"},"graphql.schemaFile"),".")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameter Details")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"timeoutConfiguration")," - Timeout configuration that allows you to specify connect and read timeout values in milliseconds.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<timeoutConfiguration>\n  \x3c!-- timeout values in milliseconds --\x3e\n  <connect>1000</connect>\n  <read>30000</read>\n</timeoutConfiguration>\n")))}p.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||l;return a?r.a.createElement(m,b(b({ref:t},o),{},{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);