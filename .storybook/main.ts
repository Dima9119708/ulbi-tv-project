import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import webpack from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve!.extensions?.push('.tsx', '.ts');
    config.resolve!.modules?.push(path.resolve(__dirname, '../src'));

    config.module!.rules!.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    })
    config!.plugins!.push(
        new webpack.DefinePlugin({
          __IS_DEV__: true,
          __API__: JSON.stringify('http://localhost:8000'),
        }),
     )

    const fileLoaderRule = config.module!.rules?.find((rule) =>
      rule instanceof Object
      && rule.test
      && rule.test instanceof RegExp
      && rule?.test?.test('.svg')
    );

    if (fileLoaderRule instanceof Object) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module!.rules!.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ['@svgr/webpack'],
    })

    return config;
  },
};
export default config;
