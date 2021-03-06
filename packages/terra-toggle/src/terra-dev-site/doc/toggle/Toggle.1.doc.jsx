import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import TogglePropsTable from '!terra-props-table-loader!../../../../src/Toggle';
import ToggleSrc from '!raw-loader!../../../../src/Toggle';
import DefaultToggle from '../example/DefaultToggle';
import DefaultToggleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultToggle';
import AnimatedToggle from '../example/AnimatedToggle';
import AnimatedToggleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedToggle';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Toggle',
        example: <DefaultToggle />,
        source: DefaultToggleSrc,
      },
      {
        title: 'isAnimated Toggle',
        example: <AnimatedToggle />,
        source: AnimatedToggleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Toggle',
        componentSrc: ToggleSrc,
        componentProps: TogglePropsTable,
      },
    ]}
  />
);

export default DocPage;
