import styles from './PassBenefitStrip.module.css';

export type PassBenefit = {
  /** Benefit name, shown bold and uppercase */
  label: string;
  /** Validity text, e.g. "Valid until 31 Dec 2025" */
  validUntil: string;
  /** Gradient start color */
  colorFrom: string;
  /** Gradient end color */
  colorTo: string;
};

type PassBenefitStripProps = {
  /** Benefits to render as stacked gradient bands */
  benefits: PassBenefit[];
};

/** Stack of full-width gradient benefit bands, shown below a PassCard. */
export default function PassBenefitStrip({ benefits }: PassBenefitStripProps) {
  return (
    <div className={styles.strip}>
      {benefits.map(({ label, validUntil, colorFrom, colorTo }) => (
        <div
          key={label}
          className={styles.band}
          style={{
            backgroundImage: `linear-gradient(120deg, ${colorFrom}, ${colorTo})`,
          }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.validity}>{validUntil}</span>
        </div>
      ))}
    </div>
  );
}
