require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['plugin:vue/vue3-recommended', '@vue/eslint-config-airbnb-with-typescript', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {devDependencies: ['nuxt.config.ts', '.eslintrc.cjs']},
    ],
  },
};
