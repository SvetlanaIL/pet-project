import type {Preview} from "@storybook/react";

// import '../../src/app/styles/index.scss';
import {StyleDecorator} from "shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator} from "shared/config/storybook/RouterDecorator/RouterDecorator";
import {TranslationDecorator} from "shared/config/storybook/TranslationDecorator/TranslationDecorator";

// import '!!style-loader?injectType=lazyStyleTag!css-loader!../../src/app/styles/themes/light.scss';
// import '!!style-loader?injectType=lazyStyleTag!css-loader!../../src/app/styles/themes/dark.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
      RouterDecorator,
      TranslationDecorator,
      StyleDecorator,
      ThemeDecorator(Theme.LIGHT)
  ]
};

export default preview;
