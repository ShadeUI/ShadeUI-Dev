import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea';
import { Info } from 'lucide-react';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea/Text area',
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Write something...',
  },
};

export const WithLabelAndHint: Story = {
  args: {
    headerLabel: 'Your message',
    showHeaderLabel: true,
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
