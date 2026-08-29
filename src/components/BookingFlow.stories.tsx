import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import DateSelector, { type DateOption } from './DateSelector';
import SectionHeader from './SectionHeader';
import TimeSlotGrid, { type TimeSlotSection } from './TimeSlotGrid';

const dates: DateOption[] = [
  { label: 'Mon', day: 11 },
  { label: 'Tue', day: 12 },
  { label: 'Wed', day: 13, disabled: true },
  { label: 'Thu', day: 14 },
  { label: 'Fri', day: 15 },
  { label: 'Sat', day: 16 },
  { label: 'Sun', day: 17, disabled: true },
];

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
      { time: '15:30', available: true },
    ],
  },
];

const meta = {
  title: 'Screens/Booking',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** The "Select Date / Choose Time Slot" step of the booking flow. */
export const SelectDateAndTime: Story = {
  render: () => {
    const [day, setDay] = useState(12);
    const [time, setTime] = useState<string | null>('10:00');
    return (
      <div style={{ maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SectionHeader title="Select date" />
        <DateSelector dates={dates} selected={day} onSelect={setDay} />
        <SectionHeader title="Choose time slot" />
        <TimeSlotGrid sections={sections} selected={time} onSelect={setTime} />
      </div>
    );
  },
};
