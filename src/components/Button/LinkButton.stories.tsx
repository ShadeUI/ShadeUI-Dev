import { Meta, StoryFn } from '@storybook/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import LinkButton, { LinkButtonProps } from './LinkButton';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';

export default {
  title: 'Components/Button/Link Button',
  component: LinkButton,
  tags: ['autodocs'],
parameters: {
    docs: {
      description: {
        component:
          'Link Button is designed for subtle navigation, featuring various styles that adapt to different contexts. It includes an icon-only version for a clean, minimal look and a version that combines icons with text for greater clarity. The design maintains a low profile, perfect for seamless linking. It is a lightweight button styled to resemble a link. Furthermore, It supports sizes, colors, loading state, icons, disabled state, and icon-only mode. Ideal for secondary or navigation-related actions.',
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
      description: 'Defines the button color scheme.',
      control: 'select',
      options: ['black', 'blue', 'danger', 'orange', 'purple', 'neutral'],
    },
    disabled: {
      description: 'Disables the button and applies a disabled style.',
      control: 'boolean',
    },
    isLoading: {
      description: 'Displays a loading spinner.',
      control: 'boolean',
    },
    loadingText: {
      description: 'Text shown next to spinner when loading.',
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
      description: 'Renders the button as icon-only.',
      control: 'boolean',
    },
    leftIcon: {
      table: { disable: true },
    },
    rightIcon: {
      table: { disable: true },
    },
  },
} as Meta<LinkButtonProps>;

const Template: StoryFn<LinkButtonProps> = (args) => <LinkButton {...args} />;

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

export const AllColors: StoryFn<LinkButtonProps> = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
    {['blue', 'danger', 'orange', 'purple','neutral'].map((color) => (
      <LinkButton key={color} {...args} color={color as LinkButtonProps['color']} />
    ))}
  </div>
);
AllColors.args = {
  ...Default.args,
};

export const AllSizes: StoryFn<LinkButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: 16 }}>
    <LinkButton {...args} size="sm" label="Small" />
    <LinkButton {...args} size="md" label="Medium" />
    <LinkButton {...args} size="lg" label="Large" />
  </div>
);
AllSizes.args = {
  ...Default.args,
};
