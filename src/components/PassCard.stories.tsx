import type { Meta, StoryObj } from '@storybook/react-vite';

import PassCard from './PassCard';

const QR =
  'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MEMBER-4481-22B';

const TIERS = ['gold', 'silver', 'standard'] as const;

const meta = {
  title: 'Components/PassCard',
  component: PassCard,
  tags: ['autodocs'],
  argTypes: {
    tier: {
      control: 'select',
      options: TIERS,
      description: 'Membership tier — sets the badge and accent colour',
      table: { type: { summary: TIERS.join(' | ') } },
    },
    orgName: { control: 'text', description: 'Issuing organization' },
    userName: { control: 'text', description: 'Cardholder name' },
    userId: { control: 'text', description: 'Cardholder membership ID' },
    // `features` (string[]) and `qrCodeUrl` are intentionally not exposed as
    // controls — a raw JSON array control is unusable. They are set via fixed
    // args here and swapped in the dedicated tier stories below.
    features: { table: { disable: true } },
    qrCodeUrl: { table: { disable: true } },
  },
  args: {
    orgName: 'Harbour District',
    tier: 'gold',
    userName: 'Sarah Mitchell',
    userId: '#HC-2847-F',
    features: ['All facilities access', 'Pool · Gym · Courts', 'Member events access'],
    qrCodeUrl: QR,
  },
} satisfies Meta<typeof PassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const GoldTier: Story = {
  args: {
    tier: 'gold',
    features: [
      'Priority booking',
      'Guest passes ×4 / month',
      'Free locker & towel service',
      'Member events access',
    ],
  },
};

export const SilverTier: Story = {
  args: { tier: 'silver', features: ['Facilities access', 'Weekday only'] },
};

export const StandardTier: Story = {
  args: { tier: 'standard', features: ['Gym access', 'Off-peak hours'] },
};
