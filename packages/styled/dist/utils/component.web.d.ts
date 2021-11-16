import { ComponentProps } from "react";
import { RNTailwindComponent, StylableComponent } from "../types";
export declare function createComponent<P = {}>(Component: StylableComponent, componentClasses: string): RNTailwindComponent<P & ComponentProps<typeof Component>>;
