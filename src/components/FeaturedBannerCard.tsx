import styles from './FeaturedBannerCard.module.css';

type FeaturedBannerCardProps = {
  /** Background image URL */
  image: string;
  /** Small uppercase overline above the title */
  eyebrow: string;
  /** Headline shown over the image */
  title: string;
  /** Text for the call-to-action button */
  ctaLabel: string;
  /** Called when the CTA button is tapped */
  onCtaClick?: () => void;
};

/** Large image card with overlaid text and a call-to-action button. */
export default function FeaturedBannerCard({
  image,
  eyebrow,
  title,
  ctaLabel,
  onCtaClick,
}: FeaturedBannerCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.scrim} />
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <button type="button" className={styles.cta} onClick={onCtaClick}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
