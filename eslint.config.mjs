import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  // Global settings block — apply react version detection everywhere
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  { ignores: ["node_modules/", ".next/", "dist/" , "test/"] },
  { languageOptions: { globals: globals.browser } },

  // Core recommended rules
  pluginJs.configs.recommended,

  // Typescript plugin recommended configs (array)
  ...tseslint.configs.recommended,

  // React plugin recommended configs (flat config)
  pluginReact.configs.flat.recommended,

  // jsx-a11y recommended config (flat config)
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "jsx-a11y": pluginJsxA11y,
      "react": pluginReact,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
      "react/no-unknown-property": ["error", { "ignore": ["jsx"] }]
    },
  },
];
