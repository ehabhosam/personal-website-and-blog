import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image';

// import ibiza from 'public/images/home/Ibiza.jpg';
// import discuss from 'public/images/home/discuss.png';
// import ehab from 'public/images/home/ehab.jpeg';
// import meOcean from 'public/images/home/me-ocean.jpeg';
// import sea from 'public/images/home/sea.jpeg';
// import setup from 'public/images/home/setup.jpg';
import ibiza from 'public/images/home/cartoon/ibiza.png';
import discuss from 'public/images/home/cartoon/discuss.png';
import ehab from 'public/images/home/cartoon/grad.png';
import meOcean from 'public/images/home/cartoon/me-ocean.png';
import sea from 'public/images/home/cartoon/sea.png';
import setup from 'public/images/home/cartoon/setup.png';
import { Suspense } from 'react';

import ViewCounter from 'app/blog/view-counter';
import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
  getViewsCount,
} from 'app/db/queries';
import { PreloadResources } from 'app/preload';
import {
  GitHubLogo,
  InstagramLogo,
  LinkedInLogo,
  TwitterLogo,
} from './components/social-logos';

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        yeah, you found me 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        A passionate software developer dedicated to creating solutions that
        tackle real-world problems and improve daily life. Every day, I strive
        to refine my skills and become a better engineer, driven by the goal of
        making a positive impact through technology.
        {/* {`I'm a frontend developer, optimist, and community builder. I currently `}
        <Link href="/work">work</Link>
        {` as the VP of Product at `}
        <span className="not-prose">
          <Badge href="https://vercel.com/home">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#vercel" />
            </svg>
            Vercel
          </Badge>
        </span>
        {`, where I help teach the `}
        <Badge href="https://nextjs.org">
          <img
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {` community, an open-source web framework built with `}
        <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        . */}
      </p>
      {/* Images Grid */}
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="A beautiful picture I took to the red sea, in Dahab, Egypt. Paradise on earth."
            src={sea}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me holding my graduation project book after project discussion."
            src={ehab}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="A picture of Ibiza, Spain, one of the places I hope to visit someday."
            src={ibiza}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="A picture one of my friends took of me at the beach."
            src={meOcean}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me standing on stage at my graduation project discussion."
            src={discuss}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="My home setup, where I cook everything."
            src={setup}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I don't like to limit myself to a single technology, as I believe
          technologies are tools to solve problems. That's why I focus on
          designing the software architecture that best fits the problem I'm
          trying to solve.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          If I were to choose a stack to build with today, I would go with React
          for the frontend, React Native for mobile apps, Node.js for the
          backend, and a database like PostgreSQL or MongoDB, depending on the
          use case. I'm also interested in exploring other technologies and
          languages such as Vue.js, Golang, and Rust, and I look forward to
          building projects with them.
        </p>
      </div>

      <ul className="font-sm mt-8 flex space-x-0 items-center text-neutral-600 md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/ehab7osam"
          >
            <p className="h-7">
              <TwitterLogo />
            </p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/ehab7osam"
          >
            <p className="h-7">
              <InstagramLogo />
            </p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ehabhosam"
          >
            <p className="h-7">
              <LinkedInLogo />
            </p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/ehabhosam"
          >
            <p className="h-7">
              <GitHubLogo />
            </p>
          </a>
        </li>
        <li className="flex-1"></li>
        {/* email me */}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:ehab.hosam2019@gmail.com"
          >
            <ArrowIcon />
            <p className="mx-2 h-7">email</p>
          </a>
        </li>
        {/* whatsapp */}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://wa.me/201552950387"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">whatsapp</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              <Subs name={name} />
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Subs({ name }: { name: string }) {
  noStore();
  let subscribers;
  if (name === '@leerob') {
    subscribers = await getLeeYouTubeSubs();
  } else {
    subscribers = await getVercelYouTubeSubs();
  }

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {subscribers} subscribers
    </p>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}
