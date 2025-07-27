interface TagListProps {
  tags: string[];
  className?: string;
}

export default function TagList({ tags, className = '' }: TagListProps) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
