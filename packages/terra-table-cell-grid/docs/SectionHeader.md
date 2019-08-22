# Section Header

The Terra TableCellGrid SectionHeader is built upon a cell grid and can be placed similarly within a table, provided the number of columns are provided to the SectionHeader. The section header should only be placed within the table via children when the header is static, as the actual row collapse is handled by the section.

## Usage

```jsx
import React from 'react';
import { SectionHeader } from 'terra-table-cell-grid';

<SectionHeader
  key="unique-react-key"
  title="Section Title"
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)