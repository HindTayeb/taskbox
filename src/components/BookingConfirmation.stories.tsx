import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import PrimaryButton from './PrimaryButton';
import SectionHeader from './SectionHeader';
import SummaryList from './SummaryList';
import TextareaWithTags from './TextareaWithTags';

const meta = {
  title: 'Screens/Booking Confirmation',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Final confirmation panel: notes, price summary, and the confirm action. */
export const ConfirmationPanel: Story = {
  render: () => {
    const [note, setNote] = useState('');
    return (
      <div
        style={{
          maxWidth: 380,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <SectionHeader title="Add a note" />
        <TextareaWithTags
          placeholder="Anything the groomer should know?"
          value={note}
          onChange={setNote}
          suggestedTags={[
            'Nervous around dryers',
            'Sensitive skin',
            'No nail trim',
          ]}
        />

        <SectionHeader title="Summary" />
        <SummaryList
          rows={[
            { label: 'Haircut & Style', value: '$45.00' },
            { label: 'Nail Trim', value: '$12.00' },
            { label: 'Service fee', value: '$3.50' },
            { label: 'Total', value: '$60.50', emphasis: true },
          ]}
        />

        <PrimaryButton
          label="Confirm booking"
          fullWidth
          helperText="No charge until your appointment"
        />
      </div>
    );
  },
};
