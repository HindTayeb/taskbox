import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import PrimaryButton from './PrimaryButton';

const meta = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button text' },
    helperText: {
      control: 'text',
      description: 'Optional muted line shown below the button',
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean', description: 'Stretch to fill the container' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Confirm booking',
    disabled: false,
    fullWidth: false,
    helperText: '',
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FullWidthWithHelper: Story = {
  args: { fullWidth: true, helperText: 'No charge until your appointment' },
};

export const Disabled: Story = { args: { disabled: true } };
