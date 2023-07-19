import type { Preview } from "@storybook/react";
import {useEffect, useGlobals} from "@storybook/addons";
import Routers from "./decorators/Routers";
import Theme from "./decorators/Themes";

import '../src/app/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Toggle theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
        dynamicTitle: true
      },
    },
  },
  decorators: [
    Theme(null),
    Routers
  ]
};

export default preview;
