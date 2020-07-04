import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { BrowserRouter as Router } from 'react-router-dom';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

const globalWrapper = (storyFn) => (
    <Router>
      <div style={{ width: '100vw', height: '100vh' }}>
          { storyFn() }
      </div>
    </Router>
);

addDecorator(globalWrapper);
