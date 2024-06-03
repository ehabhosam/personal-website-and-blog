import './page.css';
import { ArrowIcon } from 'app/page';

const projects: ProjectCardProps[] = [
  {
    title: 'Lyrise Website',
    subtitle: 'July 2023 - Oct 2023',
    techStack: [
      'Next.js',
      'React',
      'Rive',
      'TypeScript',
      'Framer Motion',
      'TailwindCSS',
    ],
    description:
      "Contributed to the development of the landing page & product page of the company's main website, resulting in a 50% increase in user engagement.",
    link: 'https://lyrise.ai', // You can add a link if available
    points: [
      'Utilized Rive for complex hero section animations.',
      'Implemented mobile-responsive sections.',
    ],
  },
  {
    title: 'iAttend',
    subtitle: 'Sep 2023 - June 2024',
    techStack: [
      'Javascript',
      'React',
      'React Native',
      'Expo',
      'Django',
      'MySQL',
    ],
    description:
      'My gruaduation project: Designed a QR-based distributed attendance system then played a pivotal role the full-stack development of it.',
    link: '', // You can add a link if available
    points: [
      'QR-based attendance system implementation',
      'Database schema design',
      'Contributed to full-stack development',
    ],
  },
  {
    title: 'Planit',
    subtitle: 'Sep 2022 - Present',
    techStack: [
      'Database design',
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'Nest.js',
      'Postgres',
    ],
    description:
      'Crafted a user-friendly time planner mobile app from scratch, aiming to streamline scheduling experiences for users.',
    link: '', // You can add a link if available
    points: [
      'Led full-stack development',
      'Implemented custom productivity algorithm',
    ],
  },
  {
    title: 'Nexus Games',
    subtitle: 'Oct 2022 - Nov 2022',
    techStack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Discord.js',
    ],
    description:
      'Developed a Discord Games Bot with sound playback and group game functionality.',
    link: 'https://top.gg/tr/bot/815365047814979606', // You can add a link if available
    points: [
      'Used Discord.js with a node server to create bot features.',
      'Designed and implemented group games.',
    ],
  },
  {
    title: 'Wordle Clone',
    subtitle: 'May 2022',
    techStack: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Created a clone of the popular game Wordle, offering users the same addictive word-guessing experience.',
    link: 'https://ndwordle.netlify.app/', // You can add a link if available
    points: [
      'Implemented game mechanics faithfully to the original.',
      'Developed responsive web design.',
    ],
  },
  {
    title: 'Weather Website',
    subtitle: 'Sep 2022',
    techStack: ['Vue.js', 'JavaScript', 'HTML', 'Bootstrap', 'API Integration'],
    description:
      'Collaborated with the Information Technology Institute (ITI) colleagues to develop a user-friendly weather website.',
    link: 'https://weather-app-iti-vue.netlify.app/', // You can add a link if available
    points: [
      'Used Vue.js & Bootstrap for dynamic and reactive user interfaces.',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        my projects
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          explore <span className="font-semibold">some</span> of the projects
          I've worked on.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  points: string[];
  techStack?: string[];
};

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="project-card px-6 border rounded-lg transition duration-300 ease-in-out hover:bg-neutral-950 hover:shadow-lg hover:shadow-neutral-400">
      {props.link ? (
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          <a href={props.link} className="flex gap-2 items-center">
            {props.title}
            <ArrowIcon />
          </a>
        </h2>
      ) : (
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          {props.title}
        </h2>
      )}
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        {props.subtitle}
      </p>
      {props.techStack && (
        <div className="flex flex-wrap mb-2">
          {props.techStack.map((tech, index) => (
            <SkillBadge key={index}>{tech}</SkillBadge>
          ))}
        </div>
      )}
      <p>{props.description}</p>
      <ul className="mt-4 list-disc list-inside">
        {props.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillBadge(props: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 py-0.5 px-1 text-xs leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-2 mb-2">
      {props.children}
    </span>
  );
}
