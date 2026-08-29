import type { Meta, StoryObj } from '@storybook/react-vite';

import DigitalBusinessCard from './DigitalBusinessCard';

const QR =
  'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/ada';

const meta = {
  title: 'Components/DigitalBusinessCard',
  component: DigitalBusinessCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    flippable: {
      control: 'boolean',
      description: 'Allow tapping the card to flip to a large QR code',
    },
    name: { control: 'text' },
    title: { control: 'text' },
    org: { control: 'text' },
    email: { control: 'text' },
    phone: { control: 'text' },
    website: { control: 'text' },
    location: { control: 'text' },
    avatar: { control: 'text', description: 'Profile image URL' },
    qrCodeUrl: { table: { disable: true } },
  },
  args: {
    avatar: 'https://i.pravatar.cc/150?img=47',
    name: 'Ada Lovelace',
    title: 'Principal Engineer',
    org: 'Analytical Engines Co.',
    email: 'ada@analyticalengines.co',
    phone: '+44 20 7946 0958',
    website: 'analyticalengines.co',
    location: 'London, UK',
    qrCodeUrl: QR,
    flippable: true,
  },
} satisfies Meta<typeof DigitalBusinessCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Static: Story = { args: { flippable: false } };
