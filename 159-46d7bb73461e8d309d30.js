(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1927:function(e,a,t){"use strict";t.r(a),a.default="# Terra Demographics Banner Upgrade Guide\n\n## Changes from version 2 to version 3\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-demographics-banner-foreground | --terra-demographics-banner-color |\n| --terra-demographics-banner-foreground-deceased | --terra-demographics-banner-deceased-color |\n\n#### Added\n* --terra-demographics-banner-background-color\n* --terra-demographics-banner-background-image\n* --terra-demographics-banner-box-shadow\n* --terra-demographics-banner-padding\n* --terra-demographics-banner-profile-photo-margin\n* --terra-demographics-banner-value-margin-right\n* --terra-demographics-banner-value-margin-top\n* --terra-demographics-banner-person-details-margin-top\n* --terra-demographics-banner-deceased-background-color\n* --terra-demographics-banner-deceased-background-image\n* --terra-demographics-banner-deceased-profile-photo-opacity\n* --terra-demographics-banner-content-margin\n* --terra-demographics-banner-application-content-margin-top\n* --terra-demographics-banner-large-box-shadow\n* --terra-demographics-banner-large-padding\n* --terra-demographics-banner-large-person-name-font-size\n\n#### Removed\n* * --terra-demographics-banner-background\n* --terra-demographics-banner-background-deceased"},2897:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),n=l(t(796)),o=l(t(1927));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement(n.default,{packageName:"terra-demographics-banner",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner",readme:o.default})};a.default=c},796:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=u(t(0)),n=u(t(3)),o=u(t(803)),l=u(t(257)),c=u(t(4)),d=u(t(797)),i=u(t(799)),s=u(t(802));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var f=c.default.bind(s.default),g={children:n.default.node,packageName:n.default.string,packageUrl:n.default.string,packageVersion:n.default.string,readme:n.default.string,srcPath:n.default.string,examples:n.default.arrayOf(n.default.shape({title:n.default.string,description:n.default.node,example:n.default.element,source:n.default.string})),propsTables:n.default.arrayOf(n.default.shape({componentSrc:n.default.string,componentName:n.default.string,componentProps:n.default.string,propsResolution:n.default.string}))},b=function(e){var a,t=e.packageName,n=e.packageVersion,c=e.packageUrl,s=e.readme,u=e.srcPath,g=e.examples,b=e.propsTables,h=e.children,_=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;b&&(a=b);for(var v=0,E=0;E<y.length;E+=1)y[E].id=v,v+=1;if(a)for(var k=0;k<a.length;k+=1)a[k].id=v,v+=1;var x,w=f(["doc-template",_.className]);if(y.length>0){var T=y.length>1?"Examples":"Example";x=r.default.createElement("h1",{className:f("examples-header")},T)}var O=r.default.createElement(d.default,{packageName:t,packageUrl:c,packageVersion:n});return r.default.createElement("div",p({},_,{className:w}),r.default.createElement("div",{className:f("doc-card")},t&&O,s&&r.default.createElement(l.default,{src:s}),u&&r.default.createElement("a",{href:u},"View component source code")),x,y.map((function(e){return r.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),r.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?a.map((function(e){return r.default.createElement("div",{className:f("props-table-markdown"),key:e.id},r.default.createElement("h2",null,e.componentName," Props"),r.default.createElement(l.default,{src:e.componentProps}))})):a.map((function(e){return r.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&r.default.createElement("div",{className:f("doc-card")},h))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;a.default=h},797:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),n=l(t(4)),o=l(t(798));function l(e){return e&&e.__esModule?e:{default:e}}var c=n.default.bind(o.default),d=function(e){var a=e.packageName,t=e.packageUrl,n=e.packageVersion;return n?r.default.createElement("div",{className:c("badge-container")},r.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},r.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(n)))):r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(a)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(a),alt:"NPM version"}))};a.default=d},798:function(e,a,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,a,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(0)),o=u(t(3)),l=u(t(804)),c=u(t(805)),d=u(t(4)),i=u(t(800)),s=u(t(801));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function g(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,a){return(_=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}l.default.registerLanguage("jsx",c.default);var y=d.default.bind(i.default),v={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function a(e){var t,r,n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),r=this,(t=!(n=b(a).call(this,e))||"object"!==p(n)&&"function"!=typeof n?h(r):n).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(h(t)),t.handleCodeToggle=t.handleCodeToggle.bind(h(t)),t}var t,r,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&_(e,a)}(a,e),t=a,(r=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,a=e.title,t=e.example,r=e.exampleSrc,o=e.children,c=e.description,d=f(e,["title","example","exampleSrc","children","description"]),i=this.state,u=i.isExpanded,p={};return i.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),n.default.createElement("div",m({},d,{className:y("template",d.className)}),a&&n.default.createElement("div",{className:y("header")},n.default.createElement("h2",{className:y("title")},a)),n.default.createElement("div",{className:y("content"),style:p},c&&n.default.createElement("div",{className:y("description")},c),t,o),r&&n.default.createElement("div",{className:y("footer")},n.default.createElement("div",{className:y("button-container")},n.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:y("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:y("chevron-right")}))),n.default.createElement("div",{className:y("code",{"is-expanded":u}),"aria-hidden":!u},u?n.default.createElement(l.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&g(t.prototype,r),o&&g(t,o),a}(n.default.Component);k.propTypes=v,k.defaultProps=E;var x=k;a.default=x},800:function(e,a,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r="#D8DEE9",n="#B2B2B2",o="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",i="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:n},"block-comment":{color:n},prolog:{color:n},doctype:{color:n},cdata:{color:n},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:o},"at-rule":{color:i},"class-name":{color:i},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};a.default=s},802:function(e,a,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=159-46d7bb73461e8d309d30.js.map