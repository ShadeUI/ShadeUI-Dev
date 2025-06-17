// Badge.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import PointBadge, { PointBadgeProps } from './PointBadge';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';
import { FiCheck } from 'react-icons/fi'; // <-- Added icon import

export default {
  title: 'Components/Badge/Point Badge',
  component: PointBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'PointBadge is a small, compact badge component used to display status, labels, or counts. A Point Badge uses a small circular dot alongside text or alone to subtly indicate status, activity, or notifications without overwhelming the interface. It supports multiple sizes, variants, colors, and states like loading or disabled.',
      },
    },
  },
  argTypes: {
    ...commonArgTypes,
    size: {
      description: 'Controls the size of the badge.',
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      description: 'Controls the visual style variant.',
      control: { type: 'select' },
      options: ['accent', 'fill', 'outline'],
    },
    color: {
      description: 'Sets the badge color theme.',
      control: { type: 'select' },
      options: ['blue', 'danger', 'orange', 'purple', 'success', 'warning', 'zinc', 'slate', 'gray'],
    },
    disabled: { 
      description: 'Disables the badge interaction and applies a muted visual state.',
      control: 'boolean' 
    },
    isLoading: { 
      description: 'Displays a loading spinner inside the badge.',
      control: 'boolean' 
    },
    loadingText: { 
      description: 'Text to display while loading is active.',
      control: 'text' 
    },
    label: { 
      description: 'Text content displayed inside the badge.',
      control: 'text' 
    },
    showRightIcon: { 
      description: 'Toggles the visibility of the right icon inside the badge.',
      control: 'boolean',
    },
    rightIcon: {
      table: { disable: true },
    },
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
    rightIcon: <FiCheck />
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

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  ...Default.args,
  label: 'Verified',
  rightIcon: <FiCheck />,
  showRightIcon: false,
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
