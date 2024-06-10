module.exports = {
  extends: ["next"],
  plugins: ["unicorn"],
  rules: {
    "no-unused-vars": "off",
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "parent", "sibling", "index"],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "~/**",
            group: "parent",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        shorthandLast: true,
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
  },
};
