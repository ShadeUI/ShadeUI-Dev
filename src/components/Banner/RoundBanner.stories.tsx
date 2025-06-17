import type { Meta, StoryObj } from '@storybook/react';
import { RoundBanner } from './RoundBanner';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';

const meta: Meta<typeof RoundBanner> = {
  title: 'Components/Banner/RoundBanner',
  component: RoundBanner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'RoundBanner is a flexible banner component that can include a badge, link button, and close button. The Header Banner is a top-positioned UI element used for key messages, alerts, or notifications. It maintains visibility without disrupting the user experience. It ensures clarity, accessibility, and consistency across applications, enhancing communication within digital interfaces.',
      },
    },
  },
  argTypes: {
    ...commonArgTypes,
    label: { 
      description: 'Text displayed inside the banner.',
      control: 'text',
    },
    variant: { 
      description: 'Visual style of the banner button. Supports "fill" or "accent".',
      control: 'select',
      options: ['fill', 'accent'],
    },
    color: { 
      description: 'Color scheme of the banner.',
      control: 'select',
      options: [ 'slate', 'blue', 'gray', 'orange', 'purple', 'zinc'],
    },
    showBadge: { 
      description: 'Display the badge on the banner.',
      control: 'boolean',
    },
    showLinkButton: { 
      description: 'Display a call-to-action link button.',
      control: 'boolean',
    },
    showCloseButton: { 
      description: 'Display a close (dismiss) button.',
      control: 'boolean',
    },
    linkButton: { table: { disable: true } }, 
    badge: { table: { disable: true } }, 
    closeButton: { table: { disable: true } }, 
  },
};

export default meta;

type Story = StoryObj<typeof RoundBanner>;

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
