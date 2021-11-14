module.exports = {
  stories: [
    '../src/stories/**/*.stories.tsx',
    '../src/stories/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
          injectStoryParameters: true,
        },
      },
    },
  ],
  webpackFinal: async config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")]
            }
          },
          require.resolve("react-docgen-typescript-loader")
        ]
      }
    ],
      config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};