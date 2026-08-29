import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import FilterChipGroup from './FilterChipGroup';

const options = [
  'All',
  'Grooming',
  'Veterinary',
  'Training',
  'Boarding',
  'Walking',
  'Sitting',
];

const meta = {
  title: 'Components/FilterChipGroup',
  component: FilterChipGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'text', description: 'Currently selected option' },
    addCustomLabel: { control: 'text' },
    // The options array is fixed in args — swap it via story variants, not a
    // raw JSON control.
    options: { table: { disable: true } },
    onSelect: { action: 'option selected' },
    onAddCustom: { action: 'add custom clicked' },
  },
  args: { options, selected: 'All', onSelect: fn() },
} satisfies Meta<typeof FilterChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selected);
    return (
      <FilterChipGroup {...args} selected={selected} onSelect={setSelected} />
    );
  },
};

export const WithAddCustom: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selected);
    return (
      <FilterChipGroup
        {...args}
        selected={selected}
        onSelect={setSelected}
        onAddCustom={fn()}
      />
    );
  },
};
