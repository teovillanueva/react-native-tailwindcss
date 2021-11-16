import type { FC, ComponentType, Component, ComponentClass } from "react";
import type {
  StyleProp,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  AccessibilityRole as RNAccessibilityRole,
} from "react-native";

export type AccessibilityRole = RNAccessibilityRole | "form";

export type FocusHandlers = {
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
};

export type RNTailwindComponentProps = {
  tw?: string;
  style?: StyleProp<any>;
  focusable?: boolean;
  dataSet?: Record<string, any>;
  accessibilityRole?: AccessibilityRole;
} & FocusHandlers;
export type RNTailwindComponent<P = {}> = FC<P & RNTailwindComponentProps>;

export type StylableComponentProps = {
  style?: StyleProp<any>;
  dataSet?: Record<string, unknown>;
} & FocusHandlers;

export type StylableComponent =
  | ComponentType<StylableComponentProps>
  | ComponentClass<StylableComponentProps>;
