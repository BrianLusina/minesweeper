// your app's webpack.config.js
const custom = require('../config/webpack.config.js');

module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  babel: () => {},
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    // {
    //   name: '@babel/plugin-proposal-private-property-in-object',
    //   options: {
    //     babelOptions: {
    //       plugins: [
    //         [
    //           '@babel/plugin-proposal-private-property-in-object',
    //           {
    //             loose: true,
    //           },
    //         ],
    //       ],
    //     },
    //   },
    // },
  ],
  // Extend Webpack config
  // Reference: https://storybook.js.org/docs/riot/configure/webpack
  webpackFinal: (config) => {
    const appWebPack = custom('development');
    return {
      ...config,
      // when added, fails to load JSX
      // module: {
      //   ...config.module,
      //   rules: appWebPack.module.rules,
      // },
      resolve: {
        ...config.resolve,
        alias: appWebPack.resolve.alias,
      },
    };
  },
};