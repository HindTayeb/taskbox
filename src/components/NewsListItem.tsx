import styles from './NewsListItem.module.css';

type NewsListItemProps = {
  /** Thumbnail image URL, shown on the left */
  thumbnail: string;
  /** Section label, rendered uppercase in colour */
  category: string;
  /** Optional colour for the category label (defaults to the primary blue) */
  categoryColor?: string;
  /** Headline */
  title: string;
  /** Estimated reading time, e.g. "4 min read" */
  readTime: string;
};

/** Horizontal news row: thumbnail on the left, text on the right. */
export default function NewsListItem({
  thumbnail,
  category,
  categoryColor,
  title,
  readTime,
}: NewsListItemProps) {
  return (
    <article className={styles.item}>
      <img className={styles.thumbnail} src={thumbnail} alt="" />
      <div className={styles.text}>
        <span
          className={styles.category}
          style={categoryColor ? { color: categoryColor } : undefined}
        >
          {category}
        </span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.readTime}>{readTime}</span>
      </div>
    </article>
  );
}
