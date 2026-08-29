import type { Meta, StoryObj } from '@storybook/react-vite';

import SummaryList from './SummaryList';

const meta = {
  title: 'Components/SummaryList',
  component: SummaryList,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    // `rows` is data-shaped — demonstrated via the named stories below rather
    // than a raw JSON control.
    rows: { table: { disable: true } },
  },
  args: {
    rows: [
      { label: 'Haircut & Style', value: '$45.00' },
      { label: 'Nail Trim', value: '$12.00' },
      { label: 'Service fee', value: '$3.50' },
      { label: 'Total', value: '$60.50', emphasis: true },
    ],
  },
} satisfies Meta<typeof SummaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const NoTotal: Story = {
  args: {
    rows: [
      { label: 'Date', value: 'Thu, 14 Nov' },
      { label: 'Time', value: '10:00 AM' },
      { label: 'Groomer', value: 'Jamie R.' },
    ],
  },
};
