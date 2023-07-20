import type { Preview } from "@storybook/react";
import Routers from "./decorators/Routers";
import Theme from "./decorators/Themes";
import I18Next from "./decorators/I18Next";

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
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ru', title: 'Russian' },
          { value: 'en', title: 'English' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    Theme(null),
    Routers,
    I18Next
  ]
};

export default preview;
