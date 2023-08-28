module.exports = {
  "plugins": [
    "tailwindcss",
  ],
  extends: [
    'eslint:recommended',
    "plugin:tailwindcss/recommended",
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',

    // 4 spaces instead of 2
    "vue/html-indent": ["error", 4, {
      alignAttributesVertically: false
    }],

    // Allow unused vars to be replaced with an _
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],

    // Whitelist certain custom classnames
    "tailwindcss/no-custom-classname": ["warn", {
      "whitelist": ['trk--.+']
    }],
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
}