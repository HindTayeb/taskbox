import type { Meta, StoryObj } from '@storybook/react-vite';

import StatusPill, { type StatusVariant } from './StatusPill';

const VARIANTS: StatusVariant[] = [
  'upcoming',
  'completed',
  'cancelled',
  'gold',
  'available',
  'active',
];

const meta = {
  title: 'Components/StatusPill',
  component: StatusPill,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
      description: 'Visual style mapped to status meaning',
      table: { type: { summary: VARIANTS.join(' | ') } },
    },
    label: {
      control: 'text',
      description: 'Text shown inside the pill',
    },
  },
  args: { label: 'Upcoming', variant: 'upcoming' },
} satisfies Meta<typeof StatusPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {VARIANTS.map((variant) => (
        <StatusPill key={variant} variant={variant} label={variant} />
      ))}
    </div>
  ),
};
