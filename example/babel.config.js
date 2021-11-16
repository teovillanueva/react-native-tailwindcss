module.exports = process.env.NEXT_APP
  ? {
      presets: ["next/babel"],
      plugins: [
        ["react-native-web", { commonjs: true }],
        [
          "module-resolver",
          {
            alias: {
              "react-native": "react-native-web",
            },
          },
        ],
      ],
    }
  : {
      presets: ["babel-preset-expo"],
      plugins: [
        [
          "module-resolver",
          {
            alias: {
              react: "./node_modules/react",
              "react-native": "./node_modules/react-native",
            },
          },
        ],
      ],
    };
