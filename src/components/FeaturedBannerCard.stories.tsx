import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import FeaturedBannerCard from './FeaturedBannerCard';

const meta = {
  title: 'Components/FeaturedBannerCard',
  component: FeaturedBannerCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text', description: 'Background image URL' },
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    ctaLabel: { control: 'text' },
    onCtaClick: { action: 'cta clicked' },
  },
  args: {
    image: 'https://picsum.photos/seed/festival/800/500',
    eyebrow: 'Limited offer',
    title: 'Summer Music Festival',
    ctaLabel: 'Get pass',
    onCtaClick: fn(),
  },
} satisfies Meta<typeof FeaturedBannerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const LongTitle: Story = {
  args: {
    image: 'https://picsum.photos/seed/citylights/800/500',
    eyebrow: 'New this week',
    title: 'Rooftop Cinema Nights Under the City Lights',
  },
};
