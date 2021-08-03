const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },

  webpack: {
    configure: (config, { env, paths }) => {
      // eslint-disable-line @typescript-eslint/no-unused-vars
      const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin') // eslint-disable-line @typescript-eslint/no-var-requires

      config.resolve.plugins = config.resolve.plugins.filter(
        (plugin) => !(plugin instanceof ModuleScopePlugin)
      )

      return config
    },
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
  },
}
