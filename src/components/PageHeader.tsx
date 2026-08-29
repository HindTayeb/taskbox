import styles from './PageHeader.module.css';

type PageHeaderProps = {
  /** Small uppercase overline shown above the title */
  eyebrow: string;
  /** Main heading, rendered in a serif face */
  title: string;
  /** Optional supporting line below the title */
  subtitle?: string;
  /** Color treatment: `onLight` for pale backgrounds, `onDark` for gradients */
  variant?: 'onLight' | 'onDark';
};

/** Screen heading with an eyebrow, serif title, and optional subtitle. */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  variant = 'onLight',
}: PageHeaderProps) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
