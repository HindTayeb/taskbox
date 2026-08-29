import type { Meta, StoryObj } from '@storybook/react-vite';

import PassBenefitStrip from './PassBenefitStrip';
import PassCard from './PassCard';

const QR = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MEMBER-4481-22B';

const meta = {
  title: 'Screens/Wallet',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Full wallet section: the pass card with its benefit bands stacked below. */
export const WalletSection: Story = {
  render: () => (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0f1730 0%, #1c2540 100%)',
        padding: '32px 16px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <PassCard
        orgName="Riverside Club"
        tier="gold"
        userName="Ada Lovelace"
        userId="4481 22B"
        features={[
          'Priority booking',
          'Guest passes ×4 / month',
          'Free locker & towel service',
          'Member events access',
        ]}
        qrCodeUrl={QR}
      />
      <PassBenefitStrip
        benefits={[
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
        ]}
      />
    </div>
  ),
};
