import { Plus } from 'lucide-react';

import Chip from './Chip';
import styles from './FilterChipGroup.module.css';

type FilterChipGroupProps = {
  /** Filter options */
  options: string[];
  /** Currently selected option */
  selected: string;
  /** Called with the tapped option */
  onSelect: (option: string) => void;
  /** When provided, shows a leading "+" chip that calls this instead of selecting */
  onAddCustom?: () => void;
  /** Label for the add-custom chip */
  addCustomLabel?: string;
};

/** Horizontally scrollable row of filter chips. */
export default function FilterChipGroup({
  options,
  selected,
  onSelect,
  onAddCustom,
  addCustomLabel = 'Custom',
}: FilterChipGroupProps) {
  return (
    <div className={styles.group}>
      {onAddCustom && (
        <Chip
          label={addCustomLabel}
          icon={<Plus size={14} />}
          onClick={onAddCustom}
        />
      )}
      {options.map((option) => (
        <Chip
          key={option}
          label={option}
          selected={option === selected}
          onClick={() => onSelect(option)}
        />
      ))}
    </div>
  );
}
