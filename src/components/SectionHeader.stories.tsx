import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import SectionHeader from './SectionHeader';

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    actionLabel: {
      control: 'text',
      description: 'Right-hand link text; the link is hidden when empty',
    },
    onActionClick: { action: 'action clicked' },
  },
  args: { title: 'Upcoming events', actionLabel: 'See all', onActionClick: fn() },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithoutAction: Story = { args: { actionLabel: undefined } };
