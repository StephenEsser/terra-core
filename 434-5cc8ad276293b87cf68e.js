(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{3331:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),l=c(n(4)),a=c(n(128)),i=c(n(165)),u=c(n(816));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=l.default.bind(u.default),b=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=d(t).call(this))||"object"!==s(o)&&"function"!=typeof o?y(n):o).state={show:!1,toggle:"true"},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(y(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(y(e)),e.handleRandomClick=e.handleRandomClick.bind(y(e)),e}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"handleTriggerOverlay",value:function(){var e=this;this.setState({show:!0,relative:!0,id:"terra-Overlay--container"}),setTimeout((function(){e.setState({show:!1})}),5e3)}},{key:"handleTriggerFullScreenOverlay",value:function(){var e=this;this.setState({show:!0,relative:!1,id:"terra-Overlay--fullscreen"}),setTimeout((function(){e.setState({show:!1})}),5e3)}},{key:"handleRandomClick",value:function(){"false"===this.state.toggle?this.setState({toggle:"true"}):this.setState({toggle:"false"})}},{key:"addOverlay",value:function(){return r.default.createElement(a.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,id:this.state.id},r.default.createElement("h3",null,"Overlay will timeout in 5 seconds."))}},{key:"render",value:function(){return r.default.createElement("div",{id:"custom-content-example"},r.default.createElement(i.default,{className:v("overlay-container2"),overlay:this.addOverlay()},r.default.createElement("button",{type:"button",id:"trigger_fullscreen",onClick:this.handleTriggerFullScreenOverlay},"Trigger Fullscreen Overlay"),r.default.createElement("button",{type:"button",id:"trigger_container",onClick:this.handleTriggerOverlay},"Trigger Container Overlay")),r.default.createElement("br",null),r.default.createElement("p",null," Outside of overlay container to prove functionality. Click the random button below after clicking the Trigger Container Overlay button to confirm an Overlay relative to container does not block outside interactions. "),r.default.createElement("button",{type:"button",id:"random_button",onClick:this.handleRandomClick},"A Random Button To Change Toggle State "),r.default.createElement("p",null,"Random Button toggle State is"," ",r.default.createElement("span",{id:"random_state"},this.state.toggle)))}}])&&f(n.prototype,o),l&&f(n,l),t}(r.default.Component);t.default=b},816:function(e,t,n){e.exports={"overlay-container1":"OverlayTestCommon-module__overlay-container1___2VZU8","overlay-container2":"OverlayTestCommon-module__overlay-container2___1gKt6"}}}]);
//# sourceMappingURL=434-5cc8ad276293b87cf68e.js.map