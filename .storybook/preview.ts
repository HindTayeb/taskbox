import type { Preview } from '@storybook/react-vite';

import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/index.css';

// Registers the msw addon
initialize();

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true, // show the description column — reads better in docs/demos
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;