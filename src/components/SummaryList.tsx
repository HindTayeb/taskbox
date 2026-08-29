import styles from './SummaryList.module.css';

export type SummaryRow = {
  /** Left-hand label */
  label: string;
  /** Right-hand value */
  value: string;
  /** Render bold/larger with a divider above, e.g. a total */
  emphasis?: boolean;
};

type SummaryListProps = {
  /** Label/value pairs; mark the total row with `emphasis` */
  rows: SummaryRow[];
};

/** Label/value pairs in a light panel, with an optional emphasised total. */
export default function SummaryList({ rows }: SummaryListProps) {
  return (
    <div className={styles.panel}>
      {rows.map(({ label, value, emphasis }) => (
        <div
          key={label}
          className={`${styles.row} ${emphasis ? styles.emphasis : ''}`}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </div>
      ))}
    </div>
  );
}
