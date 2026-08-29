import ActionButton, { type ActionButtonProps } from './ActionButton';

/** Solid blue call-to-action button with an optional helper line. */
export default function PrimaryButton(props: ActionButtonProps) {
  return <ActionButton {...props} variant="primary" />;
}
