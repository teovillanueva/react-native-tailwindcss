"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var tailwind_react_native_classnames_1 = __importDefault(require("tailwind-react-native-classnames"));
function createComponent(Component, componentClasses) {
    var c = function (props) {
        var _a = (0, react_1.useState)(false), focused = _a[0], setFocused = _a[1];
        var classes = (0, react_1.useMemo)(function () { return (props.tw ? componentClasses + " " + props.tw : componentClasses); }, [props.tw]);
        var interpretedClasses = (0, react_1.useMemo)(function () {
            return classes
                .split(" ")
                .map(function (className) {
                if (className.includes(":focus") || className.includes("focus:")) {
                    if (focused) {
                        console.log(className, focused);
                        className = className.replace(":focus", "");
                        className = className.replace("focus:", "");
                        console.log(className, focused);
                    }
                    else {
                        className = "";
                    }
                }
                return className;
            })
                .join(" ");
        }, [classes, focused]);
        console.log(interpretedClasses);
        var style = (0, react_1.useMemo)(function () {
            return react_native_1.StyleSheet.compose(props.style, (0, tailwind_react_native_classnames_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), interpretedClasses));
        }, [interpretedClasses]);
        var onFocus = (0, react_1.useCallback)(function (e) {
            var _a;
            (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
            setFocused(true);
        }, [props.onFocus]);
        var onBlur = (0, react_1.useCallback)(function (e) {
            var _a;
            (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
            setFocused(false);
        }, [props.onBlur]);
        var p = __assign(__assign({}, props), { onFocus: onFocus, onBlur: onBlur });
        return react_1.default.createElement(Component, __assign({}, p, { style: style }));
    };
    c.displayName = "Tailwind" + (Component.displayName || "Component");
    return c;
}
exports.createComponent = createComponent;
var templateObject_1;
