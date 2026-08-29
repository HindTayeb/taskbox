import { ChevronRight } from 'lucide-react';

import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  /** Section title, bold on the left */
  title: string;
  /** Optional action link text on the right, e.g. "See all" */
  actionLabel?: string;
  /** Called when the action link is tapped */
  onActionClick?: () => void;
};

/** Row that labels a content section with an optional "see all" action. */
export default function SectionHeader({
  title,
  actionLabel,
  onActionClick,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {actionLabel && (
        <button type="button" className={styles.action} onClick={onActionClick}>
          {actionLabel}
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
