import type { Meta, StoryObj } from '@storybook/react';
import { RoundBanner } from './RoundBanner';

const meta: Meta<typeof RoundBanner> = {
  title: 'Components/Banner/RoundBanner',
  component: RoundBanner,
  tags: ['autodocs'],
    argTypes: {
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
