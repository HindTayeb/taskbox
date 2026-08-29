import type { ReactNode } from 'react';

import styles from './StatBlock.module.css';

type StatBlockProps = {
  /** Large headline figure */
  value: ReactNode;
  /** Small muted caption below the value */
  label: string;
};

/** A single stat — big number over a small label — for a row of 2–3 in a card. */
export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className={styles.block}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
