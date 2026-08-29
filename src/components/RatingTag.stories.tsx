import type { Meta, StoryObj } from '@storybook/react-vite';

import RatingTag from './RatingTag';

const meta = {
  title: 'Components/RatingTag',
  component: RatingTag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
      description: 'Average rating, shown to one decimal place',
    },
    reviewCount: {
      control: { type: 'number', min: 0 },
      description: 'Number of reviews, shown in parentheses',
    },
  },
  args: { rating: 4.5, reviewCount: 128 },
} satisfies Meta<typeof RatingTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const samples = [
  { rating: 5, reviewCount: 3 },
  { rating: 4.5, reviewCount: 128 },
  { rating: 4.2, reviewCount: 1043 },
  { rating: 3.8, reviewCount: 27 },
  { rating: 1, reviewCount: 0 },
];

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {samples.map((s) => (
        <RatingTag key={`${s.rating}-${s.reviewCount}`} {...s} />
      ))}
    </div>
  ),
};
