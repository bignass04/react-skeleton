import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    // extends: [
    //   "standard-with-typescript",
    //   "plugin:react/recommended",
    //   "plugin:jsx-a11y/recommended"
    // ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    files: ["src/**/*.{tsx,jsx}"]
    // ignores: ["ErrorBoundary.tsx"],
    // plugins: {
    //   react,
    //   "jsx-a11y": jsxA11y,
    // },
    // rules: {
    // },
    // settings: {
    //   react: {
    //     createClass: "createReactClass", // Regex for Component Factory to use,
    //     pragma: "React",  // Pragma to use, default to "React"
    //     fragment: "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
    //     version: "detect"
    //   }
    // }
  }
]
