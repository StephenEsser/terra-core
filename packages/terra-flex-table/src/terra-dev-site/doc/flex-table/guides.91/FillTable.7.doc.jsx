import React from 'react';
import DocTemplate from 'terra-doc-template';
// import ReadMe from '../../../../../docs/guides/SectionTable.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import FillTable from '../../guides/FillTable';
import FillTableSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/FillTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    // readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <FillTable />,
        source: FillTableSrc,
      },
    ]}
  />
);

export default DocPage;