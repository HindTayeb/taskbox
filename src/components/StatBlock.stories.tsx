import type { CSSProperties } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import StatBlock from './StatBlock';

const meta = {
  title: 'Components/StatBlock',
  component: StatBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Large headline figure' },
    label: { control: 'text', description: 'Small caption below the value' },
  },
  args: { value: '128', label: 'Reviews' },
} satisfies Meta<typeof StatBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const card: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  gap: 12,
  padding: 16,
  borderRadius: 12,
  border: '1px solid var(--color-border)',
  background: 'var(--color-bg)',
  width: 320,
};

export const RowInCard: Story = {
  render: () => (
    <div style={card}>
      <StatBlock value="4.8" label="Rating" />
      <StatBlock value="128" label="Reviews" />
      <StatBlock value="6 yrs" label="Experience" />
    </div>
  ),
};
