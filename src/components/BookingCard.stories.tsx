import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Bath, Scissors, Sparkles } from 'lucide-react';

import BookingCard from './BookingCard';

const STATUSES = ['upcoming', 'completed', 'cancelled'] as const;

const meta = {
  title: 'Components/BookingCard',
  component: BookingCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: STATUSES,
      description: 'Booking status — drives the left border colour and the pill',
      table: { type: { summary: STATUSES.join(' | ') } },
    },
    title: { control: 'text', description: 'Booking name' },
    referenceId: { control: 'text', description: 'Reference shown under the title' },
    icon: {
      control: 'text',
      description: 'Emoji or icon placeholder shown in the tile',
    },
    onCancel: { action: 'cancel clicked' },
    onReschedule: { action: 'reschedule clicked' },
  },
  args: {
    icon: '💈',
    title: 'Barber Appointment',
    status: 'upcoming',
    referenceId: 'BK-8821',
    onCancel: fn(),
    onReschedule: fn(),
  },
} satisfies Meta<typeof BookingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Completed: Story = {
  args: {
    icon: '💆',
    status: 'completed',
    title: 'Spa & Massage',
    referenceId: 'BK-8801',
    onCancel: undefined,
    onReschedule: undefined,
  },
};

export const Cancelled: Story = {
  args: {
    icon: '🚐',
    status: 'cancelled',
    title: 'Airport Shuttle',
    referenceId: 'BK-8790',
    onCancel: undefined,
    onReschedule: undefined,
  },
};

export const StatusList: Story = {
  render: () => (
    <div
      style={{
        maxWidth: 380,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <BookingCard
        icon={<Scissors size={20} />}
        title="Haircut & Style"
        status="upcoming"
        referenceId="BK-2941"
        onCancel={fn()}
        onReschedule={fn()}
      />
      <BookingCard
        icon={<Bath size={20} />}
        title="Full Groom Bath"
        status="completed"
        referenceId="BK-2810"
      />
      <BookingCard
        icon={<Sparkles size={20} />}
        title="Nail Trim"
        status="cancelled"
        referenceId="BK-2777"
      />
    </div>
  ),
};
