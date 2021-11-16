import type {
  TailwindConfig,
  TailwindCorePlugin,
} from "tailwindcss/tailwind-config";

export const withRNTailwind = (config: TailwindConfig) => {
  if (Array.isArray(config.corePlugins)) {
    config.corePlugins = config.corePlugins.filter(
      (plugin) => plugin !== "preflight"
    );
  } else {
    (config.corePlugins as unknown as Record<TailwindCorePlugin, boolean>) = {
      ...(config.corePlugins as unknown as Record<TailwindCorePlugin, boolean>),
      preflight: false,
    };
  }

  return config;
};
