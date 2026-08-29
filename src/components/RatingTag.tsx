import styles from './RatingTag.module.css';

type RatingTagProps = {
  /** Average rating, shown with one decimal place */
  rating: number;
  /** Number of reviews, shown in parentheses */
  reviewCount: number;
};

/** Inline star + rating + review count, e.g. `★ 4.5 (128)`. */
export default function RatingTag({ rating, reviewCount }: RatingTagProps) {
  return (
    <span className={styles.tag}>
      <span className={styles.star} aria-hidden="true">
        ★
      </span>
      <span className={styles.rating}>{rating.toFixed(1)}</span>
      <span className={styles.count}>({reviewCount.toLocaleString()})</span>
    </span>
  );
}
