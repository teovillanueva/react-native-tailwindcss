import type { ComponentProps } from "react";
import { RNTailwindComponent, StylableComponent } from "./types";
export default function <P = {}>(Component: StylableComponent, componentClasses?: string): RNTailwindComponent<P & ComponentProps<typeof Component>>;
