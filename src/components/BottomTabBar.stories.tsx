import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import BottomTabBar from './BottomTabBar';

const meta = {
  title: 'Components/BottomTabBar',
  component: BottomTabBar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['home', 'services', 'pass', 'bookings', 'profile'],
      description: 'id of the highlighted tab',
    },
    onTabChange: { action: 'tab changed' },
  },
  args: { activeTab: 'home', onTabChange: fn() },
} satisfies Meta<typeof BottomTabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { activeTab: 'home' } };
export const Bookings: Story = { args: { activeTab: 'bookings' } };

export const Interactive: Story = {
  render: (args) => {
    const [tab, setTab] = useState(args.activeTab);
    return <BottomTabBar {...args} activeTab={tab} onTabChange={setTab} />;
  },
};
