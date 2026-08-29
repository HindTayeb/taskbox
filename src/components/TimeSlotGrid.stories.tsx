import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import TimeSlotGrid, { type TimeSlotSection } from './TimeSlotGrid';

const sections: TimeSlotSection[] = [
  {
    label: 'Morning',
    slots: [
      { time: '09:00', available: true },
      { time: '09:30', available: false },
      { time: '10:00', available: true },
      { time: '10:30', available: true },
      { time: '11:00', available: false },
      { time: '11:30', available: true },
    ],
  },
  {
    label: 'Afternoon',
    slots: [
      { time: '13:00', available: true },
      { time: '13:30', available: true },
      { time: '14:00', available: false },
      { time: '14:30', available: true },
      { time: '15:00', available: true },
      { time: '15:30', available: false },
    ],
  },
];

const allBooked = sections.map((section) => ({
  ...section,
  slots: section.slots.map((slot, i) => ({ ...slot, available: i === 2 })),
}));

const meta = {
  title: 'Components/TimeSlotGrid',
  component: TimeSlotGrid,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'text',
      description: 'Currently selected time string (type any value to preview)',
    },
    // Slot data is swapped via the named stories below, not hand-edited.
    sections: { table: { disable: true } },
    onSelect: { action: 'slot selected' },
  },
  args: { sections, selected: '10:00', onSelect: fn() },
} satisfies Meta<typeof TimeSlotGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Control-driven: type a time into `selected` and the matching pill highlights. */
export const Playground: Story = {};

export const MostlyBooked: Story = {
  args: { sections: allBooked, selected: '10:00' },
};

/** Stateful: click a slot and watch the selection follow. */
export const Interactive: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | null>(args.selected);
    return (
      <TimeSlotGrid {...args} selected={selected} onSelect={setSelected} />
    );
  },
};
