(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{3163:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),a=i(r(887));function i(e){return e&&e.__esModule?e:{default:e}}var l={"grid-template-columns":"100px 100px","grid-template-rows":"100px","grid-gap":"10px"},o={"grid-column-start":1,"grid-row-start":1},u={"grid-column-start":2,"grid-row-start":1};t.default=function(){return n.default.createElement(a.default,{id:"defaultDynamicGrid",large:l},n.default.createElement(a.default.Region,{id:"region1",large:o},"R1"),n.default.createElement(a.default.Region,{id:"region2",large:u},"R2"))}},887:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(0)),a=r(946),i=d(r(3)),l=d(r(265)),o=r(901),u=d(r(976)),c=d(r(902));function d(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var y={"grid-template-columns":i.default.string,"grid-template-rows":i.default.string,"grid-gap":i.default.string,style:i.default.object},b={children:i.default.node,defaultTemplate:i.default.shape(y),tiny:i.default.shape(y),small:i.default.shape(y),medium:i.default.shape(y),large:i.default.shape(y),huge:i.default.shape(y)},O=function(e){var t=e.defaultTemplate,r=e.tiny,i=e.small,u=e.medium,d=e.large,s=e.huge,y=e.children,b=m(e,["defaultTemplate","tiny","small","medium","large","huge","children"]),O=function(e,t){return Object.keys(t).length?g({},"@media screen and (min-width: ".concat(e,")"),(0,o.grid)(t)):{}},h=a.StyleSheet.create({grid:p({},(0,o.grid)(t),{},O(c.default.tiny,r),{},O(c.default.small,i),{},O(c.default.medium,u),{},O(c.default.large,d),{},O(c.default.huge,s))}),v=(0,l.default)(b.className,(0,a.css)(h.grid));return n.default.createElement("div",f({},b,{className:v}),y)};O.propTypes=b,O.defaultProps={defaultTemplate:{},tiny:{},small:{},medium:{},large:{},huge:{}},O.Region=u.default;var h=O;t.default=h},901:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.region=t.grid=void 0;var l=function(e,t){var r,n=t["grid-template-".concat(e)];if(void 0===n)return{};var a=(t["grid-gap"]||"0").split(/\s+/);return a="rows"===e?a[0]:a.slice(-1)[0],i(r={},"grid-template-".concat(e),n),i(r,"-ms-grid-".concat(e),n.split(/\s+/).join(" ".concat(a," "))),r},o=function(e,t){var r,n=t["grid-".concat(e,"-start")];return void 0===n?{}:(i(r={},"grid-".concat(e,"-start"),"".concat(n)),i(r,"-ms-grid-".concat(e),"".concat(2*n-1)),r)},u=function(e,t){var r;if(void 0===t["grid-".concat(e,"-end")])return{};var n=t["grid-".concat(e,"-start")]||t["grid-".concat(e,"-end")],a=t["grid-".concat(e,"-end")],l=n===a?1:2*(a-n)-1;return i(r={},"grid-".concat(e,"-end"),"".concat(a)),i(r,"-ms-grid-".concat(e,"-span"),"".concat(l)),r};t.grid=function(e){return a({},(t=e,0===Object.keys(t).length?{}:{display:window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid")?"grid":"-ms-grid"}),{},function(e){return e["grid-gap"]?{"grid-gap":e["grid-gap"]}:{}}(e),{},l("columns",e),{},l("rows",e),{},e.style||{});var t};t.region=function(e){return a({},o("column",e),{},u("column",e),{},o("row",e),{},u("row",e),{},e.style||{})}},902:function(e,t,r){e.exports={tiny:"544px",small:"768px",medium:"992px",large:"1216px",huge:"1440px"}},976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(0)),a=d(r(3)),i=r(946),l=d(r(4)),o=d(r(902)),u=d(r(977)),c=r(901);function d(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var y=l.default.bind(u.default),b={"grid-column-start":a.default.number,"grid-column-end":a.default.number,"grid-row-start":a.default.number,"grid-row-end":a.default.number,style:a.default.object},O={children:a.default.node,defaultPosition:a.default.shape(b),tiny:a.default.shape(b),small:a.default.shape(b),medium:a.default.shape(b),large:a.default.shape(b),huge:a.default.shape(b)},h=function(e){var t=e.children,r=e.defaultPosition,a=e.tiny,u=e.small,d=e.medium,s=e.large,b=e.huge,O=m(e,["children","defaultPosition","tiny","small","medium","large","huge"]),h=function(e,t){return Object.keys(t).length?g({},"@media screen and (min-width: ".concat(e,")"),(0,c.region)(t)):{}},v=i.StyleSheet.create({region:p({},(0,c.region)(r),{},h(o.default.tiny,a),{},h(o.default.small,u),{},h(o.default.medium,d),{},h(o.default.large,s),{},h(o.default.huge,b))}),j=(0,l.default)(O.className,(0,i.css)(v.region));return n.default.createElement("div",f({},O,{className:j}),n.default.createElement("div",{className:y("region-child-container")},t))};h.propTypes=O,h.defaultProps={defaultPosition:{},tiny:{},small:{},medium:{},large:{},huge:{}};var v=h;t.default=v},977:function(e,t,r){e.exports={"region-child-container":"Region-module__region-child-container___q-jy1"}}}]);
//# sourceMappingURL=234-df668bc89a2f09342248.js.map