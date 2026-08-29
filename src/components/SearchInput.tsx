import { Search } from 'lucide-react';

import styles from './SearchInput.module.css';

type SearchInputProps = {
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value: string;
  /** Called with the new value on every keystroke */
  onChange: (value: string) => void;
};

/** Pill-shaped search field with a leading search icon. */
export default function SearchInput({
  placeholder = 'Search',
  value,
  onChange,
}: SearchInputProps) {
  return (
    <label className={styles.wrap}>
      <Search className={styles.icon} size={18} aria-hidden="true" />
      <input
        type="search"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
