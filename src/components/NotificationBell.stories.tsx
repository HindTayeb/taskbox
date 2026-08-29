import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import NotificationBell from './NotificationBell';

const meta = {
  title: 'Components/NotificationBell',
  component: NotificationBell,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    hasNotification: {
      control: 'boolean',
      description: 'Show the red unread dot',
    },
    onClick: { action: 'clicked' },
  },
  args: { hasNotification: false, onClick: fn() },
} satisfies Meta<typeof NotificationBell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <NotificationBell {...args} hasNotification={false} />
      <NotificationBell {...args} hasNotification />
    </div>
  ),
};

export const Idle: Story = { args: { hasNotification: false } };
export const Unread: Story = { args: { hasNotification: true } };
