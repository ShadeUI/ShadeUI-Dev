import { Meta, StoryObj } from '@storybook/react';
import { DefaultInput } from './DefaultInput';
import { FiMail } from 'react-icons/fi';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';


const meta: Meta<typeof DefaultInput> = {
    title: 'Components/Input/Default input',
    component: DefaultInput,
    tags: ['autodocs'],
    parameters: {
        docs: {
          description: {
            component:
              'Shade UI input fields offer a clean, consistent design, enhancing usability and accessibility. They streamline data entry with clear labels, responsive interactions, and flexible styling, allowing developers and designers to implement forms that improve user experience and maintain visual harmony across interfaces. This is a form input component used for capturing user data. It supports multiple input types, optional header labels, icons, hint messages, and required field validation.',
          },
        },
      },
      argTypes: {
        ...commonArgTypes,
        type: {
          description: 'Specifies the type of input element.',
          control: { type: 'select' },
          options: ['text', 'email', 'password', 'number'],
        },
        headerLabel: {
          description: 'Displays a label above the input field.',
          control: 'text',
        },
        placeholder: {
          description: 'Placeholder text displayed inside the input field.',
          control: 'text',
        },
        showHeaderLabel: {
          description: 'Toggles the visibility of the header label.',
          control: 'boolean',
        },
        showLeadingIcon: {
          description: 'Displays a leading icon inside the input field.',
          control: 'boolean',
        },
        leadingIcon: {
          description: 'Custom icon to display as the leading icon.',
          table: { disable: true },  // hidden from docs table
        },
        showHint: {
          description: 'Toggles the display of the hint text below the input.',
          control: 'boolean',
        },
        hintLabel: {
          description: 'Text content of the hint message.',
          control: 'text',
        },
        hintIcon: {
          description: 'Optional icon displayed next to the hint text.',
          table: { disable: true },  // hidden from docs table
        },
        required: {
          description: 'Marks the field as required for validation.',
          control: 'boolean',
        },
      },
};

export default meta;

type Story = StoryObj<typeof DefaultInput>;

export const Basic: Story = {
  args: {
    headerLabel: 'Email',
    showHeaderLabel: true,
    placeholder: 'Enter your email',
    leadingIcon: <FiMail />,
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
