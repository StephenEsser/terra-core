(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1465:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(o(0)),n=s(o(3)),a=s(o(258)),r=s(o(267)),d=s(o(69)),i=s(o(54));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m={allowClear:n.default.bool,children:n.default.node,label:n.default.node.isRequired,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array])},u={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isInline:!1,isInvalid:!1,isTouchAccessible:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},b=function(e){var t,o=e.allowClear,n=e.children,d=e.defaultValue,i=e.disabled,s=e.error,m=e.help,u=e.hideRequired,b=e.isInline,f=e.isInvalid,g=e.isLabelHidden,h=e.isTouchAccessible,y=e.label,v=e.labelAttrs,x=e.maxWidth,w=e.onChange,_=e.placeholder,T=e.required,O=e.selectAttrs,E=e.selectId,C=e.showOptional,S=e.value,P=c(e,["allowClear","children","defaultValue","disabled","error","help","hideRequired","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]);return m&&s&&f?t="".concat(E,"-error ").concat(E,"-help"):(m&&(t="".concat(E,"-help")),s&&f&&(t="".concat(E,"-error"))),l.default.createElement(a.default,p({},P,{label:y,labelAttrs:v,error:s,help:m,hideRequired:u,required:T,showOptional:C,isInvalid:f,isInline:b,isLabelHidden:g,htmlFor:E,maxWidth:x}),l.default.createElement(r.default,p({},O,{ariaLabel:y,allowClear:o,"aria-describedby":t,disabled:O.disabled||i,id:E,isInvalid:f,isTouchAccessible:h,defaultValue:d,onChange:w,placeholder:_,required:T,value:S}),n))};b.propTypes=m,b.defaultProps=u,b.Option=i.default,b.OptGroup=d.default;var f=b;t.default=f},2203:function(e,t,o){"use strict";o.r(t),t.default="# Terra Form Combobox Field\n\nA convenience wrapper assembling a [terra-form-select Combobox](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select/src/Combobox.jsx) within a [terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field).\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-select`\n\n## Component Features\n\n- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n- [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n- [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n- [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},2204:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">allowClear</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether a clear option is available to clear the selection.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The select options.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">label</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">defaultValue</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The default value of the select. Can be a string, number, or array of strings/numbers.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">disabled</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the input is disabled.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">error</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Error message displayed when the select is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">help</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Help message to display with the select.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">hideRequired</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether to hide the required indicator on the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInline</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field is displayed inline. Displays block by default.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInvalid</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isLabelHidden</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isTouchAccessible</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Ensure accessibility on touch devices. Will render the dropdown menu in\nnormal DOM flow with position absolute. By default, the menu renders in a\nportal, which is inaccessible on touch devices.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">labelAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Additional attributes to spread onto the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">maxWidth</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Set the max-width of a field using <code style="white-space: pre-wrap">length</code> or <code>%</code>.  Best practice recommendation to never exceed\na rendered value of 1020px. <em>(Note: Providing custom inline styles will take precedence.)</em></td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onChange</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Callback function triggered when the select value changes. function(value)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">placeholder</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Placeholder text.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">required</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field is required.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">selectAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Additional attributes to spread onto the select.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">selectId</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The Select identifier. Links the htmlFor of the field to the select identifier.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">showOptional</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether to append the &#39;optional&#39; label to a non-required field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">value</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The value of the select. Can be a string, number, or array of strings/numbers.</td></tr></tbody></table>'},2205:function(e,t,o){"use strict";o.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Field from 'terra-form-field';\nimport Combobox from './Combobox';\nimport OptGroup from './shared/_OptGroup';\nimport Option from './shared/_Option';\n\nconst propTypes = {\n  /**\n   * Whether a clear option is available to clear the selection.\n   */\n  allowClear: PropTypes.bool,\n  /**\n   * The select options.\n   */\n  children: PropTypes.node,\n  /**\n   * The field label.\n   */\n  label: PropTypes.node.isRequired,\n  /**\n   * The default value of the select. Can be a string, number, or array of strings/numbers.\n   */\n  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n  /**\n   * Whether the input is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * Error message displayed when the select is invalid.\n   */\n  error: PropTypes.node,\n  /**\n   * Help message to display with the select.\n   */\n  help: PropTypes.node,\n  /**\n   * Whether to hide the required indicator on the label.\n   */\n  hideRequired: PropTypes.bool,\n  /**\n   * Whether the field is displayed inline. Displays block by default.\n   */\n  isInline: PropTypes.bool,\n  /**\n   * Whether the field is invalid.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.\n   */\n  isLabelHidden: PropTypes.bool,\n  /**\n   * Ensure accessibility on touch devices. Will render the dropdown menu in\n   * normal DOM flow with position absolute. By default, the menu renders in a\n   * portal, which is inaccessible on touch devices.\n   */\n  isTouchAccessible: PropTypes.bool,\n  /**\n   * Additional attributes to spread onto the label.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  labelAttrs: PropTypes.object,\n  /**\n   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed\n   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_\n   */\n  maxWidth: PropTypes.string,\n  /**\n   * Callback function triggered when the select value changes. function(value)\n   */\n  onChange: PropTypes.func,\n  /**\n   * Placeholder text.\n   */\n  placeholder: PropTypes.string,\n  /**\n   * Whether the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * Additional attributes to spread onto the select.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  selectAttrs: PropTypes.object,\n  /**\n   * The Select identifier. Links the htmlFor of the field to the select identifier.\n   */\n  selectId: PropTypes.string.isRequired,\n  /**\n   * Whether to append the 'optional' label to a non-required field label.\n   */\n  showOptional: PropTypes.bool,\n  /**\n   * The value of the select. Can be a string, number, or array of strings/numbers.\n   */\n  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n};\n\nconst defaultProps = {\n  allowClear: false,\n  children: undefined,\n  defaultValue: undefined,\n  disabled: false,\n  error: undefined,\n  help: undefined,\n  hideRequired: false,\n  isInline: false,\n  isInvalid: false,\n  isTouchAccessible: false,\n  isLabelHidden: false,\n  labelAttrs: {},\n  maxWidth: undefined,\n  onChange: undefined,\n  placeholder: undefined,\n  required: false,\n  selectAttrs: {},\n  showOptional: false,\n  value: undefined,\n};\n\nconst ComboboxField = ({\n  allowClear,\n  children,\n  defaultValue,\n  disabled,\n  error,\n  help,\n  hideRequired,\n  isInline,\n  isInvalid,\n  isLabelHidden,\n  isTouchAccessible,\n  label,\n  labelAttrs,\n  maxWidth,\n  onChange,\n  placeholder,\n  required,\n  selectAttrs,\n  selectId,\n  showOptional,\n  value,\n  ...customProps\n}) => {\n  let ariaDescriptionIds;\n\n  if (help && error && isInvalid) {\n    ariaDescriptionIds = `${selectId}-error ${selectId}-help`;\n  } else {\n    if (help) {\n      ariaDescriptionIds = `${selectId}-help`;\n    }\n\n    if (error && isInvalid) {\n      ariaDescriptionIds = `${selectId}-error`;\n    }\n  }\n\n  return (\n    <Field\n      {...customProps}\n      label={label}\n      labelAttrs={labelAttrs}\n      error={error}\n      help={help}\n      hideRequired={hideRequired}\n      required={required}\n      showOptional={showOptional}\n      isInvalid={isInvalid}\n      isInline={isInline}\n      isLabelHidden={isLabelHidden}\n      htmlFor={selectId}\n      maxWidth={maxWidth}\n    >\n      <Combobox\n        {...selectAttrs}\n        ariaLabel={label}\n        allowClear={allowClear}\n        aria-describedby={ariaDescriptionIds}\n        disabled={selectAttrs.disabled || disabled}\n        id={selectId}\n        isInvalid={isInvalid}\n        isTouchAccessible={isTouchAccessible}\n        defaultValue={defaultValue}\n        onChange={onChange}\n        placeholder={placeholder}\n        required={required}\n        value={value}\n      >\n        {children}\n      </Combobox>\n    </Field>\n  );\n};\n\nComboboxField.propTypes = propTypes;\nComboboxField.defaultProps = defaultProps;\n\nComboboxField.Option = Option;\nComboboxField.OptGroup = OptGroup;\n\nexport default ComboboxField;\n"},2206:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(o(0)),n=d(o(1465)),a=d(o(4)),r=d(o(806));function d(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(r.default),s=function(){return l.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field",className:i("form-select")},l.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),l.default.createElement(n.default.Option,{value:"small",display:"Small"}),l.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),l.default.createElement(n.default.Option,{value:"large",display:"Large"}),l.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=s},2207:function(e,t,o){"use strict";o.r(t),t.default='import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n'},2208:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(o(0)),n=d(o(1465)),a=d(o(4)),r=d(o(806));function d(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(r.default),s=function(){return l.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field",required:!0,className:i("form-select")},l.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),l.default.createElement(n.default.Option,{value:"small",display:"Small"}),l.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),l.default.createElement(n.default.Option,{value:"large",display:"Large"}),l.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=s},2209:function(e,t,o){"use strict";o.r(t),t.default='import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field" required className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n'},2935:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(o(0)),n=u(o(796)),a=u(o(2203)),r=o(835),d=u(o(2204)),i=u(o(2205)),s=u(o(2206)),p=u(o(2207)),c=u(o(2208)),m=u(o(2209));function u(e){return e&&e.__esModule?e:{default:e}}var b=function(){return l.default.createElement(n.default,{packageName:r.name,packageVersion:r.version,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(r.name),propsTables:[{componentName:"Combobox Field",componentSrc:i.default,componentProps:d.default}],examples:[{title:"Combobobx Field Example",example:l.default.createElement(s.default,null),source:p.default},{title:"Required Combobobx Field Example",example:l.default.createElement(c.default,null),source:m.default}]})};t.default=b},796:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(o(0)),n=c(o(3)),a=c(o(803)),r=c(o(257)),d=c(o(4)),i=c(o(797)),s=c(o(799)),p=c(o(802));function c(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var b=d.default.bind(p.default),f={children:n.default.node,packageName:n.default.string,packageUrl:n.default.string,packageVersion:n.default.string,readme:n.default.string,srcPath:n.default.string,examples:n.default.arrayOf(n.default.shape({title:n.default.string,description:n.default.node,example:n.default.element,source:n.default.string})),propsTables:n.default.arrayOf(n.default.shape({componentSrc:n.default.string,componentName:n.default.string,componentProps:n.default.string,propsResolution:n.default.string}))},g=function(e){var t,o=e.packageName,n=e.packageVersion,d=e.packageUrl,p=e.readme,c=e.srcPath,f=e.examples,g=e.propsTables,h=e.children,y=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=f;g&&(t=g);for(var x=0,w=0;w<v.length;w+=1)v[w].id=x,x+=1;if(t)for(var _=0;_<t.length;_+=1)t[_].id=x,x+=1;var T,O=b(["doc-template",y.className]);if(v.length>0){var E=v.length>1?"Examples":"Example";T=l.default.createElement("h1",{className:b("examples-header")},E)}var C=l.default.createElement(i.default,{packageName:o,packageUrl:d,packageVersion:n});return l.default.createElement("div",m({},y,{className:O}),l.default.createElement("div",{className:b("doc-card")},o&&C,p&&l.default.createElement(r.default,{src:p}),c&&l.default.createElement("a",{href:c},"View component source code")),T,v.map((function(e){return l.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),l.default.createElement("div",{className:b("doc-card")},g[0]&&g[0].componentProps?t.map((function(e){return l.default.createElement("div",{className:b("props-table-markdown"),key:e.id},l.default.createElement("h2",null,e.componentName," Props"),l.default.createElement(r.default,{src:e.componentProps}))})):t.map((function(e){return l.default.createElement(a.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&l.default.createElement("div",{className:b("doc-card")},h))};g.propTypes=f,g.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=g;t.default=h},797:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o(0)),n=r(o(4)),a=r(o(798));function r(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(a.default),i=function(e){var t=e.packageName,o=e.packageUrl,n=e.packageVersion;return n?l.default.createElement("div",{className:d("badge-container")},l.default.createElement("a",{className:d("badge"),href:o||"https://www.npmjs.org/package/".concat(t,"/v/").concat(n)},l.default.createElement("span",{className:d("badge-name")},o?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(n)))):l.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},l.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},798:function(e,t,o){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,o){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o(0)),a=c(o(3)),r=c(o(804)),d=c(o(805)),i=c(o(4)),s=c(o(800)),p=c(o(801));function c(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function f(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.default.registerLanguage("jsx",d.default);var v=i.default.bind(s.default),x={example:a.default.element,exampleSrc:a.default.string,title:a.default.string,description:a.default.node,children:a.default.element},w={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},_=function(e){function t(e){var o,l,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l=this,(o=!(n=g(t).call(this,e))||"object"!==m(n)&&"function"!=typeof n?h(l):n).state={isExpanded:!1,isBackgroundTransparent:!1},o.handleBgToggle=o.handleBgToggle.bind(h(o)),o.handleCodeToggle=o.handleCodeToggle.bind(h(o)),o}var o,l,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),o=t,(l=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,o=e.example,l=e.exampleSrc,a=e.children,d=e.description,i=b(e,["title","example","exampleSrc","children","description"]),s=this.state,c=s.isExpanded,m={};return s.isBackgroundTransparent&&(m={backgroundColor:"rgba(0, 0, 0, 0)"}),n.default.createElement("div",u({},i,{className:v("template",i.className)}),t&&n.default.createElement("div",{className:v("header")},n.default.createElement("h2",{className:v("title")},t)),n.default.createElement("div",{className:v("content"),style:m},d&&n.default.createElement("div",{className:v("description")},d),o,a),l&&n.default.createElement("div",{className:v("footer")},n.default.createElement("div",{className:v("button-container")},n.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:v("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:v("chevron-right")}))),n.default.createElement("div",{className:v("code",{"is-expanded":c}),"aria-hidden":!c},c?n.default.createElement(r.default,{language:"jsx",style:p.default,customStyle:{margin:"0",borderRadius:"0"}},l):void 0)))}}])&&f(o.prototype,l),a&&f(o,a),t}(n.default.Component);_.propTypes=x,_.defaultProps=w;var T=_;t.default=T},800:function(e,t,o){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},801:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l="#D8DEE9",n="#B2B2B2",a="#c5a5c5",r="#5a9bcf",d="#8dc891",i="#d7deea",s="#FAC863",p={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:a},comment:{color:n},"block-comment":{color:n},prolog:{color:n},doctype:{color:n},cdata:{color:n},property:{color:r},number:{color:r},"function-name":{color:r},constant:{color:r},symbol:{color:r},deleted:{color:r},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:l},char:{color:l},builtin:{color:l},inserted:{color:l},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:d},keyword:{color:a},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=p},802:function(e,t,o){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},806:function(e,t,o){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3HVkD"}},835:function(e){e.exports=JSON.parse('{"name":"terra-form-select","main":"lib/Select.js","version":"5.31.0","description":"Provides a drop down of selectable options.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-form-select","Form","Select","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","lodash.uniqueid":"^4.0.1","prop-types":"^15.5.8","react-lifecycles-compat":"^3.0.2","terra-doc-template":"^2.19.0","terra-form-field":"^3.25.0","terra-hookshot":"^5.0.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')}}]);
//# sourceMappingURL=105-576ab8901dc37fcfda29.js.map