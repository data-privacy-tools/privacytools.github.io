(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{106:function(t,n,e){"use strict";var r=e(0),o=e.n(r),a=e(109);n.a=function(t){return o.a.createElement(a.a,t,t.children)}},107:function(t,n,e){"use strict";e.d(n,"b",function(){return u}),e.d(n,"a",function(){return p});var r=e(37),o=e(25),a=e(26);function i(){var t=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  text-align: ",";\n  color: ",";\n  margin: ",";\n\n ","\n\n"]);return i=function(){return t},t}function c(){var t=Object(r.a)(["\n  text-align: ",";\n  color: ",";\n\n  @media (min-width: 701px) {\n    font-size: ",";\n    line-height: ",";\n  }\n\n  @media (max-width: 700px) {\n     font-size: ",";\n    line-height: ",";\n  }\n\n"]);return c=function(){return t},t}function l(){var t=Object(r.a)(["\n  color: ",";\n  font-weight: 400;\n  overflow-wrap: break-word;\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n"]);return l=function(){return t},t}var u=o.c.h2(l(),function(t){return t.theme.fourthColor},Object(a.b)("36px"),Object(a.b)("36px")),p=o.c.h1(c(),function(t){return t.centered?"center":"left"},function(t){var n=t.theme;return t.white?n.whiteColor:n.fourthColor},Object(a.b)("52px"),Object(a.b)("58px"),Object(a.b)("40px"),Object(a.b)("44px"));o.c.h4(i(),Object(a.b)("18px"),Object(a.b)("24px"),function(t){return t.centered?"center":"left"},function(t){var n=t.theme;return t.white?n.whiteColor:n.fourthColor},function(t){return t.centered?"0 auto":0},function(t){var n=t.maxWidth;return n&&"\n    max-width: ".concat(n,"px\n ")})},108:function(t,n,e){"use strict";var r=e(0),o=e.n(r),a=e(25).c.div.withConfig({displayName:"styles__StyledMargin",componentId:"bqdulz-0"})(["margin:",";"],function(t){return t.x?"".concat(t.x,"px"):"5px"});n.a=function(t){return o.a.createElement(a,{x:t.x})}},109:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=e(25).c.div.withConfig({displayName:"styles__StyledContainer",componentId:"mfq7p4-0"})(["position:relative;z-index:2;margin:0 auto;max-width:",";padding:0 24px;"],function(t){return t.maxWidth+"px"||!1})},110:function(t,n,e){"use strict";var r=e(0),o=e.n(r),a=e(37),i=e(25),c=e(26),l=e(35);function u(){var t=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n\n  &:after{\n    box-shadow: ",";\n  }\n  &:hover {\n    span{\n      color: ",";\n    }\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return u=function(){return t},t}function p(){var t=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  padding: 0.8rem 2rem;\n\n  &:after{\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    content: '';\n    border-radius: 4px;\n    opacity: 0;\n    box-shadow: ",";\n    transition: opacity .3s cubic-bezier(0,.5,.5,1), transform .1s cubic-bezier(0,.5,.5,1);\n  }\n  &:hover {\n    transform: translate3d(0, -1px, 0);\n    &:after{\n      opacity: 1;\n    }\n    span{\n      color: white\n    }\n  }\n  &:active {\n    transform: translate3d(0, 1px, 0);\n    background-color: ",";\n    &:after{\n      opacity: 0;\n    }\n  }\n"]);return p=function(){return t},t}function s(){var t=Object(a.a)(["\n  border: 2px solid ",";\n  color: ",";\n  padding: 0.5rem 2rem;\n  font-size: 16px;\n  background-color: transparent;\n\n  &:before{\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    height: calc(100% - 4px);\n    width: calc(100% - 4px);\n    content: '';\n    border-radius: 2px;\n    background-color: ",";\n    transition: transform .1s cubic-bezier(0,.5,.5,1);\n    transform: scale3d(1, 0, 1);\n    transform-origin : 50% 0%;\n    color: ",";\n  }\n\n  &:hover {\n    color: ",";\n    &:before{\n      transform: scale3d(1, 1, 1);\n    }\n  }\n"]);return s=function(){return t},t}function m(){var t=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n  margin-top: ",";\n  margin-bottom: ",";\n\n ","\n\n  span{\n    position: relative;\n    color: inherit\n  }\n"]);return m=function(){return t},t}function f(){var t=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n"]);return f=function(){return t},t}Object(i.c)(l.b)(f());var d=i.c.button(m(),function(t){var n=t.top;return n?"".concat(n,"px"):0},function(t){var n=t.bottom;return n?"".concat(n,"px"):0},function(t){return t.centered&&"\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n "}),h=Object(i.c)(d)(s(),function(t){return t.theme.secondaryColor},function(t){return t.theme.secondaryColor},function(t){var n=t.theme;return Object(c.a)(.03,n.secondaryColor)},function(t){return t.theme.secondaryColor},function(t){return t.theme.whiteColor}),b=Object(i.c)(d)(p(),function(t){return t.theme.secondaryColor},function(t){return t.theme.whiteColor},function(t){return t.theme.baseFontSize},function(t){var n=t.theme;return"0 4px 4px ".concat(Object(c.c)(n.secondaryColor,.2),", 0 8px 8px  ").concat(Object(c.c)(n.secondaryColor,.2),", 0 16px 16px ").concat(Object(c.c)(n.secondaryColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(n.secondaryColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(n.secondaryColor,.1)))},function(t){var n=t.theme;return Object(c.a)(.03,n.secondaryColor)}),x=Object(i.c)(b)(u(),function(t){return t.theme.whiteColor},function(t){return t.theme.secondaryColor},function(t){var n=t.theme;return"0 4px 4px ".concat(Object(c.c)(n.whiteColor,.2),", 0 8px 8px  ").concat(Object(c.c)(n.whiteColor,.2),", 0 16px 16px ").concat(Object(c.c)(n.whiteColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(n.whiteColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(n.whiteColor,.1)))},function(t){return t.theme.secondaryColor},function(t){var n=t.theme;return Object(c.a)(.03,n.whiteColor)});function g(t){return t.white?o.a.createElement(x,t,o.a.createElement("span",null,t.children)):o.a.createElement(b,t,o.a.createElement("span",null,t.children))}function y(t){return o.a.createElement(h,t,o.a.createElement("span",null,t.children))}e.d(n,"a",function(){return g}),e.d(n,"b",function(){return y})},116:function(t,n,e){t.exports=e.p+"static/media/logo.0f5ee2ce.svg"},117:function(t,n,e){t.exports=e.p+"static/media/br.4b39469f.svg"},118:function(t,n,e){t.exports=e.p+"static/media/us.944e5e02.svg"},119:function(t,n,e){t.exports=e.p+"static/media/trubr-logo.9b778ecf.svg"},120:function(t,n,e){"use strict";var r=e(0),o=e.n(r),a=e(25),i=e(109),c=e(26),l=a.c.header.withConfig({displayName:"styles__StyledHeader",componentId:"pp62kf-0"})(["position:",";z-index:10;top:0;left:0;width:100%;min-height:56px;padding:10px 0;background-color:",";backdrop-filter:blur(3px);"],function(t){var n=t.position;return n||"fixed"},function(t){return Object(c.c)(t.theme.whiteColor,.6)}),u=Object(a.c)(i.a).withConfig({displayName:"styles__StyledHeaderContainer",componentId:"pp62kf-1"})(["display:flex;justify-content:space-between;"]),p=e(116),s=e.n(p),m=e(126),f=e(128),d=e(133),h=e(131),b=e(132),x=e(36),g=e(35),y=a.c.div.withConfig({displayName:"styles__StyledMenu",componentId:"qn6uix-0"})(["@media (min-width:701px){display:flex;align-items:center;}@media (max-width:700px){position:fixed;opacity:",";top:0;right:0;z-index:99;width:100vw;min-height:100vh;padding:76px 24px 24px;background:",";"," transform:",";transition:transform .13s cubic-bezier(.215,.61,.355,1) .25s;box-shadow:",";a{display:block;}}"],function(t){return t.open?1:0},function(t){return t.theme.thirdColor},function(t){return!t.open&&"pointer-events: none;"},function(t){return t.open?"translate3d(0,0,0)":"translate3d(110%,0,0)"},function(t){var n=t.theme;return"-4px 0 4px ".concat(Object(c.c)(n.primaryColor,.05),", -8px 0 8px  ").concat(Object(c.c)(n.primaryColor,.05),", -16px 0 16px  ").concat(Object(c.c)(n.primaryColor,.05),", -32px 0 32px  ").concat(Object(c.c)(n.primaryColor,.1),",-64px 0 64px ").concat(Object(c.c)(n.primaryColor,.1))}),v=Object(a.c)(g.b).withConfig({displayName:"styles__StyledMenuItem",componentId:"qn6uix-1"})(["font-weight:300;@media (min-width:701px){margin:0 24px 0 0;}@media (max-width:700px){margin:12px 0 24px;display:block;}"]),w=a.c.div.withConfig({displayName:"styles__StyledSpacer",componentId:"qn6uix-2"})(["margin:0 12px;"]),O=Object(a.c)(g.b).withConfig({displayName:"styles__StyledLoginButton",componentId:"qn6uix-3"})(["position:relative;padding:0.4rem 1.4rem;border-radius:4px;border:2px solid ",";span{position:relative;color:",";}&:before{position:absolute;left:2px;top:2px;height:calc(100% - 4px);width:calc(100% - 4px);content:'';border-radius:2px;background-color:",";transition:transform 0.1s cubic-bezier(0,0.5,0.5,1);transform:scale3d(1,0,1);transform-origin:50% 100%;color:",";}&:hover{color:",";&:before{transform:scale3d(1,1,1);}span{color:",";}}"],function(t){return t.theme.secondaryColor},function(t){return t.theme.secondaryColor},function(t){var n=t.theme;return Object(c.a)(.03,n.secondaryColor)},function(t){return t.theme.secondaryColor},function(t){return t.theme.whiteColor},function(t){return t.theme.whiteColor}),j=a.c.div.withConfig({displayName:"styles__StyledHamburgerMenu",componentId:"qn6uix-4"})(["position:relative;margin-top:2px;margin-left:12px;z-index:999;display:inline-block;width:40px;height:24px;cursor:pointer;@media (min-width:701px){display:none}.hamburger-inner{position:absolute;top:auto;bottom:0;display:block;margin-top:-2px;width:40px;height:4px;transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";"," "," &:after,&:before{position:absolute;width:40px;height:4px;display:block;content:'';transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";}&:after{"," "," "," ","}&:before{"," "," "," ","}}"],function(t){return t.theme.secondaryColor},function(t){return t.open&&"transform: translate3d(0,-10px,0) rotate(-45deg);"},function(t){return t.open&&"transition-timing-function: cubic-bezier(.215,.61,.355,1);"},function(t){return t.theme.secondaryColor},function(t){return t.open&&"top: 0;"},function(t){return!t.open&&"top: -10px;"},function(t){return t.open&&"transition: top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s; transform: rotate(-90deg);"},function(t){return!t.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear; "},function(t){return t.open&&"bottom: 0;"},function(t){return t.open&&"transition: top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s; opacity: 0"},function(t){return!t.open&&"top: -20px;"},function(t){return!t.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear;"}),C=e(127),E=e(420),k=a.c.span.withConfig({displayName:"styles__StyledOption",componentId:"sc-6vvufw-0"})(["display:flex;height:100%;align-items:center;img{margin-right:5px;border-radius:20px;}@media (max-width:700px){span{display:none;}}"]),z=Object(a.c)(E.a).withConfig({displayName:"styles__StyledSelector",componentId:"sc-6vvufw-1"})(["background:transparent;@media (min-width:700px){width:150px;}"]),_=e(117),S=e.n(_),I=e(118),P=e.n(I),N=E.a.Option;var M=function(){var t=Object(x.c)().i18n,n=Object(r.useState)("pt_BR"),e=Object(C.a)(n,2),a=e[0],i=e[1];return Object(r.useEffect)(function(){t.changeLanguage(a)},[t,a]),o.a.createElement(z,{defaultValue:"pt_BR",size:"large",onChange:function(t){i(t)},style:{marginLeft:"20px",marginTop:0}},o.a.createElement(N,{value:"en"},o.a.createElement(k,null,o.a.createElement("img",{src:P.a,height:20,width:20,alt:"English"}),o.a.createElement("span",null,"English"))),o.a.createElement(N,{value:"pt_BR"},o.a.createElement(k,null,o.a.createElement("img",{src:S.a,height:20,width:20,alt:"Portugu\xeas"}),o.a.createElement("span",null,"Portugu\xeas"))))},q=function(t){function n(){var t,e;Object(m.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(d.a)(this,(t=Object(h.a)(n)).call.apply(t,[this].concat(o)))).state={openMenu:!1},e.setOpenMenu=function(t){return e.setState(function(){return{openMenu:t}})},e}return Object(b.a)(n,t),Object(f.a)(n,[{key:"render",value:function(){var t=this,n=this.state.openMenu,e=this.props,r=e.page,a=e.t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{open:n},o.a.createElement(v,{to:"contact"},a("menu.itens.email")),o.a.createElement(w,null),"login"!==r&&o.a.createElement(v,{to:"login"},a("menu.itens.login")),"signUp"!==r&&o.a.createElement(O,{to:"signUp"},o.a.createElement("span",null,a("menu.itens.create")))),o.a.createElement(M,null),o.a.createElement(j,{open:n,onClick:function(){return t.setOpenMenu(!n)}},o.a.createElement("div",{className:"hamburger-inner"})))}}]),n}(r.PureComponent),R=Object(x.d)()(o.a.memo(q));n.a=function(t){return o.a.createElement(l,{position:t.position},o.a.createElement(u,null,o.a.createElement(g.b,{to:"/"},o.a.createElement("img",{src:s.a,height:56,alt:"Privacy Tools - LGPD - GDPR - CCPA",title:"Privacy Tools - LGPD - GDPR - CCPA"})),o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(R,{page:t.page}))))}},121:function(t,n,e){"use strict";var r=e(0),o=e.n(r),a=e(36),i=(e(119),e(107)),c=e(110),l=e(37),u=e(25),p=e(35),s=e(106);function m(){var t=Object(l.a)(["\n\tmargin: 0 0 0 12px;\n"]);return m=function(){return t},t}function f(){var t=Object(l.a)(["\n\tfont-weight: 300;\n\tdisplay: block;\n\tcolor: ",";\n\n\t@media (min-width: 701px) {\n\t\tmargin: 0 24px 0 0;\n\t}\n\n\t@media (max-width: 700px) {\n\t\tmargin: 0 0 24px 0;\n\t}\n"]);return f=function(){return t},t}function d(){var t=Object(l.a)(["\n\t@media (min-width: 701px) {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t@media (max-width: 700px) {\n\t\tdisplay: block;\n\t}\n"]);return d=function(){return t},t}function h(){var t=Object(l.a)(["\n\tpadding: 72px 0 0;\n\n\t.footer-list {\n\t\tmargin-top: 36px;\n\t\th3 {\n\t\t\tmargin-bottom: 24px;\n\t\t}\n\t\tli {\n\t\t\tmargin-top: 6px;\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n"]);return h=function(){return t},t}function b(){var t=Object(l.a)(["\n\tpadding: 72px 24px;\n\tbackground: ",";\n"]);return b=function(){return t},t}var x=Object(u.c)(s.a)(b(),function(t){return t.theme.secondaryColor}),g=u.c.footer(h(),function(t){return t.fourthColor}),y=u.c.div(d()),v=Object(u.c)(p.b)(f(),function(t){return t.theme.thirdColor}),w=u.c.a(m()),O=g,j=e(108),C=e(150),E=e(411);var k=function(){return Object(a.c)().t,o.a.createElement(y,null,o.a.createElement(v,{to:"/terms-of-use"},"Terms of Use"),o.a.createElement(v,{to:"/privacy-policy"},"Privacy Policy"))};C.a.IconFont;n.a=function(){var t=Object(a.c)().t;return o.a.createElement(O,null,o.a.createElement(i.a,{centered:!0},t("footer.title")),o.a.createElement(p.b,{to:"/contact"},o.a.createElement(c.a,{as:"span",centered:!0},t("know-more"))),o.a.createElement(j.a,{x:72}),o.a.createElement(x,null,o.a.createElement(j.a,{x:36}),o.a.createElement(E.a,{type:"flex",justify:"space-between"},o.a.createElement(k,null),o.a.createElement("div",null,o.a.createElement(w,{href:"https://www.linkedin.com/company/privacy-tools/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"24px",color:"#fff"}},o.a.createElement(C.a,{type:"linkedin"})),o.a.createElement(w,{href:"https://www.facebook.com/privacytoolsgdpr/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"24px",color:"#fff"}},o.a.createElement(C.a,{type:"facebook"})),o.a.createElement(w,{href:"https://twitter.com/ToolsPrivacy",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"24px",color:"#fff"}},o.a.createElement(C.a,{type:"twitter"})))),o.a.createElement(j.a,{x:24}),o.a.createElement(E.a,{type:"flex",justify:"space-between"},o.a.createElement("a",{href:"/",style:{fontSize:"12px",color:"#fff"}}," ","Uma empresa do",o.a.createElement("img",{src:"http://www.trubr.com/wp-content/themes/maven/img/logo%20grupo%20maven.png",height:24,style:{marginLeft:"3px"},alt:"Maven"})),o.a.createElement("small",{style:{color:"#fff"}},"Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved"))))}},123:function(t,n,e){"use strict";var r=e(37),o=e(25),a=e(26);function i(){var t=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  text-align: ",";\n  max-width: ",";\n  margin-left: ",";\n  margin-right: ",";\n  color: ",";\n"]);return i=function(){return t},t}n.a=o.c.p(i(),Object(a.b)("18px"),Object(a.b)("24px"),function(t){return t.centered?"center":"left"},function(t){var n=t.maxWidth;return n?"".concat(n,"px"):"100%"},function(t){return t.maxWidth?"auto":0},function(t){return t.maxWidth?"auto":0},function(t){var n=t.theme;return t.white?n.whiteColor:n.fourthColor})},124:function(t,n,e){"use strict";var r=e(0),o=e.n(r),a=e(120),i=e(121);n.a=o.a.memo(function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),t.children,o.a.createElement(i.a,null))})},158:function(t,n,e){t.exports=e.p+"static/media/confirmedEmail.642017d5.svg"},428:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(36),i=e(25),c=e(26),l=i.c.div.withConfig({displayName:"styles__StyledContainer",componentId:"sc-22ubn1-0"})(["position:relative;z-index:2;margin:0 auto;width:95%;max-width:720px;padding:72px;border-radius:12px;box-shadow:",";img{display:block;margin:0 auto;max-width:420px;}"],function(t){var n=t.theme;return"0 4px 4px ".concat(Object(c.c)(n.primaryColor,.05),", 0 8px 8px  ").concat(Object(c.c)(n.primaryColor,.05),", 0 16px 16px  ").concat(Object(c.c)(n.primaryColor,.05),", 0 32px 32px  ").concat(Object(c.c)(n.primaryColor,.1),", 0 64px 64px ").concat(Object(c.c)(n.primaryColor,.1))}),u=e(107),p=e(123),s=e(108),m=e(124),f=e(158),d=e.n(f);n.default=function(){var t=Object(a.c)().t;return o.a.createElement(m.a,null,o.a.createElement(s.a,{x:96}),o.a.createElement(l,null,o.a.createElement("img",{src:d.a,alt:"E-mail"}),o.a.createElement(u.a,{centered:!0},t("contact.mail.error.title")),o.a.createElement(p.a,{centered:!0,maxWidth:520},t("contact.mail.error.headline"))),o.a.createElement(s.a,{x:24}))}}}]);
//# sourceMappingURL=13.6a01d945.chunk.js.map