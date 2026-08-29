import type { Meta, StoryObj } from '@storybook/react-vite';

import PassBenefitStrip from './PassBenefitStrip';

const meta = {
  title: 'Components/PassBenefitStrip',
  component: PassBenefitStrip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // `benefits` is data-shaped (label + colours per band) — shown via named
    // stories rather than a raw JSON control.
    benefits: { table: { disable: true } },
  },
  args: {
    benefits: [
      {
        label: 'Spa & Wellness',
        validUntil: 'Valid until 31 Dec 2025',
        colorFrom: '#6d28d9',
        colorTo: '#a855f7',
      },
      {
        label: 'Dining Credit',
        validUntil: '$40 / month · renews monthly',
        colorFrom: '#b45309',
        colorTo: '#f59e0b',
      },
      {
        label: 'Partner Gyms',
        validUntil: 'Valid until 30 Jun 2025',
        colorFrom: '#065f46',
        colorTo: '#10b981',
      },
    ],
  },
} satisfies Meta<typeof PassBenefitStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
