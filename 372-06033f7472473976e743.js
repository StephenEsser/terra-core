(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{3442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=u(n(851));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(){return o.default.createElement(r.default,{id:"href",text:"Href Tag",href:"www.google.com"})};t.default=i},851:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),u=c(n(3)),i=c(n(4)),l=function(e){if(e&&e.__esModule)return e;var t=f();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=o?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(15)),a=c(n(863));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=i.default.bind(a.default),O={href:u.default.string,icon:u.default.element,onClick:u.default.func,onBlur:u.default.func,onFocus:u.default.func,onKeyUp:u.default.func,text:u.default.string.isRequired},m=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=b(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?h(o):r).state={focused:!1},n.handleKeyUp=n.handleKeyUp.bind(h(n)),n.handleOnBlur=n.handleOnBlur.bind(h(n)),n}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(o=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===l.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,u=e.onClick,i=(e.onBlur,e.onFocus),l=(e.onKeyUp,y(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),a=v(["tag",{"is-focused":this.state.focused},{"is-interactive":o||u},l.className]),f=v("icon"),c=t?r.default.createElement("span",{className:f},t):null,s=o||u?o?"a":"button":"span";return r.default.createElement(s,p({},l,{className:a,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:u,onFocus:i,href:o}),c,n)}}])&&d(n.prototype,o),u&&d(n,u),t}(r.default.Component);m.propTypes=O;var g=m;t.default=g},863:function(e,t,n){e.exports={tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=372-06033f7472473976e743.js.map