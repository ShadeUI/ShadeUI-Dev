import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

// ——— Flat Buttons ———
export const FlatPrimary: Story = {
  args: {
    variant: 'flat',
    label: 'Flat Button',
    leftIcon: <ArrowLeft/>,
    rightIcon: <ArrowRight/>,
  },
  name: 'Solid',
};


// ——— Icon Buttons ———
export const IconOnly: Story = {
  args: {
    variant: 'flat',
    leftIcon: <ArrowRight/>,
    iconOnly: true,
  },
  name: 'Icon',
};
