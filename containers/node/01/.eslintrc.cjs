"use strict";
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      env: {
        es2020: true,
        node: true,
      },
      extends: ["eslint:all"],
      files: [".eslintrc.cjs"],
      parserOptions: {
        ecmaFeatures: {},
        ecmaVersion: "latest",
        sourceType: "script",
      },
      plugins: ["prettier", "sort-keys"],
      rules: {
        "array-element-newline": ["off"],
        "capitalized-comments": ["off"],
        "comma-dangle": ["off"],
        "function-call-argument-newline": ["off"],
        indent: [
          "error",
          2,
          {
            SwitchCase: 1,
          },
        ],
        "no-magic-numbers": ["off"],
        "no-underscore-dangle": ["off"],
        "object-curly-spacing": ["off"],
        "one-var": ["off"],
        "prettier/prettier": [
          "error",
          {
            arrowParens: "always",
            bracketSameLine: true,
            bracketSpacing: true,
            endOfLine: "lf",
            htmlWhitespaceSensitivity: "strict",
            jsxSingleQuote: false,
            printWidth: 80,
            proseWrap: "always",
            quoteProps: "as-needed",
            semi: true,
            singleAttributePerLine: false,
            singleQuote: false,
            tabWidth: 2,
            trailingComma: "es5",
            useTabs: false,
          },
        ],
        "quote-props": ["error", "as-needed"],
        "sort-keys": ["off"],
        "sort-keys/sort-keys-fix": ["error"],
      },
    },
    {
      env: {
        es2020: true,
        node: true,
      },
      extends: [
        "eslint:all",
        "plugin:@typescript-eslint/all",
        "plugin:@typescript-eslint/stylistic",
      ],
      files: ["*.ts", "*.d.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {},
        ecmaVersion: "latest",
        project: "./tsconfig.node.json",
        sourceType: "script",
        tsconfigRootDir: "./",
      },
      plugins: ["prettier", "sort-keys"],
      rules: {
        "array-element-newline": ["off"],
        "capitalized-comments": ["off"],
        "comma-dangle": ["off"],
        "function-call-argument-newline": ["off"],
        indent: [
          "error",
          2,
          {
            SwitchCase: 1,
          },
        ],
        "no-magic-numbers": ["off"],
        "no-underscore-dangle": ["off"],
        "object-curly-spacing": ["off"],
        "one-var": ["off"],
        "prettier/prettier": [
          "error",
          {
            arrowParens: "always",
            bracketSameLine: true,
            bracketSpacing: true,
            endOfLine: "lf",
            htmlWhitespaceSensitivity: "strict",
            jsxSingleQuote: false,
            printWidth: 80,
            proseWrap: "always",
            quoteProps: "as-needed",
            semi: true,
            singleAttributePerLine: false,
            singleQuote: false,
            tabWidth: 2,
            trailingComma: "es5",
            useTabs: false,
          },
        ],
        "quote-props": ["error", "as-needed"],
        "sort-keys": ["off"],
        "sort-keys/sort-keys-fix": ["error"],
      },
    },
  ],
});
