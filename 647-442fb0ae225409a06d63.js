(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{3426:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(808));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}function c(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var n,l,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l=this,(n=!(o=f(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?d(l):o).state={selectedIndex:null},n.handleSelection=n.handleSelection.bind(d(n)),n}var n,l,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,e),n=t,(l=[{key:"handleSelection",value:function(e,t){this.setState({selectedIndex:t})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("div",{id:"selected-index"},o.default.createElement("h3",null,"Selected Item:"," ",this.state.selectedIndex)),o.default.createElement(r.default,{isStriped:!1},o.default.createElement(r.default.Header,null,o.default.createElement(r.default.HeaderCell,{content:"Name",key:"NAME",minWidth:"small"}),o.default.createElement(r.default.HeaderCell,{content:"Address",key:"ADDRESS",minWidth:"medium"}),o.default.createElement(r.default.HeaderCell,{content:"Phone Number",key:"PHONE_NUMBER",minWidth:"large"})),o.default.createElement(r.default.SelectableTableRows,{onChange:this.handleSelection},o.default.createElement(r.default.Row,{key:"PERSON_0"},o.default.createElement(r.default.Cell,{content:"John Smith",key:"NAME"}),o.default.createElement(r.default.Cell,{content:"123 Adams Drive",key:"ADDRESS"}),o.default.createElement(r.default.Cell,{content:"111-222-3333",key:"PHONE_NUMBER"})),o.default.createElement(r.default.Row,{key:"PERSON_1"},o.default.createElement(r.default.Cell,{content:"Jane Smith",key:"NAME"}),o.default.createElement(r.default.Cell,{content:"321 Drive Street",key:"ADDRESS"}),o.default.createElement(r.default.Cell,{content:"111-222-3333",key:"PHONE_NUMBER"})),o.default.createElement(r.default.Row,{key:"PERSON_2"},o.default.createElement(r.default.Cell,{content:"Dave Smith",key:"NAME"}),o.default.createElement(r.default.Cell,{content:"213 Raymond Road",key:"ADDRESS"}),o.default.createElement(r.default.Cell,{content:"111-222-3333",key:"PHONE_NUMBER"})))))}}])&&c(n.prototype,l),a&&c(n,a),t}(o.default.Component);t.default=y}}]);
//# sourceMappingURL=647-442fb0ae225409a06d63.js.map