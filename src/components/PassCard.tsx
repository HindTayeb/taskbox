import { Home } from 'lucide-react';

import styles from './PassCard.module.css';

type PassTier = 'gold' | 'silver' | 'standard';

type PassCardProps = {
  /** Issuing organization, shown top-left */
  orgName: string;
  /** Membership tier; controls the badge and accent color */
  tier: PassTier;
  /** Cardholder name */
  userName: string;
  /** Cardholder membership ID */
  userId: string;
  /** Benefits included with the pass */
  features: string[];
  /** URL of the QR code image */
  qrCodeUrl: string;
};

/** Digital ID / membership card with tier styling and a QR code. */
export default function PassCard({
  orgName,
  tier,
  userName,
  userId,
  features,
  qrCodeUrl,
}: PassCardProps) {
  return (
    <div className={`${styles.card} ${styles[tier]}`}>
      <div className={styles.header}>
        <span className={styles.org}>
          <Home size={15} aria-hidden="true" />
          {orgName}
        </span>
        <span className={styles.tier}>{tier}</span>
      </div>

      <div className={styles.identity}>
        <p className={styles.name}>{userName}</p>
        <span className={styles.userId}>{userId}</span>
      </div>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <span className={styles.dot} />
            {feature}
          </li>
        ))}
      </ul>

      <div className={styles.qr}>
        <img src={qrCodeUrl} alt={`QR code for ${userName}`} />
      </div>
    </div>
  );
}
