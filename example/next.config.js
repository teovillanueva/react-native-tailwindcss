const path = require("path");

const withTM = require("next-transpile-modules")([
  "@react-native-tailwindcss/styled",
  "tailwind-react-native-classnames",
]);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      react: path.resolve("node_modules/react"),
    };

    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    config.externals.react = "react";

    return config;
  },
});
