export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly"
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"]
    }
  }
];