(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-key-0-0-0"},{title:"Item 0-0-1",key:"unique-key-0-0-1"},{title:"Item 0-0-2",key:"unique-key-0-0-2"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-key-0-1-0"},{title:"Item 0-1-1",key:"unique-key-0-1-1"},{title:"Item 0-1-2",key:"unique-key-0-1-2"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-key-1-0-0"},{title:"Item 1-0-1",key:"unique-key-1-0-1"},{title:"Item 1-0-2",key:"unique-key-1-0-2"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-key-1-1-0"},{title:"Item 1-1-1",key:"unique-key-1-1-1"},{title:"Item 1-1-2",key:"unique-key-1-1-2"}]}]}];t.default=i},2466:function(e,t,n){"use strict";n.r(t),t.default="# Terra List - Sections with Subsections\n\nWith the inclusion of sections in the list, there are two recommended patterns for creating nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a list, but not both.\n\n## State Management\nAs section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern.\n\nFirst defaulting our state to an empty array in the constructor. \n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n```\nNext creating an event handler callback method to pass to the section's `onSelect` prop. The `onSelect` will return the metaData prop passed it each section.\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n  }\n  \n+  handleSectionSelection(event, metaData) {\n+\n+  }\n```\nAs a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.\n```diff\n  handleSectionSelection(event, metaData) {\n+    event.preventDefault();\n  }\n```\nTerra list comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method `updatedMulitSelectedKeys`, which returns an array of the keys following the addition or removing of the key passed. We then set this as our state.\n```diff\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n```\nSettting state will trigger another render. So in the render method we need to generate our sections with the updated `isCollapsed` and `isCollapsible` props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n```\nNext we need to set up our `metaData` object with our key value, and attach the `onSelect` to our handler.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFor the common collapsible sections we set `isCollapsible` for all sections.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFinally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up.\n```diff\n  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+       {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n```\nWe can then implement the unpack of our data into our list items.\n```diff\n  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+       <Placeholder />\n+    </Item>\n+  );\n\n+  const createSubsection = subsectionData => (\n+     <Subsection\n+       key={subsectionData.key}\n+       title={subsectionData.title}\n+     >\n+       {subsectionData.childItems.map(childItem => createListItem(childItem))}\n+     </Subsection>\n+   );\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n```\nThen we can implement a method to loop through our data and create the section with our methods and call it from our render method.\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle=\"standard\">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n  ```\n  Using these steps we get the following example.\n"},2467:function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(0)),a=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(77)),s=d(n(817)),c=d(n(4)),l=d(n(1471)),r=d(n(874));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=c.default.bind(r.default),b=function(e){return o.default.createElement(a.Subsection,{key:e.key,title:e.title},e.childItems.map((function(e){return t=e,o.default.createElement(a.Item,{key:t.key},o.default.createElement(s.default,{title:t.title,className:S("placeholder")}));var t})))},k=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(o=m(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?f(i):o).createSection=n.createSection.bind(f(n)),n.createSections=n.createSections.bind(f(n)),n.handleSectionSelection=n.handleSectionSelection.bind(f(n)),n.state={collapsedKeys:[]},n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(i=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:a.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return o.default.createElement(a.Section,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return b(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return o.default.createElement(a.default,{dividerStyle:"standard"},this.createSections(l.default))}}])&&h(n.prototype,i),s&&h(n,s),t}(o.default.Component);t.default=k},2468:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\n\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createSubsection = subsectionData => (\n  <Subsection\n    key={subsectionData.key}\n    title={subsectionData.title}\n  >\n    {subsectionData.childItems.map(childItem => createListItem(childItem))}\n  </Subsection>\n);\n\nclass SectionWithSubsection1 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection1;\n"},2469:function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(0)),a=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(77)),s=d(n(817)),c=d(n(4)),l=d(n(1471)),r=d(n(874));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=c.default.bind(r.default),b=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(o=m(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?f(i):o).createSection=n.createSection.bind(f(n)),n.createSections=n.createSections.bind(f(n)),n.createSubsection=n.createSubsection.bind(f(n)),n.handleSectionSelection=n.handleSectionSelection.bind(f(n)),n.state={collapsedKeys:[]},n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(i=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:a.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSubsection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return o.default.createElement(a.Subsection,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return t=e,o.default.createElement(a.Item,{key:t.key},o.default.createElement(s.default,{title:t.title,className:S("placeholder")}));var t})))}},{key:"createSection",value:function(e){var t=this;return o.default.createElement(a.Section,{key:e.key,title:e.title},e.childItems.map((function(e){return t.createSubsection(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return o.default.createElement(a.default,{dividerStyle:"standard"},this.createSections(l.default))}}])&&h(n.prototype,i),c&&h(n,c),t}(o.default.Component);t.default=b},2470:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionWithSubsection2 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.createSubsection = this.createSubsection.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSubsection(subsectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(subsectionData.key) >= 0;\n    return (\n      <Subsection\n        key={subsectionData.key}\n        title={subsectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: subsectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && subsectionData.childItems.map(childItem => createListItem(childItem))}\n      </Subsection>\n    );\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n      >\n        {sectionData.childItems.map(childItem => this.createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection2;\n"},2974:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(n(0)),o=d(n(796)),a=d(n(2466)),s=n(867),c=d(n(2467)),l=d(n(2468)),r=d(n(2469)),u=d(n(2470));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(){return i.default.createElement(o.default,{packageName:s.name,packageVersion:s.version,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(s.name),examples:[{title:"Collapsible sections with static subsections",example:i.default.createElement(c.default,null),source:l.default},{title:"Static sections with collapsible subsections",example:i.default.createElement(r.default,null),source:u.default}]})};t.default=p}}]);
//# sourceMappingURL=257-f8a72ac0f4663459d637.js.map