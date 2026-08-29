import { MapPin } from 'lucide-react';

import styles from './EventCard.module.css';

type EventCardProps = {
  /** Event image URL */
  image: string;
  /** Short status pinned to the top-right of the image, e.g. "4d 2h left" */
  badge: string;
  /** Event name */
  title: string;
  /** Venue or city, shown next to a pin icon */
  location: string;
  /** Human-readable date, e.g. "Sat, 12 Oct" */
  date: string;
};

/** Compact event card sized for a horizontally scrolling row. */
export default function EventCard({
  image,
  badge,
  title,
  location,
  date,
}: EventCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img className={styles.image} src={image} alt="" />
        <span className={styles.badge}>{badge}</span>
      </div>
      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.meta}>
          <MapPin size={12} aria-hidden="true" />
          <span className={styles.metaText}>{location}</span>
        </span>
      </div>
    </article>
  );
}
