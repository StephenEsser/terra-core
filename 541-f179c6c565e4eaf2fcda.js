(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{3172:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),a=u(n(814)),i=u(n(903));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=c(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?f(r):o).state={selectedAnswers:[]},n.handleOnChange=n.handleOnChange.bind(f(n)),n}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"handleOnChange",value:function(e){var t=this.state.selectedAnswers;e.currentTarget.checked?t.push(e.currentTarget.value):t.splice(t.indexOf(e.currentTarget.value),1),this.setState({selectedAnswers:t})}},{key:"render",value:function(){return o.default.createElement(i.default,{id:"testing-checkbox-field",legend:"What departments are you looking to work for?",help:"These are the core areas we need for graphic designers",isInvalid:this.state.selectedAnswers.length<=0,error:"You must be willing to work in one of these departments",isInline:!0,required:!0,hideRequired:!0},o.default.createElement(a.default,{id:"ux-dept",name:"dept[]",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),o.default.createElement(a.default,{id:"magazine-dept",name:"dept[]",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),o.default.createElement(a.default,{id:"website-dept",name:"dept[]",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),o.default.createElement(a.default,{id:"events-dept",name:"dept[]",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&s(n.prototype,r),u&&s(n,u),t}(o.default.Component);t.default=p}}]);
//# sourceMappingURL=541-f179c6c565e4eaf2fcda.js.map