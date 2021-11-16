"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pseudoVariants = ["hover", "focus", "actove"];
var plugin = function () {
    return {
        postcssPlugin: "react-native-tailwindcss",
        Root: function (root) {
            var _a, _b;
            if ((_b = (_a = root.source) === null || _a === void 0 ? void 0 : _a.input.file) === null || _b === void 0 ? void 0 : _b.includes("react-native-tailwind.css"))
                root.walkRules(function (rule) {
                    if (rule.selector.startsWith(".")) {
                        rule.selector = rule.selector
                            .split(" ")
                            .map(function (j) {
                            return j
                                .replace(/\\\./g, "SPECIALSEPARATOR")
                                .split(".")
                                .map(function (i) {
                                if (i === "") {
                                    return "";
                                }
                                var variant = "";
                                pseudoVariants.forEach(function (pseudoVariant) {
                                    if (i.endsWith(":" + pseudoVariant)) {
                                        variant = pseudoVariant;
                                    }
                                });
                                if (variant) {
                                    return "[data-tw~=\"" + i.replace(":" + variant, "") + "\"]:" + variant;
                                }
                                return '[data-tw~="' + i + '"]';
                            })
                                .join("")
                                .replace(/SPECIALSEPARATOR/g, "\\.");
                        })
                            .join(" ");
                    }
                });
        },
    };
};
plugin.postcss = true;
module.exports = plugin;
