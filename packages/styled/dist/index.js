"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("./utils/component");
function default_1(Component, componentClasses) {
    if (componentClasses === void 0) { componentClasses = ""; }
    return (0, component_1.createComponent)(Component, componentClasses);
}
exports.default = default_1;
