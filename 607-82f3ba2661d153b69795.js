(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{3337:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),u=l(n(128));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=c(t).call(this))||"object"!==i(o)&&"function"!=typeof o?f(n):o).state={show:!0},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(f(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(f(e)),e}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(o=[{key:"handleTriggerOverlay",value:function(){this.setState({show:!0})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"render",value:function(){return this.state.show?r.default.createElement(u.default,{isOpen:!0,onRequestClose:this.handleOnRequestESC,id:"fullscreen_overlay",zIndex:"6000"},r.default.createElement("h3",null,"The onRequestClose prop gives the overlay close behaviors."),r.default.createElement("br",null),r.default.createElement("p",null,"Close by clicking inside the overlay or pressing the ESC key.")):null}}])&&a(n.prototype,o),l&&a(n,l),t}(r.default.Component);t.default=y}}]);
//# sourceMappingURL=607-82f3ba2661d153b69795.js.map