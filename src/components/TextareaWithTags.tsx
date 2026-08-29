import { Plus } from 'lucide-react';

import styles from './TextareaWithTags.module.css';

type TextareaWithTagsProps = {
  /** Placeholder text for the textarea */
  placeholder?: string;
  /** Current textarea value */
  value: string;
  /** Called with the new value (on typing or when a tag is appended) */
  onChange: (value: string) => void;
  /** Quick-add tags shown as chips below the textarea */
  suggestedTags: string[];
  /** Called with the tag that was clicked, after it is appended */
  onTagClick?: (tag: string) => void;
};

/** Free-text note field with quick-add tag chips that append to the text. */
export default function TextareaWithTags({
  placeholder,
  value,
  onChange,
  suggestedTags,
  onTagClick,
}: TextareaWithTagsProps) {
  const appendTag = (tag: string) => {
    const separator = value.trim().length === 0 ? '' : ' ';
    onChange(`${value}${separator}${tag}`);
    onTagClick?.(tag);
  };

  return (
    <div className={styles.wrap}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <div className={styles.tags}>
        {suggestedTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={styles.tag}
            onClick={() => appendTag(tag)}
          >
            <Plus size={12} aria-hidden="true" />
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
