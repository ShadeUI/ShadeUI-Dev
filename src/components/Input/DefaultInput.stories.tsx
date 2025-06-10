import { Meta, StoryObj } from '@storybook/react';
import { DefaultInput } from './DefaultInput';
import { FiMail } from 'react-icons/fi';

const meta: Meta<typeof DefaultInput> = {
    title: 'Components/Input/Default input',
    component: DefaultInput,
    tags: ['autodocs'],
    argTypes: {
        type: {
        control: { type: 'select' },
        options: ['text', 'email', 'password', 'number'],
        },
        showHeaderLabel: { control: 'boolean' },
        showLeadingIcon: { control: 'boolean' },
        showHint: { control: 'boolean' },
        required: { control: 'boolean' },
        hintIcon: { table: { disable: true } }, 
        leadingIcon: { table: { disable: true } }, 
    },
};

export default meta;

type Story = StoryObj<typeof DefaultInput>;

export const Basic: Story = {
  args: {
    headerLabel: 'Email',
    showHeaderLabel: true,
    placeholder: 'Enter your email',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    headerLabel: 'Email',
    showHeaderLabel: true,
    placeholder: 'Enter your email',
    showLeadingIcon: true,
    leadingIcon: <FiMail />,
  },
};

export const WithHint: Story = {
  args: {
    headerLabel: 'Username',
    showHeaderLabel: true,
    placeholder: 'Choose a username',
    showHint: true,
    hintLabel: 'Must be at least 6 characters',
  },
};

export const RequiredField: Story = {
  args: {
    headerLabel: 'Username',
    showHeaderLabel: true,
    placeholder: 'Required field',
    required: true,
  },
};
