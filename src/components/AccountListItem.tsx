import type { ReactNode } from 'react';

import { ChevronRight } from 'lucide-react';

import styles from './AccountListItem.module.css';

type AccountListItemProps = {
  /** Icon shown inside the colored tile */
  icon: ReactNode;
  /** Background color of the icon tile */
  iconBgColor?: string;
  /** Row label */
  label: string;
  /** Optional trailing text, e.g. "On" or a version number */
  trailing?: ReactNode;
  /** Show the chevron on the far right (default true) */
  showChevron?: boolean;
  /** Called when the row is tapped */
  onClick?: () => void;
};

/** Settings row: colored icon tile, label, optional value, and chevron. */
export default function AccountListItem({
  icon,
  iconBgColor = 'var(--color-primary)',
  label,
  trailing,
  showChevron = true,
  onClick,
}: AccountListItemProps) {
  return (
    <button type="button" className={styles.item} onClick={onClick}>
      <span className={styles.tile} style={{ backgroundColor: iconBgColor }}>
        {icon}
      </span>
      <span className={styles.label}>{label}</span>
      {trailing != null && <span className={styles.trailing}>{trailing}</span>}
      {showChevron && (
        <ChevronRight className={styles.chevron} size={18} aria-hidden="true" />
      )}
    </button>
  );
}
