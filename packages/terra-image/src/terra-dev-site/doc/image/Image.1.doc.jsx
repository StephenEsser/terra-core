import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import ImagePropsTable from '!terra-props-table-loader!../../../../src/Image';
import ImageSrc from '!raw-loader!../../../../src/Image';
import ImageDefault from '../example/ImageDefault';
import ImageDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ImageDefault';
import ImageFit from '../example/ImageFitTypes';
import ImageFitSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ImageFitTypes';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Image',
        example: <ImageDefault />,
        source: ImageDefaultSrc,
      },
      {
        title: 'Toggle Image Fit',
        example: <ImageFit />,
        source: ImageFitSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Image',
        componentSrc: ImageSrc,
        componentProps: ImagePropsTable,
      },
    ]}
  />
);

export default DocPage;
