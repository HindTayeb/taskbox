import styles from './DateSelector.module.css';

export type DateOption = {
  /** Day-of-week abbreviation, e.g. "Mon" */
  label: string;
  /** Date number, e.g. 12 — also used as the option's identity */
  day: number;
  /** Whether the date is unavailable */
  disabled?: boolean;
};

type DateSelectorProps = {
  /** Dates to show */
  dates: DateOption[];
  /** `day` of the selected date */
  selected: number;
  /** Called with the `day` of the tapped date */
  onSelect: (day: number) => void;
};

/** Horizontally scrollable row of date pills. */
export default function DateSelector({
  dates,
  selected,
  onSelect,
}: DateSelectorProps) {
  return (
    <div className={styles.row}>
      {dates.map(({ label, day, disabled }) => {
        const isSelected = !disabled && day === selected;
        return (
          <button
            key={day}
            type="button"
            className={`${styles.pill} ${isSelected ? styles.selected : ''} ${
              disabled ? styles.disabled : ''
            }`}
            disabled={disabled}
            aria-pressed={isSelected}
            onClick={() => onSelect(day)}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.day}>{day}</span>
          </button>
        );
      })}
    </div>
  );
}
