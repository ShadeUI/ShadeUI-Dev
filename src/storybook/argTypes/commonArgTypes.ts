import type { ArgTypes } from '@storybook/react';

export const commonArgTypes: ArgTypes = {
  screen: {
    description: 'Responsive configuration for different breakpoints.',
    control: 'radio',
  },
  className: {
    description: 'Optional Tailwind classes for custom styling.',
    control: 'text',
  },
};
