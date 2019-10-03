(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{2325:function(e,t,a){"use strict";a.r(t),t.default="# Terra Grid Upgrade Guide\n\n## Changes from version 5 to version 6\n\n### Changes to usage/import of terra-breakpoints\n\n#### Removed\n* _variables.scss file within terra-grid (housed breakpoints)\n* col breakpoint (is now named 'tiny')\n\n#### Added\n* Import statement to import breakpoint size props from terra-breakpoints component\n* 'enormous' breakpoint (originally 'huge')\n\n#### Changed\n* Renamed `col` prop to `tiny`\n* Renamed `tiny` prop to `small`\n* Renamed `small` prop to `medium`\n* Renamed `medium` prop to `large`\n* Renamed `large` prop to `huge`\n* Renamed `huge` prop to `enormous`\n\n## Changes from version 4 to version 5\n\n### Changes to CSS Custom Properties\n\n#### Removed\n* --terra-grid-gutter-width\n\n#### Added\n* --terra-grid-gutter-margin-left\n* --terra-grid-gutter-padding-left\n"},2949:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(796)),r=l(a(2325));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return n.default.createElement(o.default,{packageName:"terra-grid",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-grid",readme:r.default})};t.default=c},796:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),o=s(a(3)),r=s(a(803)),l=s(a(257)),c=s(a(4)),d=s(a(797)),i=s(a(799)),u=s(a(802));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=c.default.bind(u.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},_=function(e){var t,a=e.packageName,o=e.packageVersion,c=e.packageUrl,u=e.readme,s=e.srcPath,g=e.examples,_=e.propsTables,b=e.children,h=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;_&&(t=_);for(var v=0,E=0;E<y.length;E+=1)y[E].id=v,v+=1;if(t)for(var k=0;k<t.length;k+=1)t[k].id=v,v+=1;var x,w=f(["doc-template",h.className]);if(y.length>0){var T=y.length>1?"Examples":"Example";x=n.default.createElement("h1",{className:f("examples-header")},T)}var O=n.default.createElement(d.default,{packageName:a,packageUrl:c,packageVersion:o});return n.default.createElement("div",p({},h,{className:w}),n.default.createElement("div",{className:f("doc-card")},a&&O,u&&n.default.createElement(l.default,{src:u}),s&&n.default.createElement("a",{href:s},"View component source code")),x,y.map((function(e){return n.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),n.default.createElement("div",{className:f("doc-card")},_[0]&&_[0].componentProps?t.map((function(e){return n.default.createElement("div",{className:f("props-table-markdown"),key:e.id},n.default.createElement("h2",null,e.componentName," Props"),n.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return n.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&n.default.createElement("div",{className:f("doc-card")},b))};_.propTypes=g,_.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=_;t.default=b},797:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(4)),r=l(a(798));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(r.default),d=function(e){var t=e.packageName,a=e.packageUrl,o=e.packageVersion;return o?n.default.createElement("div",{className:c("badge-container")},n.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},n.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:c("badge-version")},"v".concat(o)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},798:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(a(0)),r=s(a(3)),l=s(a(804)),c=s(a(805)),d=s(a(4)),i=s(a(800)),u=s(a(801));function s(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",c.default);var y=d.default.bind(i.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=_(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?b(n):o).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(b(a)),a.handleCodeToggle=a.handleCodeToggle.bind(b(a)),a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),a=t,(n=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,n=e.exampleSrc,r=e.children,c=e.description,d=f(e,["title","example","exampleSrc","children","description"]),i=this.state,s=i.isExpanded,p={};return i.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},d,{className:y("template",d.className)}),t&&o.default.createElement("div",{className:y("header")},o.default.createElement("h2",{className:y("title")},t)),o.default.createElement("div",{className:y("content"),style:p},c&&o.default.createElement("div",{className:y("description")},c),a,r),n&&o.default.createElement("div",{className:y("footer")},o.default.createElement("div",{className:y("button-container")},o.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:y("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:y("chevron-right")}))),o.default.createElement("div",{className:y("code",{"is-expanded":s}),"aria-hidden":!s},s?o.default.createElement(l.default,{language:"jsx",style:u.default,customStyle:{margin:"0",borderRadius:"0"}},n):void 0)))}}])&&g(a.prototype,n),r&&g(a,r),t}(o.default.Component);k.propTypes=v,k.defaultProps=E;var x=k;t.default=x},800:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",i="#FAC863",u={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:n},char:{color:n},builtin:{color:n},inserted:{color:n},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:r},"at-rule":{color:i},"class-name":{color:i},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=u},802:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=181-f5063405db418f915bab.js.map