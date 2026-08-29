import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import SearchInput from './SearchInput';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text', description: 'Current input value' },
    onChange: { action: 'changed' },
  },
  args: { placeholder: 'Search services', value: '', onChange: fn() },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithValue: Story = { args: { value: 'Haircut' } };

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <SearchInput {...args} value={value} onChange={setValue} />;
  },
};
