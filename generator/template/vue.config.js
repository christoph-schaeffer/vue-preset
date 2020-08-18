module.exports = {
  publicPath: process.env.BASE_URL,

  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE,
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
      localeDir: 'locales',
    },
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: "@import '@/styles/variables.scss'",
              },
            },
          ],
        },
      ],
    },
  },
};
