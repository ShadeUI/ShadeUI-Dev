import type { Preview } from '@storybook/react';
import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111111' },
      ],
    },
    docs: {
      theme: undefined,
    },
    options: {
      storySort: {
        order: ['documentation [beta]', 'design system v1.2 [NEW]', 'components', ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-white text-black ">
        <Story />
      </div>
    ),
  ],
};

export default preview;
