(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{3248:function(e,t,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o(0)),a=i(o(807));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function s(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=l(this,c(t).call(this)),navigator.msMaxTouchPoints&&0!==navigator.msMaxTouchPoints||(e.resetMsMaxTouchPoints=!0,e.previousMsMaxTouchPoints=navigator.msMaxTouchPoints,Object.defineProperty(navigator,"msMaxTouchPoints",{value:1,configurable:!0})),e}var o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,(r=[{key:"componentDidUpdate",value:function(){navigator.msMaxTouchPoints&&0!==navigator.msMaxTouchPoints||(this.resetMsMaxTouchPoints=!0,this.previousMsMaxTouchPoints=navigator.msMaxTouchPoints,Object.defineProperty(navigator,"msMaxTouchPoints",{value:1,configurable:!0}))}},{key:"componentWillUnmount",value:function(){this.resetMsMaxTouchPoints&&Object.defineProperty(navigator,"msMaxTouchPoints",{value:this.previousMsMaxTouchPoints,configurable:!0})}},{key:"render",value:function(){return n.default.createElement(a.default,{id:"auto-resizable",cols:"2",isAutoResizable:!0,defaultValue:"Default Value",ariaLabel:"label"})}}])&&s(o.prototype,r),i&&s(o,i),t}(n.default.Component);t.default=p},807:function(e,t,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var n=s(o(0)),a=s(o(3)),i=s(o(4)),u=s(o(809));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function b(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function h(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=i.default.bind(u.default),g=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)};t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var x={small:2,medium:5,large:10},O={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func},w={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isInvalid:!1,onChange:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0},P=function(e){function t(e){var o,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(o=!(n=y(t).call(this,e))||"object"!==l(n)&&"function"!=typeof n?d(r):n).isMobileDevice=g(),o.onChange=o.onChange.bind(d(o)),o.onFocus=o.onFocus.bind(d(o)),o}var o,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),o=t,(r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||x[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,o=this.props,r=o.name,a=o.required,i=(o.onChange,o.onFocus,o.isAutoResizable),u=o.isInvalid,s=o.value,l=o.defaultValue,h=o.rows,y=o.size,d=o.ariaLabel,m=o.refCallback,g=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(o,!0).forEach((function(t){p(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},b(o,["name","required","onChange","onFocus","isAutoResizable","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback"])),O=v(["textarea",{"form-error":u},{"full-size":"full"===y},{resizable:i&&!this.isMobileDevice},g.className]);g&&Object.prototype.hasOwnProperty.call(g,"aria-label")?e=d||g["aria-label"]:d&&(e=d),g["aria-label"]=e,a&&(g["aria-required"]="true");var w=h||x[y];return void 0!==s?g.value=s:g.defaultValue=l,n.default.createElement("textarea",c({},g,{ref:function(e){t.textarea=e,m&&m(e)},name:r,onFocus:this.onFocus,onChange:this.onChange,required:a,rows:w,className:O}))}}])&&h(o.prototype,r),a&&h(o,a),t}(n.default.Component);P.propTypes=O,P.defaultProps=w,P.isTextarea=!0;var _=P;t.default=_},809:function(e,t,o){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI"}}}]);
//# sourceMappingURL=332-3f590976161f67a850ea.js.map