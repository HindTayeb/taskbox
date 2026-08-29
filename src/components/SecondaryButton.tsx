import ActionButton, { type ActionButtonProps } from './ActionButton';

/** Light/outline secondary button with an optional helper line. */
export default function SecondaryButton(props: ActionButtonProps) {
  return <ActionButton {...props} variant="secondary" />;
}
