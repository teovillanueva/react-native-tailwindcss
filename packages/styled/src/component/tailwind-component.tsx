import React from "react";
import { useMemo } from "react";
import { TailwindFn } from "twrnc";
import type { ClassnameValue, TailwindComponent } from "../types";
import { compileClassNames } from "../utils/classnames";

export const createTailwindComponent = <
  C extends React.ComponentType,
  P extends {}
>(
  tw: TailwindFn,
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
    const [focused, setFocused] = React.useState(
      (props as { focused?: boolean }).focused || false
    );

    const classnames = useMemo(() => {
      const cn: string = includesFunctionTags
        ? compileClassNames(strings.raw as string[], tags, props)
        : preCompiledClassnames;

      return cn
        .split(" ")
        .filter((c) => (c.includes("focus") ? focused : true))
        .map((c) => c.replaceAll("focus:", "").replaceAll(":focus", ""))
        .join(" ");
    }, [props, focused]);

    const _handleFocus = React.useCallback(
      (...args) => {
        setFocused(true);
        if ("onFocus" in props) {
          (props as { onFocus: any }).onFocus(...args);
        }
      },
      [props]
    );

    const _handleBlur = React.useCallback(
      (...args) => {
        setFocused(false);
        if ("onBlur" in props) {
          (props as { onBlur: any }).onBlur(...args);
        }
      },
      [props]
    );

    const isFocusable =
      "onBlur" in (component.propTypes || {}) &&
      "onFocus" in (component.propTypes || {});

    return React.createElement(component, {
      ...props,
      ref,
      onFocus: isFocusable ? _handleFocus : (props as any)?.onFocus,
      onBlur: isFocusable ? _handleBlur : (props as any)?.onBlur,
      style: tw.style(classnames),
    });
  });

  return twComponent;
};
