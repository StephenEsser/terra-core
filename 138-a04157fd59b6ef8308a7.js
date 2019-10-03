(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1808:function(e,a,t){"use strict";t.r(a),a.default='# terra-avatar Upgrade Guide\n## Changes from version 1 to version 2\n\n### Props\n#### Removed\n* `variant` prop. Avatar is now split into three sub components - `Avatar`, `Facility`, and `SharedUser`. `Avatar` is the default export, while `Facility` and `SharedUser` are named exports.\n\n#### Added\n* `alt` prop. Represents alternative text. This is required on all variants for accessibility.\n* `color` prop. This controls theme specific colors. By default, it is set to `auto`. `auto` hashes the `alt` prop to generate a color. See prop tables for accepted values.\n* `hashValue` prop. This value will be used in place of `alt` to generate a color. Use this if `alt` should not be used to generate a color.\n* `isDeceased` prop. Applies deceased styles to the `avatar` variant.\n* `isAriaHidden` prop. This controls whether to hide the component from accessibility. Use this when avatar is purely decorative in nature.\n* `size` prop.\n\n#### Updated\n* `initials` prop now only accepts one or two letters.\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n\n| Previous | Updated |\n|-|-|\n| --terra-avatar-icon-facility | --terra-avatar-icon-facility-background-image |\n| --terra-avatar-icon-user | --terra-avatar-icon-user-background-image |\n\n#### Removed\n* --terra-avatar-background-color\n* --terra-avatar-box-shadow\n* --terra-avatar-size\n* --terra-avatar-font-size-large\n* --terra-avatar-font-size-small\n\n#### Added\n* --terra-avatar-height\n* --terra-avatar-width\n* --terra-avatar-icon-shared-user-background-image\n* --terra-avatar-initials-font-size\n* --terra-avatar-initials-font-weight\n* --terra-avatar-neutral-background-color\n* --terra-avatar-neutral-after-box-shadow\n* --terra-avatar-one-background-color\n* --terra-avatar-one-after-box-shadow\n* --terra-avatar-two-background-color\n* --terra-avatar-two-after-box-shadow\n* --terra-avatar-three-background-color\n* --terra-avatar-three-after-box-shadow\n* --terra-avatar-four-background-color\n* --terra-avatar-four-after-box-shadow\n* --terra-avatar-five-background-color\n* --terra-avatar-five-after-box-shadow\n* --terra-avatar-six-background-color\n* --terra-avatar-six-after-box-shadow\n* --terra-avatar-seven-background-color\n* --terra-avatar-seven-after-box-shadow\n* --terra-avatar-eight-background-color\n* --terra-avatar-eight-after-box-shadow\n* --terra-avatar-nine-background-color\n* --terra-avatar-nine-after-box-shadow\n* --terra-avatar-ten-background-color\n* --terra-avatar-ten-after-box-shadow\n* --terra-avatar-is-deceased-background-color\n* --terra-avatar-image-is-deceased-opacity\n* --terra-avatar-is-deceased-after-box-shadow\n\n### Steps to uplift to V2\n1. Use the default export for the `Avatar` variant. Use a named export for `Facility` and `SharedUser` variants.\n2. Specify alternative text, using the `alt` prop.\n3. Profit.\n\n#### V1 Code\n```javascript\nimport Avatar from \'terra-avatar\'\n\n<Avatar variant="Patient 1" initials="AAA" />\n<Avatar variant="facility" />\n```\n\n#### V2 Code\n```javascript\nimport Avatar, { Facility } from \'terra-avatar\'\n\n<Avatar alt="Patient 1" initials="AA" />\n<Facility alt="Location 1" />\n```\n'},2876:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=c(t(0)),n=c(t(796)),o=c(t(1808)),l=t(917);function c(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(n.default,{packageName:l.name,packageVersion:l.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name)})};a.default=i},796:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=u(t(0)),n=u(t(3)),o=u(t(803)),l=u(t(257)),c=u(t(4)),i=u(t(797)),s=u(t(799)),d=u(t(802));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var f=c.default.bind(d.default),g={children:n.default.node,packageName:n.default.string,packageUrl:n.default.string,packageVersion:n.default.string,readme:n.default.string,srcPath:n.default.string,examples:n.default.arrayOf(n.default.shape({title:n.default.string,description:n.default.node,example:n.default.element,source:n.default.string})),propsTables:n.default.arrayOf(n.default.shape({componentSrc:n.default.string,componentName:n.default.string,componentProps:n.default.string,propsResolution:n.default.string}))},v=function(e){var a,t=e.packageName,n=e.packageVersion,c=e.packageUrl,d=e.readme,u=e.srcPath,g=e.examples,v=e.propsTables,b=e.children,h=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=g;v&&(a=v);for(var y=0,x=0;x<_.length;x+=1)_[x].id=y,y+=1;if(a)for(var k=0;k<a.length;k+=1)a[k].id=y,y+=1;var w,E=f(["doc-template",h.className]);if(_.length>0){var S=_.length>1?"Examples":"Example";w=r.default.createElement("h1",{className:f("examples-header")},S)}var T=r.default.createElement(i.default,{packageName:t,packageUrl:c,packageVersion:n});return r.default.createElement("div",p({},h,{className:E}),r.default.createElement("div",{className:f("doc-card")},t&&T,d&&r.default.createElement(l.default,{src:d}),u&&r.default.createElement("a",{href:u},"View component source code")),w,_.map((function(e){return r.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),r.default.createElement("div",{className:f("doc-card")},v[0]&&v[0].componentProps?a.map((function(e){return r.default.createElement("div",{className:f("props-table-markdown"),key:e.id},r.default.createElement("h2",null,e.componentName," Props"),r.default.createElement(l.default,{src:e.componentProps}))})):a.map((function(e){return r.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&r.default.createElement("div",{className:f("doc-card")},b))};v.propTypes=g,v.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=v;a.default=b},797:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),n=l(t(4)),o=l(t(798));function l(e){return e&&e.__esModule?e:{default:e}}var c=n.default.bind(o.default),i=function(e){var a=e.packageName,t=e.packageUrl,n=e.packageVersion;return n?r.default.createElement("div",{className:c("badge-container")},r.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},r.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(n)))):r.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(a)},r.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(a),alt:"NPM version"}))};a.default=i},798:function(e,a,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,a,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(0)),o=u(t(3)),l=u(t(804)),c=u(t(805)),i=u(t(4)),s=u(t(800)),d=u(t(801));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function g(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,a){return(h=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}l.default.registerLanguage("jsx",c.default);var _=i.default.bind(s.default),y={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function a(e){var t,r,n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),r=this,(t=!(n=v(a).call(this,e))||"object"!==p(n)&&"function"!=typeof n?b(r):n).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(b(t)),t.handleCodeToggle=t.handleCodeToggle.bind(b(t)),t}var t,r,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&h(e,a)}(a,e),t=a,(r=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,a=e.title,t=e.example,r=e.exampleSrc,o=e.children,c=e.description,i=f(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),n.default.createElement("div",m({},i,{className:_("template",i.className)}),a&&n.default.createElement("div",{className:_("header")},n.default.createElement("h2",{className:_("title")},a)),n.default.createElement("div",{className:_("content"),style:p},c&&n.default.createElement("div",{className:_("description")},c),t,o),r&&n.default.createElement("div",{className:_("footer")},n.default.createElement("div",{className:_("button-container")},n.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:_("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:_("chevron-right")}))),n.default.createElement("div",{className:_("code",{"is-expanded":u}),"aria-hidden":!u},u?n.default.createElement(l.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&g(t.prototype,r),o&&g(t,o),a}(n.default.Component);k.propTypes=y,k.defaultProps=x;var w=k;a.default=w},800:function(e,a,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r="#D8DEE9",n="#B2B2B2",o="#c5a5c5",l="#5a9bcf",c="#8dc891",i="#d7deea",s="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:n},"block-comment":{color:n},prolog:{color:n},doctype:{color:n},cdata:{color:n},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:r},char:{color:r},builtin:{color:r},inserted:{color:r},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:c},keyword:{color:o},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};a.default=d},802:function(e,a,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},917:function(e){e.exports=JSON.parse('{"name":"terra-avatar","main":"lib/index.js","version":"2.28.0","description":"Contains components that represent a person, location or entity. Variants include Avatar, Facility, and SharedUser.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-avatar","Avatar","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.19.0","terra-image":"^3.18.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')}}]);
//# sourceMappingURL=138-a04157fd59b6ef8308a7.js.map