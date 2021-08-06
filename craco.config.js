const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires
const SentryWebpackPlugin = require('@sentry/webpack-plugin') // eslint-disable-line @typescript-eslint/no-var-requires

const sentryRelease = new Date().toUTCString()

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },

  webpack: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configure: (config, { env, paths }) => {
      const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin') // eslint-disable-line @typescript-eslint/no-var-requires

      config.resolve.plugins = config.resolve.plugins.filter(
        (plugin) => !(plugin instanceof ModuleScopePlugin)
      )

      return config
    },
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    devtool: 'hidden-source-map',
    plugins: [
      () =>
        process.env.SENTRY_AUTH_TOKEN &&
        process.env.SENTRY_ORG &&
        process.env.SENTRY_PROJECT &&
        sentryRelease &&
        new SentryWebpackPlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          release: `${sentryRelease}`,

          include: './build',
          ignore: ['node_modules', 'craco.config.js'],
        }),
    ],
  },
}
