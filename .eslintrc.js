var path = require('path');

module.exports = {
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "func-names": 0,
    "jsx-a11y/no-autofocus": 0,
    "eol-last": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-no-bind": [ 2, {
      "ignoreRefs": false,
      "allowArrowFunctions": true,
      "allowBind": true
    }]
  },
  "plugins": [
    "import",
    "react",
    "jsx-a11y"
  ]
}