(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{2302:function(t,e,n){"use strict";n.r(e),e.default="# Terra Form Textarea Field\n\n[terra-form-textarea](https://github.com/cerner/terra-core/tree/master/packages/terra-form-textarea) component that is wrapped inside a\n[terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field) component.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-textarea`\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n\n\x3c!-- Uncomment supported features.\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n--\x3e\n"},2303:function(t,e){t.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">inputId</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Id of the input. Populates both the input and the htmlFor prop of the wrapper Field.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">label</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The label of the form control children.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">defaultValue</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The defaultValue of the input field. Use this to create an uncontrolled input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">disabled</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the input is disabled.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">error</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Error message for when the input is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">errorIcon</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem"><IconError /></td><td style="padding-bottom: 1.8rem">Error Icon to display when the input is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">help</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Help element to display with the input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">hideRequired</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not to hide the required indicator on the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">inputAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Attributes to attach to the input object</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInline</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is an inline field.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInvalid</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isLabelHidden</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">labelAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Attributes to attach to the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">maxWidth</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Set the max-width of a field using <code style="white-space: pre-wrap">length</code> or <code>%</code>.  Best practice recommendation to never exceed\na rendered value of 1020px. <em>(Note: Providing custom inline styles will take precedence.)</em></td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onChange</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Function to trigger when user changes the input value. Provide a function to create a controlled input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">required</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is required.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">showOptional</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not to append the &#39;optional&#39; label to a non-required field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">value</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The value of the input field. Use this to create a controlled input.</td></tr></tbody></table>'},2304:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport IconError from 'terra-icon/lib/icon/IconError';\nimport Field from 'terra-form-field';\nimport Textarea from './Textarea';\n\nconst propTypes = {\n  /**\n   * Id of the input. Populates both the input and the htmlFor prop of the wrapper Field.\n   */\n  inputId: PropTypes.string.isRequired,\n  /**\n   * The label of the form control children.\n   */\n  label: PropTypes.node.isRequired,\n  /**\n   * The defaultValue of the input field. Use this to create an uncontrolled input.\n   */\n  defaultValue: PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.number,\n  ]),\n  /**\n   * Whether the input is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * Error message for when the input is invalid.\n   */\n  error: PropTypes.node,\n  /**\n   * Error Icon to display when the input is invalid.\n   */\n  errorIcon: PropTypes.element,\n  /**\n   * Help element to display with the input.\n   */\n  help: PropTypes.node,\n  /**\n   * Whether or not to hide the required indicator on the label.\n   */\n  hideRequired: PropTypes.bool,\n  /**\n   * Attributes to attach to the input object\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  inputAttrs: PropTypes.object,\n  /**\n   * Whether or not the field is an inline field.\n   */\n  isInline: PropTypes.bool,\n  /**\n   * Whether or not the field is invalid.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.\n   */\n  isLabelHidden: PropTypes.bool,\n  /**\n   * Attributes to attach to the label.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  labelAttrs: PropTypes.object,\n  /**\n   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed\n   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_\n   */\n  maxWidth: PropTypes.string,\n  /**\n   * Function to trigger when user changes the input value. Provide a function to create a controlled input.\n   */\n  onChange: PropTypes.func,\n  /**\n   * Whether or not the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * Whether or not to append the 'optional' label to a non-required field label.\n   */\n  showOptional: PropTypes.bool,\n  /**\n   * The value of the input field. Use this to create a controlled input.\n   */\n  value: PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.number,\n  ]),\n};\n\nconst defaultProps = {\n  defaultValue: undefined,\n  disabled: false,\n  error: null,\n  errorIcon: <IconError />,\n  help: null,\n  hideRequired: false,\n  inputAttrs: {},\n  isInline: false,\n  isInvalid: false,\n  isLabelHidden: false,\n  labelAttrs: {},\n  maxWidth: undefined,\n  onChange: undefined,\n  required: false,\n  showOptional: false,\n  value: undefined,\n};\n\nconst TextareaField = (props) => {\n  const {\n    defaultValue,\n    disabled,\n    error,\n    errorIcon,\n    help,\n    hideRequired,\n    inputAttrs,\n    inputId,\n    isInline,\n    isInvalid,\n    isLabelHidden,\n    label,\n    labelAttrs,\n    maxWidth,\n    required,\n    showOptional,\n    onChange,\n    value,\n    ...customProps\n  } = props;\n\n  let ariaDescriptionIds;\n\n  if (help && error && isInvalid) {\n    ariaDescriptionIds = `${inputId}-error ${inputId}-help`;\n  } else {\n    if (help) {\n      ariaDescriptionIds = `${inputId}-help`;\n    }\n\n    if (error && isInvalid) {\n      ariaDescriptionIds = `${inputId}-error`;\n    }\n  }\n\n  return (\n    <Field\n      {...customProps}\n      label={label}\n      labelAttrs={labelAttrs}\n      error={error}\n      errorIcon={errorIcon}\n      help={help}\n      hideRequired={hideRequired}\n      required={required}\n      showOptional={showOptional}\n      isInvalid={isInvalid}\n      isInline={isInline}\n      isLabelHidden={isLabelHidden}\n      htmlFor={inputId}\n      maxWidth={maxWidth}\n    >\n      <Textarea\n        {...inputAttrs}\n        disabled={inputAttrs.disabled || disabled}\n        id={inputId}\n        onChange={onChange}\n        value={value}\n        defaultValue={defaultValue}\n        aria-describedby={ariaDescriptionIds}\n      />\n    </Field>\n  );\n};\n\nTextareaField.propTypes = propTypes;\nTextareaField.defaultProps = defaultProps;\n\nexport default TextareaField;\n"},2305:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=d(n(0)),r=d(n(952));function d(t){return t&&t.__esModule?t:{default:t}}var i=function(){return o.default.createElement(r.default,{inputId:"textarea",label:"Textarea",help:"Note: This is help text",inputAttrs:{name:"textarea",placeholder:"Textarea placeholder"}})};e.default=i},2306:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport TextareaField from '../../../TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"textarea\"\n    label=\"Textarea\"\n    help=\"Note: This is help text\"\n    inputAttrs={{\n      name: 'textarea',\n      placeholder: 'Textarea placeholder',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n"},2307:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=d(n(0)),r=d(n(952));function d(t){return t&&t.__esModule?t:{default:t}}var i=function(){return o.default.createElement(r.default,{inputId:"requiredTextarea",label:"Required Textarea",help:"Note: This is help text",required:!0,inputAttrs:{name:"requiredTextarea",placeholder:"Textarea placeholder"}})};e.default=i},2308:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport TextareaField from '../../../TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"requiredTextarea\"\n    label=\"Required Textarea\"\n    help=\"Note: This is help text\"\n    required\n    inputAttrs={{\n      name: 'requiredTextarea',\n      placeholder: 'Textarea placeholder',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n"},2945:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=b(n(0)),r=b(n(796)),d=b(n(2302)),i=n(1469),l=b(n(2303)),a=b(n(2304)),s=b(n(2305)),p=b(n(2306)),u=b(n(2307)),m=b(n(2308));function b(t){return t&&t.__esModule?t:{default:t}}var h=function(){return o.default.createElement(r.default,{packageName:i.name,packageVersion:i.version,readme:d.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),propsTables:[{componentName:"Form Textarea Field",componentSrc:a.default,componentProps:l.default}],examples:[{example:o.default.createElement(s.default,null),source:p.default},{example:o.default.createElement(u.default,null),source:m.default}]})};e.default=h},952:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(0)),r=a(n(3)),d=a(n(266)),i=a(n(258)),l=a(n(807));function a(t){return t&&t.__esModule?t:{default:t}}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},d=Object.keys(t);for(o=0;o<d.length;o++)n=d[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(o=0;o<d.length;o++)n=d[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u={inputId:r.default.string.isRequired,label:r.default.node.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,error:r.default.node,errorIcon:r.default.element,help:r.default.node,hideRequired:r.default.bool,inputAttrs:r.default.object,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,required:r.default.bool,showOptional:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number])},m={defaultValue:void 0,disabled:!1,error:null,errorIcon:o.default.createElement(d.default,null),help:null,hideRequired:!1,inputAttrs:{},isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,required:!1,showOptional:!1,value:void 0},b=function(t){var e,n=t.defaultValue,r=t.disabled,d=t.error,a=t.errorIcon,u=t.help,m=t.hideRequired,b=t.inputAttrs,h=t.inputId,c=t.isInline,f=t.isInvalid,g=t.isLabelHidden,y=t.label,v=t.labelAttrs,w=t.maxWidth,T=t.required,x=t.showOptional,I=t.onChange,P=t.value,q=p(t,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","onChange","value"]);return u&&d&&f?e="".concat(h,"-error ").concat(h,"-help"):(u&&(e="".concat(h,"-help")),d&&f&&(e="".concat(h,"-error"))),o.default.createElement(i.default,s({},q,{label:y,labelAttrs:v,error:d,errorIcon:a,help:u,hideRequired:m,required:T,showOptional:x,isInvalid:f,isInline:c,isLabelHidden:g,htmlFor:h,maxWidth:w}),o.default.createElement(l.default,s({},b,{disabled:b.disabled||r,id:h,onChange:I,value:P,defaultValue:n,"aria-describedby":e})))};b.propTypes=u,b.defaultProps=m;var h=b;e.default=h}}]);
//# sourceMappingURL=229-fe23ae52646742d08e83.js.map