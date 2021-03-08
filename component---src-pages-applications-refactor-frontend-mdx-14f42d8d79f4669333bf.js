(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5H00":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),function(){return Object(i.b)("span",null,"Refactoring Java EE Applications",Object(i.b)("br",null)," ",Object(i.b)("h2",null,"Extracting the frontend code"))}),c={},d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=d("PageDescription"),l=d("AnchorLinks"),p=d("AnchorLink"),m={Title:s,_frontmatter:c},h=r.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(h,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},Object(i.b)("p",null,"Extracting the frontend code")),Object(i.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"Introduction"),Object(i.b)(p,{mdxType:"AnchorLink"},"Separate the frontend from the monolith"),Object(i.b)(p,{mdxType:"AnchorLink"},"Run this solution"),Object(i.b)(p,{mdxType:"AnchorLink"},"Summary")),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"Once the monolith is containerized the application owners may choose to separate the frontend application code (DOJO based) from the monolith’s EAR file in to a separately deployable component. With the front and backend separated they can be developed, tested and deployed independently."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYUlEQVQoz22RTy8DQRiH+6G4cxZXd45c6+hTSDhQSWkESculEXGk+kdCQ0ibCIsu2y6yaxfp7sw+ZmeVKpM8eed9Z+Y3v3cmJYGP+hnOYgY3s4a7vIq7ksPb2sbNruMuZXXuLGTwd/eJ1H4pBFLKX4RhqEnFgrLZJNjcJCgUCPJ5wkKeoFgk3NkmVLmub2wgDg/RI4oYHEJdkgiKkNcuPPjw6CfR9MCK515Cr/78rrSk0IcHiV3GMaX8kduLGJ4SjM4IRqYFY2nBxJxkfFbqWszQpCA9LxM38re7SDnudruJQyKB7cD5NVwaCTcWXJlw/QiNO7gwknXDio/LP+8XE4tqh1JGvPkOtmXw1LnDbt8q7nm2TZW36Fi3utaxbnBe2smnyP9Fv1qGVsvk4KBEuVzl6KhCpVLl5LROtXas5jUdS6UyjUbzu8XBlnvvmOq33E+v5vs+ruvieZ7m5wP+b/sTt6tRqtIiQ3UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 4",title:"Step 4",src:"/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/3cbba/step4.png",srcSet:["/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/7fc1e/step4.png 288w","/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/a5df1/step4.png 576w","/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/3cbba/step4.png 1152w","/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/1f4d1/step4.png 1177w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h3",null,"Separate the frontend from the monolith"),Object(i.b)("p",null,"The CustomerOrderServices application frontend was developed using the ",Object(i.b)("a",{parentName:"p",href:"https://dojotoolkit.org/"},"DOJO Toolkit")," which is similar to jQuery and communicates with the backend using HTTP based REST APIs which use JSON for data. While these APIs are not resource focused (instead they are RPC style), they do still allow an easy seperation of the frontend and backend with the ",Object(i.b)("em",{parentName:"p"},"backend for frontend")," (BFF) pattern. Had the frontend used older server-side technologies such as JSP or JSF then a rewrite of the frontend would probably have been required."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVQoz3WSS2sTURTH5xO4cl8V3LvrSkQFP4KLChVcWAu+sBbRTUFBfOBChOJj584PECJJVgkus5CStqY6JpOkorWQTBjmcc89f8+5kxnfB36Xc8+f+59z7h2PiEDMsPv7oA9d0Edf+PSTXh/UD/J855d6dwc02oW11uF8BM8kKRgAV96CFi6Alq+Dlq7mXLwCWrkDe3sN9tK1WU3Q/PwS7NN1aKRJ4jDGwCNZ1BB738EbHfDWNnhzRmcLLJ2Y7S6y9xuwnU1AdIfk3B/kzciEijPURSER7B/QjMhkCLMUERkkso/lcCxWTpcxi5GzLIMXp0a/gWd1xoFli6O3LA7dtDgsHFm1mL9rcfy+5oS5GwZzKySawcHLBosvrTubilHRmJfMDF+/YxxbY5x+zDjxgHHyIePcC8biK8bZdYuF5xZnnuTaqUeM+XuM1TduYNdZaahLluWm/49UMP9UdFS9v3JkNdQYT0L4vQD9YFgSDEYYjr44BsNd9IJBqX2WB/n6ba80Le7RU1cN3/dRqVTQaDRQq9Uc9XodzWYTrVarrGtNqVaraLfb7qx71OI/LJI4jjEejxGGISaTSYnup9Ppb7WCKIr++rF/ANqE0BV+oSW8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 4",title:"Step 4",src:"/modernization-playbook/static/5171b1207cfcf2f34f0ef2ef12001d92/32d86/frontend.png",srcSet:["/modernization-playbook/static/5171b1207cfcf2f34f0ef2ef12001d92/7fc1e/frontend.png 288w","/modernization-playbook/static/5171b1207cfcf2f34f0ef2ef12001d92/a5df1/frontend.png 576w","/modernization-playbook/static/5171b1207cfcf2f34f0ef2ef12001d92/32d86/frontend.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"Given that the frontend is now static client-side HTML content that doesn’t require an application server to ",Object(i.b)("em",{parentName:"p"},"serve")," it, it could be deployed using a simple web server such as NGINX. In this example it is deployed using WebSphere Liberty for simplicity as it was going to be rewritten to use newer technologies later in the modernization journey."),Object(i.b)("h3",null,"Run this solution"),Object(i.b)("p",null,"Use the following steps to run this solution locally on Docker"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ git clone https://github.com/IBM/application-modernization-javaee-quarkus.git && cd application-modernization-javaee-quarkus\n$ ROOT_FOLDER=$(pwd)\n$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-monolith-db2.sh\n$ sh ${ROOT_FOLDER}/scripts-docker/build-and-run-splitted-frontend.sh\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open ",Object(i.b)("a",{parentName:"li",href:"http://localhost/CustomerOrderServicesWeb"},"http://localhost/CustomerOrderServicesWeb")," in order to test the application and see the frontend")),Object(i.b)("h2",null,"Summary"),Object(i.b)("p",null,"This frontend of the application has been extracted from the EAR file and is deployed to its own container. This gives more flexibility to develop and deploy the parts of the application independently of each other."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-applications-refactor-frontend-mdx-14f42d8d79f4669333bf.js.map