import { Meta, StoryFn } from '@storybook/react';
import { FiArrowRight, FiArrowLeft, FiCheck } from "react-icons/fi";
import { FlatButton, FlatButtonProps } from './FlatButton';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';

export default {
  title: 'Components/Button/Flat Button',
  component: FlatButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'The Shade UI Button component provides a variety of styles, including Social, Elevated, Flat, Links, and Icon buttons, to suit different design needs. Each type balances form and function, from attention-grabbing Social buttons to sleek, minimal Flat styles. It is a minimal, flat-styled button with no shadows or borders. Furthermore, It supports different sizes, colors, loading states, icons, and disabled state. Designed for secondary actions or lighter UI interactions.',
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
      control: { type: 'select' },
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
} as Meta<FlatButtonProps>;

const Template: StoryFn<FlatButtonProps> = (args: FlatButtonProps) => <FlatButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  size: 'md',
  color: 'blue',
  disabled: false,
  isLoading: false,
  showLeftIcon: true,
  showRightIcon: true,
  iconOnly: false,
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

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  leftIcon: <FiArrowLeft />,
  rightIcon: <FiArrowRight />,
  showLeftIcon: true,
  showRightIcon: true,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  leftIcon: <FiCheck />,
  size: 'md',
  disabled: false,
};

export const AllColors: StoryFn<FlatButtonProps> = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
    {['blue', 'danger', 'orange', 'purple','neutral'].map((color) => (
      <FlatButton key={color} {...args} color={color as FlatButtonProps['color']} />
    ))}
  </div>
);
AllColors.args = {
  ...Default.args,
};

export const AllSizes: StoryFn<FlatButtonProps> = (args: FlatButtonProps) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <FlatButton {...args} size="sm" label="Small" />
    <FlatButton {...args} size="md" label="Medium" />
    <FlatButton {...args} size="lg" label="Large" />
  </div>
);

AllSizes.args = {
  ...Default.args,
};
