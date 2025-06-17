import type { Meta, StoryObj } from '@storybook/react';
import { SharpBanner } from './SharpBanner';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';

const meta: Meta<typeof SharpBanner> = {
  title: 'Components/Banner/SharpBanner',
  component: SharpBanner,
  tags: ['autodocs'],
  parameters: {
      docs: {
        description: {
          component: 'SharpBanner is a customizable banner component with sharp edges, allowing for optional badge, link button, and close button functionality. The Header Banner is a top-positioned UI element used for key messages, alerts, or notifications. It maintains visibility without disrupting the user experience. It ensures clarity, accessibility, and consistency across applications, enhancing communication within digital interfaces.',
        },
      },
    },
    argTypes: {
      ...commonArgTypes,
      label: { 
        description: 'The main text content displayed inside the banner.',
        control: 'text',
      },
      variant: { 
        description: 'Determines the visual style of the link button. Options are "fill" and "accent".',
        control: 'select',
        options: ['fill', 'accent'],
      },
      color: { 
        description: 'Defines the color theme of the banner.',
        control: 'select',
        options: [ 'slate', 'blue', 'gray', 'orange', 'purple', 'zinc'],
      },
      showBadge: { 
        description: 'Toggles the visibility of the badge inside the banner.',
        control: 'boolean',
      },
      showLinkButton: { 
        description: 'Controls whether to display a call-to-action link button.',
        control: 'boolean',
      },
      showCloseButton: { 
        description: 'Controls whether a dismiss (close) button is displayed.',
        control: 'boolean',
      },
      linkButton: { table: { disable: true } }, 
      badge: { table: { disable: true } }, 
      closeButton: { table: { disable: true } }, 
    },
};

export default meta;

type Story = StoryObj<typeof SharpBanner>;

export const Default: Story = {
  args: {
    label: 'Default Banner',
  },
};

export const WithBadge: Story = {
  args: {
    label: 'Banner with Badge',
    color: 'blue',
    showBadge: true,
  },
};

export const WithLinkButtonFill: Story = {
  args: {
    label: 'Learn about Shade UI',
    variant: 'fill',
    color: 'orange',
    showLinkButton: true,
  },
};

export const WithLinkButtonAccent: Story = {
  args: {
    label: 'Learn about Shade UI',
    variant: 'accent',
    color: 'purple',
    showLinkButton: true,
  },
};

export const WithCloseButton: Story = {
  args: {
    label: 'This is closable',
    showCloseButton: true,
  },
};

export const FullyLoaded: Story = {
  args: {
    label: 'All features enabled',
    variant: 'accent',
    color: 'blue',
    showBadge: true,
    showLinkButton: true,
    showCloseButton: true,
  },
};
