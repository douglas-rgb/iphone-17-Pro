module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier", // sempre por último
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "tailwindcss"],
  rules: {
    "react/react-in-jsx-scope": "off", // não precisa importar React no Vite
    "react/prop-types": "off", // opcional, se não estiver usando PropTypes
    "tailwindcss/no-custom-classname": "off", // evita erro com classes personalizadas
  },
};
