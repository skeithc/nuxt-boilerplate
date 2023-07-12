require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['nuxt.config.ts', '.eslintrc.cjs'] },
    ],
  },
};
