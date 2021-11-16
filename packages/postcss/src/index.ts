import type { PluginCreator, Root } from "postcss";

const pseudoVariants = ["hover", "focus", "actove"];

const plugin: PluginCreator<{}> = () => {
  return {
    postcssPlugin: "react-native-tailwindcss",
    Root(root: Root) {
      if (root.source?.input.file?.includes("react-native-tailwind.css"))
        root.walkRules((rule) => {
          if (rule.selector.startsWith(".")) {
            rule.selector = rule.selector
              .split(" ")
              .map((j) =>
                j
                  .replace(/\\\./g, "SPECIALSEPARATOR")
                  .split(".")
                  .map((i) => {
                    if (i === "") {
                      return "";
                    }

                    let variant = "";

                    pseudoVariants.forEach((pseudoVariant) => {
                      if (i.endsWith(`:${pseudoVariant}`)) {
                        variant = pseudoVariant;
                      }
                    });

                    if (variant) {
                      return `[data-tw~="${i.replace(
                        `:${variant}`,
                        ""
                      )}"]:${variant}`;
                    }

                    return '[data-tw~="' + i + '"]';
                  })
                  .join("")
                  .replace(/SPECIALSEPARATOR/g, "\\.")
              )
              .join(" ");
          }
        });
    },
  };
};

plugin.postcss = true;

module.exports = plugin;
