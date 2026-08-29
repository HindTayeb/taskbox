import { ChevronLeft } from 'lucide-react';

import styles from './BackButton.module.css';

type BackButtonProps = {
  /** Called when the button is tapped */
  onClick?: () => void;
};

/** Circular icon button for navigating back. */
export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      className={styles.button}
      aria-label="Go back"
      onClick={onClick}
    >
      <ChevronLeft size={22} aria-hidden="true" />
    </button>
  );
}
