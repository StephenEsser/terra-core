(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{2050:function(e,t,n){"use strict";n.r(t),t.default="# Terra Form Field\n\nThe Form Field component handles the layout of the label, help text and error text associated with a form element. Additionally, it provides required, optional, and invalid indicators.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-field`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Implementation Notes:\nThe Form-Field component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.\n\n[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Field from 'terra-form-field';\n\n<Field\n  label=\"Do you have any Children?\"\n  labelAttrs={{ className: 'healtheintent-application' }}\n  error=\"This field is required\"\n  help=\"Families are eligible for family package plans\"\n  required\n  isInvalid={this.state.isInvalid}\n >\n   {this.props.children}\n</Field>\n```\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},2051:function(e){e.exports=JSON.parse('{"name":"terra-form-field","main":"lib/Field.js","version":"3.25.0","description":"The Form Field component handles the layout of the label, help text and error text associated with a form element.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-form-field","Field","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.19.0","terra-icon":"^3.21.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2052:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">The form control elements the Field contains.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">error</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Error message for when the input is invalid. This will only be displayed if isInvalid is true.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">errorIcon</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem"><IconError /></td><td style="padding-bottom: 1.8rem">Error Icon to display when the input is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">help</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Help element to display with the input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">hideRequired</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not to hide the required indicator on the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">htmlFor</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The htmlFor attribute on the field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInvalid</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInline</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is an inline field.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isLabelHidden</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">label</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The label of the form control children.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">labelAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Attributes to attach to the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">maxWidth</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Set the max-width of a field using <code style="white-space: pre-wrap">length</code> or <code>%</code>.  Best practice recommendation to never exceed\na rendered value of 1020px. <em>(Note: Providing custom inline styles will take precedence.)</em></td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">required</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is required.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">showOptional</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not to append the &#39;optional&#39; label to a non-required field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">style</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Provides first class prop for custom inline styles</td></tr></tbody></table>'},2053:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { FormattedMessage } from 'react-intl';\nimport classNames from 'classnames/bind';\nimport IconError from 'terra-icon/lib/icon/IconError';\nimport styles from './Field.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The form control elements the Field contains.\n   */\n  children: PropTypes.node,\n  /**\n   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.\n   */\n  error: PropTypes.node,\n  /**\n   * Error Icon to display when the input is invalid.\n   */\n  errorIcon: PropTypes.element,\n  /**\n   * Help element to display with the input.\n   */\n  help: PropTypes.node,\n  /**\n   * Whether or not to hide the required indicator on the label.\n   */\n  hideRequired: PropTypes.bool,\n  /**\n   * The htmlFor attribute on the field label.\n   */\n  htmlFor: PropTypes.string,\n  /**\n   * Whether or not the field is invalid.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * Whether or not the field is an inline field.\n   */\n  isInline: PropTypes.bool,\n  /**\n   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.\n   */\n  isLabelHidden: PropTypes.bool,\n  /**\n   * The label of the form control children.\n   */\n  label: PropTypes.node.isRequired,\n  /**\n   * Attributes to attach to the label.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  labelAttrs: PropTypes.object,\n  /**\n   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed\n   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_\n   */\n  maxWidth: PropTypes.string,\n  /**\n   * Whether or not the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * Whether or not to append the 'optional' label to a non-required field label.\n   */\n  showOptional: PropTypes.bool,\n  /**\n   *  Provides first class prop for custom inline styles\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  style: PropTypes.object,\n};\n\nconst defaultProps = {\n  children: null,\n  error: null,\n  errorIcon: <IconError />,\n  help: null,\n  hideRequired: false,\n  htmlFor: undefined,\n  isInvalid: false,\n  isInline: false,\n  isLabelHidden: false,\n  labelAttrs: {},\n  maxWidth: undefined,\n  required: false,\n  showOptional: false,\n};\n\nconst hasWhiteSpace = s => /\\s/g.test(s);\n// Detect IE 10 or IE 11\n// TODO - Delete detection logic when we drop support for IE\nconst isIE = () => (window.navigator.userAgent.indexOf('Trident/6.0') > -1 || window.navigator.userAgent.indexOf('Trident/7.0') > -1);\n\nconst Field = (props) => {\n  const {\n    children,\n    error,\n    errorIcon,\n    help,\n    hideRequired,\n    htmlFor,\n    isInvalid,\n    isInline,\n    isLabelHidden,\n    label,\n    labelAttrs,\n    maxWidth,\n    required,\n    showOptional,\n    style,\n    ...customProps\n  } = props;\n\n  const customStyles = maxWidth ? ({ maxWidth, ...style }) : style;\n\n  const fieldClasses = cx([\n    'field',\n    { 'field-inline': isInline },\n    customProps.className,\n  ]);\n\n  const labelClassNames = cx([\n    'label',\n    labelAttrs.className,\n  ]);\n\n  // Checks to run when not in production\n  // TODO - Remove this once we make this a required prop.\n  // More info: https://github.com/cerner/terra-core/issues/2290\n  if (process.env.NODE_ENV !== 'production') {\n    if (!htmlFor) {\n      // eslint-disable-next-line\n      console.warn('The htmlFor prop will be required in the next major version bump of terra-form-field. It is needed for creating an accessible mapping from the form field to its related error and help text.');\n    }\n\n    if (htmlFor && hasWhiteSpace(htmlFor)) {\n      // eslint-disable-next-line\n      console.warn('The htmlFor prop should be a string without white spaces as it will be used as an HTML attribute value. Use - or _ in place of white space characters.');\n    }\n  }\n\n\n  /**\n   * IE + JAWS has trouble reading aria-describedby content with our form components.\n   * Using feature detect for Microsoft browsers and injecting the help and error messages\n   * into the label as visually hidden text so JAWS can announce them correctly in IE.\n   */\n  const IEDescriptionText = (\n    isIE()\n      ? (\n        <div className={cx('visually-hidden-text')}>\n          {isInvalid && error ? error : null}\n          {help}\n        </div>\n      ) : null\n  );\n\n  const content = React.Children.map(children, (child) => {\n    if ((required || isInvalid) && child && (child.type.isInput || child.type.isSelect || child.type.isTextarea)) {\n      return React.cloneElement(child, {\n        ...required && { required: true },\n        ...isInvalid && { isInvalid: true },\n      });\n    }\n    return child;\n  });\n\n  const labelGroup = (\n    <div className={cx(['label-group', { 'label-group-hidden': isLabelHidden }])}>\n      {isInvalid && <div className={cx('error-icon')}>{errorIcon}</div>}\n      {\n        <label htmlFor={htmlFor} {...labelAttrs} className={labelClassNames}>\n          {required && (isInvalid || !hideRequired) && <div className={cx('required')}>*</div>}\n          {label}\n          {required && !isInvalid && hideRequired && <div className={cx('required-hidden')}>*</div>}\n          {showOptional && !required\n            && (\n              <FormattedMessage id=\"Terra.form.field.optional\">\n                {optionalText => (\n                  <div className={cx('optional')}>{optionalText}</div>\n                )}\n              </FormattedMessage>\n            )}\n          {IEDescriptionText}\n        </label>\n      }\n      {!isInvalid && <div className={cx('error-icon-hidden')}>{errorIcon}</div>}\n    </div>\n  );\n\n  /* eslint-disable react/forbid-dom-props */\n  return (\n    <div style={customStyles} {...customProps} className={fieldClasses}>\n      {labelGroup}\n      {content}\n      {isInvalid && error && <div aria-live=\"assertive\" tabIndex=\"-1\" id={htmlFor ? `${htmlFor}-error` : undefined} className={cx('error-text')}>{error}</div>}\n      {help && <div tabIndex=\"-1\" id={htmlFor ? `${htmlFor}-help` : undefined} className={cx('help-text')}>{help}</div>}\n    </div>\n  );\n  /* eslint-enable react/forbid-dom-props */\n};\n\nField.propTypes = propTypes;\nField.defaultProps = defaultProps;\n\nexport default Field;\n"},2054:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),l=d(n(258)),a=d(n(4)),i=d(n(2055));function d(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=a.default.bind(i.default),b=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=p(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?m(o):r).state={isInvalid:!1},n.toggleIsInvalid=n.toggleIsInvalid.bind(m(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(o=[{key:"toggleIsInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("h2",null," Field Examples "),r.default.createElement(l.default,{label:"Field Label",help:"This is a standard, non-required field.",error:"Error Message",isInvalid:this.state.isInvalid},r.default.createElement("div",{className:f("field-content")},"Control Placeholder")),r.default.createElement(l.default,{label:"Field Label",help:"This is an optional field.",error:"Error Message",isInvalid:this.state.isInvalid,isInline:!0,showOptional:!0},r.default.createElement("div",{className:f("field-content")},"Control Placeholder")),r.default.createElement(l.default,{label:"Field Label",help:"This is a required field.",error:"Error Message",isInvalid:this.state.isInvalid,isInline:!0,required:!0},r.default.createElement("div",{className:f("field-content")},"Control Placeholder")),r.default.createElement(l.default,{label:"Field Label",help:"This is a required field, but the required indicator is hidden until the field is in error.",error:"Now the required indicator is showing because the field is in error.",isInvalid:this.state.isInvalid,isInline:!0,required:!0,hideRequired:!0},r.default.createElement("div",{className:f("field-content")},"Control Placeholder")),r.default.createElement("hr",null),r.default.createElement("p",null,"If a field is invalid, an error icon will be displayed.",r.default.createElement("button",{type:"button",onClick:this.toggleIsInvalid},"Toggle Invalid State")))}}])&&c(n.prototype,o),a&&c(n,a),t}(r.default.Component);t.default=b},2055:function(e,t,n){e.exports={"field-content":"FieldExamples-module__field-content___Ani65"}},2917:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(796)),l=c(n(2050)),a=n(2051),i=c(n(2052)),d=c(n(2053)),s=c(n(2054));function c(e){return e&&e.__esModule?e:{default:e}}var p=function(){return o.default.createElement(r.default,{packageName:a.name,packageVersion:a.version,readme:l.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(a.name),examples:[{example:o.default.createElement(s.default,null)}],propsTables:[{componentName:"Form Field",componentSrc:d.default,componentProps:i.default}]})};t.default=p},796:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),r=p(n(3)),l=p(n(803)),a=p(n(257)),i=p(n(4)),d=p(n(797)),s=p(n(799)),c=p(n(802));function p(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=i.default.bind(c.default),b={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},h=function(e){var t,n=e.packageName,r=e.packageVersion,i=e.packageUrl,c=e.readme,p=e.srcPath,b=e.examples,h=e.propsTables,g=e.children,y=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=b;h&&(t=h);for(var _=0,w=0;w<v.length;w+=1)v[w].id=_,_+=1;if(t)for(var x=0;x<t.length;x+=1)t[x].id=_,_+=1;var E,T=f(["doc-template",y.className]);if(v.length>0){var I=v.length>1?"Examples":"Example";E=o.default.createElement("h1",{className:f("examples-header")},I)}var N=o.default.createElement(d.default,{packageName:n,packageUrl:i,packageVersion:r});return o.default.createElement("div",m({},y,{className:T}),o.default.createElement("div",{className:f("doc-card")},n&&N,c&&o.default.createElement(a.default,{src:c}),p&&o.default.createElement("a",{href:p},"View component source code")),E,v.map((function(e){return o.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(a.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(l.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),g&&o.default.createElement("div",{className:f("doc-card")},g))};h.propTypes=b,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=h;t.default=g},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4)),l=a(n(798));function a(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(l.default),d=function(e){var t=e.packageName,n=e.packageUrl,r=e.packageVersion;return r?o.default.createElement("div",{className:i("badge-container")},o.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(r)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),l=p(n(3)),a=p(n(804)),i=p(n(805)),d=p(n(4)),s=p(n(800)),c=p(n(801));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.default.registerLanguage("jsx",i.default);var v=d.default.bind(s.default),_={example:l.default.element,exampleSrc:l.default.string,title:l.default.string,description:l.default.node,children:l.default.element},w={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=h(t).call(this,e))||"object"!==m(r)&&"function"!=typeof r?g(o):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(g(n)),n.handleCodeToggle=n.handleCodeToggle.bind(g(n)),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,l=e.children,i=e.description,d=f(e,["title","example","exampleSrc","children","description"]),s=this.state,p=s.isExpanded,m={};return s.isBackgroundTransparent&&(m={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",u({},d,{className:v("template",d.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:m},i&&r.default.createElement("div",{className:v("description")},i),n,l),o&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":p}),"aria-hidden":!p},p?r.default.createElement(a.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&b(n.prototype,o),l&&b(n,l),t}(r.default.Component);x.propTypes=_,x.defaultProps=w;var E=x;t.default=E},800:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",r="#B2B2B2",l="#c5a5c5",a="#5a9bcf",i="#8dc891",d="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:l},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:a},number:{color:a},"function-name":{color:a},constant:{color:a},symbol:{color:a},deleted:{color:a},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:i},keyword:{color:l},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},802:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=127-0e48a0dd50c3479bd150.js.map