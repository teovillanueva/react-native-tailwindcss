import type { FC, ComponentType, ComponentClass } from "react";
import type { StyleProp, TextInputFocusEventData, NativeSyntheticEvent, AccessibilityRole as RNAccessibilityRole } from "react-native";
export declare type AccessibilityRole = RNAccessibilityRole | "form";
export declare type FocusHandlers = {
    onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
};
export declare type RNTailwindComponentProps = {
    tw?: string;
    style?: StyleProp<any>;
    focusable?: boolean;
    dataSet?: Record<string, any>;
    accessibilityRole?: AccessibilityRole;
} & FocusHandlers;
export declare type RNTailwindComponent<P = {}> = FC<P & RNTailwindComponentProps>;
export declare type StylableComponentProps = {
    style?: StyleProp<any>;
    dataSet?: Record<string, unknown>;
} & FocusHandlers;
export declare type StylableComponent = ComponentType<StylableComponentProps> | ComponentClass<StylableComponentProps>;
