(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(38),o=n(25),a=n(27);function i(){var e=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  text-align: ",";\n  color: ",";\n  margin: ",";\n\n ","\n\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  text-align: ",";\n  color: ",";\n\n  @media (min-width: 701px) {\n    font-size: ",";\n    line-height: ",";\n  }\n\n  @media (max-width: 700px) {\n     font-size: ",";\n    line-height: ",";\n  }\n\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 400;\n  overflow-wrap: break-word;\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n"]);return l=function(){return e},e}var s=o.c.h2(l(),function(e){return e.theme.fourthColor},Object(a.b)("36px"),Object(a.b)("36px")),u=o.c.h1(c(),function(e){return e.centered?"center":"left"},function(e){var t=e.theme;return e.white?t.whiteColor:t.fourthColor},Object(a.b)("52px"),Object(a.b)("58px"),Object(a.b)("40px"),Object(a.b)("44px"));o.c.h4(i(),Object(a.b)("18px"),Object(a.b)("24px"),function(e){return e.centered?"center":"left"},function(e){var t=e.theme;return e.white?t.whiteColor:t.fourthColor},function(e){return e.centered?"0 auto":0},function(e){var t=e.maxWidth;return t&&"\n    max-width: ".concat(t,"px\n ")})},107:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(25).c.div.withConfig({displayName:"styles__StyledMargin",componentId:"bqdulz-0"})(["margin:",";"],function(e){return e.x?"".concat(e.x,"px"):"5px"});t.a=function(e){return o.a.createElement(a,{x:e.x})}},110:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(25).c.div.withConfig({displayName:"styles__StyledContainer",componentId:"mfq7p4-0"})(["position:relative;z-index:2;margin:0 auto;max-width:",";padding:0 24px;"],function(e){return e.maxWidth+"px"||!1})},111:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(38),i=n(25),c=n(27),l=n(36);function s(){var e=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n\n  &:after{\n    box-shadow: ",";\n  }\n  &:hover {\n    span{\n      color: ",";\n    }\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return s=function(){return e},e}function u(){var e=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  padding: 0.8rem 2rem;\n\n  &:after{\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    content: '';\n    border-radius: 4px;\n    opacity: 0;\n    box-shadow: ",";\n    transition: opacity .3s cubic-bezier(0,.5,.5,1), transform .1s cubic-bezier(0,.5,.5,1);\n  }\n  &:hover {\n    transform: translate3d(0, -1px, 0);\n    &:after{\n      opacity: 1;\n    }\n    span{\n      color: white\n    }\n  }\n  &:active {\n    transform: translate3d(0, 1px, 0);\n    background-color: ",";\n    &:after{\n      opacity: 0;\n    }\n  }\n"]);return u=function(){return e},e}function p(){var e=Object(a.a)(["\n  border: 2px solid ",";\n  color: ",";\n  padding: 0.5rem 2rem;\n  font-size: 16px;\n  background-color: transparent;\n\n  &:before{\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    height: calc(100% - 4px);\n    width: calc(100% - 4px);\n    content: '';\n    border-radius: 2px;\n    background-color: ",";\n    transition: transform .1s cubic-bezier(0,.5,.5,1);\n    transform: scale3d(1, 0, 1);\n    transform-origin : 50% 0%;\n    color: ",";\n  }\n\n  &:hover {\n    color: ",";\n    &:before{\n      transform: scale3d(1, 1, 1);\n    }\n  }\n"]);return p=function(){return e},e}function m(){var e=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n  margin-top: ",";\n  margin-bottom: ",";\n\n ","\n\n  span{\n    position: relative;\n    color: inherit\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n"]);return d=function(){return e},e}Object(i.c)(l.b)(d());var f=i.c.button(m(),function(e){var t=e.top;return t?"".concat(t,"px"):0},function(e){var t=e.bottom;return t?"".concat(t,"px"):0},function(e){return e.centered&&"\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n "}),h=Object(i.c)(f)(p(),function(e){return e.theme.secondaryColor},function(e){return e.theme.secondaryColor},function(e){var t=e.theme;return Object(c.a)(.03,t.secondaryColor)},function(e){return e.theme.secondaryColor},function(e){return e.theme.whiteColor}),b=Object(i.c)(f)(u(),function(e){return e.theme.secondaryColor},function(e){return e.theme.whiteColor},function(e){return e.theme.baseFontSize},function(e){var t=e.theme;return"0 4px 4px ".concat(Object(c.c)(t.secondaryColor,.2),", 0 8px 8px  ").concat(Object(c.c)(t.secondaryColor,.2),", 0 16px 16px ").concat(Object(c.c)(t.secondaryColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(t.secondaryColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(t.secondaryColor,.1)))},function(e){var t=e.theme;return Object(c.a)(.03,t.secondaryColor)}),x=Object(i.c)(b)(s(),function(e){return e.theme.whiteColor},function(e){return e.theme.secondaryColor},function(e){var t=e.theme;return"0 4px 4px ".concat(Object(c.c)(t.whiteColor,.2),", 0 8px 8px  ").concat(Object(c.c)(t.whiteColor,.2),", 0 16px 16px ").concat(Object(c.c)(t.whiteColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(t.whiteColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(t.whiteColor,.1)))},function(e){return e.theme.secondaryColor},function(e){var t=e.theme;return Object(c.a)(.03,t.whiteColor)});function g(e){return e.white?o.a.createElement(x,e,o.a.createElement("span",null,e.children)):o.a.createElement(b,e,o.a.createElement("span",null,e.children))}function y(e){return o.a.createElement(h,e,o.a.createElement("span",null,e.children))}n.d(t,"a",function(){return g}),n.d(t,"b",function(){return y})},116:function(e,t,n){e.exports=n.p+"static/media/logo.0f5ee2ce.svg"},117:function(e,t,n){e.exports=n.p+"static/media/br.4b39469f.svg"},118:function(e,t,n){e.exports=n.p+"static/media/us.944e5e02.svg"},119:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(25),i=n(110),c=n(27),l=a.c.header.withConfig({displayName:"styles__StyledHeader",componentId:"pp62kf-0"})(["position:",";z-index:10;top:0;left:0;width:100%;min-height:56px;padding:10px 0;background-color:",";backdrop-filter:blur(3px);"],function(e){var t=e.position;return t||"fixed"},function(e){return Object(c.c)(e.theme.whiteColor,.6)}),s=Object(a.c)(i.a).withConfig({displayName:"styles__StyledHeaderContainer",componentId:"pp62kf-1"})(["display:flex;justify-content:space-between;"]),u=n(116),p=n.n(u),m=n(127),d=n(128),f=n(130),h=n(129),b=n(131),x=n(37),g=n(36),y=a.c.div.withConfig({displayName:"styles__StyledMenu",componentId:"qn6uix-0"})(["@media (min-width:701px){display:flex;align-items:center;}@media (max-width:700px){position:fixed;opacity:",";top:0;right:0;z-index:99;width:100vw;min-height:100vh;padding:76px 24px 24px;background:",";"," transform:",";transition:transform .13s cubic-bezier(.215,.61,.355,1) .25s;box-shadow:",";a{display:block;}}"],function(e){return e.open?1:0},function(e){return e.theme.thirdColor},function(e){return!e.open&&"pointer-events: none;"},function(e){return e.open?"translate3d(0,0,0)":"translate3d(110%,0,0)"},function(e){var t=e.theme;return"-4px 0 4px ".concat(Object(c.c)(t.primaryColor,.05),", -8px 0 8px  ").concat(Object(c.c)(t.primaryColor,.05),", -16px 0 16px  ").concat(Object(c.c)(t.primaryColor,.05),", -32px 0 32px  ").concat(Object(c.c)(t.primaryColor,.1),",-64px 0 64px ").concat(Object(c.c)(t.primaryColor,.1))}),v=Object(a.c)(g.b).withConfig({displayName:"styles__StyledMenuItem",componentId:"qn6uix-1"})(["font-weight:300;@media (min-width:701px){margin:0 24px 0 0;}@media (max-width:700px){margin:12px 0 24px;display:block;}"]),w=a.c.div.withConfig({displayName:"styles__StyledSpacer",componentId:"qn6uix-2"})(["margin:0 12px;"]),E=Object(a.c)(g.b).withConfig({displayName:"styles__StyledLoginButton",componentId:"qn6uix-3"})(["position:relative;padding:0.4rem 1.4rem;border-radius:4px;border:2px solid ",";span{position:relative;color:",";}&:before{position:absolute;left:2px;top:2px;height:calc(100% - 4px);width:calc(100% - 4px);content:'';border-radius:2px;background-color:",";transition:transform 0.1s cubic-bezier(0,0.5,0.5,1);transform:scale3d(1,0,1);transform-origin:50% 100%;color:",";}&:hover{color:",";&:before{transform:scale3d(1,1,1);}span{color:",";}}"],function(e){return e.theme.secondaryColor},function(e){return e.theme.secondaryColor},function(e){var t=e.theme;return Object(c.a)(.03,t.secondaryColor)},function(e){return e.theme.secondaryColor},function(e){return e.theme.whiteColor},function(e){return e.theme.whiteColor}),O=a.c.div.withConfig({displayName:"styles__StyledHamburgerMenu",componentId:"qn6uix-4"})(["position:relative;margin-top:2px;margin-left:12px;z-index:999;display:inline-block;width:40px;height:24px;cursor:pointer;@media (min-width:701px){display:none}.hamburger-inner{position:absolute;top:auto;bottom:0;display:block;margin-top:-2px;width:40px;height:4px;transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";"," "," &:after,&:before{position:absolute;width:40px;height:4px;display:block;content:'';transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";}&:after{"," "," "," ","}&:before{"," "," "," ","}}"],function(e){return e.theme.secondaryColor},function(e){return e.open&&"transform: translate3d(0,-10px,0) rotate(-45deg);"},function(e){return e.open&&"transition-timing-function: cubic-bezier(.215,.61,.355,1);"},function(e){return e.theme.secondaryColor},function(e){return e.open&&"top: 0;"},function(e){return!e.open&&"top: -10px;"},function(e){return e.open&&"transition: top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s; transform: rotate(-90deg);"},function(e){return!e.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear; "},function(e){return e.open&&"bottom: 0;"},function(e){return e.open&&"transition: top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s; opacity: 0"},function(e){return!e.open&&"top: -20px;"},function(e){return!e.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear;"}),j=n(126),C=n(391),_=a.c.span.withConfig({displayName:"styles__StyledOption",componentId:"sc-6vvufw-0"})(["display:flex;height:100%;align-items:center;img{margin-right:5px;border-radius:20px;}@media (max-width:700px){span{display:none;}}"]),S=Object(a.c)(C.a).withConfig({displayName:"styles__StyledSelector",componentId:"sc-6vvufw-1"})(["background:transparent;@media (min-width:700px){width:150px;}"]),k=n(117),z=n.n(k),R=n(118),I=n.n(R),P=C.a.Option;var N=function(){var e=Object(x.c)().i18n,t=Object(r.useState)("pt_BR"),n=Object(j.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)(function(){e.changeLanguage(a)},[e,a]),o.a.createElement(S,{defaultValue:"pt_BR",size:"large",onChange:function(e){i(e)},style:{marginLeft:"20px",marginTop:0}},o.a.createElement(P,{value:"en"},o.a.createElement(_,null,o.a.createElement("img",{src:I.a,height:20,width:20,alt:"English"}),o.a.createElement("span",null,"English"))),o.a.createElement(P,{value:"pt_BR"},o.a.createElement(_,null,o.a.createElement("img",{src:z.a,height:20,width:20,alt:"Portugu\xeas"}),o.a.createElement("span",null,"Portugu\xeas"))))},L=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={openMenu:!1},n.setOpenMenu=function(e){return n.setState(function(){return{openMenu:e}})},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.openMenu,n=this.props,r=n.page,a=n.t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{open:t},o.a.createElement(v,{to:"contact"},a("menu.itens.email")),o.a.createElement(w,null),"login"!==r&&o.a.createElement(v,{to:"login"},a("menu.itens.login")),"signUp"!==r&&o.a.createElement(E,{to:"signUp"},o.a.createElement("span",null,a("menu.itens.create")))),o.a.createElement(N,null),o.a.createElement(O,{open:t,onClick:function(){return e.setOpenMenu(!t)}},o.a.createElement("div",{className:"hamburger-inner"})))}}]),t}(r.PureComponent),M=Object(x.d)()(o.a.memo(L));t.a=function(e){return o.a.createElement(l,{position:e.position},o.a.createElement(s,null,o.a.createElement(g.b,{to:"/"},o.a.createElement("img",{src:p.a,height:56,alt:"Privacy Tools - LGPD - GDPR - CCPA",title:"Privacy Tools - LGPD - GDPR - CCPA"})),o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(M,{page:e.page}))))}},155:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(25),o=n(27),a=r.c.div.withConfig({displayName:"styles__StyledFormWrapper",componentId:"xcb6zd-0"})(["position:relative;margin-top:72px;min-height:calc(100vh - 72px);background-color:white;background-image:",";background-repeat:repeat-x;background-position:top;> div{margin:0 auto;width:95%;max-width:480px;@media (min-width:701px){padding:72px;}@media (max-width:700px){padding:24px;}border-radius:8px;background-color:white;box-shadow:",";}"],function(e){var t=e.theme;return"url(".concat(t.backGround,")")},function(e){var t=e.theme;return"0 2px 4px ".concat(Object(o.c)(t.primaryColor,.05),", 0 4px 8px  ").concat(Object(o.c)(t.primaryColor,.05),", 0 16px 16px  ").concat(Object(o.c)(t.primaryColor,.05),", 0 32px 32px  ").concat(Object(o.c)(t.primaryColor,.07),", 0 64px 64px ").concat(Object(o.c)(t.primaryColor,.07))})},156:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"},159:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(25).c.div.withConfig({displayName:"styles__StyledMain",componentId:"ipqs2p-0"})(["background-color:",""],function(e){return e.theme.sixthColor});t.a=function(e){return o.a.createElement(a,null,e.children)}},377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(378),o=n(379),a=null,i="https://api.emailjs.com";function c(e,t,n){return void 0===n&&(n={}),new Promise(function(o,a){var i=new XMLHttpRequest;for(var c in i.addEventListener("load",function(e){var t=new r.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?o(t):a(t)}),i.addEventListener("error",function(e){a(new r.EmailJSResponseStatus(e.target))}),i.open("POST",e,!0),n)i.setRequestHeader(c,n[c]);i.send(t)})}function l(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}t.init=function(e,t){a=e,i=t||"https://api.emailjs.com"},t.send=function(e,t,n,r){var o={lib_version:"2.3.2",user_id:r||a,service_id:e,template_id:t,template_params:l(n)};return c(i+"/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},t.sendForm=function(e,t,n,r){if("string"===typeof n&&(n=document.querySelector(n)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";o.UI.progressState(n);var l=new FormData(n);return l.append("lib_version","2.3.2"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",r||a),c(i+"/api/v1.0/email/send-form",l).then(function(e){return o.UI.successState(n),e},function(e){return o.UI.errorState(n),Promise.reject(e)})}},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e){this.status=e.status,this.text=e.responseText}}();t.EmailJSResponseStatus=r},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=r},387:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(37),i=n(389),c=n(390),l=n(107),s=n(111),u=n(106),p=n(159),m=n(119),d=n(155),f=n(191),h=n(377),b=n(202),x=n(156);t.default=i.a.create({name:"Contact"})(function(e){var t=Object(a.c)().t,n=function(t,n){h.init("user_huOCumtg7FQBmiFSYEt8A"),h.send("mailgun",t,{from_email:n.email,from_name:n.name,message_html:n.Comment,from_website:n.website}).then(function(t){console.log("SUCESSO!"),e.history.push("/mail-success")}).catch(function(t){console.error("Failed to send feedback. Error: ",t),e.history.push("/mail-error")})},r=e.form.getFieldDecorator;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.Helmet,null,o.a.createElement("title",null,t("head.contact.title")),o.a.createElement("description",null,t("head.contact.description")),o.a.createElement("script",{type:"text/javascript",src:"//cdn.emailjs.com/sdk/2.3.2/email.min.js"})),o.a.createElement(m.a,{position:"relative"}),o.a.createElement(p.a,null,o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(u.b,null,t("contact.title")),o.a.createElement("p",null,t("contact.headline")),o.a.createElement(l.a,{x:24}),o.a.createElement(i.a,{onSubmit:function(t){t.preventDefault(),e.form.validateFields(function(e,t){e||(console.log({values:t}),n("template_HS6WICh0",t))})}},o.a.createElement(i.a.Item,null,r("Name",{rules:[{required:!0,message:t("please-input-your-name")}]})(o.a.createElement(c.a,{size:"large",placeholder:t("name")}))),o.a.createElement(l.a,{x:12}),o.a.createElement(i.a.Item,null,r("email",{rules:[{type:"email",message:t("please-input-your-email")},{required:!0,message:t("please-input-your-email")}]})(o.a.createElement(c.a,{size:"large",type:"email",placeholder:"E-mail"}))),o.a.createElement(l.a,{x:12}),o.a.createElement(i.a.Item,null,r("website",{rules:[{required:!1}]})(o.a.createElement(c.a,{size:"large",placeholder:"Website"}))),r("captcha")(o.a.createElement(c.a,{type:"hidden"})),o.a.createElement(l.a,{x:12}),o.a.createElement(i.a.Item,null,r("Comment",{rules:[{required:!0,message:t("please-input-your-message")}]})(o.a.createElement(c.a.TextArea,{size:"large",placeholder:t("message"),autosize:{minRows:5}}))),o.a.createElement(l.a,{x:36}),o.a.createElement(b.a,{sitekey:x.a,onChange:function(t){return e.form.setFieldsValue({captcha:t})}}),o.a.createElement(l.a,{x:36}),o.a.createElement(s.a,{centered:!0,htmlType:"submit"},t("send")))))))})}}]);
//# sourceMappingURL=11.830d47ed.chunk.js.map