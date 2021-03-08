(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{lTtb:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return c})),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return h}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("013z"),c=(n("qKvR"),function(){return Object(o.b)("span",null,"Refactoring Java EE Applications",Object(o.b)("br",null)," ",Object(o.b)("h2",null,"A phased approach to refactoring a Monolith in to Micro Services"))}),p={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=l("PageDescription"),b=l("AnchorLinks"),u=l("AnchorLink"),d={Title:c,_frontmatter:p},m=i.a;function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"Modernizing the backend JEE code")),Object(o.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(u,{mdxType:"AnchorLink"},"Introduction"),Object(o.b)(u,{mdxType:"AnchorLink"},"Move the backend monolith to OpenLiberty"),Object(o.b)(u,{mdxType:"AnchorLink"},"Update server.xml"),Object(o.b)(u,{mdxType:"AnchorLink"},"Update the pom files"),Object(o.b)(u,{mdxType:"AnchorLink"},"Run this solution"),Object(o.b)(u,{mdxType:"AnchorLink"},"Summary")),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,"In this phase the JEE6 EJB code is modernized to use MicroProfile and is then able to run on the latest open source version of Liberty (OpenLiberty)"),Object(o.b)("h2",null,"Move the backend monolith to OpenLiberty"),Object(o.b)("p",null,"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVQoz32RyUpDMRSG+1C6VFBw5wu41JWiIIgP4Cv4AKK2DnUWNy6c6KgWERFtoehC0Dqg9N701k459zO5VbFOgS/JOUn+/CcJCVDL5VGRKKXoGmpxldLSOt7WNqWVzc9YhaOU9+P4Zr9ojYi00Gg0AkJWUGdzVKZmqETmqYTnDPNU1zeoLkSpzJo4smDWp6nt7BI03+d70+aSQFCbrmpUXQ3qHTsv1sBptObKBpGf7iy+ucSKhswWlvd82gc0XcNC55CmZ1TomxB6x4WOQU33iNDWrxmblKYbaXVnxer1etMhvqbwDOkLyOTgOAuneTi/hrOrZmzzdj13Y4/L/w5FjHrVw3MLhgfDPZ56pKyeAoLYUHIKvHovwfP9Jmh5Lxlub+84OIiRSKSIx5MkkikymRNS6UMzT5vxiFgswcVl9rPE7yXbcq1o6EP549u/YvNKKYrFIo7j4LpukPvLoRV+A+uKUbkfQOYgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 5",title:"Step 5",src:"/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/3cbba/step5.png",srcSet:["/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/7fc1e/step5.png 288w","/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/a5df1/step5.png 576w","/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/3cbba/step5.png 1152w","/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/3b10e/step5.png 1179w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("h3",null,"Restructure the repository"),Object(o.b)("p",null,"In order to use the capabilities provided by the OpenLiberty ",Object(o.b)("a",{parentName:"p",href:"https://openliberty.io/blog/2019/10/22/liberty-dev-mode.html"},"development mode")," and to make the modernization easier, the structure of the GitHub repository was changed from multiple modules to a single module."),Object(o.b)("p",null,"OpenLiberty ",Object(o.b)("a",{parentName:"p",href:"https://openliberty.io/blog/2019/10/22/liberty-dev-mode.html"},"development mode")," provides the developer with a framework for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hot code replacements"),Object(o.b)("li",{parentName:"ul"},"Debugging incl. debugging in containers"),Object(o.b)("li",{parentName:"ul"},"IDE support like errors, warnings, auto-complete, and much more")),Object(o.b)("p",null,"The changes to the repository had the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new Open Liberty project and copy the source code from all sub-projects in it"),Object(o.b)("li",{parentName:"ul"},"Merge all pom.xml files"),Object(o.b)("li",{parentName:"ul"},"Take over the configuration files (server.xml, persistence.xml, etc.)"),Object(o.b)("li",{parentName:"ul"},"Update the paths in the Dockerfile")),Object(o.b)("p",null,"The project structure on the left hand side shows the original multi-modules structure, the right side the simplified new structure."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACZ0lEQVQ4y22U227aUBBF+TRUpIQIJY8hIoTwRX0OBNQov1H1qV/QBxICGLC5+QbGNwyGZPfMmONSC0sjIzNeZ+/ZI+deX18xHo9hWRZWq1Vay+UShmHA8338/vUTrdZ3GLaF+XwO27a5n0rTNH6fnlPlLi4u0Ol0YJomg8Iw5AqCAFEUga4fLy+4u6vA8zxMJhM4jsO/qXxxoOyjK3d5eclAVVUxGAz4tPV6zUAC09VsNnB/X+Hn1GdatlC5FPdEJfV+fn7i6+srUagoCtsjyXQnS9S02WyOwKYAVhFvfSy0DlzHgLOcix6PewLfZRgrJCApo5m5rsvypWUJfH5+ToC7LbRRF87KgueuhF0vcRL4/4BkWVEGPEOaCUH41IzCarWK/WGPidpjULSN+X+euehNgcViEYN+Dwthd7FYpAlKuAQ+PDwg9taYjt9gGjNYpg77uBnBUeHhcEiAQzFDglB6pIySo8oCIzHfsdKFOnznMg2d+8IwUbjf75G7urqCIhRSGFQ0SwmWwEajgUqlgt02EilrYjwW/CBMV4wqVXhzcyNCUaDrOqbTaZp0NpRarYadsKZpKvcZop/sSiepwlKpBGU45ITl7mVTbrVaeHx8RCysaWIP9SOMnJwCOZTr62sMPnrp/klYFliv1xHHMUajER8uE5YiCMiLTUDlnQaczO8csN1uM3ArFM5mMwae9v03w3w+j37/g1eGVuWcZQYKy4Gz5r5TdadAtlwoFPDR6/HayHlkFVLKt+Uy7LWLoZj36YfkDPAb/rx1xVdkiplIj5qzCp+enlAu32If72CLscg9PQf8C0VVe27mi1woAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Eclipse",title:"Eclipse",src:"/modernization-playbook/static/39f36f56f8ee8f50cb786abaa7eca929/3cbba/open-liberty-project-structure.png",srcSet:["/modernization-playbook/static/39f36f56f8ee8f50cb786abaa7eca929/7fc1e/open-liberty-project-structure.png 288w","/modernization-playbook/static/39f36f56f8ee8f50cb786abaa7eca929/a5df1/open-liberty-project-structure.png 576w","/modernization-playbook/static/39f36f56f8ee8f50cb786abaa7eca929/3cbba/open-liberty-project-structure.png 1152w","/modernization-playbook/static/39f36f56f8ee8f50cb786abaa7eca929/0b124/open-liberty-project-structure.png 1728w","/modernization-playbook/static/39f36f56f8ee8f50cb786abaa7eca929/d4943/open-liberty-project-structure.png 2058w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"If you wish to review the repositories structure and pom files, here are the links to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/IBM/application-modernization-javaee-quarkus/tree/master/monolith-open-liberty"},"before repostory")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/IBM/application-modernization-javaee-quarkus/tree/master/monolith-open-liberty-cloud-native"},"after repository")),Object(o.b)("h3",null,"Replace EJBs with CDI"),Object(o.b)("p",null,"To simplify the code, EJBs (Enterprise Java Beans) have been replaced with CDI (Contexts and Dependency Injection) since all code runs in the same context now. For example this was the original EJB code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'@Stateless\npublic class ProductSearchServiceImpl implements ProductSearchService {\n   ...\n}\n\npublic class CategoryResource {\n   @EJB ProductSearchService productSearch;\n   ...\n   productSearch = (ProductSearchService) new InitialContext().lookup("java:app/CustomerOrderServices/ProductSearchServiceImpl!org.pwte.example.service.ProductSearchService");\n   ...\n}\n')),Object(o.b)("p",null,"This is the converted code using CDI:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"@ApplicationScoped\npublic class ProductSearchServiceImpl implements ProductSearchService {\n   ...\n}\n\n@ApplicationScoped\npublic class CategoryResource {\n   @Inject\n   ProductSearchServiceImpl productSearch;\n   ...\n}\n")),Object(o.b)("p",null,"In order to handle transactions, you can use @Transactional which is part of the Java/Jakarta EE standard Java Transaction API (JTA). In the easiest case you simply use the annotation on your method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"@Transactional\npublic void updateLineItem(String productId, String newPrice) {\n   ...\n}\n")),Object(o.b)("p",null,"If you need more control, you can also manage the transactions manually:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"@PersistenceContext\nprotected EntityManager em;\n\n@Resource\nUserTransaction utx;\n\n@Transactional\npublic void updateLineItem(String productId, String newPrice) {\n   utx.begin();\n   em.persist(lineItem);\n   utx.commit();\n   ...\n}\n")),Object(o.b)("h3",null,"Update server.xml"),Object(o.b)("p",null,"In order to ",Object(o.b)("inlineCode",{parentName:"p"},"server.xml")," file was updated to change the features loaded by Liberty on startup. The older JEE6 features were removed and replaced by jakartaee-8.0",Object(o.b)("inlineCode",{parentName:"p"},"and"),"microprofile-3.3`. The final ",Object(o.b)("a",{parentName:"p",href:"https://github.com/IBM/application-modernization-javaee-quarkus/blob/master/monolith-open-liberty/liberty/server.xml"},"server.xml")," file can be found in the project repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  <featureManager>\n      <feature>microProfile-3.3</feature>\n      <feature>jakartaee-8.0</feature>\n      <feature>mpReactiveStreams-1.0</feature>\n      <feature>mpReactiveMessaging-1.0</feature>\n      <feature>monitor-1.0</feature>\n  </featureManager>\n")),Object(o.b)("h3",null,"Update the pom files"),Object(o.b)("p",null,"After combining the ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," files in the previous step, it is necessary to now add some dependencies for ",Object(o.b)("inlineCode",{parentName:"p"},"jakartaee-8.0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"microprofile-3.3")," as shown below. The final ",Object(o.b)("a",{parentName:"p",href:"https://github.com/IBM/application-modernization-javaee-quarkus/blob/master/monolith-open-liberty-cloud-native/pom.xml"},"pom.xml")," file is in the project repository"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"<dependency>\n   <groupId>jakarta.platform</groupId>\n   <artifactId>jakarta.jakartaee-api</artifactId>\n   <version>8.0.0</version>\n   <scope>provided</scope>\n</dependency>\n<dependency>\n   <groupId>org.eclipse.microprofile</groupId>\n   <artifactId>microprofile</artifactId>\n   <version>3.3</version>\n   <type>pom</type>\n   <scope>provided</scope>\n</dependency>\n")),Object(o.b)("h3",null,"Update the Dockerfile"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"OpenLiberty")," uses the ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/openliberty/open-liberty"},"openliberty/open-liberty")," Docker images and has some minor differences from WebSphere Liberty regarding how features are loaded (OpenLiberty has it’s own ",Object(o.b)("inlineCode",{parentName:"p"},"features.sh")," command in addition to ",Object(o.b)("inlineCode",{parentName:"p"},"configure.sh"),"). The final ",Object(o.b)("a",{parentName:"p",href:"https://github.com/IBM/application-modernization-javaee-quarkus/blob/master/monolith-open-liberty-cloud-native/Dockerfile.multistage"},"Dockerfile")," can be found in the project repository"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FROM adoptopenjdk/maven-openjdk11 as BUILD\nCOPY . /usr/src/app/src\nWORKDIR /usr/src/app/src/CustomerOrderServicesProject\nRUN mvn clean package\n\nFROM open-liberty:kernel-slim-java11-openj9\nUSER root\nCOPY --chown=1001:0 ./liberty/server.xml /config\nCOPY --chown=1001:0 ./liberty/server.env /config\nCOPY --chown=1001:0 ./liberty/jvm.options /config\n\nARG SSL=false\nARG HTTP_ENDPOINT=false\n\nRUN features.sh\n\nCOPY --from=build --chown=1001:0 /usr/src/app/src/CustomerOrderServicesApp/target/CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear /config/apps/CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear\nCOPY --from=build --chown=1001:0 /usr/src/app/src/resources/ /opt/ol/wlp/usr/shared/resources/\nRUN chown -R 1001.0 /config /opt/ol/wlp/usr/servers/defaultServer /opt/ol/wlp/usr/shared/resources && chmod -R g+rw /config /opt/ol/wlp/usr/servers/defaultServer  /opt/ol/wlp/usr/shared/resources\n\nUSER 1001\nRUN configure.sh\n")),Object(o.b)("h3",null,"Run this solution"),Object(o.b)("p",null,"Use the following steps to run this solution locally on Docker"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ git clone https://github.com/IBM/application-modernization-javaee-quarkus.git && cd application-modernization-javaee-quarkus\n$ ROOT_FOLDER=$(pwd)\n$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-monolith-db2.sh\n$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-splitted-frontend-open.sh\n")),Object(o.b)("h2",null,"Summary"),Object(o.b)("p",null,"This application has been refactored in a series of steps from the original ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was855"},"WebSphere ND v8.5.5 version")," to run as Micro Services on Red Hat OpenShift."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-applications-refactor-backend-mdx-e8e7fdb62f9560b2be5e.js.map