(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{3303:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(o(0)),a=l(o(167)),u=l(o(889));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function f(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=c(this,d(t).call(this,e))).state={errorImageId:void 0,loadedImageId:void 0},o}var o,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),o=t,(n=[{key:"render",value:function(){var e=this;return r.default.createElement("div",null,r.default.createElement("h2",null,"Loading Image Examples"),r.default.createElement("p",null,"Image is successfully loaded."),r.default.createElement("div",null,r.default.createElement(a.default,{id:this.state.loadedImageId,alt:"loading image",src:u.default,onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})}})),r.default.createElement("p",null,"Image fails to load."),r.default.createElement("div",null,r.default.createElement(a.default,{id:this.state.errorImageId,src:"invalid.jpg",onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})},alt:"Alt text for image with invalid source"})))}}])&&f(o.prototype,n),l&&f(o,l),t}(r.default.Component);t.default=p},889:function(e,t,o){e.exports=o.p+"87ec563ff16c288f58b0747d553762d6.jpg"}}]);
//# sourceMappingURL=465-349e634610c621db205a.js.map