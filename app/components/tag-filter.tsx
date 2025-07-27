'use client';

import { useState } from 'react';

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

export default function TagFilter({
  availableTags,
  selectedTags,
  onTagToggle,
  onClearAll,
}: TagFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (availableTags.length === 0) {
    return null;
  }

  const displayTags = isExpanded ? availableTags : availableTags.slice(0, 8);
  const hasMoreTags = availableTags.length > 8;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {/* <h2 className="text-lg font-medium">filter by tags</h2> */}
        {selectedTags.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {displayTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isSelected
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {hasMoreTags && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          {isExpanded ? 'Show less' : `Show ${availableTags.length - 8} more tags`}
        </button>
      )}

      {selectedTags.length > 0 && (
        <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Filtering by: {selectedTags.join(', ')}
        </div>
      )}
    </div>
  );
}
