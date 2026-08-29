import type { Meta, StoryObj } from '@storybook/react-vite';

import EventCard from './EventCard';

const meta = {
  title: 'Components/EventCard',
  component: EventCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text', description: 'Event image URL' },
    badge: { control: 'text', description: 'Status pinned to the top-right' },
    title: { control: 'text' },
    location: { control: 'text' },
    date: { control: 'text' },
  },
  args: {
    image: 'https://picsum.photos/seed/concert/320/200',
    badge: '4d 2h left',
    title: 'Indie Live Sessions',
    location: 'The Warehouse, Berlin',
    date: 'Sat, 12 Oct',
  },
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const events = [
  {
    image: 'https://picsum.photos/seed/concert/320/200',
    badge: '4d 2h left',
    title: 'Indie Live Sessions',
    location: 'The Warehouse, Berlin',
    date: 'Sat, 12 Oct',
  },
  {
    image: 'https://picsum.photos/seed/artfair/320/200',
    badge: 'Today',
    title: 'Contemporary Art Fair 2025',
    location: 'Design District',
    date: 'Sun, 13 Oct',
  },
  {
    image: 'https://picsum.photos/seed/foodmarket/320/200',
    badge: '1w left',
    title: 'Street Food Weekend Market',
    location: 'Riverside Park',
    date: 'Fri, 18 Oct',
  },
];

export const HorizontalScrollRow: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 12,
        overflowX: 'auto',
        padding: '4px 0 12px',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {events.map((event) => (
        <EventCard key={event.title} {...event} />
      ))}
    </div>
  ),
};
