(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/fotoCV.26332935.png"},45:function(e,t,a){e.exports=a(80)},52:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),l=a.n(c),o=a(4),i=a(5),s=a(8),u=a(6),m=a(7),p=a(21),d=a(22),E=a(18),f=(a(50),a(52),a(9)),h=a(15),b=a(42),g=a(14),v={experiences:[],experience:{}},j={educations:[],education:{}},y={certifications:[],certification:{}},N={projects:[],project:{}},w=Object(h.c)({experience:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EXPERIENCE":return Object(g.a)({},e,{experiences:t.payload});default:return e}},education:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EDUCATIONS":return Object(g.a)({},e,{educations:t.payload});default:return e}},certification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CERTIFICATIONS":return Object(g.a)({},e,{certifications:t.payload});default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(g.a)({},e,{projects:t.payload});default:return e}}}),O=[b.a],k=Object(h.e)(w,{},Object(h.d)(h.a.apply(void 0,O))),C=a(20),I=a(23),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(C.a)(Object(C.a)(a))),a.state={collapsed:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.props.branding,t=this.state.collapsed,a=t?"collapse navbar-collapse":"collapse navbar-collapse show",n=t?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return r.a.createElement("nav",{className:"navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-primary fixed-top sticky",id:"cvNavbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#",id:"cvNavbarBrand"},e),r.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(n),type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(a),id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav",id:"cvNavItems",onClick:this.toggleNavbar},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(I.HashLink,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.HashLink,{className:"nav-link",to:"/#basicInfo"},"Basic Info")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.HashLink,{className:"nav-link",to:"/#experienceSection"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.HashLink,{className:"nav-link",to:"/#educationSection"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.HashLink,{className:"nav-link",to:"/#certificationSection"},"Licenses and Certifications")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.HashLink,{className:"nav-link",to:"/#projectSection"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(I.HashLink,{className:"nav-link",to:"/minigame"},"Play a game"))))))}}]),t}(n.Component);x.defaultProps={branding:"My App"};var S=x;function L(){return r.a.createElement("div",{id:"introductionSection"},r.a.createElement("h2",{className:"display-4 mb-2"},"Who am I?"),r.a.createElement("p",{className:"lead"},r.a.createElement("b",null,"Computer Software Engineer")," graduate from the University of La Laguna (Spain), with experience in the creation of software solutions with programming languages such as ",r.a.createElement("b",null,"C++, Java")," and those of web development like ",r.a.createElement("b",null,"HTML, CSS and JavaScript"),". I also possess knowledge about ",r.a.createElement("b",null,"Software Engineering")," and"," ",r.a.createElement("b",null,"Software Design Patterns"),"."))}var F=a(44),P=a.n(F);function T(){return r.a.createElement("div",{id:"basicInfo"},r.a.createElement("h2",{className:"display-4 mb-3"},"Basic info"),r.a.createElement("ul",{className:"lead"},r.a.createElement("img",{src:P.a,alt:"My CV picture",className:"img-thumbnail",id:"cvPhoto"}),r.a.createElement("li",null,r.a.createElement("b",null,"Name: ")," Mauricio Jos\xe9"),r.a.createElement("li",null,r.a.createElement("b",null,"Last Names: ")," Orta Rodr\xedguez"),r.a.createElement("li",null,r.a.createElement("b",null,"Birth Date: ")," 07/01/1994"),r.a.createElement("li",null,r.a.createElement("b",null,"Address: ")," Madrid, Spain"),r.a.createElement("li",null,r.a.createElement("b",null,"Email: ")," ",r.a.createElement("a",{href:"mailto:mauriciojorta94@gmail.com?subject = Feedback&body = Message",target:"_blank",rel:"noopener noreferrer"},"mauriciojorta94@gmail.com")),r.a.createElement("li",null,r.a.createElement("b",null,"LinkedIn: ")," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/mauricio-orta-b20a9889/",target:"_blank",rel:"noopener noreferrer"},"My LinkedIn Profile")),r.a.createElement("li",null,r.a.createElement("b",null,"GitHub: ")," ",r.a.createElement("a",{href:"https://github.com/mauriciojorta",target:"_blank",rel:"noopener noreferrer"},"My GitHub Profile"))))}var D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showExperienceInfo:!1},a.showExperienceInfoFunc=function(){a.setState({showExperienceInfo:!a.state.showExperienceInfo})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.experience,t=e.title,a=e.company,n=e.companyLogo,c=e.location,l=e.from,o=e.to,i=e.description,s=this.state.showExperienceInfo,u=null!=i&&i.length>1;return r.a.createElement("div",{className:"card card-body mb-3 cardShadow"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:n,alt:"Company logo",className:"img-thumbnail experienceLogo",style:{cursor:"pointer"},onClick:this.showExperienceInfoFunc})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,l," to ",o," - ",t," at ",a," ",r.a.createElement("i",{onClick:this.showExperienceInfoFunc,className:"fas fa-sort-down",style:{cursor:"pointer"}})),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Location:")," ",c),u?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Description:")," ",i):null):null)))}}]),t}(n.Component),M=Object(f.b)()(D),_=a(13),A=a.n(_),H=a(24),G=a(25),R=a.n(G),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Component did mount"),this.props.getExperiences()}},{key:"render",value:function(){var e=this.props.experiences;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"experienceSection"},r.a.createElement("h2",{className:"display-4 mb-2"},"Experience"),e.map(function(e){return r.a.createElement(M,{key:e.id,experience:e})})))}}]),t}(n.Component),B=Object(f.b)(function(e){return{experiences:e.experience.experiences}},{getExperiences:function(){return function(){var e=Object(H.a)(A.a.mark(function e(t){var a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Flag"),e.next=3,R.a.get("collections/experienceList.json");case 3:a=e.sent,t({type:"GET_EXPERIENCE",payload:a.data});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(J),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showEducationInfo:!1},a.showEducationInfoFunc=function(){a.setState({showEducationInfo:!a.state.showEducationInfo})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.education,t=e.title,a=e.institution,n=e.institutionLogo,c=e.location,l=e.from,o=e.to,i=e.description,s=this.state.showEducationInfo,u=null!=i&&i.length>1;return r.a.createElement("div",{className:"card card-body mb-3 cardShadow"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:n,alt:"Institution logo",className:"img-thumbnail educationLogo",style:{cursor:"pointer"},onClick:this.showEducationInfoFunc})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,l," to ",o," - ",t," at ",a," ",r.a.createElement("i",{onClick:this.showEducationInfoFunc,className:"fas fa-sort-down",style:{cursor:"pointer"}})),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Location:")," ",c),u?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Description:")," ",i):null):null)))}}]),t}(n.Component),z=Object(f.b)()(U),V=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Component did mount"),this.props.getEducations()}},{key:"render",value:function(){var e=this.props.educations;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"educationSection"},r.a.createElement("h2",{className:"display-4 mb-2"},"Education"),e.map(function(e){return r.a.createElement(z,{key:e.id,education:e})})))}}]),t}(n.Component),W=Object(f.b)(function(e){return{educations:e.education.educations}},{getEducations:function(){return function(){var e=Object(H.a)(A.a.mark(function e(t){var a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Flag"),e.next=3,R.a.get("collections/educationList.json");case 3:a=e.sent,t({type:"GET_EDUCATIONS",payload:a.data});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(V),X=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showCertificationInfo:!1},a.showCertificationInfoFunc=function(){a.setState({showCertificationInfo:!a.state.showCertificationInfo})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.certification,t=e.name,a=e.organization,n=e.organizationLogo,c=e.issueDate,l=e.expirationDate,o=e.credentialId,i=e.credentialUrl,s=null!=l&&l.length>1,u=null!=o&&o.length>1,m=null!=i&&i.length>1,p=this.state.showCertificationInfo;return r.a.createElement("div",{className:"card card-body mb-3 cardShadow"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:n,alt:"Organization logo",className:"img-thumbnail certificationLogo",onClick:this.showCertificationInfoFunc,style:{cursor:"pointer"}})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,t," ",r.a.createElement("i",{onClick:this.showCertificationInfoFunc,className:"fas fa-sort-down",style:{cursor:"pointer"}})),p?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Organization:")," ",a),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Issue Date:")," ",c),s?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Expiration Date:")," ",l):null,u?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Credential ID:")," ",o):null,m?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Credential Url:")," ",r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"}," ","See Credential"," ")):null):null)))}}]),t}(n.Component),$=Object(f.b)()(X),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Component did mount"),this.props.getCertifications()}},{key:"render",value:function(){var e=this.props.certifications;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"certificationSection"},r.a.createElement("h2",{className:"display-4 mb-2"},"Certifications"),e.map(function(e){return r.a.createElement($,{key:e.id,certification:e})})))}}]),t}(n.Component),K=Object(f.b)(function(e){return{certifications:e.certification.certifications}},{getCertifications:function(){return function(){var e=Object(H.a)(A.a.mark(function e(t){var a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Flag"),e.next=3,R.a.get("collections/certificationList.json");case 3:a=e.sent,t({type:"GET_CERTIFICATIONS",payload:a.data});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(q),Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showProjectInfo:!1},a.showProjectInfoFunc=function(){a.setState({showProjectInfo:!a.state.showProjectInfo})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project,t=e.name,a=e.from,n=e.to,c=e.description,l=e.appUrl,o=e.url,i=this.state.showProjectInfo,s=null!=l&&l.length>1;return r.a.createElement("div",{className:"card card-body mb-3 cardShadow"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h4",null,a," to ",n," - ",t," ",r.a.createElement("i",{onClick:this.showProjectInfoFunc,className:"fas fa-sort-down",style:{cursor:"pointer"}})),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Description:")," ",c),s?r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"App Link:")," ",r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Try App")):null,r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Project Link:")," ",r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"See Project"))):null)))}}]),t}(n.Component),Y=Object(f.b)()(Q),Z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Component did mount"),this.props.getProjects()}},{key:"render",value:function(){var e=this.props.projects;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"projectSection"},r.a.createElement("h2",{className:"display-4 mb-2"},"Projects"),e.map(function(e){return r.a.createElement(Y,{key:e.id,project:e})})))}}]),t}(n.Component),ee=Object(f.b)(function(e){return{projects:e.project.projects}},{getProjects:function(){return function(){var e=Object(H.a)(A.a.mark(function e(t){var a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Flag"),e.next=3,R.a.get("collections/projectList.json");case 3:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(Z);function te(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(L,null)),r.a.createElement("section",null,r.a.createElement(T,null)),r.a.createElement("section",null,r.a.createElement(B,null)),r.a.createElement("section",null,r.a.createElement(W,null)),r.a.createElement("section",null,r.a.createElement(K,null)),r.a.createElement("section",null,r.a.createElement(ee,null)))}function ae(){return r.a.createElement("div",{id:"gameSection"},r.a.createElement("div",{class:"embed-container"},r.a.createElement("iframe",{src:"https://meteor-destroyer.herokuapp.com/",title:"Meteor Destroyer",width:"800px",height:"800px",style:{border:"none"}})))}var ne=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:k},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,{branding:"MyCV"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:te}),r.a.createElement(E.a,{exact:!0,path:"/minigame",component:ae}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,2,1]]]);
//# sourceMappingURL=main.f3aa83c0.chunk.js.map