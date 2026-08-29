import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Bell, CreditCard, Globe, Lock } from 'lucide-react';

import AccountListItem from './AccountListItem';

const meta = {
  title: 'Components/AccountListItem',
  component: AccountListItem,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    iconBgColor: { control: 'color', description: 'Background colour of the icon tile' },
    trailing: { control: 'text', description: 'Optional trailing value, e.g. "On"' },
    showChevron: { control: 'boolean' },
    icon: { table: { disable: true } },
    onClick: { action: 'row clicked' },
  },
  args: {
    icon: <Bell size={18} />,
    iconBgColor: '#1a73e8',
    label: 'Notifications',
    trailing: 'On',
    showChevron: true,
    onClick: fn(),
  },
} satisfies Meta<typeof AccountListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const ChevronOnly: Story = {
  args: { icon: <Lock size={18} />, iconBgColor: '#5f6368', label: 'Privacy', trailing: undefined },
};

export const SettingsList: Story = {
  render: () => (
    <div style={{ maxWidth: 380 }}>
      <AccountListItem
        icon={<Bell size={18} />}
        iconBgColor="#1a73e8"
        label="Notifications"
        trailing="On"
        onClick={fn()}
      />
      <AccountListItem
        icon={<Lock size={18} />}
        iconBgColor="#5f6368"
        label="Privacy & Security"
        onClick={fn()}
      />
      <AccountListItem
        icon={<CreditCard size={18} />}
        iconBgColor="#1e8e3e"
        label="Payment Methods"
        trailing="Visa ••42"
        onClick={fn()}
      />
      <AccountListItem
        icon={<Globe size={18} />}
        iconBgColor="#e8710a"
        label="Language"
        trailing="English"
        onClick={fn()}
      />
    </div>
  ),
};
