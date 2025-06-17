import { Meta, StoryFn } from '@storybook/react';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
import StatusBadge, { StatusBadgeProps } from './StatusBadge';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';


export default {
  title: "Components/Badge/Status Badge",
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'StatusBadge is a badge component used for displaying status indicators (success, warning, danger, etc). A Status Badge combines color, icons, and labels to communicate dynamic states like success, error, warning, or processing. It helps users quickly understand system feedback and statuses. It supports multiple variants, sizes, icons, and loading states. ',
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
      description: 'Sets the status color theme of the badge.',
      control: { type: 'select' },
      options: ["danger", "success", "warning", "zinc", "slate", "gray"],
    },
    disabled: {
      description: 'Disables the badge, applying a muted, inactive state.',
      control: 'boolean',
    },
    isLoading: {
      description: 'Displays a loading spinner inside the badge.',
      control: 'boolean',
    },
    loadingText: {
      description: 'Text to show while loading is active.',
      control: 'text',
    },
    label: {
      description: 'Text displayed inside the button.',
      control: 'text',
    },
    showLeftIcon: {
      description: 'Toggles the visibility of the left icon.',
      control: 'boolean',
    },
    showRightIcon: {
      description: 'Toggles the visibility of the right icon.',
      control: 'boolean',
    },
    leftIcon: {
      table: { disable: true },
    },
    rightIcon: {
      table: { disable: true },
    },
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
