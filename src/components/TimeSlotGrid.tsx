import styles from './TimeSlotGrid.module.css';

export type TimeSlot = {
  /** Slot time, e.g. "09:00" — also used as the slot's identity */
  time: string;
  /** Whether the slot can be booked */
  available: boolean;
};

export type TimeSlotSection = {
  /** Group heading */
  label: 'Morning' | 'Afternoon';
  /** Slots in this group */
  slots: TimeSlot[];
};

type TimeSlotGridProps = {
  /** Grouped time slots */
  sections: TimeSlotSection[];
  /** `time` of the selected slot */
  selected: string | null;
  /** Called with the `time` of the tapped slot */
  onSelect: (time: string) => void;
};

/** Grouped grid of time-slot pills; unavailable slots are struck through. */
export default function TimeSlotGrid({
  sections,
  selected,
  onSelect,
}: TimeSlotGridProps) {
  return (
    <div className={styles.grid}>
      {sections.map((section) => (
        <div key={section.label} className={styles.section}>
          <p className={styles.sectionLabel}>{section.label}</p>
          <div className={styles.slots}>
            {section.slots.map(({ time, available }) => {
              const isSelected = available && time === selected;
              return (
                <button
                  key={time}
                  type="button"
                  className={`${styles.slot} ${
                    isSelected ? styles.selected : ''
                  } ${available ? '' : styles.unavailable}`}
                  disabled={!available}
                  aria-pressed={isSelected}
                  onClick={() => onSelect(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
