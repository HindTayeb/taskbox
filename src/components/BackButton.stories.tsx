import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import BackButton from './BackButton';

const meta = {
  title: 'Components/BackButton',
  component: BackButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
  args: { onClick: fn() },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InHeaderRow: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 280 }}>
      <BackButton {...args} />
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20 }}>
        Booking details
      </span>
    </div>
  ),
};
