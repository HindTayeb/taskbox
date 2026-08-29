import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import TextareaWithTags from './TextareaWithTags';

const meta = {
  title: 'Components/TextareaWithTags',
  component: TextareaWithTags,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text', description: 'Current textarea value' },
    // Tag list is fixed in args — swap via a story variant, not a JSON control.
    suggestedTags: { table: { disable: true } },
    onChange: { action: 'changed' },
    onTagClick: { action: 'tag clicked' },
  },
  args: {
    placeholder: 'Anything the groomer should know?',
    value: '',
    onChange: fn(),
    suggestedTags: ['Nervous around dryers', 'Sensitive skin', 'No nail trim', 'Matted coat'],
  },
} satisfies Meta<typeof TextareaWithTags>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Stateful: type, or tap a tag to append it to the text. */
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <TextareaWithTags {...args} value={value} onChange={setValue} />;
  },
};

export const Prefilled: Story = {
  args: { value: 'Please use the hypoallergenic shampoo.' },
};
