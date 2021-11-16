import _ from "lodash";

import type { ComponentProps } from "react";

import { createComponent } from "./utils/component";
import { RNTailwindComponent, StylableComponent } from "./types";

export default function <P = {}>(
  Component: StylableComponent,
  componentClasses = ""
): RNTailwindComponent<P & ComponentProps<typeof Component>> {
  return createComponent<P>(Component, componentClasses);
}
