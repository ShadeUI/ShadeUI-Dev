import type { StorybookConfig } from '@storybook/react-vite';
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths"

const config: StorybookConfig = {
  "stories": [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  docs: {
    autodocs: "tag"
  } as any, 

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


