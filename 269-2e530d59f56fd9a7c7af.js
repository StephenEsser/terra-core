(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{3341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(954));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement(r.default,{onPageChange:function(e){return console.log(e)},selectedPage:1,totalCount:2234,itemCountPerPage:20})};t.default=i},812:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var r=u(n(0)),o=u(n(3)),i=u(n(127)),l=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(166));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var g={children:o.default.node,onChange:o.default.func,onResize:o.default.func,tiny:o.default.element,small:o.default.element,medium:o.default.element,large:o.default.element,huge:o.default.element,enormous:o.default.element,responsiveTo:o.default.oneOf(["window","parent"])},b=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(a=f(t).call(this))||"object"!==c(a)&&"function"!=typeof a?p(n):a).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;this.container?(this.resizeObserver=new i.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,a=t.onResize,r=t.tiny,o=t.small,i=t.medium,s=t.large,u=t.huge,c=t.enormous;a&&a(e);var d,f=(0,l.activeBreakpointForSize)(e);n&&f!==this.breakpoint&&n(f),this.breakpoint=f,(r||o||i||s||u||c)&&(d=e>=l.default.enormous&&c?"enormous":e>=l.default.huge&&u?"huge":e>=l.default.large&&s?"large":e>=l.default.medium&&i?"medium":e>=l.default.small&&o?"small":"tiny",this.state.element!==d&&this.setState({element:d}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.default.createElement(r.default.Fragment,null,"parent"===n&&!this.container&&r.default.createElement("div",{ref:this.setContainer}),t)}}])&&d(n.prototype,a),o&&d(n,o),t}(r.default.Component);b.propTypes=g,b.defaultProps={responsiveTo:"parent"};var m=b;t.default=m},855:function(e,t,n){e.exports={paginator:"Paginator-module__paginator___zp3Dt","nav-link":"Paginator-module__nav-link___3szkb","is-selected":"Paginator-module__is-selected___2n6Sq","is-disabled":"Paginator-module__is-disabled___b6MqJ",previous:"Paginator-module__previous___1sGR2","icon-only":"Paginator-module__icon-only___38App",next:"Paginator-module__next___1bqi9","left-controls":"Paginator-module__left-controls___8xNuu","right-controls":"Paginator-module__right-controls___L9reb",pageless:"Paginator-module__pageless___3JKUD",progressive:"Paginator-module__progressive___KJj4h",icon:"Paginator-module__icon___35fDo"}},856:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pageSet=t.calculatePages=void 0;t.calculatePages=function(e,t){return Math.ceil(e/t)};t.pageSet=function(e,t){var n=[],a=e;if(a<1?a=1:a>t&&(a=t),a<7)for(var r=t<10?t:10,o=1;o<=r;o+=1)n.push(o);else if(a<=t&&a>t-10&&a>t-5)for(var i=t;i>t-10&&i>0;i-=1)n.push(i);else{for(var l=a;l>=a-5;l-=1)n.push(l);for(var s=a+1;s<=a+4;s+=1)n.push(s)}return n.sort((function(e,t){return e-t}))}},954:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(n(0)),o=h(n(3)),i=h(n(4)),l=n(7),s=h(n(812)),u=h(n(125)),c=function(e){if(e&&e.__esModule)return e;var t=p();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(15)),d=h(n(855)),f=n(856);function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function h(e){return e&&e.__esModule?e:{default:e}}function g(e){return(g="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=i.default.bind(d.default),_={onPageChange:o.default.func.isRequired,selectedPage:o.default.number,totalCount:o.default.number,itemCountPerPage:o.default.number,intl:l.intlShape.isRequired},w=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this;var o=(n=!(r=m(t).call(this,e))||"object"!==g(r)&&"function"!=typeof r?y(a):r).props,i=o.selectedPage,l=o.totalCount,s=o.itemCountPerPage;return n.state={selectedPage:i&&l?i:void 0,pageSequence:i&&l?(0,f.pageSet)(i,(0,f.calculatePages)(l,s)):void 0},n.handlePageChange=n.handlePageChange.bind(y(n)),n.handleOnKeyDown=n.handleOnKeyDown.bind(y(n)),n.hasNavContext=n.hasNavContext.bind(y(n)),n.buildPageButtons=n.buildPageButtons.bind(y(n)),n.reducedPaginator=n.reducedPaginator.bind(y(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(a=[{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,f.pageSet)(e,(0,f.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))}),!1)}}},{key:"handleOnKeyDown",value:function(e){var t=this;return function(n){if(n.nativeEvent.keyCode===c.KEY_RETURN||n.nativeEvent.keyCode===c.KEY_SPACE){if(n.preventDefault(),Number.isNaN(Number(e)))return t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1;t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,f.pageSet)(e,(0,f.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))})}return!1}}},{key:"buildPageButtons",value:function(e,t){var n=this,a=this.props.intl,o=this.state,i=o.pageSequence,l=o.selectedPage,s=[];return i.forEach((function(o){var i=P(["nav-link",o===l?"is-selected":null]);o>e||s.push(r.default.createElement("button",{"aria-label":a.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:o}),"aria-current":o===l&&"page",className:i,tabIndex:o===l?null:"0",key:"pageButton_".concat(o),onClick:t(o),onKeyDown:n.handleOnKeyDown(o),type:"button"},o))})),s}},{key:"hasNavContext",value:function(){return this.props.totalCount&&this.props.itemCountPerPage}},{key:"defaultPaginator",value:function(){var e=this.props.intl,t=(0,f.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,a=1===n?1:n-1,o=n===t?t:n+1;return r.default.createElement("div",{className:P(["paginator",!this.hasNavContext()&&"pageless"])},this.hasNavContext()&&r.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.first"}),className:P(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},e.formatMessage({id:"Terra.paginator.first"})),r.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.previous"}),className:P(["nav-link","left-controls","previous",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(a),onKeyDown:this.handleOnKeyDown(a),type:"button"},r.default.createElement("span",{className:P("icon")}),e.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&this.buildPageButtons(t,this.handlePageChange),r.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.next"}),className:P(["nav-link","right-controls","next",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(o),onKeyDown:this.handleOnKeyDown(o),type:"button"},e.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:P("icon")})),this.hasNavContext()&&r.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.last"}),className:P(["nav-link","right-controls",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(t),onKeyDown:this.handleOnKeyDown(t),type:"button"},e.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=this.props.intl,t=(0,f.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,a=1===n?1:n-1,o=n===t?t:n+1;return r.default.createElement("div",{className:P(["paginator",!this.hasNavContext()&&"pageless"]),role:"navigation","aria-label":"pagination"},this.hasNavContext()&&r.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.first"}),className:P(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},e.formatMessage({id:"Terra.paginator.first"})),r.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.previous"}),className:P(["nav-link","left-controls","previous","icon-only",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(a),onKeyDown:this.handleOnKeyDown(a),type:"button"},r.default.createElement(u.default,{text:e.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:P("icon")})),this.hasNavContext()&&e.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),r.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.next"}),className:P(["nav-link","right-controls","next","icon-only",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(o),onKeyDown:this.handleOnKeyDown(o),type:"button"},r.default.createElement(u.default,{text:e.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:P("icon")})),this.hasNavContext()&&r.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.last"}),className:P(["nav-link","right-controls",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(t),onKeyDown:this.handleOnKeyDown(t),type:"button"},e.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return r.default.createElement(s.default,{tiny:this.reducedPaginator(),medium:this.defaultPaginator()})}}])&&b(n.prototype,a),o&&b(n,o),t}(r.default.Component);w.propTypes=_;var C=(0,l.injectIntl)(w);t.default=C}}]);
//# sourceMappingURL=269-2e530d59f56fd9a7c7af.js.map