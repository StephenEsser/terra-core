(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{2451:function(e,t,n){"use strict";n.r(t),t.default="# List Subsection Header\n\nThe list subsection header is a sub-component of the list subsection. It provides the visual representation of the subsection, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator. The subsection header should only be consumed directly when the header is static, as the actual list item collapse is handled by the subsection.\n\nWhen consumed by itself as an individual list item avoid enabling the collapsible properties.\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport List, { SubsectionHeader } from 'terra-list/lib/List';\n\n<SubsectionHeader\n  title=\"test title\"\n  key=\"subsection-1\"\n/>\n\n```\n"},2452:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">level</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">2</td><td style="padding-bottom: 1.8rem">Optionally sets the heading level. One of <code style="white-space: pre-wrap">2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">refCallback</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function callback passthrough for the ref of the section li.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">title</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Title text to be placed within the subsection header.</td></tr></tbody></table>'},2453:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport ListUtils from './ListUtils';\nimport styles from './ListSubsectionHeader.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * @private Whether or not the subsection is collapsed.\n   */\n  isCollapsed: PropTypes.bool,\n  /**\n   * @private Whether or not the subsection can be collapsed.\n   */\n  isCollapsible: PropTypes.bool,\n  /**\n   * Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.\n   */\n  level: PropTypes.oneOf([2, 3, 4, 5, 6]),\n  /**\n   * @private The associated metaData to be provided in the onSelect callback.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  metaData: PropTypes.object,\n  /**\n   * @private Function callback for when the appropriate click or key action is performed.\n   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)\n   */\n  onSelect: PropTypes.func,\n  /**\n   * Function callback passthrough for the ref of the section li.\n   */\n  refCallback: PropTypes.func,\n  /**\n   * Title text to be placed within the subsection header.\n   */\n  title: PropTypes.string.isRequired,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onBlur: PropTypes.func,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onClick: PropTypes.func,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onKeyDown: PropTypes.func,\n  /**\n   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.\n   */\n  onMouseDown: PropTypes.func,\n};\n\nconst defaultProps = {\n  isCollapsed: false,\n  isCollapsible: false,\n  level: 2,\n};\n\nconst ListSubsectionHeader = ({\n  isCollapsed,\n  isCollapsible,\n  level,\n  metaData,\n  onBlur,\n  onClick,\n  onKeyDown,\n  onMouseDown,\n  onSelect,\n  refCallback,\n  title,\n  ...customProps\n}) => {\n  const sectionHeaderClassNames = cx([\n    'subsection-header',\n    { 'is-collapsible': isCollapsible },\n    customProps.className,\n  ]);\n\n  const attrSpread = {};\n  const Element = `h${level}`;\n  let titleElement = <Element className={cx('title')}>{title}</Element>;\n  let accordionIcon;\n  if (isCollapsible) {\n    accordionIcon = (\n      <div className={cx('start')}>\n        <span className={cx(['accordion-icon', { 'is-open': !isCollapsed }])} />\n      </div>\n    );\n    titleElement = (\n      <div className={cx('fill')}>\n        {titleElement}\n      </div>\n    );\n\n    attrSpread.onClick = ListUtils.wrappedOnClickForItem(onClick, onSelect, metaData);\n    attrSpread.onKeyDown = ListUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);\n    attrSpread.tabIndex = '0';\n    attrSpread.role = 'heading';\n    attrSpread['aria-expanded'] = !isCollapsed;\n    attrSpread['aria-level'] = 2;\n    attrSpread['data-item-show-focus'] = 'true';\n    attrSpread.onBlur = ListUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-item-show-focus', 'true'));\n    attrSpread.onMouseDown = ListUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-item-show-focus', 'false'));\n  }\n\n  return (\n    <li {...customProps} {...attrSpread} className={sectionHeaderClassNames} ref={refCallback}>\n      {accordionIcon}\n      {titleElement}\n    </li>\n  );\n};\n\nListSubsectionHeader.propTypes = propTypes;\nListSubsectionHeader.defaultProps = defaultProps;\n\nexport default ListSubsectionHeader;\n"},2454:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(0))&&a.__esModule?a:{default:a},r=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(77));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}var s=function(){return o.default.createElement(r.default,null,o.default.createElement(r.SubsectionHeader,{title:"Default SubsectionHeader",key:"default"}))};t.default=s},2455:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport List, { SubsectionHeader } from 'terra-list/lib/index';\n\nconst ListSubsectionHeaderExample = () => (\n  <List>\n    <SubsectionHeader title=\"Default SubsectionHeader\" key=\"default\" />\n  </List>\n);\n\nexport default ListSubsectionHeaderExample;\n"},2970:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),o=p(n(796)),r=p(n(2451)),l=n(867),s=p(n(2452)),i=p(n(2453)),c=p(n(2454)),d=p(n(2455));function p(e){return e&&e.__esModule?e:{default:e}}var u=function(){return a.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{example:a.default.createElement(c.default,null),source:d.default}],propsTables:[{componentName:"List Subsection Header",componentSrc:i.default,componentProps:s.default}]})};t.default=u},796:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),o=p(n(3)),r=p(n(803)),l=p(n(257)),s=p(n(4)),i=p(n(797)),c=p(n(799)),d=p(n(802));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=s.default.bind(d.default),b={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},g=function(e){var t,n=e.packageName,o=e.packageVersion,s=e.packageUrl,d=e.readme,p=e.srcPath,b=e.examples,g=e.propsTables,h=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=b;g&&(t=g);for(var v=0,w=0;w<_.length;w+=1)_[w].id=v,v+=1;if(t)for(var k=0;k<t.length;k+=1)t[k].id=v,v+=1;var x,E=f(["doc-template",y.className]);if(_.length>0){var S=_.length>1?"Examples":"Example";x=a.default.createElement("h1",{className:f("examples-header")},S)}var T=a.default.createElement(i.default,{packageName:n,packageUrl:s,packageVersion:o});return a.default.createElement("div",u({},y,{className:E}),a.default.createElement("div",{className:f("doc-card")},n&&T,d&&a.default.createElement(l.default,{src:d}),p&&a.default.createElement("a",{href:p},"View component source code")),x,_.map((function(e){return a.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},g[0]&&g[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&a.default.createElement("div",{className:f("doc-card")},h))};g.propTypes=b,g.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=g;t.default=h},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(4)),r=l(n(798));function l(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),i=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:s("badge-container")},a.default.createElement("a",{className:s("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:s("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),r=p(n(3)),l=p(n(804)),s=p(n(805)),i=p(n(4)),c=p(n(800)),d=p(n(801));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",s.default);var _=i.default.bind(c.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},w={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=g(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?h(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(h(n)),n.handleCodeToggle=n.handleCodeToggle.bind(h(n)),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,r=e.children,s=e.description,i=f(e,["title","example","exampleSrc","children","description"]),c=this.state,p=c.isExpanded,u={};return c.isBackgroundTransparent&&(u={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},i,{className:_("template",i.className)}),t&&o.default.createElement("div",{className:_("header")},o.default.createElement("h2",{className:_("title")},t)),o.default.createElement("div",{className:_("content"),style:u},s&&o.default.createElement("div",{className:_("description")},s),n,r),a&&o.default.createElement("div",{className:_("footer")},o.default.createElement("div",{className:_("button-container")},o.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:_("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:_("chevron-right")}))),o.default.createElement("div",{className:_("code",{"is-expanded":p}),"aria-hidden":!p},p?o.default.createElement(l.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&b(n.prototype,a),r&&b(n,r),t}(o.default.Component);k.propTypes=v,k.defaultProps=w;var x=k;t.default=x},800:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",s="#8dc891",i="#d7deea",c="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:s},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:s},keyword:{color:r},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},802:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},867:function(e){e.exports=JSON.parse('{"name":"terra-list","main":"lib/index.js","version":"4.19.0","description":"The Terra List is a structural component to arrange content within list/listitems.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-list","List","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","prop-types":"^15.5.8","terra-doc-template":"^2.19.0","terra-icon":"^3.21.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')}}]);
//# sourceMappingURL=130-d60e794c5a78583b93c5.js.map