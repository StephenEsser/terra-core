(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2793:function(t,e,n){t.exports={"toggle-button":"ToggleButton-module__toggle-button___2y-zM",icon:"ToggleButton-module__icon___1dRrW","is-open":"ToggleButton-module__is-open___1WTt4","is-icon-animated":"ToggleButton-module__is-icon-animated___214rn","button-text":"ToggleButton-module__button-text___2GKkq"}},836:function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=f(n(0)),a=f(n(3)),s=f(n(4)),r=f(n(49)),l=f(n(169)),u=f(n(841)),c=f(n(2793));function f(t){return t&&t.__esModule?t:{default:t}}function h(t){return(h="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function d(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=s.default.bind(c.default),O={children:a.default.node.isRequired,closedButtonText:a.default.string.isRequired,buttonAttrs:a.default.object,icon:a.default.element,isAnimated:a.default.bool,isIconAnimated:a.default.bool,isIconOnly:a.default.bool,isInitiallyOpen:a.default.bool,onClose:a.default.func,onOpen:a.default.func,openedButtonText:a.default.string},S={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:o.default.createElement(l.default,null)},_=function(t){function e(t){var n,i,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(n=!(o=y(e).call(this,t))||"object"!==h(o)&&"function"!=typeof o?g(i):o).state={isOpen:t.isInitiallyOpen},n.handleOnClick=n.handleOnClick.bind(g(n)),n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(i=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),i=t.icon,a=(t.isAnimated,t.isIconAnimated),s=t.isIconOnly,l=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),c=d(t,["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"]),f=l||n,h=this.state.isOpen?f:n,m=s?n:h,y=v(["button",{"is-open":this.state.isOpen},{"is-icon-animated":a},c.className]),g=o.default.createElement(r.default,p({},e,{isIconOnly:s,icon:o.default.createElement("span",{className:v("icon")},i),"aria-expanded":this.state.isOpen,text:m,onClick:this.handleOnClick}));return o.default.createElement("div",p({},c,{className:y}),g,o.default.createElement(u.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&m(n.prototype,i),a&&m(n,a),e}(o.default.Component);_.propTypes=O,_.defaultProps=S;var C=_;e.default=C},841:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(n(0)),o=l(n(3)),a=l(n(4)),s=l(n(843)),r=l(n(844));function l(t){return t&&t.__esModule?t:{default:t}}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=a.default.bind(r.default),h={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},p=function(t){var e,n=t.isAnimated,o=t.isOpen,a=t.children,r=c(t,["isAnimated","isOpen","children"]),l=o?"auto":0;return e=n?i.default.createElement(s.default,{duration:250,height:l},a):o&&a,i.default.createElement("div",u({},r,{className:f("toggle",r.className),"aria-hidden":!o}),e)};p.propTypes=h,p.defaultProps={isAnimated:!1,isOpen:!1};var d=p;e.default=d},843:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=u(n(0)),r=u(n(3)),l=u(n(265));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),s=0;s<a.length;s++){var r=a[s];-1===n.indexOf(r)&&(o[r]=t[r])}return o}function d(t){return!isNaN(parseFloat(t))&&isFinite(t)}function m(t){return"string"==typeof t&&t.search("%")===t.length-1&&d(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var g=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),i="auto",a="visible";d(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):m(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},f,t.animationStateClasses);var s=n.getStaticStateClasses(i);return n.state={animationStateClasses:s,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i=this,o=this.props,a=o.delay,s=o.duration,r=o.height,u=o.onAnimationEnd,f=o.onAnimationStart;if(this.contentElement&&r!==t.height){var h;this.showContent(e.height),this.contentElement.style.overflow="hidden";var p=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var g=s+a,b=null,v={height:null,overflow:"hidden"},O="auto"===e.height;d(r)?(b=r<0||"0"===r?0:r,v.height=b):m(r)?(b="0%"===r?0:r,v.height=b):(b=p,v.height="auto",v.overflow=null),O&&(v.height=b,b=p);var S=(0,l.default)((c(h={},this.animationStateClasses.animating,!0),c(h,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(h,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(h,this.animationStateClasses.animatingToHeightZero,0===v.height),c(h,this.animationStateClasses.animatingToHeightAuto,"auto"===v.height),c(h,this.animationStateClasses.animatingToHeightSpecific,v.height>0),h)),_=this.getStaticStateClasses(v.height);this.setState({animationStateClasses:S,height:b,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(v.shouldUseTransitions=!0,n=function(){i.setState(v),y(f,{newHeight:v.height})},requestAnimationFrame((function(){requestAnimationFrame((function(){n()}))})),this.animationClassesTimeoutID=setTimeout((function(){i.setState({animationStateClasses:_,shouldUseTransitions:!1}),i.hideContent(v.height),y(u,{newHeight:v.height})}),g)):(y(f,{newHeight:b}),this.timeoutID=setTimeout((function(){v.animationStateClasses=_,v.shouldUseTransitions=!1,i.setState(v),"auto"!==r&&i.hideContent(b),y(u,{newHeight:b})}),g))}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,r=n.children,u=n.className,f=n.contentClassName,d=n.duration,m=n.easing,y=n.delay,g=n.style,b=this.state,v=b.height,O=b.overflow,S=b.animationStateClasses,_=b.shouldUseTransitions,C=o({},g,{height:v,overflow:O||g.overflow});_&&a&&(C.transition="height "+d+"ms "+m+" "+y+"ms",g.transition&&(C.transition=g.transition+", "+C.transition),C.WebkitTransition=C.transition);var w={};i&&(w.transition="opacity "+d+"ms "+m+" "+y+"ms",w.WebkitTransition=w.transition,0===v&&(w.opacity=0));var T=(0,l.default)((c(t={},S,!0),c(t,u,u),t));return s.default.createElement("div",o({},p.apply(void 0,[this.props].concat(h)),{"aria-hidden":0===v,className:T,style:C}),s.default.createElement("div",{className:f,style:w,ref:function(t){return e.contentElement=t}},r))}}]),e}(s.default.Component);g.propTypes={animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,duration:r.default.number,delay:r.default.number,easing:r.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||m(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},g.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=g},844:function(t,e,n){t.exports={toggle:"Toggle-module__toggle___3Y29L"}}}]);
//# sourceMappingURL=5-4ba07d654b80da29c013.js.map