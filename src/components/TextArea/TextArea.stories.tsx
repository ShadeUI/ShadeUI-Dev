import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextArea} from './TextArea';
import { Info } from 'lucide-react';
import { commonArgTypes } from '../../storybook/argTypes/commonArgTypes';


const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea/Text area',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Shade UI text areas provide a spacious, accessible design ideal for capturing longer inputs. With responsive resizing, clear labels, and consistent styling, they ensure readability and ease of use, allowing designers to create seamless, user-friendly forms that align with the overall interface aesthetic. This is a multi-line input component that allows users to input larger blocks of text. It supports labels, hints, character limits, warning thresholds, and auto-resizing behavior.',
      },
    },
  },
  argTypes: {
    ...commonArgTypes,
    placeholder: {
      description: 'Placeholder text displayed inside the text area.',
      control: 'text',
    },
    value: {
      description: 'The current value of the text area.',
      control: 'text',
    },
    headerLabel: {
      description: 'Label text displayed above the text area.',
      control: 'text',
    },
    showHeaderLabel: {
      description: 'Toggles visibility of the header label.',
      control: 'boolean',
    },
    showHint: {
      description: 'Toggles visibility of the hint message below the text area.',
      control: 'boolean',
    },
    hintLabel: {
      description: 'The content of the hint message.',
      control: 'text',
    },
    hintIcon: {
      description: 'Icon displayed alongside the hint message.',
      table: { disable: true },
    },
    characterLimit: {
      description: 'Maximum number of characters allowed in the text area.',
      control: 'number',
    },
    warningThreshold: {
      description:
        'Percentage of character limit after which a warning state is triggered (e.g. 0.8 = 80%).',
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Write something...',
    showHeaderLabel: true,
    headerLabel: 'Your message',
  },
};

export const WithLabelAndHint: Story = {
  args: {
    showHint: true,
    hintLabel: 'You can enter up to 200 characters.',
    hintIcon: <Info size={14} />,
    characterLimit: 200,
  },
};

export const NearLimitWarning: Story = {
  render: () => {
    const [text, setText] = useState('This is close to the limit...');
    return (
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        characterLimit={40}
        warningThreshold={0.8}
        showHeaderLabel
        headerLabel="Warning example"
        showHint
        hintLabel="Stay under 40 characters"
      />
    );
  },
};

export const AutoResizing: Story = {
  args: {
    placeholder: 'Type multiple lines and see it resize...',
  },
};
