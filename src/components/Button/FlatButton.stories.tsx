import { Meta, StoryFn } from '@storybook/react';
import { FiArrowRight, FiArrowLeft, FiCheck } from "react-icons/fi";
import { FlatButton, FlatButtonProps } from './FlatButton';

export default {
  title: 'Components/Button/Flat Button',
  component: FlatButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'blue', 'danger', 'orange', 'purple', 'neutral'],
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
    label: { control: 'text' },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
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
