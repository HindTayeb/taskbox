import { useEffect, useState } from 'react';

import styles from './Avatar.module.css';

type AvatarProps = {
  /** Image URL; falls back to a gray placeholder when missing or broken */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Avatar diameter */
  size?: 'sm' | 'md' | 'lg';
};

/** Circular user image with a gray placeholder fallback. */
export default function Avatar({ src, alt = '', size = 'md' }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  // Reset the error state if the source changes
  useEffect(() => {
    setFailed(false);
  }, [src]);

  const showImage = src && !failed;

  return (
    <span className={`${styles.avatar} ${styles[size]}`}>
      {showImage ? (
        <img
          className={styles.image}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={styles.placeholder} role="img" aria-label={alt} />
      )}
    </span>
  );
}
