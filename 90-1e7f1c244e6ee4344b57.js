(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1058:function(e,t,n){e.exports={"dialog-wrapper":"DialogDocCommon-module__dialog-wrapper___J-axE"}},1929:function(e,t,n){"use strict";n.r(t),t.default="# Terra Dialog\n\nDialogs are temporary views that can be used in a myriad of ways. Dialogs have the ability to alert users to act on critical information. In doing so, Dialogs may allow users to avoid destructive decisions, and also extend user workflows without disorienting the user.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-dialog`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Implementation Notes:\n\nThe Dialog component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.\n\n[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Dialog from 'terra-dialog';\n\nconst header = 'Header Content';\n\nconst footer = <div>Footer Content</div>;\n\nconst body = (<div>\n  <p>This is my body content.</p>\n  <p>This is some more content.</p>\n</div>);\n\n<Dialog header={header} footer={footer} onClose={() => alert('Close')} >\n  {body}\n</Dialog>\n```\n\nNote: This component has an i18n dependency that requires setup per [these steps](https://github.com/cerner/terra-core/#internationalization-i18n).\n\n## Component Features\n\n\x3c!-- Uncomment supported features.\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n --\x3e\n"},1930:function(e){e.exports=JSON.parse('{"name":"terra-dialog","main":"lib/Dialog.js","version":"2.26.0","description":"Dialogs are temporary views that can be used in a myriad of ways. Dialogs have the ability to alert users to act on critical information. In doing so, Dialogs may allow users to avoid destructive decisions, and also extend user workflows without disorienting the user.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-dialog","Dialog","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-button":"^3.24.0","terra-content-container":"^3.18.0","terra-doc-template":"^2.19.0","terra-icon":"^3.21.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1931:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">The children to be placed within the main content area of the dialog.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">footer</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">React node to be placed within the footer area of the dialog.\nContent exceeding the available space will be hidden.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">header</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">React node to be placed within the header area of the dialog.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onClose</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Callback function for when the close button is clicked. The close button will not display if this is not set.\nOn small viewports a back button will be displayed instead of a close button.</td></tr></tbody></table>'},1932:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Button from 'terra-button';\nimport ContentContainer from 'terra-content-container';\nimport { FormattedMessage } from 'react-intl';\nimport styles from './Dialog.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The children to be placed within the main content area of the dialog.\n   */\n  children: PropTypes.node,\n  /**\n   * React node to be placed within the footer area of the dialog.\n   * Content exceeding the available space will be hidden.\n   */\n  footer: PropTypes.node.isRequired,\n  /**\n   * React node to be placed within the header area of the dialog.\n   */\n  header: PropTypes.node.isRequired,\n  /**\n   * Callback function for when the close button is clicked. The close button will not display if this is not set.\n   * On small viewports a back button will be displayed instead of a close button.\n   */\n  onClose: PropTypes.func,\n};\n\nconst defaultProps = {\n  onClose: null,\n  children: null,\n};\n\nconst Dialog = ({\n  children, footer, header, onClose, ...customProps\n}) => {\n  const dialogClassNames = cx([\n    'dialog',\n    customProps.className,\n  ]);\n\n  const closeButton = onClose\n    ? (\n      <div className={cx('dialog-header-close')}>\n        <FormattedMessage id=\"Terra.dialog.close\">\n          {closeText => (\n            <Button variant=\"utility\" text={closeText} onClick={onClose} isIconOnly icon={<span className={cx('close-icon')} />} />\n          )}\n        </FormattedMessage>\n      </div>\n    )\n    : null;\n\n  const dialogHeader = (\n    <div className={cx('dialog-header')}>\n      <div className={cx('dialog-header-title')}>{header}</div>\n      {closeButton}\n    </div>\n  );\n\n  return (\n    <div {...customProps} className={dialogClassNames}>\n      <ContentContainer fill header={dialogHeader} footer={<div className={cx('dialog-footer')}>{footer}</div>}>\n        <div className={cx('dialog-body')}>{children}</div>\n      </ContentContainer>\n    </div>\n  );\n};\n\nDialog.propTypes = propTypes;\nDialog.defaultProps = defaultProps;\n\nexport default Dialog;\n"},1933:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=i(n(873)),r=i(n(4)),l=i(n(1058));function i(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(l.default),d=o.default.createElement("span",null,"Footer Stuff"),c=o.default.createElement("div",null,o.default.createElement("p",null,"This is my body content."),o.default.createElement("p",null,"This is some more content.")),u=function(){return o.default.createElement("div",{className:s("dialog-wrapper")},o.default.createElement(a.default,{header:"Header Stuff",footer:d,onClose:function(){return alert("Close")}},c))};t.default=u},1934:function(e,t,n){"use strict";n.r(t),t.default="/* eslint-disable no-alert */\nimport React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = <span>Footer Stuff</span>;\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogDefault = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogDefault;\n/* eslint-enable no-alert */\n"},1935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=i(n(873)),r=i(n(4)),l=i(n(1058));function i(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(l.default),d=o.default.createElement("div",null,o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff")),c=o.default.createElement("div",null,o.default.createElement("p",null,"This is my body content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content.")),u=function(){return o.default.createElement("div",{className:s("dialog-wrapper")},o.default.createElement(a.default,{header:"Header Stuff",footer:d,onClose:function(){return alert("Close")}},c))};t.default=u},1936:function(e,t,n){"use strict";n.r(t),t.default="/* eslint-disable no-alert */\nimport React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = (\n  <div>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n  </div>\n);\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogLongContent = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogLongContent;\n/* eslint-enable no-alert */\n"},1937:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=i(n(873)),r=i(n(4)),l=i(n(1058));function i(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(l.default),d=o.default.createElement("span",null,"Footer Stuff"),c=o.default.createElement("div",null,o.default.createElement("p",null,"This is my body content."),o.default.createElement("p",null,"This is some more content.")),u=function(){return o.default.createElement("div",{className:s("dialog-wrapper")},o.default.createElement(a.default,{header:"Header Stuff",footer:d},c))};t.default=u},1938:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = <span>Footer Stuff</span>;\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogNoClose = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogNoClose;\n"},2899:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=g(n(0)),a=g(n(796)),r=g(n(1929)),l=n(1930),i=g(n(1931)),s=g(n(1932)),d=g(n(1933)),c=g(n(1934)),u=g(n(1935)),m=g(n(1936)),p=g(n(1937)),f=g(n(1938));function g(e){return e&&e.__esModule?e:{default:e}}var h=function(){return o.default.createElement(a.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Dialog - Default",example:o.default.createElement(d.default,null),source:c.default},{title:"Dialog - Long Content",example:o.default.createElement(u.default,null),source:m.default},{title:"Dialog - No Close Button",example:o.default.createElement(p.default,null),source:f.default}],propsTables:[{componentName:"Dialog",componentSrc:s.default,componentProps:i.default}]})};t.default=h},796:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),a=u(n(3)),r=u(n(803)),l=u(n(257)),i=u(n(4)),s=u(n(797)),d=u(n(799)),c=u(n(802));function u(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(c.default),g={children:a.default.node,packageName:a.default.string,packageUrl:a.default.string,packageVersion:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,componentProps:a.default.string,propsResolution:a.default.string}))},h=function(e){var t,n=e.packageName,a=e.packageVersion,i=e.packageUrl,c=e.readme,u=e.srcPath,g=e.examples,h=e.propsTables,b=e.children,y=p(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=g;h&&(t=h);for(var v=0,T=0;T<_.length;T+=1)_[T].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var x,w=f(["doc-template",y.className]);if(_.length>0){var N=_.length>1?"Examples":"Example";x=o.default.createElement("h1",{className:f("examples-header")},N)}var S=o.default.createElement(s.default,{packageName:n,packageUrl:i,packageVersion:a});return o.default.createElement("div",m({},y,{className:w}),o.default.createElement("div",{className:f("doc-card")},n&&S,c&&o.default.createElement(l.default,{src:c}),u&&o.default.createElement("a",{href:u},"View component source code")),x,_.map((function(e){return o.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&o.default.createElement("div",{className:f("doc-card")},b))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;t.default=b},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(4)),r=l(n(798));function l(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(r.default),s=function(e){var t=e.packageName,n=e.packageUrl,a=e.packageVersion;return a?o.default.createElement("div",{className:i("badge-container")},o.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},o.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(a)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=s},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),l=u(n(804)),i=u(n(805)),s=u(n(4)),d=u(n(800)),c=u(n(801));function u(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var _=s.default.bind(d.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},T={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=h(t).call(this,e))||"object"!==m(a)&&"function"!=typeof a?b(o):a).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(b(n)),n.handleCodeToggle=n.handleCodeToggle.bind(b(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,r=e.children,i=e.description,s=f(e,["title","example","exampleSrc","children","description"]),d=this.state,u=d.isExpanded,m={};return d.isBackgroundTransparent&&(m={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",p({},s,{className:_("template",s.className)}),t&&a.default.createElement("div",{className:_("header")},a.default.createElement("h2",{className:_("title")},t)),a.default.createElement("div",{className:_("content"),style:m},i&&a.default.createElement("div",{className:_("description")},i),n,r),o&&a.default.createElement("div",{className:_("footer")},a.default.createElement("div",{className:_("button-container")},a.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:_("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:_("chevron-right")}))),a.default.createElement("div",{className:_("code",{"is-expanded":u}),"aria-hidden":!u},u?a.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&g(n.prototype,o),r&&g(n,r),t}(a.default.Component);E.propTypes=v,E.defaultProps=T;var x=E;t.default=x},800:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",a="#B2B2B2",r="#c5a5c5",l="#5a9bcf",i="#8dc891",s="#d7deea",d="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:i},keyword:{color:r},"at-rule":{color:d},"class-name":{color:d},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},802:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),a=c(n(3)),r=c(n(4)),l=c(n(49)),i=c(n(46)),s=n(7),d=c(n(974));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.default.bind(d.default),f={children:a.default.node,footer:a.default.node.isRequired,header:a.default.node.isRequired,onClose:a.default.func},g=function(e){var t=e.children,n=e.footer,a=e.header,r=e.onClose,d=m(e,["children","footer","header","onClose"]),c=p(["dialog",d.className]),f=r?o.default.createElement("div",{className:p("dialog-header-close")},o.default.createElement(s.FormattedMessage,{id:"Terra.dialog.close"},(function(e){return o.default.createElement(l.default,{variant:"utility",text:e,onClick:r,isIconOnly:!0,icon:o.default.createElement("span",{className:p("close-icon")})})}))):null,g=o.default.createElement("div",{className:p("dialog-header")},o.default.createElement("div",{className:p("dialog-header-title")},a),f);return o.default.createElement("div",u({},d,{className:c}),o.default.createElement(i.default,{fill:!0,header:g,footer:o.default.createElement("div",{className:p("dialog-footer")},n)},o.default.createElement("div",{className:p("dialog-body")},t)))};g.propTypes=f,g.defaultProps={onClose:null,children:null};var h=g;t.default=h},974:function(e,t,n){e.exports={dialog:"Dialog-module__dialog___2m12i","dialog-header":"Dialog-module__dialog-header___tH-_K","dialog-header-title":"Dialog-module__dialog-header-title___2QmqU","dialog-header-close":"Dialog-module__dialog-header-close___1xiMB","close-icon":"Dialog-module__close-icon___2Q45c","dialog-body":"Dialog-module__dialog-body___B1Nle","dialog-footer":"Dialog-module__dialog-footer___noxrB"}}}]);
//# sourceMappingURL=90-1e7f1c244e6ee4344b57.js.map