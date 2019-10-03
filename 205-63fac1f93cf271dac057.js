(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{2630:function(e,n,t){"use strict";t.r(n),n.default="ChangeLog\n=========\n\nUnreleased\n----------\n\n2.23.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n\n### Added\n* Added en-CA translations.\n\n2.22.0 - (September 6, 2019)\n------------------\n### Added\n* Props table markdown file import added to doc site page\n\n2.21.0 - (September 3, 2019)\n------------------\n### Changed\n* Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.\n\n2.20.0 - (August 21, 2019)\n--------------------------\n### Changed\n* Cleaned up imports in examples and test files\n* Import for package version from package.json added to doc page\n* Added comments for ESlint v6\n\n2.19.0 - (August 14, 2019)\n------------------\n### Changed\n* updated package.json test scripts\n\n2.18.0 - (July 30, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.17.0 - (July 24, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.16.0 - (July 16, 2019)\n------------------\n### Changed\n* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`\n\n### Added\n* Added documentation on required peerDependencies\n\n2.15.0  - (July 11, 2019)\n------------------\n### Changed\n* Updated Docs around the requirement of terra-base and aggregate-translations.\n\n2.14.0 - (June 28, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.13.0 - (June 18, 2019)\n------------------\n### Changed\n* Minor dependency bump\n\n2.12.0 - (June 11, 2019)\n------------------\n### Removed\n* Removed node_modules from .npmignore\n\n### Changed\n* Made required updates to consume terra-toolkit v5 and terra-dev-site v5\n\n2.11.0 - (May 21, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.10.0 - (May 1, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.9.0 - (April 16, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.8.0 - (April 9, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.7.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n* Import `injectIntl` and `intlShape` from react-intl instead of terra-base\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n2.6.0 - (March 21, 2019)\n------------------\n### Changed\n* Replaced local keyCode values with keycode-js npm package\n* Update Jest tests to use terra-enzyme-intl\n\n2.5.0 - (March 5, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.4.0 - (February 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added en-AU translations\n\n### Fixed\n* Correct browser.buttonDown() usage\n\n2.3.0 - (February 12, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n* Correct test routing.\n\n2.2.0 - (February 5, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.1.0 - (January 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.0.0 - (January 22, 2019)\n------------------\n### Changed\n* Updated theme variables\n\n1.8.0 - (January 22, 2019)\n------------------\n### Changed\n* Updated dependencies to fix major version bump issues\n\n1.7.0 - (January 8, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.6.0 - (January 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.5.1 - (November 20, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n1.5.0 - (November 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.4.0 - (November 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.3.0 - (November 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.2.0 - (October 30, 2018)\n------------------\n### Changed\n* Update mixin import to be more explicit\n\n1.1.0 - (October 24, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.0.0 - (October 19, 2018)\n------------------\n* Initial stable release\n"},3004:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=l(t(796)),r=l(t(2630));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(o.default,{packageName:"show-hide",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/show-hide",readme:r.default})};n.default=d},796:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(t(0)),o=u(t(3)),r=u(t(803)),l=u(t(257)),d=u(t(4)),c=u(t(797)),i=u(t(799)),s=u(t(802));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=d.default.bind(s.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},b=function(e){var n,t=e.packageName,o=e.packageVersion,d=e.packageUrl,s=e.readme,u=e.srcPath,g=e.examples,b=e.propsTables,h=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=g;b&&(n=b);for(var v=0,E=0;E<_.length;E+=1)_[E].id=v,v+=1;if(n)for(var k=0;k<n.length;k+=1)n[k].id=v,v+=1;var x,C=f(["doc-template",y.className]);if(_.length>0){var w=_.length>1?"Examples":"Example";x=a.default.createElement("h1",{className:f("examples-header")},w)}var M=a.default.createElement(c.default,{packageName:t,packageUrl:d,packageVersion:o});return a.default.createElement("div",p({},y,{className:C}),a.default.createElement("div",{className:f("doc-card")},t&&M,s&&a.default.createElement(l.default,{src:s}),u&&a.default.createElement("a",{href:u},"View component source code")),x,_.map((function(e){return a.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?n.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):n.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&a.default.createElement("div",{className:f("doc-card")},h))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;n.default=h},797:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=l(t(4)),r=l(t(798));function l(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(r.default),c=function(e){var n=e.packageName,t=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:d("badge-container")},a.default.createElement("a",{className:d("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:d("badge-name")},t?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(n)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(n),alt:"NPM version"}))};n.default=c},798:function(e,n,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,n,t){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(t(0)),r=u(t(3)),l=u(t(804)),d=u(t(805)),c=u(t(4)),i=u(t(800)),s=u(t(801));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function g(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}l.default.registerLanguage("jsx",d.default);var _=c.default.bind(i.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function n(e){var t,a,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,(t=!(o=b(n).call(this,e))||"object"!==p(o)&&"function"!=typeof o?h(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(h(t)),t.handleCodeToggle=t.handleCodeToggle.bind(h(t)),t}var t,a,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,e),t=n,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.title,t=e.example,a=e.exampleSrc,r=e.children,d=e.description,c=f(e,["title","example","exampleSrc","children","description"]),i=this.state,u=i.isExpanded,p={};return i.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},c,{className:_("template",c.className)}),n&&o.default.createElement("div",{className:_("header")},o.default.createElement("h2",{className:_("title")},n)),o.default.createElement("div",{className:_("content"),style:p},d&&o.default.createElement("div",{className:_("description")},d),t,r),a&&o.default.createElement("div",{className:_("footer")},o.default.createElement("div",{className:_("button-container")},o.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:_("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:_("chevron-right")}))),o.default.createElement("div",{className:_("code",{"is-expanded":u}),"aria-hidden":!u},u?o.default.createElement(l.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(t.prototype,a),r&&g(t,r),n}(o.default.Component);k.propTypes=v,k.defaultProps=E;var x=k;n.default=x},800:function(e,n,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",d="#8dc891",c="#d7deea",i="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:c},entity:{color:c,cursor:"help"},url:{color:c},".language-css .token.string":{color:c},".style .token.string":{color:c},variable:{color:c},"attr-value":{color:d},keyword:{color:r},"at-rule":{color:i},"class-name":{color:i},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};n.default=s},802:function(e,n,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=205-63fac1f93cf271dac057.js.map