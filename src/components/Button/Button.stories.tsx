import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click Me',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    className: 'bg-gray-500 text-white',
  },
};

export const Danger: Story = {
  args: {
    label: 'Delete',
    className: 'bg-red-600 text-white',
  },
};
