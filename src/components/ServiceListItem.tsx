import type { ReactNode } from 'react';

import { ChevronRight } from 'lucide-react';

import RatingTag from './RatingTag';
import styles from './ServiceListItem.module.css';

type ServiceListItemProps = {
  /** Icon shown inside the colored tile */
  icon: ReactNode;
  /** Background color of the icon tile */
  iconBg?: string;
  /** Service name */
  name: string;
  /** Average rating */
  rating: number;
  /** Number of reviews */
  reviewCount: number;
  /** Called when the row is tapped */
  onClick?: () => void;
};

/** A selectable service row with an icon tile, name, and rating. */
export default function ServiceListItem({
  icon,
  iconBg = 'var(--color-primary)',
  name,
  rating,
  reviewCount,
  onClick,
}: ServiceListItemProps) {
  return (
    <button type="button" className={styles.item} onClick={onClick}>
      <span className={styles.tile} style={{ backgroundColor: iconBg }}>
        {icon}
      </span>
      <span className={styles.body}>
        <span className={styles.name}>{name}</span>
        <RatingTag rating={rating} reviewCount={reviewCount} />
      </span>
      <ChevronRight className={styles.chevron} size={20} aria-hidden="true" />
    </button>
  );
}
