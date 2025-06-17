import { Meta, StoryFn } from '@storybook/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import BezelButton, { BezelButtonProps } from './BezelButton';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';

export default {
  title: 'Components/Button/Bezel Button',
  component: BezelButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Bezel Button offers styles in various style options, ensuring flexibility for different contexts. It comes in two variations: one featuring only icons for a minimalist look, and another combining text and icons for clarity. The design maintains a modern feel with subtle elevation effects. It is a styled button component with a slightly elevated, beveled appearance. Supports multiple colors, sizes, icons, loading state, disabled state, and icon-only mode.',
      },
    },
  },
  argTypes: {
    ...commonArgTypes,
    size: {
      description: 'Controls the button size.',
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      description: 'Sets the button color scheme.',
      control: 'select',
      options: ['black', 'blue', 'danger', 'orange', 'purple', 'neutral'],
    },
    disabled: {
      description: 'Disables the button and applies a disabled appearance.',
      control: 'boolean',
    },
    isLoading: {
      description: 'Shows a loading spinner inside the button.',
      control: 'boolean',
    },
    loadingText: {
      description: 'Optional text displayed next to the spinner while loading.',
      control: 'text',
    },
    label: {
      description: 'Text displayed inside the button.',
      control: 'text',
    },
    showLeftIcon: {
      description: 'Toggle visibility of the left icon (if provided).',
      control: 'boolean',
    },
    showRightIcon: {
      description: 'Toggle visibility of the right icon (if provided).',
      control: 'boolean',
    },
    iconOnly: {
      description: 'Renders button as icon-only (no label).',
      control: 'boolean',
    },
    leftIcon: {
      table: { disable: true },
    },
    rightIcon: {
      table: { disable: true },
    },
  },
} as Meta<BezelButtonProps>;

const Template: StoryFn<BezelButtonProps> = (args) => <BezelButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  size: 'md',
  color: 'blue',
  leftIcon: <FiArrowLeft />,
  rightIcon: <FiArrowRight />,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  leftIcon: <FiArrowLeft />,
  rightIcon: <FiArrowRight />,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
  loadingText: 'Loading...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  leftIcon: <FiArrowLeft />,
};

export const AllColors: StoryFn<BezelButtonProps> = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
    {['blue', 'danger', 'orange', 'purple', 'black', 'neutral'].map((color) => (
      <BezelButton key={color} {...args} color={color as BezelButtonProps['color']} />
    ))}
  </div>
);
AllColors.args = {
  ...Default.args,
};

export const AllSizes: StoryFn<BezelButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: 16 }}>
    <BezelButton {...args} size="sm" label="Small" />
    <BezelButton {...args} size="md" label="Medium" />
    <BezelButton {...args} size="lg" label="Large" />
  </div>
);
AllSizes.args = {
  ...Default.args,
};
