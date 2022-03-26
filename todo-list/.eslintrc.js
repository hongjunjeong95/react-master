module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  // plugins: ["@typescript-eslint/eslint-plugin"],
  plugins: [],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
};
