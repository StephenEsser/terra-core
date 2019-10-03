(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{2233:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The dropdown menu options.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">defaultValue</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The default selected value. Can be a string, number, or array of strings/numbers.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">disabled</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the select is disabled.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">dropdownAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Additional attributes to spread onto the dropdownq. ( Style, ClassNames, etc.. )</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInvalid</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the select is in an invalid state.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isTouchAccessible</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Ensure accessibility on touch devices. Will render the dropdown menu in\nnormal DOM flow with position absolute. By default, the menu renders in a\nportal, which is inaccessible on touch devices.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">maxHeight</td><td style="padding-bottom: 1.8rem">number</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The max height of the dropdown.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onBlur</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Callback function triggered when the select loses focus. function(event)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onChange</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Callback function triggered when the value changes. function(value)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onClick</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Callback function triggered when the select is clicked. function(event)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onDeselect</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Callback function triggered when an option is deselected. function(value)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onFocus</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Callback function triggered when the select receives focus. function(event)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onSearch</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Callback function triggered when the search criteria changes. function(searchValue)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onSelect</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Callback function triggered when an option is selected. function(value)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">optionFilter</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Callback function invoked for each option on search change. function(searchValue, option)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">placeholder</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Placeholder text.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">required</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field is required.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">value</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The selected value. Can be a string, number, or array of strings/numbers.</td></tr></tbody></table>'},2234:function(e,t,l){"use strict";l.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { injectIntl, intlShape } from 'react-intl';\nimport Frame from './tag/Frame';\nimport Option from './shared/_Option';\nimport OptGroup from './shared/_OptGroup';\nimport Tag from './shared/_Tag';\nimport SelectUtil from './shared/_SelectUtil';\n\nconst propTypes = {\n  /**\n   * The dropdown menu options.\n   */\n  children: PropTypes.node,\n  /**\n   * The default selected value. Can be a string, number, or array of strings/numbers.\n   */\n  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n  /**\n   * Whether the select is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * Additional attributes to spread onto the dropdownq. ( Style, ClassNames, etc.. )\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  dropdownAttrs: PropTypes.object,\n  /**\n   * @private\n   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.\n   */\n  intl: intlShape.isRequired,\n  /**\n   * Whether the select is in an invalid state.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * Ensure accessibility on touch devices. Will render the dropdown menu in\n   * normal DOM flow with position absolute. By default, the menu renders in a\n   * portal, which is inaccessible on touch devices.\n   */\n  isTouchAccessible: PropTypes.bool,\n  /**\n   * The max height of the dropdown.\n   */\n  maxHeight: PropTypes.number,\n  /**\n   * @private The maximum number of options that can be selected. A value less than 2 will be ignored.\n   */\n  maxSelectionCount: PropTypes.number,\n  /**\n   * Callback function triggered when the select loses focus. function(event)\n   */\n  onBlur: PropTypes.func,\n  /**\n   * Callback function triggered when the value changes. function(value)\n   */\n  onChange: PropTypes.func,\n  /**\n   * Callback function triggered when the select is clicked. function(event)\n   */\n  onClick: PropTypes.func,\n  /**\n   * Callback function triggered when an option is deselected. function(value)\n   */\n  onDeselect: PropTypes.func,\n  /**\n   * Callback function triggered when the select receives focus. function(event)\n   */\n  onFocus: PropTypes.func,\n  /**\n   * Callback function triggered when the search criteria changes. function(searchValue)\n   */\n  onSearch: PropTypes.func,\n  /**\n   * Callback function triggered when an option is selected. function(value)\n   */\n  onSelect: PropTypes.func,\n  /**\n   * Callback function invoked for each option on search change. function(searchValue, option)\n   */\n  optionFilter: PropTypes.func,\n  /**\n   * Placeholder text.\n   */\n  placeholder: PropTypes.string,\n  /**\n   * Whether the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * The selected value. Can be a string, number, or array of strings/numbers.\n   */\n  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n};\n\nconst defaultProps = {\n  children: undefined,\n  defaultValue: undefined,\n  disabled: false,\n  dropdownAttrs: undefined,\n  isInvalid: false,\n  isTouchAccessible: false,\n  maxSelectionCount: undefined,\n  onChange: undefined,\n  onDeselect: undefined,\n  onSearch: undefined,\n  onSelect: undefined,\n  optionFilter: undefined,\n  placeholder: undefined,\n  required: false,\n  value: undefined,\n};\n\n\nclass TagSelect extends React.Component {\n  constructor(props) {\n    super(props);\n\n    const { defaultValue, value } = props;\n\n    this.state = {\n      tags: [],\n      value: SelectUtil.defaultValue({ defaultValue, value, multiple: true }),\n    };\n\n    this.display = this.display.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n    this.handleDeselect = this.handleDeselect.bind(this);\n    this.handleSelect = this.handleSelect.bind(this);\n  }\n\n  /**\n   * Returns the appropriate variant display\n   */\n  display() {\n    const selectValue = SelectUtil.value(this.props, this.state);\n\n    return selectValue.map(tag => (\n      <Tag value={tag} key={tag} onDeselect={this.handleDeselect}>\n        {SelectUtil.valueDisplay(this.props, tag)}\n      </Tag>\n    ));\n  }\n\n  /**\n   * Communicates changes to the value.\n   * @param {array|number|string} value - The value resulting from a change.\n   */\n  handleChange(value) {\n    if (this.props.value === undefined) {\n      this.setState({ value });\n    }\n\n    if (this.props.onChange) {\n      this.props.onChange(value);\n    }\n  }\n\n  /**\n   * Communicates the removal of a value from the selected options.\n   * @param {number|string} value - The value to be removed.\n   */\n  handleDeselect(value) {\n    this.handleChange(SelectUtil.deselect(this.props, this.state, value));\n\n    if (this.props.onDeselect) {\n      this.props.onDeselect(value);\n    }\n  }\n\n  /**\n   * Communicates the selection of a value.\n   * @param {number|string} value - The value of the selected option.\n   * @param {ReactNode} option - The selected option.\n   */\n  handleSelect(value, option) {\n    const newValue = [...SelectUtil.value(this.props, this.state), value];\n    this.handleChange(newValue);\n\n    // Add new tags for uncontrolled components.\n    if (this.props.value === undefined && !SelectUtil.findByValue(this.props, this.state, value)) {\n      this.setState(prevState => ({ tags: [...prevState.tags, <Option key={value} display={value} value={value} />] }));\n    }\n\n    if (this.props.onSelect) {\n      this.props.onSelect(value, option);\n    }\n  }\n\n  render() {\n    const {\n      children, defaultValue, onChange, placeholder, required, value, intl, ...otherProps\n    } = this.props;\n\n    const defaultPlaceholder = intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });\n    const selectPlaceholder = placeholder === undefined ? defaultPlaceholder : placeholder;\n\n    return (\n      <Frame\n        {...otherProps}\n        data-terra-select\n        value={SelectUtil.value(this.props, this.state)}\n        display={this.display()}\n        onDeselect={this.handleDeselect}\n        onSelect={this.handleSelect}\n        placeholder={selectPlaceholder}\n        required={required}\n        totalOptions={SelectUtil.getTotalNumberOfOptions(children)}\n      >\n        {this.state.tags}\n        {children}\n      </Frame>\n    );\n  }\n}\n\nTagSelect.Option = Option;\nTagSelect.OptGroup = OptGroup;\nTagSelect.propTypes = propTypes;\nTagSelect.defaultProps = defaultProps;\nTagSelect.isSelect = true;\n\nexport default injectIntl(TagSelect);\n"},2235:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(0)),a=i(l(271)),o=i(l(4)),d=i(l(806));function i(e){return e&&e.__esModule?e:{default:e}}var r=o.default.bind(d.default),s=function(){return n.default.createElement(a.default,{placeholder:"Select a color",className:r("form-select")},n.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),n.default.createElement(a.default.Option,{value:"green",display:"Green"}),n.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),n.default.createElement(a.default.Option,{value:"red",display:"Red"}),n.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=s},2236:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport TagSelect from \'terra-form-select/lib/TagSelect\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectExample = () => (\n  <TagSelect placeholder="Select a color" className={cx(\'form-select\')}>\n    <TagSelect.Option value="blue" display="Blue" />\n    <TagSelect.Option value="green" display="Green" />\n    <TagSelect.Option value="purple" display="Purple" />\n    <TagSelect.Option value="red" display="Red" />\n    <TagSelect.Option value="violet" display="Violet" />\n  </TagSelect>\n);\n\nexport default TagSelectExample;\n'},2237:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t=r();if(t&&t.has(e))return t.get(e);var l={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}}l.default=e,t&&t.set(e,l);return l}(l(0)),a=i(l(271)),o=i(l(4)),d=i(l(806));function i(e){return e&&e.__esModule?e:{default:e}}function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var l=[],n=!0,a=!1,o=void 0;try{for(var d,i=e[Symbol.iterator]();!(n=(d=i.next()).done)&&(l.push(d.value),!t||l.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return l}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=o.default.bind(d.default),c=function(){var e=s((0,n.useState)(["blue"]),2),t=e[0],l=e[1];return n.default.createElement(a.default,{placeholder:"Select a color",value:t,onChange:l,className:u("form-select")},n.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),n.default.createElement(a.default.Option,{value:"green",display:"Green"}),n.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),n.default.createElement(a.default.Option,{value:"red",display:"Red"}),n.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=c},2238:function(e,t,l){"use strict";l.r(t),t.default='import React, { useState } from \'react\';\nimport TagSelect from \'terra-form-select/lib/TagSelect\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ControlledExample = () => {\n  const [value, setValue] = useState([\'blue\']);\n\n  return (\n    <TagSelect placeholder="Select a color" value={value} onChange={setValue} className={cx(\'form-select\')}>\n      <TagSelect.Option value="blue" display="Blue" />\n      <TagSelect.Option value="green" display="Green" />\n      <TagSelect.Option value="purple" display="Purple" />\n      <TagSelect.Option value="red" display="Red" />\n      <TagSelect.Option value="violet" display="Violet" />\n    </TagSelect>\n  );\n};\n\nexport default ControlledExample;\n'},2239:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(0)),a=i(l(271)),o=i(l(4)),d=i(l(806));function i(e){return e&&e.__esModule?e:{default:e}}var r=o.default.bind(d.default),s=function(){return n.default.createElement(a.default,{placeholder:"Select a color",disabled:!0,className:r("form-select"),defaultValue:["red","white","blue"]},n.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),n.default.createElement(a.default.Option,{value:"green",display:"Green"}),n.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),n.default.createElement(a.default.Option,{value:"red",display:"Red"}),n.default.createElement(a.default.Option,{value:"violet",display:"Violet"}),n.default.createElement(a.default.Option,{value:"white",display:"White"}))};t.default=s},2240:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport TagSelect from \'terra-form-select/lib/TagSelect\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst DisabledExample = () => (\n  <TagSelect placeholder="Select a color" disabled className={cx(\'form-select\')} defaultValue={[\'red\', \'white\', \'blue\']}>\n    <TagSelect.Option value="blue" display="Blue" />\n    <TagSelect.Option value="green" display="Green" />\n    <TagSelect.Option value="purple" display="Purple" />\n    <TagSelect.Option value="red" display="Red" />\n    <TagSelect.Option value="violet" display="Violet" />\n    <TagSelect.Option value="white" display="White" />\n  </TagSelect>\n);\n\nexport default DisabledExample;\n'},2241:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(0)),a=i(l(271)),o=i(l(4)),d=i(l(806));function i(e){return e&&e.__esModule?e:{default:e}}var r=o.default.bind(d.default),s=function(){return n.default.createElement(a.default,{placeholder:"Select a color",className:r("form-select"),isTouchAccessible:!0},n.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),n.default.createElement(a.default.Option,{value:"green",display:"Green"}),n.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),n.default.createElement(a.default.Option,{value:"red",display:"Red"}),n.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=s},2242:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport TagSelect from \'terra-form-select/lib/TagSelect\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst IsTouchAccessibleExample = () => (\n  <TagSelect placeholder="Select a color" className={cx(\'form-select\')} isTouchAccessible>\n    <TagSelect.Option value="blue" display="Blue" />\n    <TagSelect.Option value="green" display="Green" />\n    <TagSelect.Option value="purple" display="Purple" />\n    <TagSelect.Option value="red" display="Red" />\n    <TagSelect.Option value="violet" display="Violet" />\n  </TagSelect>\n);\n\nexport default IsTouchAccessibleExample;\n'},2243:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(0)),a=i(l(271)),o=i(l(4)),d=i(l(806));function i(e){return e&&e.__esModule?e:{default:e}}var r=o.default.bind(d.default),s=function(){return n.default.createElement(a.default,{placeholder:"Select a color",isInvalid:!0,className:r("form-select")},n.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),n.default.createElement(a.default.Option,{value:"green",display:"Green"}),n.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),n.default.createElement(a.default.Option,{value:"red",display:"Red"}),n.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=s},2244:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport TagSelect from \'terra-form-select/lib/TagSelect\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst InvalidExample = () => (\n  <TagSelect placeholder="Select a color" isInvalid className={cx(\'form-select\')}>\n    <TagSelect.Option value="blue" display="Blue" />\n    <TagSelect.Option value="green" display="Green" />\n    <TagSelect.Option value="purple" display="Purple" />\n    <TagSelect.Option value="red" display="Red" />\n    <TagSelect.Option value="violet" display="Violet" />\n  </TagSelect>\n);\n\nexport default InvalidExample;\n'},2245:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(0)),a=i(l(271)),o=i(l(4)),d=i(l(806));function i(e){return e&&e.__esModule?e:{default:e}}var r=o.default.bind(d.default),s=function(){return n.default.createElement(a.default,{placeholder:"Select a color",maxHeight:150,className:r("form-select")},n.default.createElement(a.default.Option,{value:"black",display:"Black"}),n.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),n.default.createElement(a.default.Option,{value:"brown",display:"Brown"}),n.default.createElement(a.default.Option,{value:"green",display:"Green"}),n.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),n.default.createElement(a.default.Option,{value:"red",display:"Red"}),n.default.createElement(a.default.Option,{value:"violet",display:"Violet"}),n.default.createElement(a.default.Option,{value:"white",display:"White"}),n.default.createElement(a.default.Option,{value:"yellow",display:"Yellow"}))};t.default=s},2246:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport TagSelect from \'terra-form-select/lib/TagSelect\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MaxHeightExample = () => (\n  <TagSelect placeholder="Select a color" maxHeight={150} className={cx(\'form-select\')}>\n    <TagSelect.Option value="black" display="Black" />\n    <TagSelect.Option value="blue" display="Blue" />\n    <TagSelect.Option value="brown" display="Brown" />\n    <TagSelect.Option value="green" display="Green" />\n    <TagSelect.Option value="purple" display="Purple" />\n    <TagSelect.Option value="red" display="Red" />\n    <TagSelect.Option value="violet" display="Violet" />\n    <TagSelect.Option value="white" display="White" />\n    <TagSelect.Option value="yellow" display="Yellow" />\n  </TagSelect>\n);\n\nexport default MaxHeightExample;\n'},2247:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(0)),a=i(l(271)),o=i(l(4)),d=i(l(806));function i(e){return e&&e.__esModule?e:{default:e}}var r=o.default.bind(d.default),s=function(){return n.default.createElement(a.default,{placeholder:"Select a color",className:r("form-select")},n.default.createElement(a.default.OptGroup,{label:"Shade of blue"},n.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),n.default.createElement(a.default.Option,{value:"cyan",display:"Cyan"}),n.default.createElement(a.default.Option,{value:"teal",display:"Teal"}),n.default.createElement(a.default.Option,{value:"azul",display:"Azul"}),n.default.createElement(a.default.Option,{value:"aqua",display:"Aqua"})),n.default.createElement(a.default.OptGroup,{label:"Shades of green"},n.default.createElement(a.default.Option,{value:"green",display:"Green"}),n.default.createElement(a.default.Option,{value:"forest",display:"Forest Green"}),n.default.createElement(a.default.Option,{value:"dark",display:"Dark Green"}),n.default.createElement(a.default.Option,{value:"neon",display:"Neon Green"})))};t.default=s},2248:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport TagSelect from \'terra-form-select/lib/TagSelect\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst OptGroupExample = () => (\n  <TagSelect placeholder="Select a color" className={cx(\'form-select\')}>\n    <TagSelect.OptGroup label="Shade of blue">\n      <TagSelect.Option value="blue" display="Blue" />\n      <TagSelect.Option value="cyan" display="Cyan" />\n      <TagSelect.Option value="teal" display="Teal" />\n      <TagSelect.Option value="azul" display="Azul" />\n      <TagSelect.Option value="aqua" display="Aqua" />\n    </TagSelect.OptGroup>\n    <TagSelect.OptGroup label="Shades of green">\n      <TagSelect.Option value="green" display="Green" />\n      <TagSelect.Option value="forest" display="Forest Green" />\n      <TagSelect.Option value="dark" display="Dark Green" />\n      <TagSelect.Option value="neon" display="Neon Green" />\n    </TagSelect.OptGroup>\n  </TagSelect>\n);\n\nexport default OptGroupExample;\n'},2938:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=C(l(0)),a=C(l(796)),o=C(l(947)),d=l(835),i=C(l(2233)),r=C(l(2234)),s=C(l(948)),u=C(l(949)),c=C(l(950)),p=C(l(951)),m=C(l(2235)),f=C(l(2236)),g=C(l(2237)),h=C(l(2238)),y=C(l(2239)),b=C(l(2240)),v=C(l(2241)),S=C(l(2242)),T=C(l(2243)),O=C(l(2244)),w=C(l(2245)),E=C(l(2246)),x=C(l(2247)),P=C(l(2248));function C(e){return e&&e.__esModule?e:{default:e}}var k=function(){return n.default.createElement(a.default,{packageName:d.name,packageVersion:d.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select",propsTables:[{componentName:"Tag Select",componentSrc:r.default,componentProps:i.default},{componentName:"Option",componentSrc:u.default,componentProps:s.default},{componentName:"OptGroup",componentSrc:p.default,componentProps:c.default}],examples:[{title:"Tag",description:"A Tag Select allows a user to enter multiple custom free text entries or select multiple options from the the dropdown.",example:n.default.createElement(m.default,null),source:f.default},{title:"Is Touch Accessible",description:"Ensure accessibility on touch devices. Will render the dropdown menu in normal DOM flow with position absolute. By default, the menu renders in a portal, which is inaccessible on touch devices.",example:n.default.createElement(v.default,null),source:S.default},{title:"Disabled",example:n.default.createElement(y.default,null),source:b.default},{title:"Invalid",description:"Applies theme-specific styling for invalid. Will also display error text when used with a Field.",example:n.default.createElement(T.default,null),source:O.default},{title:"Ability to add Option Groups",description:"An OptGroup provides a way to group options together within the listbox.",example:n.default.createElement(x.default,null),source:P.default},{title:"Ability to set a Maximum Height",description:"An example of implementing a custom max height of the dropdown.",example:n.default.createElement(w.default,null),source:E.default},{title:"Create a Controlled Tag Select",description:"An example of implementing a controlled Tag Select.",example:n.default.createElement(g.default,null),source:h.default}]})};t.default=k}}]);
//# sourceMappingURL=133-04f95c4b500995eeefa8.js.map