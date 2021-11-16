import React, { useCallback, useMemo, useState } from "react";

import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
} from "react-native";

import compileMobileStyle from "tailwind-react-native-classnames";

import { RNTailwindComponent, StylableComponent } from "../types";

export function createComponent<P = {}>(
  Component: StylableComponent,
  componentClasses: string
): RNTailwindComponent<P> {
  const c: RNTailwindComponent<P> = (props) => {
    const [focused, setFocused] = useState<boolean>(false);

    let classes = useMemo(
      () => (props.tw ? componentClasses + " " + props.tw : componentClasses),
      [props.tw]
    );

    const interpretedClasses = useMemo(
      () =>
        classes
          .split(" ")
          .map((className) => {
            if (className.includes(":focus") || className.includes("focus:")) {
              if (focused) {
                console.log(className, focused);
                className = className.replace(":focus", "");
                className = className.replace("focus:", "");
                console.log(className, focused);
              } else {
                className = "";
              }
            }

            return className;
          })
          .join(" "),
      [classes, focused]
    );

    console.log(interpretedClasses);

    const style = useMemo(
      () =>
        StyleSheet.compose(
          props.style,
          compileMobileStyle`${interpretedClasses}`
        ),
      [interpretedClasses]
    );

    const onFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        props.onFocus?.(e);
        setFocused(true);
      },
      [props.onFocus]
    );

    const onBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        props.onBlur?.(e);
        setFocused(false);
      },
      [props.onBlur]
    );

    const p = { ...props, onFocus, onBlur };

    return <Component {...p} style={style} />;
  };

  c.displayName = `Tailwind${Component.displayName || "Component"}`;

  return c;
}
