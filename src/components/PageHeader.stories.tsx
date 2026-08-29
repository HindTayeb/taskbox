import type { Meta, StoryObj } from '@storybook/react-vite';

import PageHeader from './PageHeader';

const meta = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['onLight', 'onDark'],
      description: 'Colour treatment — dark text vs white text over a gradient',
    },
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
  args: {
    eyebrow: 'Your membership',
    title: 'Good morning, Ada',
    subtitle: 'Here is what is happening with your account today.',
    variant: 'onLight',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const OnLight: Story = { args: { variant: 'onLight' } };

export const OnDark: Story = {
  args: { variant: 'onDark' },
  decorators: [
    (Story) => (
      <div style={{ background: '#0f2a63', padding: 24, borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const NoSubtitle: Story = { args: { subtitle: undefined } };

/** Real-world usage: header sitting on a dark blue gradient hero. */
export const OnGradientHero: Story = {
  args: { variant: 'onDark' },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div
      style={{
        background: 'linear-gradient(150deg, #14235c 0%, #1a73e8 100%)',
        padding: '48px 24px 64px',
        minHeight: 260,
      }}
    >
      <PageHeader {...args} />
    </div>
  ),
};
