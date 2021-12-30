import type { TailwindFn } from "twrnc";

import { createTailwindComponent } from "../component/tailwind-component";

import { CreateStyledFunction, TailwindComponent } from "../types";

export const createStyled: CreateStyledFunction = (nativeConfig) => {
  return (c) =>
    (strings, ...tags) =>
      createTailwindComponent(
        (() => null) as unknown as TailwindFn,
        c,
        strings,
        tags
      ) as TailwindComponent<any>;
};
