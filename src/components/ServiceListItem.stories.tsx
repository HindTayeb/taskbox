import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Bath, Scissors, Sparkles, Wind } from 'lucide-react';

import SectionHeader from './SectionHeader';
import ServiceListItem from './ServiceListItem';

const meta = {
  title: 'Components/ServiceListItem',
  component: ServiceListItem,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    iconBg: { control: 'color', description: 'Background colour of the icon tile' },
    rating: { control: { type: 'range', min: 0, max: 5, step: 0.1 } },
    reviewCount: { control: { type: 'number', min: 0 } },
    icon: { table: { disable: true } },
    onClick: { action: 'row clicked' },
  },
  args: {
    icon: <Scissors size={20} />,
    iconBg: '#1a73e8',
    name: 'Haircut & Style',
    rating: 4.8,
    reviewCount: 214,
    onClick: fn(),
  },
} satisfies Meta<typeof ServiceListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const services = [
  {
    icon: <Scissors size={20} />,
    iconBg: '#1a73e8',
    name: 'Haircut & Style',
    rating: 4.8,
    reviewCount: 214,
  },
  {
    icon: <Bath size={20} />,
    iconBg: '#12b5cb',
    name: 'Full Groom Bath',
    rating: 4.6,
    reviewCount: 98,
  },
  {
    icon: <Wind size={20} />,
    iconBg: '#8a3ffc',
    name: 'Blow Dry & Finish',
    rating: 4.9,
    reviewCount: 41,
  },
  {
    icon: <Sparkles size={20} />,
    iconBg: '#e8710a',
    name: 'Nail Trim',
    rating: 4.4,
    reviewCount: 63,
  },
];

export const GroupedList: Story = {
  render: () => (
    <div style={{ maxWidth: 380 }}>
      <SectionHeader title="Grooming" actionLabel="See all" onActionClick={fn()} />
      <div>
        {services.map((service) => (
          <ServiceListItem key={service.name} {...service} onClick={fn()} />
        ))}
      </div>
    </div>
  ),
};
