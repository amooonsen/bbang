module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb-base",
    "prettier",
    "plugin:storybook/recommended",
    "next/core-web-vitals",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
  ],
  parser:
    "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components":
      [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    quotes: [
      "error",
      "single",
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "array-bracket-spacing": [
      "error",
      "never",
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        scss: "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".json",
          ".scss",
        ],
      },
    },
  },
};
