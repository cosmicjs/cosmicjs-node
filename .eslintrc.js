module.exports = {
  "extends": "airbnb-base",
  "rules": {
    // enable additional rules
    "no-tabs": "off",
    "semi": ["error", "never"],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "never"],
    "no-cond-assign": ["error", "always"],
    "no-param-reassign": [2, { "props": false }],

    // disable rules from base configurations
    "no-console": "off",
    "camelcase": "off",
    "indent": ["error", "tab"]
  }
};