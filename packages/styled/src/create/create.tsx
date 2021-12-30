import { create } from "twrnc";

import { createTailwindComponent } from "../component/tailwind-component";

import {
  CreateStyledFunction,
  StyledFunction,
  TailwindComponent,
} from "../types";

export const createStyled: CreateStyledFunction = (nativeConfig) => {
  const tw = create(nativeConfig);
  return (c) =>
    (strings, ...tags) =>
      createTailwindComponent(tw, c, strings, tags) as TailwindComponent<any>;
};
