(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{106:function(n,t,e){"use strict";e.d(t,"b",function(){return l}),e.d(t,"a",function(){return p});var r=e(38),o=e(25),a=e(27);function i(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  text-align: ",";\n  color: ",";\n  margin: ",";\n\n ","\n\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  text-align: ",";\n  color: ",";\n\n  @media (min-width: 701px) {\n    font-size: ",";\n    line-height: ",";\n  }\n\n  @media (max-width: 700px) {\n     font-size: ",";\n    line-height: ",";\n  }\n\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 400;\n  overflow-wrap: break-word;\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n"]);return u=function(){return n},n}var l=o.c.h2(u(),function(n){return n.theme.fourthColor},Object(a.b)("36px"),Object(a.b)("36px")),p=o.c.h1(c(),function(n){return n.centered?"center":"left"},function(n){var t=n.theme;return n.white?t.whiteColor:t.fourthColor},Object(a.b)("52px"),Object(a.b)("58px"),Object(a.b)("40px"),Object(a.b)("44px"));o.c.h4(i(),Object(a.b)("18px"),Object(a.b)("24px"),function(n){return n.centered?"center":"left"},function(n){var t=n.theme;return n.white?t.whiteColor:t.fourthColor},function(n){return n.centered?"0 auto":0},function(n){var t=n.maxWidth;return t&&"\n    max-width: ".concat(t,"px\n ")})},108:function(n,t,e){"use strict";var r=e(0),o=e.n(r),a=e(25).c.div.withConfig({displayName:"styles__StyledMargin",componentId:"bqdulz-0"})(["margin:",";"],function(n){return n.x?"".concat(n.x,"px"):"5px"});t.a=function(n){return o.a.createElement(a,{x:n.x})}},109:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=e(25).c.div.withConfig({displayName:"styles__StyledContainer",componentId:"mfq7p4-0"})(["position:relative;z-index:2;margin:0 auto;max-width:",";padding:0 24px;"],function(n){return n.maxWidth+"px"||!1})},110:function(n,t,e){"use strict";var r=e(0),o=e.n(r),a=e(38),i=e(25),c=e(27),u=e(36);function l(){var n=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n\n  &:after{\n    box-shadow: ",";\n  }\n  &:hover {\n    span{\n      color: ",";\n    }\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return l=function(){return n},n}function p(){var n=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  padding: 0.8rem 2rem;\n\n  &:after{\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    content: '';\n    border-radius: 4px;\n    opacity: 0;\n    box-shadow: ",";\n    transition: opacity .3s cubic-bezier(0,.5,.5,1), transform .1s cubic-bezier(0,.5,.5,1);\n  }\n  &:hover {\n    transform: translate3d(0, -1px, 0);\n    &:after{\n      opacity: 1;\n    }\n    span{\n      color: white\n    }\n  }\n  &:active {\n    transform: translate3d(0, 1px, 0);\n    background-color: ",";\n    &:after{\n      opacity: 0;\n    }\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(a.a)(["\n  border: 2px solid ",";\n  color: ",";\n  padding: 0.5rem 2rem;\n  font-size: 16px;\n  background-color: transparent;\n\n  &:before{\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    height: calc(100% - 4px);\n    width: calc(100% - 4px);\n    content: '';\n    border-radius: 2px;\n    background-color: ",";\n    transition: transform .1s cubic-bezier(0,.5,.5,1);\n    transform: scale3d(1, 0, 1);\n    transform-origin : 50% 0%;\n    color: ",";\n  }\n\n  &:hover {\n    color: ",";\n    &:before{\n      transform: scale3d(1, 1, 1);\n    }\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n  margin-top: ",";\n  margin-bottom: ",";\n\n ","\n\n  span{\n    position: relative;\n    color: inherit\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n"]);return d=function(){return n},n}Object(i.c)(u.b)(d());var m=i.c.button(f(),function(n){var t=n.top;return t?"".concat(t,"px"):0},function(n){var t=n.bottom;return t?"".concat(t,"px"):0},function(n){return n.centered&&"\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n "}),b=Object(i.c)(m)(s(),function(n){return n.theme.secondaryColor},function(n){return n.theme.secondaryColor},function(n){var t=n.theme;return Object(c.a)(.03,t.secondaryColor)},function(n){return n.theme.secondaryColor},function(n){return n.theme.whiteColor}),h=Object(i.c)(m)(p(),function(n){return n.theme.secondaryColor},function(n){return n.theme.whiteColor},function(n){return n.theme.baseFontSize},function(n){var t=n.theme;return"0 4px 4px ".concat(Object(c.c)(t.secondaryColor,.2),", 0 8px 8px  ").concat(Object(c.c)(t.secondaryColor,.2),", 0 16px 16px ").concat(Object(c.c)(t.secondaryColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(t.secondaryColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(t.secondaryColor,.1)))},function(n){var t=n.theme;return Object(c.a)(.03,t.secondaryColor)}),x=Object(i.c)(h)(l(),function(n){return n.theme.whiteColor},function(n){return n.theme.secondaryColor},function(n){var t=n.theme;return"0 4px 4px ".concat(Object(c.c)(t.whiteColor,.2),", 0 8px 8px  ").concat(Object(c.c)(t.whiteColor,.2),", 0 16px 16px ").concat(Object(c.c)(t.whiteColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(t.whiteColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(t.whiteColor,.1)))},function(n){return n.theme.secondaryColor},function(n){var t=n.theme;return Object(c.a)(.03,t.whiteColor)});function g(n){return n.white?o.a.createElement(x,n,o.a.createElement("span",null,n.children)):o.a.createElement(h,n,o.a.createElement("span",null,n.children))}function y(n){return o.a.createElement(b,n,o.a.createElement("span",null,n.children))}e.d(t,"a",function(){return g}),e.d(t,"b",function(){return y})},114:function(n,t,e){"use strict";var r=e(0),o=e.n(r),a=e(109);t.a=function(n){return o.a.createElement(a.a,n,n.children)}},117:function(n,t,e){n.exports=e.p+"static/media/logo.0f5ee2ce.svg"},118:function(n,t,e){n.exports=e.p+"static/media/br.4b39469f.svg"},119:function(n,t,e){n.exports=e.p+"static/media/us.944e5e02.svg"},120:function(n,t,e){"use strict";var r=e(0),o=e.n(r),a=e(25),i=e(109),c=e(27),u=a.c.header.withConfig({displayName:"styles__StyledHeader",componentId:"pp62kf-0"})(["position:",";z-index:10;top:0;left:0;width:100%;min-height:56px;padding:10px 0;background-color:",";backdrop-filter:blur(3px);"],function(n){var t=n.position;return t||"fixed"},function(n){return Object(c.c)(n.theme.whiteColor,.6)}),l=Object(a.c)(i.a).withConfig({displayName:"styles__StyledHeaderContainer",componentId:"pp62kf-1"})(["display:flex;justify-content:space-between;"]),p=e(117),s=e.n(p),f=e(127),d=e(128),m=e(130),b=e(129),h=e(131),x=e(37),g=e(36),y=a.c.div.withConfig({displayName:"styles__StyledMenu",componentId:"qn6uix-0"})(["@media (min-width:701px){display:flex;align-items:center;}@media (max-width:700px){position:fixed;opacity:",";top:0;right:0;z-index:99;width:100vw;min-height:100vh;padding:76px 24px 24px;background:",";"," transform:",";transition:transform .13s cubic-bezier(.215,.61,.355,1) .25s;box-shadow:",";a{display:block;}}"],function(n){return n.open?1:0},function(n){return n.theme.thirdColor},function(n){return!n.open&&"pointer-events: none;"},function(n){return n.open?"translate3d(0,0,0)":"translate3d(110%,0,0)"},function(n){var t=n.theme;return"-4px 0 4px ".concat(Object(c.c)(t.primaryColor,.05),", -8px 0 8px  ").concat(Object(c.c)(t.primaryColor,.05),", -16px 0 16px  ").concat(Object(c.c)(t.primaryColor,.05),", -32px 0 32px  ").concat(Object(c.c)(t.primaryColor,.1),",-64px 0 64px ").concat(Object(c.c)(t.primaryColor,.1))}),v=Object(a.c)(g.b).withConfig({displayName:"styles__StyledMenuItem",componentId:"qn6uix-1"})(["font-weight:300;@media (min-width:701px){margin:0 24px;}@media (max-width:700px){margin:12px 0 24px;display:block;}"]),O=a.c.div.withConfig({displayName:"styles__StyledSpacer",componentId:"qn6uix-2"})(["margin:0 12px;"]),w=Object(a.c)(g.b).withConfig({displayName:"styles__StyledLoginButton",componentId:"qn6uix-3"})(["position:relative;padding:0.4rem 1.4rem;border-radius:4px;border:2px solid ",";span{position:relative;color:",";}&:before{position:absolute;left:2px;top:2px;height:calc(100% - 4px);width:calc(100% - 4px);content:'';border-radius:2px;background-color:",";transition:transform 0.1s cubic-bezier(0,0.5,0.5,1);transform:scale3d(1,0,1);transform-origin:50% 100%;color:",";}&:hover{color:",";&:before{transform:scale3d(1,1,1);}span{color:",";}}"],function(n){return n.theme.secondaryColor},function(n){return n.theme.secondaryColor},function(n){var t=n.theme;return Object(c.a)(.03,t.secondaryColor)},function(n){return n.theme.secondaryColor},function(n){return n.theme.whiteColor},function(n){return n.theme.whiteColor}),j=a.c.div.withConfig({displayName:"styles__StyledHamburgerMenu",componentId:"qn6uix-4"})(["position:relative;margin-top:2px;margin-left:12px;z-index:999;display:inline-block;width:40px;height:24px;cursor:pointer;@media (min-width:701px){display:none}.hamburger-inner{position:absolute;top:auto;bottom:0;display:block;margin-top:-2px;width:40px;height:4px;transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";"," "," &:after,&:before{position:absolute;width:40px;height:4px;display:block;content:'';transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";}&:after{"," "," "," ","}&:before{"," "," "," ","}}"],function(n){return n.theme.secondaryColor},function(n){return n.open&&"transform: translate3d(0,-10px,0) rotate(-45deg);"},function(n){return n.open&&"transition-timing-function: cubic-bezier(.215,.61,.355,1);"},function(n){return n.theme.secondaryColor},function(n){return n.open&&"top: 0;"},function(n){return!n.open&&"top: -10px;"},function(n){return n.open&&"transition: top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s; transform: rotate(-90deg);"},function(n){return!n.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear; "},function(n){return n.open&&"bottom: 0;"},function(n){return n.open&&"transition: top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s; opacity: 0"},function(n){return!n.open&&"top: -20px;"},function(n){return!n.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear;"}),C=e(126),E=e(391),_=a.c.span.withConfig({displayName:"styles__StyledOption",componentId:"sc-6vvufw-0"})(["display:flex;height:100%;align-items:center;img{margin-right:5px;border-radius:20px;}@media (max-width:700px){span{display:none;}}"]),k=Object(a.c)(E.a).withConfig({displayName:"styles__StyledSelector",componentId:"sc-6vvufw-1"})(["@media (min-width:700px){width:150px;}"]),P=e(118),z=e.n(P),S=e(119),N=e.n(S),I=E.a.Option;var M=function(){var n=Object(x.c)().i18n,t=Object(r.useState)("pt_BR"),e=Object(C.a)(t,2),a=e[0],i=e[1];return Object(r.useEffect)(function(){n.changeLanguage(a)},[n,a]),o.a.createElement(k,{defaultValue:"pt_BR",size:"large",onChange:function(n){i(n)},style:{marginLeft:"20px",marginTop:0}},o.a.createElement(I,{value:"en"},o.a.createElement(_,null,o.a.createElement("img",{src:N.a,height:20,width:20,alt:"English"}),o.a.createElement("span",null,"English"))),o.a.createElement(I,{value:"pt_BR"},o.a.createElement(_,null,o.a.createElement("img",{src:z.a,height:20,width:20,alt:"Portugu\xeas"}),o.a.createElement("span",null,"Portugu\xeas"))))},R=function(n){function t(){var n,e;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(m.a)(this,(n=Object(b.a)(t)).call.apply(n,[this].concat(o)))).state={openMenu:!1},e.setOpenMenu=function(n){return e.setState(function(){return{openMenu:n}})},e}return Object(h.a)(t,n),Object(d.a)(t,[{key:"render",value:function(){var n=this,t=this.state.openMenu,e=this.props,r=e.page,a=e.t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{open:t},o.a.createElement(v,{to:"contact"},a("menu.itens.email")),o.a.createElement(O,null),"login"!==r&&o.a.createElement(v,{to:"login"},a("menu.itens.login")),"signUp"!==r&&o.a.createElement(w,{to:"signUp"},o.a.createElement("span",null,a("menu.itens.create")))),o.a.createElement(M,null),o.a.createElement(j,{open:t,onClick:function(){return n.setOpenMenu(!t)}},o.a.createElement("div",{className:"hamburger-inner"})))}}]),t}(r.PureComponent),T=Object(x.d)()(o.a.memo(R));t.a=function(n){return o.a.createElement(u,{position:n.position},o.a.createElement(l,null,o.a.createElement(g.b,{to:"/"},o.a.createElement("img",{src:s.a,height:56,alt:"Privacy Tools - LGPD - GDPR - CCPA",title:"Privacy Tools - LGPD - GDPR - CCPA"})),o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(T,{page:n.page}))))}},121:function(n,t,e){"use strict";var r=e(38),o=e(25),a=e(27);function i(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  text-align: ",";\n  max-width: ",";\n  margin-left: ",";\n  margin-right: ",";\n  color: ",";\n"]);return i=function(){return n},n}t.a=o.c.p(i(),Object(a.b)("18px"),Object(a.b)("24px"),function(n){return n.centered?"center":"left"},function(n){var t=n.maxWidth;return t?"".concat(t,"px"):"100%"},function(n){return n.maxWidth?"auto":0},function(n){return n.maxWidth?"auto":0},function(n){var t=n.theme;return n.white?t.whiteColor:t.fourthColor})},122:function(n,t,e){"use strict";var r=e(0),o=e.n(r),a=e(120),i=e(37),c=(e(123),e(107)),u=e.n(c),l=e(113);function p(){return(p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var f=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&(e[r[o]]=n[r[o]])}return e},d=function(n){return r.createElement(l.a,null,function(t){var e,o=t.getPrefixCls,a=n.prefixCls,i=n.type,c=void 0===i?"horizontal":i,l=n.orientation,d=void 0===l?"":l,m=n.className,b=n.children,h=n.dashed,x=f(n,["prefixCls","type","orientation","className","children","dashed"]),g=o("divider",a),y=d.length>0?"-"+d:d,v=u()(m,g,"".concat(g,"-").concat(c),(s(e={},"".concat(g,"-with-text").concat(y),b),s(e,"".concat(g,"-dashed"),!!h),e));return r.createElement("div",p({className:v},x),b&&r.createElement("span",{className:"".concat(g,"-inner-text")},b))})},m=e(106),b=e(110),h=e(38),x=e(25),g=e(36);function y(){var n=Object(h.a)(["\n\tfont-weight: 300;\n\tdisplay: block;\n\t@media (min-width: 701px) {\n\t\tmargin: 0 24px;\n\t}\n\n\t@media (max-width: 700px) {\n\t\tmargin: 24px 0;\n\t}\n"]);return y=function(){return n},n}function v(){var n=Object(h.a)(["\n\t@media (min-width: 701px) {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t@media (max-width: 700px) {\n\t\tdisplay: block;\n\t}\n"]);return v=function(){return n},n}function O(){var n=Object(h.a)(["\n\tpadding: 72px 0 0;\n\n\t.footer-list {\n\t\tmargin-top: 36px;\n\t\th3 {\n\t\t\tmargin-bottom: 24px;\n\t\t}\n\t\tli {\n\t\t\tmargin-top: 6px;\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n"]);return O=function(){return n},n}var w=x.c.footer(O(),function(n){return n.fourthColor}),j=x.c.div(v()),C=Object(x.c)(g.b)(y()),E=w,_=e(108),k=e(114),P=e(150);var z=function(){return Object(i.c)().t,o.a.createElement(j,null,o.a.createElement(C,{to:"/terms-of-use"},"Terms of Use"),o.a.createElement(C,{to:"/privacy-policy"},"Privacy Policy"))};var S=function(){var n=Object(i.c)().t;return o.a.createElement(E,null,o.a.createElement(m.a,{centered:!0},n("footer.title")),o.a.createElement(g.b,{to:"/contact"},o.a.createElement(b.a,{as:"span",centered:!0},n("know-more"))),o.a.createElement(_.a,{x:72}),o.a.createElement(d,null),o.a.createElement(_.a,{x:72}),o.a.createElement(k.a,null,o.a.createElement(_.a,{x:36}),o.a.createElement(P.a,{type:"flex",justify:"space-between"},o.a.createElement(z,null),o.a.createElement("small",null,"Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved")),o.a.createElement(_.a,{x:36})))};t.a=o.a.memo(function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),n.children,o.a.createElement(S,null))})},123:function(n,t,e){n.exports=e.p+"static/media/trubr-logo.9b778ecf.svg"},150:function(n,t,e){"use strict";var r=e(381);t.a=r.a},204:function(n,t,e){"use strict";e.d(t,"a",function(){return g});var r=e(0),o=e(9),a=e(107),i=e.n(a),c=e(175),u=e(113);function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(){return(p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function s(n){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function d(n,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function m(n){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function b(n,t){return(b=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var h=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&(e[r[o]]=n[r[o]])}return e},x=o.oneOfType([o.object,o.number]),g=function(n){function t(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,m(t).apply(this,arguments))).renderCol=function(t){var e,o=t.getPrefixCls,a=n.props,u=a.prefixCls,f=a.span,d=a.order,m=a.offset,b=a.push,x=a.pull,g=a.className,y=a.children,v=h(a,["prefixCls","span","order","offset","push","pull","className","children"]),O=o("col",u),w={};["xs","sm","md","lg","xl","xxl"].forEach(function(n){var t,e={};"number"===typeof a[n]?e.span=a[n]:"object"===s(a[n])&&(e=a[n]||{}),delete v[n],w=p({},w,(l(t={},"".concat(O,"-").concat(n,"-").concat(e.span),void 0!==e.span),l(t,"".concat(O,"-").concat(n,"-order-").concat(e.order),e.order||0===e.order),l(t,"".concat(O,"-").concat(n,"-offset-").concat(e.offset),e.offset||0===e.offset),l(t,"".concat(O,"-").concat(n,"-push-").concat(e.push),e.push||0===e.push),l(t,"".concat(O,"-").concat(n,"-pull-").concat(e.pull),e.pull||0===e.pull),t))});var j=i()(O,(l(e={},"".concat(O,"-").concat(f),void 0!==f),l(e,"".concat(O,"-order-").concat(d),d),l(e,"".concat(O,"-offset-").concat(m),m),l(e,"".concat(O,"-push-").concat(b),b),l(e,"".concat(O,"-pull-").concat(x),x),e),g,w);return r.createElement(c.a.Consumer,null,function(n){var t=n.gutter,e=v.style;return t>0&&(e=p({paddingLeft:t/2,paddingRight:t/2},e)),r.createElement("div",p({},v,{style:e,className:j}),y)})},n}var e,o,a;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&b(n,t)}(t,r["Component"]),e=t,(o=[{key:"render",value:function(){return r.createElement(u.a,null,this.renderCol)}}])&&f(e.prototype,o),a&&f(e,a),t}();g.propTypes={span:o.number,order:o.number,offset:o.number,push:o.number,pull:o.number,className:o.string,children:o.node,xs:x,sm:x,md:x,lg:x,xl:x,xxl:x}},382:function(n,t,e){"use strict";var r=e(204);t.a=r.a}}]);
//# sourceMappingURL=1.71134c2b.chunk.js.map