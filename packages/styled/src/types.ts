import type React from "react";

import type { TwConfig } from "twrnc";

export type ClassnameFunction<P extends {}> = (props: P) => string | string[];

export type ClassnameValue<P extends {}> =
  | string
  | string[]
  | ClassnameFunction<P>;

export type TailwindComponent<P extends {}> = React.ComponentType<
  P & { tw?: string | string[] }
>;

export type StyledFunction = <C extends React.ComponentType>(
  component: C
) => <P extends {}>(
  strings: TemplateStringsArray,
  ...tags: ClassnameValue<React.ComponentProps<C> & P>[]
) => TailwindComponent<React.ComponentProps<C> & P>;

export type CreateStyledFunction = (nativeConfig?: TwConfig) => StyledFunction;
