import type { Meta, StoryObj } from '@storybook/react-vite';

import Avatar from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Avatar diameter',
    },
    src: { control: 'text', description: 'Image URL (clear to see the placeholder)' },
    alt: { control: 'text' },
  },
  args: { src: 'https://i.pravatar.cc/150?img=47', alt: 'Ada Lovelace', size: 'md' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar src="https://i.pravatar.cc/150?img=47" alt="sm" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=47" alt="md" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=47" alt="lg" size="lg" />
    </div>
  ),
};

export const PlaceholderFallback: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar alt="no src" size="sm" />
      <Avatar alt="no src" size="md" />
      <Avatar src="https://example.invalid/broken.jpg" alt="broken src" size="lg" />
    </div>
  ),
};
