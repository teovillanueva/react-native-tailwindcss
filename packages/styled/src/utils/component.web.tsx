import React, { ComponentProps, useMemo, useState } from "react";

import { RNTailwindComponent, StylableComponent } from "../types";

export function createComponent<P = {}>(
  Component: StylableComponent,
  componentClasses: string
): RNTailwindComponent<P & ComponentProps<typeof Component>> {
  return (props) => {
    let classes = useMemo(
      () =>
        (props.tw ? componentClasses + " " + props.tw : componentClasses)
          .split(" ")
          .filter(
            (c) =>
              !c.includes("ios") ||
              !c.includes("android") ||
              !c.includes("macos") ||
              !c.includes("windows")
          )
          .map((c) => {
            if (c.includes("web:")) {
              return c.replace("web:", "");
            }

            return c;
          })
          .join(" "),
      [props.tw]
    );

    return <Component {...props} dataSet={{ tw: classes }} />;
  };
}
