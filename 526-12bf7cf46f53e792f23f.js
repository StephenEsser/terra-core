(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{3119:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(0)),r=u(n(263));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var n,o,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(l=a(t).call(this,e))||"object"!==c(l)&&"function"!=typeof l?f(o):l).state={selectedKey:"1"},n.handleSelection=n.handleSelection.bind(f(n)),n}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(o=[{key:"handleSelection",value:function(e,t){r.default.Utils.shouldHandleSingleSelection(this.state.selectedKey,t)&&(e.preventDefault(),this.setState({selectedKey:t}))}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Selected Button:"," ",l.default.createElement("span",{id:"selected-key"},this.state.selectedKey)),l.default.createElement(r.default,{id:"button-group-single-select",onChange:this.handleSelection,selectedKeys:[this.state.selectedKey]},l.default.createElement(r.default.Button,{text:"Single-Select 1",key:"1"}),l.default.createElement(r.default.Button,{text:"Single-Select 2",key:"2"}),l.default.createElement(r.default.Button,{text:"Single-Select 3",key:"3"}),l.default.createElement(r.default.Button,{text:"Single-Select 4",key:"4"})))}}])&&i(n.prototype,o),u&&i(n,u),t}(l.default.Component);t.default=y}}]);
//# sourceMappingURL=526-12bf7cf46f53e792f23f.js.map