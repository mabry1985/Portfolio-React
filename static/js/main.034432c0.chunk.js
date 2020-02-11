(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/jobbot.bd951800.png"},116:function(e,t,a){e.exports=a.p+"static/media/DevChat.4a7516d1.png"},117:function(e,t,a){e.exports=a.p+"static/media/PaperTrader.aa933a9c.png"},118:function(e,t,a){e.exports=a.p+"static/media/holeitw.6b6ef7c4.png"},128:function(e,t,a){e.exports=a.p+"static/media/Headshot.e00f57c3.png"},146:function(e,t,a){e.exports=a(285)},151:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),l=a.n(i),o=(a(151),a(18)),c=Object(n.createContext)(),s=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)(!1),d=Object(o.a)(s,2),u=d[0],m=d[1];return r.a.createElement(c.Provider,{value:{projectSelected:i,navBarVisible:u,handleNavbarVisibility:function(){m(!u)},handleAboutClick:function(){l(!1),m(!0)},handleProjectClick:function(){l(!0),m(!0)}}},e.children)},d=function(){var e=Object(n.useContext)(c),t=e.handleProjectClick,a=e.handleAboutClick,i=e.handleNavbarVisibility,l={},o={};return!0===e.projectSelected?(l={backgroundColor:"#E6F4FA",borderRadius:"15px"},o={}):(o={backgroundColor:"#E6F4FA",borderRadius:"15px"},l={}),r.a.createElement("nav",{id:"nav"},r.a.createElement("h5",{id:"name-nav",onClick:function(){return i()}},"Josh Mabry"),r.a.createElement("ul",null,r.a.createElement("li",{style:o,id:"about-nav",onClick:function(){return a()}},"About"),r.a.createElement("li",{style:l,id:"projects-nav",onClick:function(){return t()}},"Projects")))};var u=Object(n.createContext)(),m=function(e){var t=function(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var a=Object(n.useState)(t),r=Object(o.a)(a,2),i=r[0],l=r[1];return Object(n.useEffect)((function(){if(!e)return!1;function a(){l(t())}return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),i}(),a=Object(n.useState)(t),i=Object(o.a)(a,2),l=i[0],c=i[1],s=Object(n.useState)(!1),d=Object(o.a)(s,2),m=d[0],h=d[1];Object(n.useEffect)((function(){c(t),h(b(t))}),[t]);var b=function(e){return e.width>e.height&&e.height<736||!(e.width<e.height)&&void 0};return r.a.createElement(u.Provider,{value:{windowSize:l,landscapeMode:m}},e.children)},h=a(77),b=a(292),p=a(293),g=a(112),f=a(113),E=a(133),w=a(114),k=a(135),v=a(52),j=a(134),y=a(294),C=a(295),P=a(132),O=a(290),R=a(115),I=a.n(R),x=a(116),S=a.n(x),N=a(117),A=a.n(N),z=a(118),T=a.n(z),F=[{title:"DevChat",description:"This is a slack clone I made to practice React and Redux. I used Firebase for authentication, database, and deployment. To avoid signing up you can use email: Test@test.com and password: Qwerty",technologies:["React","Redux","Firebase","Semantic UI"],link:"https://slack-6f481.firebaseapp.com/",githubRepo:"https://github.com/mabry1985/DevChat",image:S.a},{title:"jobBot",description:"This is a dashboard I made to render the data scraped using my JobBot webcrawler. The crawler currently scrapes four job boards and collects the data in a Mongo Atlas database. Links to both the webcrawler and server can be found in the README for this project.",technologies:["React","Mongoose","Express","Node","D3","Heroku","Styled Components"],link:"https://jobbot-dashboard.herokuapp.com",githubRepo:"https://github.com/mabry1985/jobBot-dashboard",image:I.a},{title:"Paper Trader",description:"This is a Ruby on Rails application that was built in three days by me and three fellow students at Epicodus for our team-week project. I built out the functionality for user authentication, interacted with the API, and manipulated that data. I also was in charge of deployment to Heroku",technologies:["Ruby","Rails","PSQL","Heroku","Chart.js"],link:"http://floating-scrubland-71604.herokuapp.com/",githubRepo:"https://github.com/mabry1985/paper_trader",image:A.a},{title:"Hole in the Wall",description:"This is an experimental app I made for my capstone at Epicodus, using React and Redux. My main goal was to create a pleasant interface that functioned like a native app and to eventually port it over to an Electron or VR app.",technologies:["React","Redux","Firebase"],link:"",githubRepo:"https://github.com/mabry1985/hole-in-the-wall.git",image:T.a}],M=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(w.a)(t).call(this,e))).updateProject=function(e){var t=F[e],n=t.title,r=t.description,i=t.technologies,l=t.link,o=t.githubRepo,c=t.image;a.setState({title:n,description:r,technologies:a.formatTechnologies(i),link:l,githubRepo:o,image:c})},a.formatTechnologies=function(e){for(var t=[],a=0;a<e.length;a++)t.push(r.a.createElement(j.a,{className:"tech-labels",color:"teal",key:e[a]},e[a]));return t},a.handlePointerRightClick=function(){var e=a.state.currentProjectIndex;(e+=1)>=F.length-1?(a.setState({currentProjectIndex:e,endOfProjects:!0,beginningOfProjects:!1}),a.updateProject(e)):(a.setState({currentProjectIndex:e,endOfProjects:!1,beginningOfProjects:!1}),a.updateProject(e))},a.handlePointerLeftClick=function(){var e=a.state.currentProjectIndex;0===(e-=1)?(a.setState({currentProjectIndex:e,beginningOfProjects:!0,endOfProjects:!1}),a.updateProject(e)):(a.setState({currentProjectIndex:e,beginningOfProjects:!1,endOfProjects:!1}),a.updateProject(e))},a.onSwiping=function(e){var t=e.dir,n=e.first,r=a.state.currentProjectIndex;n&&t===v.a&&r<F.length-1&&a.handlePointerRightClick(),n&&t===v.b&&r>0&&a.handlePointerLeftClick()},a.state={title:"",description:"",technologies:[],link:"",githubRepo:"",image:null,currentProjectIndex:0,beginningOfProjects:!0,endOfProjects:!1,windowSize:a.props.windowSize},a}return Object(k.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.updateProject(0)}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,i=t.technologies,l=t.link,o=t.githubRepo,c=t.image,s=t.beginningOfProjects,d=t.endOfProjects,u=t.windowSize,m=t.currentProjectIndex;return r.a.createElement(v.c,{onSwiping:function(t){return e.onSwiping(t)},trackMouse:!1,preventDefaultTouchmoveEvent:!1},r.a.createElement(y.a,{id:"projects",stackable:!0},r.a.createElement(y.a.Row,{id:"swipe-container",centered:!0,only:"mobile tablet",textAlign:"center"},r.a.createElement(C.a,{as:"h5",id:"swipe-info",dividing:!0},"Swipe to change project ",m+1," / ",F.length)),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,{verticalAlign:"middle",textAlign:"center",width:1,only:"computer"},r.a.createElement(h.a,{size:"big",className:"project-arrows",name:"caret square left outline",disabled:s,onClick:this.handlePointerLeftClick})),r.a.createElement(y.a.Column,{width:10},r.a.createElement(P.a,{className:"project-image",src:c,rounded:!0,bordered:!0})),r.a.createElement(y.a.Column,{id:"project-description-column",verticalAlign:"middle",width:u.width<769?6:4},r.a.createElement(O.a,{className:"project-container"},r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,{as:"h2",className:"project-title"},a)),r.a.createElement("p",null,n),i,u.width>766?r.a.createElement("div",{className:"project-links"},l&&r.a.createElement(C.a,{as:"h4"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Demo Site"),l.includes("heroku")?r.a.createElement("p",null,"(This site is hosted on Heroku and may take a little while to load)"):null),r.a.createElement(C.a,{as:"h4"},r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Github Repo"))):null)),r.a.createElement(y.a.Column,{verticalAlign:"middle",textAlign:"center",width:1,only:"computer"},r.a.createElement(h.a,{size:"big",className:"project-arrows",name:"caret square right outline",onClick:this.handlePointerRightClick,disabled:d})))))}}]),t}(n.Component),_=function(){return r.a.createElement(y.a,{stackable:!0,reversed:!0},r.a.createElement(y.a.Row,{verticalAlign:"top"},r.a.createElement(y.a.Column,{width:10},r.a.createElement(O.a,null,r.a.createElement(C.a,{as:"h3",id:"about-header",dividing:!0},"About Me"),r.a.createElement("p",{id:"about"},"I was a bartender off and on for the last 12 years at a busy downtown bar where I managed a team of bartenders in a fast paced environment. Recently I spent 4 years running my own woodworking business where I designed, built, and sold household goods. I learned the craft through ADX, a local maker space, where I had the pleasure to learn from and work with many talented people and eventually began to create and teach classes of my own. I eventually decided that retail wasn't what I wanted to do and after playing around with some Python online, I discovered that I loved the problem solving and seemingly infinite pool of things to learn. So after some research I decided to enroll in Epicodus\u2019 Ruby on Rails and React bootcamp. It was a fun and challenging experience and I\u2019m excited to take this new found passion and build upon the solid foundation that I've laid down."))),r.a.createElement(y.a.Column,{only:"tablet computer"}),r.a.createElement(y.a.Column,{width:3,verticalAlign:"middle"},r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://drive.google.com/file/d/15X8GmKS3durO2wB7yS5FmdBYmJld7srU/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:"links resume"},"Resume")),r.a.createElement("a",{href:"mailto:mabrycodes@gmail.com"},r.a.createElement("h3",{className:"links email"},"Email")),r.a.createElement("a",{href:"https://www.github.com/mabry1985",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:"links github"},"Github")),r.a.createElement("a",{href:"https://www.linkedin.com/in/mabry1985/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:"links linked-in"},"Linked In")),r.a.createElement("a",{href:"https://www.codewars.com/users/mabry1985",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:"links codewars"},"Codewars"))))))},B=function(){var e=Object(n.useContext)(c).projectSelected,t=Object(n.useContext)(u).windowSize;return r.a.createElement("div",{id:"main-content"},e?r.a.createElement(M,{windowSize:t}):r.a.createElement(_,null))},D=a(128),H=a.n(D),L=function(){var e=Object(n.useContext)(c),t=e.handleProjectClick,a=e.handleAboutClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{stackable:!0,reversed:"mobile"},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,{width:8},r.a.createElement("div",{className:"img-container"},r.a.createElement(P.a,{className:"headshot",src:H.a}))),r.a.createElement(y.a.Column,{verticalAlign:"middle",textAlign:"center",width:8},r.a.createElement(O.a,null,r.a.createElement(y.a.Row,null,r.a.createElement(C.a,{as:"h1",id:"name"},"Josh Mabry"),r.a.createElement(C.a,{as:"h3",id:"subtitle"},"Fullstack Web Developer")),r.a.createElement(y.a.Row,{only:"computer tablet",id:"links-container"},r.a.createElement(C.a,{as:"h3",className:"lp-links projects-lp",onClick:t},"Projects"),r.a.createElement(C.a,{as:"h3",className:"lp-links about-lp",onClick:a},"About")))))))},J=function(){var e=Object(n.useContext)(c),t=e.navbarVisible,a=e.handleProjectClick,i=e.handleAboutClick,l=e.handleNavbarVisibility,s=Object(n.useState)(!1),d=Object(o.a)(s,2),u=d[0],m=d[1];return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(h.a,{id:"hamburger-icon",name:"sidebar",size:"big",onClick:function(){return m(!0)}})),r.a.createElement(b.a.Pushable,{as:"div"},r.a.createElement(b.a,{className:"hamburger-menu",as:p.a,animation:"overlay",icon:"labeled",onHide:function(){return m(!1)},vertical:!0,direction:"right",visible:u,width:"thin"},r.a.createElement(p.a.Item,{as:"a",onClick:function(){return a()}},r.a.createElement("h3",{className:"hamburger-links"},"Projects")),r.a.createElement(p.a.Item,{as:"a",onClick:function(){return i()}},r.a.createElement("h3",{className:"hamburger-links"},"About")),r.a.createElement(p.a.Item,{as:"a",href:"https://drive.google.com/file/d/15X8GmKS3durO2wB7yS5FmdBYmJld7srU/view?usp=sharing",target:"_blank"},r.a.createElement("h3",{className:"hamburger-links"},"Resume")),r.a.createElement(p.a.Item,{as:"a",href:"https://www.github.com/mabry1985",target:"_blank"},r.a.createElement("h3",{className:"hamburger-links"},"Github")),r.a.createElement(p.a.Item,{as:"a",href:"https://www.linkedin.com/in/mabry1985/",target:"_blank"},r.a.createElement("h3",{className:"hamburger-links"},"LinkedIn")),r.a.createElement(p.a.Item,{as:"a",onClick:function(){return l()}},r.a.createElement("h3",{className:"hamburger-links"},"Home"))),r.a.createElement(b.a.Pusher,{className:"hamburger-container",dimmed:u},t?r.a.createElement(L,null):r.a.createElement(B,null))))},V=function(){var e=Object(n.useContext)(u).windowSize.width>500?r.a.createElement(d,null):r.a.createElement(J,null);return r.a.createElement("div",null,e)},G=function(){return r.a.createElement("div",{id:"rotate-phone"},r.a.createElement(C.a,{icon:!0},r.a.createElement(h.a,{name:"sync alternate"}),"Please rotate your device to continue. ",r.a.createElement("br",null)))},U=function(){var e,t=Object(n.useContext)(c).navBarVisible,a=Object(n.useContext)(u),i=a.landscapeMode,l=a.windowSize;return i?e=r.a.createElement(G,null):!i&&t&&l.width>766?e=r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(B,null)):!i&&t&&l.width<766?e=r.a.createElement(J,null):i||(e=r.a.createElement(L,null)),r.a.createElement("div",{className:"App"},e)};l.a.render(r.a.createElement(s,null,r.a.createElement(m,null,r.a.createElement(U,null))),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.034432c0.chunk.js.map