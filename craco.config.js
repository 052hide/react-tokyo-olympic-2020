const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires
const SentryWebpackPlugin = require('@sentry/webpack-plugin') // eslint-disable-line @typescript-eslint/no-var-requires
const DotEnv = require('dotenv') // eslint-disable-line @typescript-eslint/no-var-requires

const dotenv = DotEnv.config().parsed
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
        dotenv.SENTRY_AUTH_TOKEN &&
        dotenv.SENTRY_ORG &&
        dotenv.SENTRY_PROJECT &&
        sentryRelease &&
        new SentryWebpackPlugin({
          authToken: dotenv.SENTRY_AUTH_TOKEN,
          org: dotenv.SENTRY_ORG,
          project: dotenv.SENTRY_PROJECT,
          release: `${sentryRelease}`,

          include: './build',
          ignore: ['node_modules', 'craco.config.js'],
        }),
    ],
  },
}
