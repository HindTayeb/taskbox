import { ChevronDown } from 'lucide-react';

import styles from './DropdownSelector.module.css';

type DropdownSelectorProps = {
  /** Small uppercase label describing what is being selected */
  label: string;
  /** Currently selected value */
  value: string;
  /** Called when the selector is tapped (opens a picker) */
  onClick?: () => void;
};

/** Pill button that shows a labelled current selection and opens a picker. */
export default function DropdownSelector({
  label,
  value,
  onClick,
}: DropdownSelectorProps) {
  return (
    <button type="button" className={styles.selector} onClick={onClick}>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </span>
      <ChevronDown className={styles.chevron} size={18} aria-hidden="true" />
    </button>
  );
}
