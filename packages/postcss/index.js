const classSelectorToDataAttribute = (className) => {
  let twSelector = "";

  for (let i = 0; i < className.length; i++) {
    const char = className[i];

    if (char === ":" && className[i - 1] !== "\\") {
      break;
    }

    twSelector += char;
  }

  twSelector = twSelector.slice(1);

  return `[data-tw~="${twSelector}"]` + className.slice(twSelector.length + 1);
};

const plugin = () => {
  return {
    postcssPlugin: "react-native-tailwindcss",
    Root(root) {
      if (root.source?.input.file?.includes("tailwind.css"))
        root.walkRules((rule) => {
          if (rule.selector.startsWith(".")) {
            rule.selector = classSelectorToDataAttribute(rule.selector);
          }
        });
    },
  };
};

plugin.postcss = true;

module.exports = plugin;
