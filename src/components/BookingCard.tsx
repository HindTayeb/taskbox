import type { ReactNode } from 'react';

import StatusPill from './StatusPill';
import styles from './BookingCard.module.css';

type BookingStatus = 'upcoming' | 'completed' | 'cancelled';

type BookingCardProps = {
  /** Icon shown in the tile on the left */
  icon: ReactNode;
  /** Booking name */
  title: string;
  /** Booking status; controls the left border and the pill */
  status: BookingStatus;
  /** Booking reference shown under the title */
  referenceId: string;
  /** Called when Cancel is tapped; button is hidden when omitted */
  onCancel?: () => void;
  /** Called when Reschedule is tapped; button is hidden when omitted */
  onReschedule?: () => void;
};

const STATUS_LABEL: Record<BookingStatus, string> = {
  upcoming: 'Upcoming',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

/** Summary card for a single booking with status-aware styling and actions. */
export default function BookingCard({
  icon,
  title,
  status,
  referenceId,
  onCancel,
  onReschedule,
}: BookingCardProps) {
  const showActions = Boolean(onCancel || onReschedule);

  return (
    <div className={`${styles.card} ${styles[status]}`}>
      <div className={styles.top}>
        <span className={styles.tile}>{icon}</span>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <span className={styles.reference}>Ref {referenceId}</span>
        </div>
        <StatusPill variant={status} label={STATUS_LABEL[status]} />
      </div>

      {showActions && (
        <div className={styles.actions}>
          {onCancel && (
            <button
              type="button"
              className={`${styles.button} ${styles.secondary}`}
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
          {onReschedule && (
            <button
              type="button"
              className={`${styles.button} ${styles.primary}`}
              onClick={onReschedule}
            >
              Reschedule
            </button>
          )}
        </div>
      )}
    </div>
  );
}
