export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    rules: {
      quotes: ["error", "double"], // ← usa comillas dobles
      semi: ["error", "always"]
    }
  }
];