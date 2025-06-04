// Badge.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import PointBadge, { PointBadgeProps } from './PointBadge';

export default {
  title: 'Components/Badge/Point Badge',
  component: PointBadge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['accent', 'fill', 'outline'],
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'danger', 'orange', 'purple', 'success', 'warning', 'zinc', 'slate', 'gray'],
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
    label: { control: 'text' },
    showRightIcon: { control: false },
    rightIcon: { control: false },
    className: { control: false },
  },
} as Meta<PointBadgeProps>;

const Template: StoryFn<PointBadgeProps> = (args) => <PointBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'md',
    variant: 'accent',
    color: 'blue',
    isLoading: false,
    disabled: false,
    label: 'Badge',
    showRightIcon: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: 'Active',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
  loadingText: 'Loading...',
};

export const AllSizes: StoryFn<PointBadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <PointBadge {...args} size="sm" label="Small" />
    <PointBadge {...args} size="md" label="Medium" />
    <PointBadge {...args} size="lg" label="Large" />
  </div>
);

AllSizes.args = {
  ...Default.args,
  label: 'Point',
};

export const AllVariants: StoryFn<PointBadgeProps> = (args) => (
  <div style={{ display: 'flex', gap: 12 }}>
    <PointBadge {...args} variant="accent" />
    <PointBadge {...args} variant="fill" />
    <PointBadge {...args} variant="outline" />
  </div>
);
AllVariants.args = {
  ...Default.args,
};

export const AllColors: StoryFn<PointBadgeProps> = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
    {['blue', 'danger', 'orange', 'purple', 'success', 'warning', 'zinc', 'slate', 'gray'].map((color) => (
      <PointBadge key={color} {...args} color={color as PointBadgeProps['color']} />
    ))}
  </div>
);
AllColors.args = {
  ...Default.args,
};