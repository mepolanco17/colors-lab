const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  // md5.js is a third-party library, so we do not lint it
  { ignores: ["public/js/md5.js", "node_modules/"] },
  js.configs.recommended,
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: { ...globals.browser },
    },
    rules: {
      // Functions in code.js are called from onclick attributes in the HTML,
      // so ESLint cannot see them being used. Only check local variables.
      "no-unused-vars": ["error", { vars: "local" }],
    },
  },
];
