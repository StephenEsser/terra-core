(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1674:function(t,e,n){"use strict";n.r(e),e.default="# Terra Action Footer\n\nThe terra-action-footer component is a footer bar that contains two sockets, start and end, for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-action-footer`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n### Action Footer with Start and End Actions\n```jsx\nimport React from 'react';\nimport ActionFooter from 'terra-action-footer';\nimport Button from 'terra-button';\nimport Hyperlink from 'terra-hyperlink';\nimport Spacer from 'terra-spacer';\n\n<ActionFooter\n  start={<Hyperlink href=\"/link/to/somewhere\">A link</Hyperlink>}\n  end={\n    <React.Fragment>\n      <Spacer isInlineBlock marginRight=\"medium\">\n        <Button text=\"Action\" />\n      </Spacer>\n      <Button text=\"Cancel\" />\n    </React.Fragment>\n  }\n/>\n```\n\n### Empty Action Footer\n```jsx\nimport React from 'react';\nimport ActionFooter from 'terra-action-footer';\n\n<ActionFooter />\n```\n\nTerra provides a Standard, Centered, and Block-style variations for Action Footer:\n* [Standard Action Footer](https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer/docs/README.md)\n* [Centered Action Footer](https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer/docs/CenteredActionFooter.md)\n* [Block Action Footer](https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer/docs/BlockActionFooter.md)\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)"},1675:function(t,e){t.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">start</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Actions to be displayed in the start socket</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">end</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Actions to be displayed in the end socket</td></tr></tbody></table>'},1676:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport BlockActionFooter from './BlockActionFooter';\nimport styles from './ActionFooter.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Actions to be displayed in the start socket\n   */\n  start: PropTypes.node,\n  /**\n   * Actions to be displayed in the end socket\n   */\n  end: PropTypes.node,\n};\n\nconst defaultProps = {\n  start: undefined,\n  end: undefined,\n};\n\nconst ActionFooter = ({\n  start,\n  end,\n  ...customProps\n}) => {\n  const actionFooterClassnames = cx([\n    { 'action-footer': start },\n    { 'action-footer-end': !start },\n    customProps.className,\n  ]);\n\n  return (\n    <BlockActionFooter {...customProps} className={actionFooterClassnames}>\n      {start && <div className={cx('start-actions')}>{start}</div>}\n      {end && <div className={cx('end-actions')}>{end}</div>}\n    </BlockActionFooter>\n  );\n};\n\nActionFooter.propTypes = propTypes;\nActionFooter.defaultProps = defaultProps;\n\nexport default ActionFooter;\n"},1677:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(0)),r=i(n(168)),a=i(n(880));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return o.default.createElement(a.default,null,o.default.createElement(r.default,null))}},1679:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter />\n  </ExampleTemplate>\n);\n"},1680:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n(0)),r=l(n(262)),a=l(n(168)),i=l(n(880));function l(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return o.default.createElement(i.default,null,o.default.createElement(a.default,{start:o.default.createElement(r.default,{href:"#"},"Start Action")}))}},1681:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n"},1682:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n(0)),r=l(n(49)),a=l(n(168)),i=l(n(880));function l(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return o.default.createElement(i.default,null,o.default.createElement(a.default,{end:o.default.createElement(r.default,{text:"End Action"})}))}},1683:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport Button from 'terra-button';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      end={<Button text=\"End Action\" />}\n    />\n  </ExampleTemplate>\n);\n"},1684:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=d(n(0)),r=d(n(49)),a=d(n(262)),i=d(n(264)),l=d(n(168)),c=d(n(880));function d(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return o.default.createElement(c.default,null,o.default.createElement(l.default,{start:o.default.createElement(a.default,{href:"#"},"Start Action"),end:o.default.createElement(o.default.Fragment,null,o.default.createElement(i.default,{isInlineBlock:!0,marginRight:"medium"},o.default.createElement(r.default,{text:"Submit",variant:r.default.Opts.Variants.EMPHASIS})),o.default.createElement(r.default,{text:"Cancel"}))}))}},1685:function(t,e,n){"use strict";n.r(e),e.default="import React from 'react';\nimport Button from 'terra-button';\nimport Hyperlink from 'terra-hyperlink';\nimport Spacer from 'terra-spacer';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n      end={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Submit\" variant={Button.Opts.Variants.EMPHASIS} />\n          </Spacer>\n          <Button text=\"Cancel\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n"},2860:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=y(n(0)),r=y(n(796)),a=y(n(1674)),i=n(1055),l=y(n(1675)),c=y(n(1676)),d=y(n(1677)),s=y(n(1679)),m=y(n(1680)),p=y(n(1681)),u=y(n(1682)),f=y(n(1683)),b=y(n(1684)),h=y(n(1685));function y(t){return t&&t.__esModule?t:{default:t}}var g=function(){return o.default.createElement(r.default,{packageName:i.name,packageVersion:i.version,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),examples:[{title:"Empty",example:o.default.createElement(d.default,null),source:s.default},{title:"Single Start Action",example:o.default.createElement(m.default,null),source:p.default},{title:"Single End Action",example:o.default.createElement(u.default,null),source:f.default},{title:"Multiple Start and End Actions",example:o.default.createElement(b.default,null),source:h.default}],propsTables:[{componentName:"Action Footer",componentSrc:c.default,componentProps:l.default}]})};e.default=g}}]);
//# sourceMappingURL=140-65d10da9ef9689a92a13.js.map