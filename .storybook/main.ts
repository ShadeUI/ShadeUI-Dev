import type { StorybookConfig } from '@storybook/react-vite';
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths"

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag",
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")]
      })
    );
    return config;
  }
};
export default config;


