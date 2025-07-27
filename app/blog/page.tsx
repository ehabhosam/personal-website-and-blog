import { Suspense } from 'react';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import BlogList from './blog-list';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  let allBlogs = getBlogPosts();
  let allViews = await getViewsCount();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        read my blog
      </h1>
      <BlogList allBlogs={allBlogs} allViews={allViews} />
    </section>
  );
}


