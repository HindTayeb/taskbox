import styles from './actionButton.module.css';

export type ActionButtonProps = {
  /** Button text */
  label: string;
  /** Called when the button is tapped */
  onClick?: () => void;
  /** Disable the button */
  disabled?: boolean;
  /** Stretch to fill the available width */
  fullWidth?: boolean;
  /** Small muted text shown below the button */
  helperText?: string;
};

type Props = ActionButtonProps & { variant: 'primary' | 'secondary' };

/** Shared implementation behind PrimaryButton / SecondaryButton. */
export default function ActionButton({
  label,
  onClick,
  disabled = false,
  fullWidth = false,
  helperText,
  variant,
}: Props) {
  return (
    <span className={`${styles.field} ${fullWidth ? styles.fullWidth : ''}`}>
      <button
        type="button"
        className={`${styles.button} ${styles[variant]} ${
          fullWidth ? styles.fullWidth : ''
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
      {helperText && <span className={styles.helper}>{helperText}</span>}
    </span>
  );
}
