'use client';

import Link from 'next/link';
import { Suspense, useState, useMemo } from 'react';
import ViewCounter from './view-counter';
import TagFilter from 'app/components/tag-filter';
import TagList from 'app/components/tag-list';

interface BlogPost {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tags?: string[];
  };
  slug: string;
  tweetIds: string[];
  content: string;
}

interface BlogListProps {
  allBlogs: BlogPost[];
  allViews: { slug: string; count: number }[];
}

export default function BlogList({ allBlogs, allViews }: BlogListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from all blog posts
  const availableTags = useMemo(() => {
    const tagSet = new Set<string>();
    allBlogs.forEach((post) => {
      post.metadata.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [allBlogs]);

  // Filter blogs based on selected tags
  const filteredBlogs = useMemo(() => {
    if (selectedTags.length === 0) {
      return allBlogs;
    }
    return allBlogs.filter((post) => {
      const postTags = post.metadata.tags || [];
      return selectedTags.every((selectedTag) => postTags.includes(selectedTag));
    });
  }, [allBlogs, selectedTags]);

  // Sort filtered blogs by publication date
  const sortedBlogs = useMemo(() => {
    return filteredBlogs.sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    });
  }, [filteredBlogs]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleClearAll = () => {
    setSelectedTags([]);
  };

  return (
    <>
      <TagFilter
        availableTags={availableTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        onClearAll={handleClearAll}
      />
      
      {sortedBlogs.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-400">
          No blog posts found with the selected tags.
        </p>
      ) : (
        sortedBlogs.map((post) => (
          <div key={post.slug} className="mb-6">
            <Link
              className="flex flex-col space-y-1 mb-2"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <Suspense fallback={<p className="h-6" />}>
                  <ViewCounter allViews={allViews} slug={post.slug} />
                </Suspense>
              </div>
            </Link>
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <TagList tags={post.metadata.tags} className="mt-2" />
            )}
          </div>
        ))
      )}
    </>
  );
}
