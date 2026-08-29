import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import DateSelector, { type DateOption } from './DateSelector';

const week: DateOption[] = [
  { label: 'Mon', day: 11 },
  { label: 'Tue', day: 12 },
  { label: 'Wed', day: 13, disabled: true },
  { label: 'Thu', day: 14 },
  { label: 'Fri', day: 15 },
  { label: 'Sat', day: 16, disabled: true },
  { label: 'Sun', day: 17 },
  { label: 'Mon', day: 18 },
];

const meta = {
  title: 'Components/DateSelector',
  component: DateSelector,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'number',
      description: 'The `day` of the currently selected date',
    },
    // The date array is swapped via the named stories below rather than
    // edited as a raw JSON control.
    dates: { table: { disable: true } },
    onSelect: { action: 'date selected' },
  },
  args: { dates: week, selected: 12, onSelect: fn() },
} satisfies Meta<typeof DateSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Control-driven: change `selected` in the panel to move the highlight. */
export const Playground: Story = {};

export const WithDisabledDates: Story = {
  args: { dates: week, selected: 14 },
};

export const AllAvailable: Story = {
  args: {
    selected: 12,
    dates: week.map(({ label, day }) => ({ label, day })),
  },
};

/** Stateful: click a pill and watch the selection follow. */
export const Interactive: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selected);
    return <DateSelector {...args} selected={selected} onSelect={setSelected} />;
  },
};
