import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FiArrowRight } from 'react-icons/fi';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Flat',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'black', 'danger', 'orange', 'purple'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focused', 'pressed', 'disabled'],
    },
    leftIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    rightIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click Me!',
    color: 'blue',
    size: 'medium',
    state: 'default',
  },
};

export const IconOnly: Story = {
  args: {
    state: 'default',
    color: 'purple',
    size: 'large',
    rightIcon: <FiArrowRight />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    color: 'red',
    size: 'medium',
    state: 'disabled',
  },
};
