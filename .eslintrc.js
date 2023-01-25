// const { deprecatedElements } = require("utils/deprecatedElements");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    // Legend: 0 = off, 1 = warning, 2 = error
    "curly": ["warn", "all"],
    "react/default-props-match-prop-types": 2,
    "react/jsx-no-useless-fragment": 1,
    "react/boolean-prop-naming": [
      1,
      {
        rule: "^(is|has|should|can|did)[A-Z]([A-Za-z0-9]?)+",
        message:
          "Boolean props like ({{ propName }}) need to start with one of the following auxiliary verbs: is, has, should, can, did.",
      },
    ],
    // "react/forbid-elements": [1, { forbid: deprecatedElements() }],

    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    "react/hook-use-state": [1, { allowDestructuredState: false }],
    "react/iframe-missing-sandbox": 1,
    "react/jsx-fragments": [1, "syntax"],
    "react/jsx-handler-names": 1,
    "react/jsx-key": [
      1,
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-bind": [
      1,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    "react/jsx-no-constructed-context-values": 1,
    "react/jsx-no-leaked-render": [1, { validStrategies: ["coerce"] }],
    "react/jsx-no-target-blank": [
      1,
      {
        warnOnSpreadAttributes: true,
        forms: true,
      },
    ],
    "react/jsx-pascal-case": [
      1,
      {
        allowNamespace: true,
      },
    ],
    "react/jsx-sort-props": [
      1,
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "no-array-index-key": 1,
    "react/no-danger": 1,
    "react/no-invalid-html-attribute": ["rel", "step"],
  },
};
