(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{3094:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(854));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Low",visuallyHiddenText:"Risk Factor Low"})," ",a.default.createElement(r.default,{text:"Medium",visuallyHiddenText:"Risk Factor Medium"})," ",a.default.createElement(r.default,{text:"High",visuallyHiddenText:"Risk Factor High"})," ",a.default.createElement(r.default,{text:"Critical",visuallyHiddenText:"Risk Factor Critical"}))};t.default=i},854:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BadgeSize=t.BadgeIntent=t.default=void 0;var a=u(n(0)),r=u(n(3)),l=u(n(4)),i=u(n(125)),d=u(n(872));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=l.default.bind(d.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var g={children:r.default.node,icon:r.default.element,intent:r.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:r.default.bool,size:r.default.oneOf(["tiny","small","medium","large","huge"]),text:r.default.string,visuallyHiddenText:r.default.string},m={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},p=function(e){var t=e.size,n=e.intent,r=e.isReversed,l=e.text,u=e.icon,o=e.visuallyHiddenText,s=c(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),g=f("badge",{"has-icon":u},{"is-reversed":r},t,n,s.className),m=l?a.default.createElement("span",{className:d.default.text,"aria-hidden":"true"},l):null,p=o?a.default.createElement(i.default,{text:o}):null,y=r?[p,m,u,s.children]:[u,p,m,s.children];return a.default.createElement.apply(a.default,["span",_({},s,{className:g})].concat(y))};p.propTypes=g,p.defaultProps=m;var y=p;t.default=y},872:function(e,t,n){e.exports={badge:"Badge-module__badge___20KZ3","is-reversed":"Badge-module__is-reversed___2z3k1","has-icon":"Badge-module__has-icon___2R0fy",text:"Badge-module__text___2Y8yP",tiny:"Badge-module__tiny___1mem2",small:"Badge-module__small___ow-O5",medium:"Badge-module__medium___1w1TM",large:"Badge-module__large___2dMPP",huge:"Badge-module__huge___29Jcf",default:"Badge-module__default___3JkGW",primary:"Badge-module__primary___WLzak",secondary:"Badge-module__secondary___2Eyvs",positive:"Badge-module__positive___17Lg_",negative:"Badge-module__negative___3GJ0z",warning:"Badge-module__warning___Gqrsa",info:"Badge-module__info___1RQe6"}}}]);
//# sourceMappingURL=321-42d54e494917c3498157.js.map