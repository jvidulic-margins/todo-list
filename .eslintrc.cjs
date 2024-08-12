module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:css/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["/*", "!/src", "!/types"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "react",
    "prettier",
    "react-hooks",
    "css",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "off",
    "no-param-reassign": [
      "error",
      { ignorePropertyModificationsFor: ["state"] },
    ],
    "no-return-await": "error",
    "no-underscore-dangle": "error",
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
    "lines-between-class-members": "off",
    "prefer-arrow-callback": "error",
    "no-console": [
      "error",
      {
        allow: ["warn", "info", "error"],
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "react-hooks/exhaustive-deps": "error",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["Label"],
        labelAttributes: ["label"],
        controlComponents: ["Input", "Checkbox", "Switch"],
        depth: 3,
      },
    ],
    "@typescript-eslint/no-shadow": "off",
    "no-plusplus": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "max-classes-per-file": "off",
  },
  settings: {
    "jsx-a11y": {
      components: {
        Input: "input",
        Button: "button",
        IconButton: "button",
        PasswordInput: "input",
      },
    },
  },
};
