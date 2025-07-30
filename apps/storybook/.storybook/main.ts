import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    // Add alias for easier imports
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@treetop-studio/cartridge": resolve(
        __dirname,
        "../../../packages/core/src"
      ),
      "@treetop-studio/cartridge/components": resolve(
        __dirname,
        "../../../packages/core/src/components"
      ),
      "@treetop-studio/cartridge/themes": resolve(
        __dirname,
        "../../../packages/core/src/themes"
      ),
      "@treetop-studio/cartridge/utils": resolve(
        __dirname,
        "../../../packages/core/src/utils"
      ),
      "@treetop-studio/cartridge/types": resolve(
        __dirname,
        "../../../packages/core/src/types"
      ),
    };

    // Ensure CSS is processed correctly
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [require("@tailwindcss/postcss")],
    };

    return config;
  },
};

export default config;
