import type { ReactNode } from 'react';

import styles from './Chip.module.css';

type ChipProps = {
  /** Text shown in the chip */
  label: string;
  /** Whether the filter is currently applied */
  selected?: boolean;
  /** Optional leading icon (e.g. a "+" for an add-custom chip) */
  icon?: ReactNode;
  /** Called when the chip is tapped */
  onClick?: () => void;
};

/** Pill-shaped toggle button used for filters. */
export default function Chip({
  label,
  selected = false,
  icon,
  onClick,
}: ChipProps) {
  return (
    <button
      type="button"
      className={`${styles.chip} ${
        selected ? styles.selected : styles.unselected
      }`}
      aria-pressed={selected}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
}
