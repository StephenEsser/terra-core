(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{2839:function(e,t,a){e.exports={"weighted-text":"DefaultI18n-module__weighted-text___LPl8d","fallback-message":"DefaultI18n-module__fallback-message___19RNk"}},3295:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(a(0)),o=f(a(3)),r=a(7),c=f(a(4)),u=f(a(291)),s=f(a(292)),i=f(a(2839));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=c.default.bind(i.default),g=["en","en-GB","pt","pt-GW","zu","zu-ZA"],_=function(e){function t(e){var a,n,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(l=m(t).call(this,e))||"object"!==d(l)&&"function"!=typeof l?b(n):l).state={selectedLocale:"en",areTranslationsLoaded:!1,locale:e.locale,messages:{}},a.handleLocaleChange=a.handleLocaleChange.bind(b(a)),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){(0,s.default)(this.props.locale,this.setState,this)}},{key:"handleLocaleChange",value:function(e){this.setState({selectedLocale:e.target.value}),(0,s.default)(e.target.value,this.setState,this)}},{key:"render",value:function(){return this.state.areTranslationsLoaded?l.default.createElement("div",null,l.default.createElement(u.default,{locale:this.state.locale,messages:this.state.messages},l.default.createElement("label",{htmlFor:"change-locale"}," Current locale: "),l.default.createElement("select",{id:"change-locale",onChange:this.handleLocaleChange,value:this.state.selectedLocale},g.map((function(e){return l.default.createElement("option",{key:e,value:e},e)}))),l.default.createElement("p",{id:"translated-message"},l.default.createElement("span",{className:y("weighted-text")}," Loaded locale message: "),l.default.createElement(r.FormattedMessage,{id:"Terra.ajax.error"})),this.state.selectedLocale.includes("zu")&&l.default.createElement("p",{className:y("fallback-message")},"Using the en locale as fallback."),"pt-GW"===this.state.selectedLocale&&l.default.createElement("p",{className:y("fallback-message")},"Using the pt locale as fallback."))):l.default.createElement("div",null)}}])&&p(a.prototype,n),o&&p(a,o),t}(l.default.Component);_.propTypes={locale:o.default.string},_.defaultProps={locale:"en"};t.default=function(){return l.default.createElement(_,null)}}}]);
//# sourceMappingURL=424-f1429b1b4e062850270b.js.map