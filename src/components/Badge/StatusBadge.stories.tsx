
import { Meta, StoryFn } from '@storybook/react';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
import StatusBadge, { StatusBadgeProps } from './StatusBadge';

export default {
  title: "Components/Badge/Status Badge",
  component: StatusBadge,
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
        options: [ "danger", "success", "warning", "zinc", "slate", "gray"] 
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
    label: { control: 'text' },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
} as Meta<StatusBadgeProps>;

const Template: StoryFn<StatusBadgeProps> = (args) => <StatusBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'badge',
  size: 'md',
  variant: 'fill',
  color: 'success',
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

export const AllVariants: StoryFn<StatusBadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 12 }}>
    <StatusBadge {...args} variant="accent" />
    <StatusBadge {...args} variant="fill" />
    <StatusBadge {...args} variant="outline" />
  </div>
);
AllVariants.args = {
  ...Default.args,
};

export const AllColors: StoryFn<StatusBadgeProps> = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
    {['danger', 'success', 'warning', 'zinc', 'slate', 'gray'].map((color) => (
      <StatusBadge key={color} {...args} color={color as StatusBadgeProps['color']} />
    ))}
  </div>
);
AllColors.args = {
  ...Default.args,
};

export const AllSizes: StoryFn<StatusBadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <StatusBadge {...args} size="sm" label="Small" />
    <StatusBadge {...args} size="md" label="Medium" />
    <StatusBadge {...args} size="lg" label="Large" />
  </div>
);
AllSizes.args = {
  ...Default.args,
};
