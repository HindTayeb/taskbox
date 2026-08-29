import styles from './StatusPill.module.css';

export type StatusVariant =
  | 'upcoming'
  | 'completed'
  | 'cancelled'
  | 'gold'
  | 'available'
  | 'active';

type StatusPillProps = {
  /** Text shown inside the pill */
  label: string;
  /** Status this pill represents; controls the colour */
  variant: StatusVariant;
};

/** Colored rounded pill that communicates a status at a glance. */
export default function StatusPill({ label, variant }: StatusPillProps) {
  return <span className={`${styles.pill} ${styles[variant]}`}>{label}</span>;
}
