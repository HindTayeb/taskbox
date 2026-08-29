import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import DropdownSelector from './DropdownSelector';

const meta = {
  title: 'Components/DropdownSelector',
  component: DropdownSelector,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Small uppercase label' },
    value: { control: 'text', description: 'Current selection (bold)' },
    onClick: { action: 'opened' },
  },
  args: { label: 'Community', value: 'Harbour District', onClick: fn() },
} satisfies Meta<typeof DropdownSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Row: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <DropdownSelector {...args} label="Community" value="Harbour District" />
      <DropdownSelector {...args} label="Category" value="All services" />
    </div>
  ),
};
