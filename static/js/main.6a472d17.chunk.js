(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},74:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),a=t(27),i=t.n(a),r=(t(34),t(3)),o=(t(35),t(4)),l=t(5),d=t(17),j=t.n(d),u=function(){function e(){Object(o.a)(this,e),this.url="https://api.github.com/users/MikeCuzzo"}return Object(l.a)(e,[{key:"getRepos",value:function(){var e=this;return new Promise((function(n,t){j.a.get("".concat(e.url,"/repos")).then((function(e){return n(e.data)})).catch((function(e){alert(e),t(e)}))}))}},{key:"getOwner",value:function(){var e=this;return new Promise((function(n,t){j.a.get("".concat(e.url)).then((function(e){return n(e.data)})).catch((function(e){alert(e),t(e)}))}))}},{key:"getLanguages",value:function(e){return new Promise((function(n,t){j.a.get("https://api.github.com/repos/MikeCuzzo/".concat(e,"/languages")).then((function(e){return n(e.data)})).catch((function(e){alert(e),t(e)}))}))}}]),e}(),m=t(8),b=t(7),h=t(28),g=t.n(h),v=(t(74),t(0)),f=function(e){Object(m.a)(t,e);var n=Object(b.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"mt-5",id:"loading",children:[Object(v.jsx)("h1",{className:"mt-5 mb-5",children:"Loading"}),Object(v.jsx)(g.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})]})}}]),t}(s.a.Component),O=(t(76),function(e){return"fr"===e?{about:"\xc0 Propos de Moi",paragraph1:"Je suis un \xe9tudiant en \n        4\xe8me ann\xe9e en informatique \xe0 Southern Methodist University.",paragraph2:"Mon passe-temps pour le d\xe9veloppement \n        front-end est de cr\xe9er ce que les utilisateurs."}:{about:"About Me",paragraph1:"I am a 4th-year student studying Computer Science at Southern Methodist University.\n        I am an aspiring front-end software developer.",paragraph2:"My passion for front-development stems from the joy of creating what the users will\n        see in their software. I feel a connection with the end users, and I like to put myself\n        in their shoes and pretend like I am them when I navigate my program."}}),p=function(e){var n=Object(c.useState)(void 0),t=Object(r.a)(n,2),s=t[0],a=t[1],i=Object(c.useState)(e.lang),o=Object(r.a)(i,2),l=o[0],d=o[1],j=new u;Object(c.useEffect)((function(){j.getOwner().then((function(e){return a(e)})),d(e.lang)}),[e.lang]);var m=O(l);return s?Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h2",{className:"mb-5",id:"tabHeader",children:m.about}),Object(v.jsxs)("div",{className:"row",id:"bioDiv",children:[Object(v.jsx)("img",{src:s.avatar_url,alt:"my-photo",className:"col-lg-3 mb-4 w-25",id:"myPhoto"}),Object(v.jsxs)("div",{id:"bio-text",className:"col",children:[Object(v.jsx)("p",{className:"col-12 col-lg-8 text-start",children:m.paragraph1}),Object(v.jsx)("p",{className:"col-12 col-lg-8 text-start",children:m.paragraph2})]})]})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"mb-5",id:"tabHeader",children:m.about}),Object(v.jsx)(f,{})]})},x=t(29),N=(t(77),function(e){return"fr"===e?{about:"Me Contactez",sendMe:"Envoyez-moi un Email",name:"Nom",email:"Email",message:"Message",send:"Envoyer",connect:"Connectez avec Moi"}:{about:"Contact Me",sendMe:"Send Me and Email",name:"Name",email:"Email",message:"Message",send:"Send",connect:"Connect with Me"}}),k=function(e){var n=Object(c.useState)(e.lang),t=Object(r.a)(n,2),s=t[0],a=t[1];Object(c.useEffect)((function(){a(e.lang)}),[e.lang]);var i=N(s),o=Object(c.useRef)();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h2",{className:"mb-5",id:"tabHeader",children:i.about}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"col-10 col-lg-7 container bg-light border text-start p-3 mb-5",id:"contact-container",children:[Object(v.jsx)("h5",{className:"mb-3",children:i.sendMe}),Object(v.jsxs)("form",{ref:o,onSubmit:function(e){e.preventDefault(),""!==e.target[0].value&&""!==e.target[1].value&&""!==e.target[2].value?(x.a.sendForm("service_8u8gfoi","template_yxqezvq",o.current,"user_1IgsCanixBcsEdhU89UAZ").then((function(e){console.log(e.text),alert("Message sent")}),(function(e){console.log(e.text),alert("Error sending message")})),document.getElementById("contact-form").reset()):alert("All fields are required")},id:"contact-form",children:[Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{className:"form-label",htmlFor:"user_name",children:i.name}),Object(v.jsx)("input",{type:"text",name:"user_name",id:"user_name",className:"form-control"})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{className:"form-label",htmlFor:"user_email",children:i.email}),Object(v.jsx)("input",{type:"email",name:"user_email",id:"user_email",className:"form-control"})]}),Object(v.jsxs)("div",{className:"mb-4",children:[Object(v.jsx)("label",{className:"form-label",htmlFor:"message",children:i.message}),Object(v.jsx)("textarea",{name:"message",id:"message",className:"form-control"})]}),Object(v.jsx)("input",{type:"submit",value:i.send,className:"btn btn-primary mb-2",id:"sendEmail"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{id:"socials-header",children:i.connect}),Object(v.jsx)("a",{href:"https://www.linkedin.com/in/michael-cuzzo-24823117b?trk=profile-badge",children:Object(v.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",className:"skill-icon",alt:"linked-icon"})})]})]})]})},y=t(12),w=(t(78),function(e){return"fr"===e?{home:"Accueil",bio:"Bio",skills:"Comp\xe9tences",projects:"Projets",contact:"Contact"}:{home:"Home",bio:"Bio",skills:"Skills",projects:"Projects",contact:"Contact"}}),S=function(e){var n=Object(c.useState)(e.lang),t=Object(r.a)(n,2),s=t[0],a=t[1];Object(c.useEffect)((function(){a(e.lang)}),[e.lang]);var i=w(s);return Object(v.jsxs)("div",{className:"header mt-5",id:"header",children:[Object(v.jsx)("h1",{className:"fw-bold",children:"Michael Cuzzo"}),Object(v.jsxs)("nav",{className:"nav justify-content-center mt-5 mb-5 flex-column flex-sm-row",id:"navBar",children:[Object(v.jsx)(y.b,{to:"/",className:function(e){return e.isActive?"nav-link nav-link-focus":"nav-link"},children:Object(v.jsx)("h3",{children:i.home})}),Object(v.jsx)(y.b,{to:"bio",className:function(e){return e.isActive?"nav-link nav-link-focus":"nav-link"},children:Object(v.jsx)("h3",{children:i.bio})}),Object(v.jsx)(y.b,{to:"skills",className:function(e){return e.isActive?"nav-link nav-link-focus":"nav-link"},children:Object(v.jsx)("h3",{children:i.skills})}),Object(v.jsx)(y.b,{to:"projects",className:function(e){return e.isActive?"nav-link nav-link-focus":"nav-link"},children:Object(v.jsx)("h3",{children:i.projects})}),Object(v.jsx)(y.b,{to:"contact",className:function(e){return e.isActive?"nav-link nav-link-focus":"nav-link"},children:Object(v.jsx)("h3",{children:i.contact})})]})]})},M=t.p+"static/media/OO-Resume.45eaef64.pdf",C=t.p+"static/media/WD-Resume.c26ac69c.pdf",E=(t(79),function(e){return"fr"===e?{welcome:"Bienvenue sur Mon Site",desc:"Ici vous pouvez voir une id\xe9e de qui je suis, \n        voir quels sont mes comp\xe9tences techniques, \n        voir quels sont les projets que j'ai travaill\xe9s sur, \n        et fournir des liens pour me contacter.",checkout:"Voir Mes R\xe9sum\xe9s"}:{welcome:"Welcome to My Website",desc:"Here you can get an idea of who I am, \n        see what technical skills I possess, see what projects I have worked on, \n        and provide links to contact me.",checkout:"Checkout My Resumes"}}),U=function(e){var n=Object(c.useState)(""),t=Object(r.a)(n,2),s=t[0],a=t[1],i=Object(c.useState)(e.lang),o=Object(r.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){d(e.lang)}),[e.lang]);var j=E(l);return Object(v.jsxs)("div",{className:"container",id:"home",children:[Object(v.jsx)("h1",{className:"mb-5",id:"tabHeader",children:j.welcome}),Object(v.jsx)("h5",{children:j.desc}),Object(v.jsx)("h3",{className:"mt-5 mb-5",children:j.resumes}),Object(v.jsxs)("div",{id:"resume-buttons",className:"d-flex justify-content-around w-50 mx-auto",children:[Object(v.jsx)("button",{className:"badge btn-primary",onClick:function(){return a("OO")},children:"Object Oriented"}),Object(v.jsx)("button",{className:"badge btn-primary",onClick:function(){return a("WD")},children:"Web Developement"})]}),"OO"===s&&Object(v.jsx)("iframe",{src:M,className:"mt-5 w-100"}),"WD"===s&&Object(v.jsx)("iframe",{src:C,className:"mt-5 w-100"})]})},z=(t(80),function(e){var n=Object(c.useState)(e.project),t=Object(r.a)(n,2),s=t[0],a=(t[1],Object(c.useState)(void 0)),i=Object(r.a)(a,2),o=(i[0],i[1]),l=new u;Object(c.useEffect)((function(){l.getLanguages(s.name).then((function(e){return o(e)}))}),[]);return Object(v.jsx)("div",{className:"col",children:Object(v.jsx)("div",{className:"card",children:Object(v.jsx)("a",{href:s.html_url,target:"_blank",rel:"noopener noreferrer",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h3",{className:"card-title",children:s.name}),Object(v.jsx)("span",{className:"badge rounded-pill bg-primary mb-2 mx-1",children:s.language}),Object(v.jsx)("p",{className:"card-text align-middle",children:s.description})]})})},s.id)})}),_=function(e){return"fr"===e?{about:"Mes Projets"}:{about:"My Projects"}},I=(t(81),function(e){var n=Object(c.useState)(void 0),t=Object(r.a)(n,2),s=t[0],a=t[1],i=Object(c.useState)(e.lang),o=Object(r.a)(i,2),l=o[0],d=o[1],j=new u;Object(c.useEffect)((function(){j.getRepos().then((function(e){return a(e)})),d(e.lang)}),[e.lang]);var m=_(l);return s?Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h2",{className:"mb-4",id:"tabHeader",children:m.about}),Object(v.jsx)("p",{id:"source",children:"Source"}),Object(v.jsx)("a",{href:"https://github.com/MikeCuzzo",children:Object(v.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",id:"github-icon",className:"mb-5"})}),Object(v.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:s.map((function(e){return Object(v.jsx)(z,{project:e})}))})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{id:"tabHeader",children:m.about}),Object(v.jsx)(f,{})]})}),q=(t(82),function(e){return"fr"===e?{about:"Mes Comp\xe9tences"}:{about:"My Skills"}}),A=function(e){var n=Object(c.useState)(e.lang),t=Object(r.a)(n,2),s=t[0],a=t[1];Object(c.useEffect)((function(){a(e.lang)}),[e.lang]);var i=q(s),o=[{name:"Java",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},{name:"C",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},{name:"C++",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},{name:"Python",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"JavaScript",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"React",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"AngularJs",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},{name:"MySQL",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{name:"Sass",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"},{name:"Bootstrap",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},{name:"CSS3",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"HTML5",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"Linux",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},{name:"TypeScript",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}];return o.sort((function(e,n){return e.name.localeCompare(n.name)})),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h2",{className:"mb-5",id:"tabHeader",children:i.about}),Object(v.jsx)("div",{className:"row flex-row",children:o.map((function(e){return Object(v.jsxs)("div",{className:"card col-4 col-lg-2 m-3 p-3",children:[Object(v.jsx)("img",{src:e.iconUrl,alt:e.name,className:"skill-icon card-img-top mb-2"}),Object(v.jsx)("p",{className:"card-title",children:e.name})]})}))})]})},H=(t(83),function(e){return"fr"===e?{select:"S\xe9lectionnez une langue"}:{select:"Select a Language"}}),L=function(e){var n=Object(c.useState)(e.lang),t=Object(r.a)(n,2),s=t[0],a=t[1],i=e.handleLanguageChange;Object(c.useEffect)((function(){a(e.lang)}),[e.lang]);var o=H(s);return Object(v.jsxs)("div",{id:"selectLanguage",className:"mt-5",children:[Object(v.jsx)("p",{children:o.select}),Object(v.jsx)("span",{onClick:function(){return i("en")},children:Object(v.jsx)("img",{src:"https://flagicons.lipis.dev/flags/4x3/gb.svg",className:"language-icon",alt:"flag_uk"})}),Object(v.jsx)("span",{onClick:function(){return i("fr")},children:Object(v.jsx)("img",{src:"https://flagicons.lipis.dev/flags/4x3/fr.svg",className:"language-icon",alt:"flag_fr"})})]})},P=(t(85),t(84),t(2));var B=function(){var e="en",n=Object(c.useState)(e),t=Object(r.a)(n,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){e=s||"en"}),[s]),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(S,{lang:s}),Object(v.jsxs)(P.c,{children:[Object(v.jsx)(P.a,{path:"/",element:Object(v.jsx)(U,{lang:s})}),Object(v.jsx)(P.a,{path:"bio",element:Object(v.jsx)(p,{lang:s})}),Object(v.jsx)(P.a,{path:"skills",element:Object(v.jsx)(A,{lang:s})}),Object(v.jsx)(P.a,{path:"projects",element:Object(v.jsx)(I,{lang:s})}),Object(v.jsx)(P.a,{path:"contact",element:Object(v.jsx)(k,{lang:s})})]}),Object(v.jsx)(L,{handleLanguageChange:function(e){a(e)},lang:s})]})})};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.6a472d17.chunk.js.map