import { Bell } from 'lucide-react';

import styles from './NotificationBell.module.css';

type NotificationBellProps = {
  /** Show the red dot indicating unread notifications */
  hasNotification?: boolean;
  /** Called when the bell is tapped */
  onClick?: () => void;
};

/** Bell icon button with an optional unread-notification dot. */
export default function NotificationBell({
  hasNotification = false,
  onClick,
}: NotificationBellProps) {
  return (
    <button
      type="button"
      className={styles.button}
      aria-label={
        hasNotification ? 'Notifications, unread' : 'Notifications'
      }
      onClick={onClick}
    >
      <Bell size={22} aria-hidden="true" />
      {hasNotification && <span className={styles.dot} />}
    </button>
  );
}
