module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },

  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin') // eslint-disable-line @typescript-eslint/no-var-requires

      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

      return webpackConfig
    }
  },
}
