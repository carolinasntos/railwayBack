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
    rules: {
      // Permite comillas simples
      quotes: ["error", "single"], 
      semi: "error"
    }
  }
];