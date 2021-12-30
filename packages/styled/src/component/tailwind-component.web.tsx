import React, { useMemo } from "react";
import type { TailwindFn } from "twrnc";

import type { ClassnameValue, TailwindComponent } from "../types";

import { compileClassNames } from "../utils/classnames";

export const createTailwindComponent = <
  C extends React.ComponentType,
  P extends {}
>(
  _: TailwindFn,
  component: C,
  strings: TemplateStringsArray,
  tags: ClassnameValue<P>[]
) => {
  const includesFunctionTags = tags.some((tag) => typeof tag === "function");

  const preCompiledClassnames = !includesFunctionTags
    ? compileClassNames(strings.raw as Array<string>, tags, {} as P)
    : "";

  const twComponent = React.forwardRef<
    C,
    React.ComponentProps<TailwindComponent<P>>
  >((props, ref) => {
    const classnames = useMemo(() => {
      if (includesFunctionTags) {
        return compileClassNames(
          (props.tw
            ? [...strings.raw, props.tw]
            : strings.raw) as Array<string>,
          tags,
          props
        );
      }

      return preCompiledClassnames + " " + props.tw
        ? Array.isArray(props.tw)
          ? props.tw.join(" ")
          : props.tw
        : "";
    }, [props]);

    return React.createElement(component, {
      ...props,
      ref,
      dataSet: { tw: classnames },
    });
  });

  return twComponent;
};
