import { useState } from 'react';

import './index.css';

import Avatar from './components/Avatar';
import Chip from './components/Chip';
import RatingTag from './components/RatingTag';
import StatusPill from './components/StatusPill';

const filters = ['All', 'Nearby', 'Top rated', 'Open now'];

/** Small demo screen — explore the components in Storybook. */
export default function App() {
  const [active, setActive] = useState('All');

  return (
    <div style={{ maxWidth: 420, margin: '0 auto', padding: 16, display: 'grid', gap: 20 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <StatusPill variant="upcoming" label="Upcoming" />
        <StatusPill variant="completed" label="Completed" />
        <StatusPill variant="cancelled" label="Cancelled" />
        <StatusPill variant="gold" label="Gold" />
        <StatusPill variant="available" label="Available" />
        <StatusPill variant="active" label="Active" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar src="https://i.pravatar.cc/150?img=47" alt="Ada Lovelace" size="lg" />
        <RatingTag rating={4.5} reviewCount={128} />
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {filters.map((label) => (
          <Chip
            key={label}
            label={label}
            selected={label === active}
            onClick={() => setActive(label)}
          />
        ))}
      </div>
    </div>
  );
}
