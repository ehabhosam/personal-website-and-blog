import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>here is a snapshot of my young professional journey.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Lyrise</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Front-end Engineer, July 2023 — Present
        </p>
        <p>
          At <a href="https://lyrise.ai">Lyrise</a>, led front-end development
          for the company’s AI Chatbot product, creating the interface with
          reusable components in React.js and establishing a clean, scalable
          architecture.
        </p>
        <ul>
          <li>
            Developed the landing page of the company's main website, utilizing
            Rive for complex hero section animations. Implemented animations and
            responsive sections using Framer Motion and TailwindCSS.
          </li>
          <li>
            Collaborated closely with backend and machine learning colleagues to
            deliver a market-ready solution, ensuring seamless integration
            between the website, backend services, and the AI model.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">VNCR</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Front-end Development Intern, Feb 2023 — May 2023
        </p>
        <p>
          At <a href="https://vncr.com">VNCR</a>, significantly contributed to
          the development of a Treatment Plan Writer application powered by an
          AI model. Proficiently translated Figma designs into interactive
          interfaces using React.js and TailwindCSS.
        </p>
        <ul>
          <li>
            Designed and implemented robust state management solutions
            leveraging Redux Toolkit, ensuring seamless data flow and
            scalability across the application.
          </li>
          <li>
            Contributed to the back-end of the application, utilizing Express.js
            to create API routes and implement full-stack features.
          </li>
        </ul>
      </div>
    </section>
  );
}
