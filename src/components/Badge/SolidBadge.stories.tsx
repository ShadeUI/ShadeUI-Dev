
import { Meta, StoryFn } from '@storybook/react';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
import SolidBadge, { SolidBadgeProps } from './SolidBadge';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';

export default {
  title: "Components/Badge/Solid Badge",
  component: SolidBadge,
  tags: ['autodocs'],
 parameters: {
    docs: {
      description: {
        component: 'SolidBadge is a compact badge component used for highlighting status or metadata with optional icons, loading states, and multiple color/size variants. A Solid Badge displays bold, filled colors to highlight important statuses, labels, or counts. It’s ideal for drawing attention to critical UI elements.',
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
      description: 'Determines the visual style variant.',
      control: { type: 'select' },
      options: ["accent", "fill", "outline"],
    },
    color: {
      description: 'Sets the color scheme of the badge.',
      control: { type: 'select' },
      options: ["blue", "danger", "orange", "purple", "success", "warning", "zinc", "slate", "gray"],
    },
    disabled: {
      description: 'Disables the badge, making it non-interactive and muted.',
      control: 'boolean',
    },
    isLoading: {
      description: 'Displays a loading spinner inside the badge.',
      control: 'boolean',
    },
    loadingText: {
      description: 'Text to display while loading is active.',
      control: 'text',
    },
    label: {
      description: 'Main text content inside the badge.',
      control: 'text',
    },
    showLeftIcon: {
      description: 'Whether to display the left icon.',
      control: 'boolean',
    },
    showRightIcon: {
      description: 'Whether to display the right icon.',
      control: 'boolean',
    },
    leftIcon: {
      table: { disable: true },
    },
    rightIcon: {
      table: { disable: true },
    },
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
  rightIcon: <FiArrowRight />,
  leftIcon: <FiArrowLeft />
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
