import { Meta, StoryFn } from '@storybook/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import BezelButton, { BezelButtonProps } from './BezelButton';

export default {
  title: 'Components/Button/Bezel Button',
  component: BezelButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['black', 'blue', 'danger', 'orange', 'purple', 'neutral'] },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
    label: { control: 'text' },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },

    leftIcon: { table: { disable: true } }, 
    rightIcon: { table: { disable: true } }, 
  },
} as Meta<BezelButtonProps>;

const Template: StoryFn<BezelButtonProps> = (args) => <BezelButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  size: 'md',
  color: 'blue',
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
