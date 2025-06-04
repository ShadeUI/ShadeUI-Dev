
import { Meta, StoryFn } from '@storybook/react';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
import SolidBadge, { SolidBadgeProps } from './SolidBadge';

export default {
  title: "Components/Badge/Solid Badge",
  component: SolidBadge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
    options: ["accent",  "fill",  "outline" ]   
    },
    color: {
      control: { type: 'select' },
    options: ["blue",  "danger",  "orange", "purple", "success", "warning", "zinc", "slate", "gray",] 
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
    label: { control: 'text' },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
} as Meta<SolidBadgeProps>;

const Template: StoryFn<SolidBadgeProps> = (args) => <SolidBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Badge',
  size: 'md',
  variant: 'accent',
  color: 'blue',
  disabled: false,
  isLoading: false,
  showLeftIcon: true,
  showRightIcon: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
  loadingText: 'Loading...',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  label: 'Info',
  leftIcon: <FiArrowLeft />,
  rightIcon: <FiArrowRight />,
  showLeftIcon: true,
  showRightIcon: true,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  size: 'md',
  leftIcon: <FiCheck />,
  showLeftIcon: true,
  label: '', // icon only
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const AllVariants: StoryFn<SolidBadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 12 }}>
    <SolidBadge {...args} variant="accent" />
    <SolidBadge {...args} variant="fill" />
    <SolidBadge {...args} variant="outline" />
  </div>
);
AllVariants.args = {
  ...Default.args,
};

export const AllColors: StoryFn<SolidBadgeProps> = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
    {['blue', 'danger', 'orange', 'purple', 'success', 'warning', 'zinc', 'slate', 'gray'].map((color) => (
      <SolidBadge key={color} {...args} color={color as SolidBadgeProps['color']} />
    ))}
  </div>
);
AllColors.args = {
  ...Default.args,
};

export const AllSizes: StoryFn<SolidBadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <SolidBadge {...args} size="sm" label="Small" />
    <SolidBadge {...args} size="md" label="Medium" />
    <SolidBadge {...args} size="lg" label="Large" />
  </div>
);
AllSizes.args = {
  ...Default.args,
};
