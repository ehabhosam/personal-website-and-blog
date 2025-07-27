import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes

    const trimmedKey = key.trim() as keyof Metadata;

    // Handle tags as comma-separated values
    if (trimmedKey === 'tags') {
      (metadata as any)[trimmedKey] = value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
    } else {
      (metadata as any)[trimmedKey] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}

export function getBlogTags() {
  const posts = getBlogPosts();
  const tagCache: Record<string, Array<{ slug: string; title: string; publishedAt: string }>> = {};

  posts.forEach((post) => {
    const tags = post.metadata.tags || [];
    tags.forEach((tag) => {
      if (!tagCache[tag]) {
        tagCache[tag] = [];
      }
      tagCache[tag].push({
        slug: post.slug,
        title: post.metadata.title,
        publishedAt: post.metadata.publishedAt,
      });
    });
  });

  // Sort posts within each tag by publication date (newest first)
  Object.keys(tagCache).forEach((tag) => {
    tagCache[tag].sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  });

  return tagCache;
}
