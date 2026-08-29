import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import Chip from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    selected: { control: 'boolean', description: 'Filled/active state' },
    icon: { table: { disable: true } },
    onClick: { action: 'clicked' },
  },
  args: { label: 'Filter', selected: false, onClick: fn() },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Chip label="Unselected" selected={false} />
      <Chip label="Selected" selected />
    </div>
  ),
};

const filters = ['All', 'Nearby', 'Top rated', 'Open now', 'Free'];

export const FilterRow: Story = {
  render: () => {
    const [active, setActive] = useState('All');
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {filters.map((label) => (
          <Chip
            key={label}
            label={label}
            selected={label === active}
            onClick={() => setActive(label)}
          />
        ))}
      </div>
    );
  },
};
