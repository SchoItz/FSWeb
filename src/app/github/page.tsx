import Link from 'next/link';

interface Repo {
  name: string;
  owner: string;
  description: string;
  tags: string[];
  url: string;
}

const personalRepos: Repo[] = [
  {
    name: 'StockTrader',
    owner: 'SchoItz',
    description:
      'Full-stack stock and forex trading application with a React front-end, Node.js API, Python trading engine, and Docker deployment.',
    tags: ['React', 'Node.js', 'Python', 'Docker', 'Forex API'],
    url: 'https://github.com/SchoItz/StockTrader',
  },
  {
    name: 'LFSPhtograpghy',
    owner: 'SchoItz',
    description:
      'Photography portfolio and gallery website built to showcase professional photography work.',
    tags: ['Next.js', 'Tailwind CSS', 'Web'],
    url: 'https://github.com/SchoItz/LFSPhtograpghy',
  },
  {
    name: 'COS730ASS2',
    owner: 'SchoItz',
    description:
      'Academic benchmarking study comparing original and optimised algorithm implementations, with detailed performance analysis and reports.',
    tags: ['Python', 'Benchmarking', 'Algorithms', 'Research'],
    url: 'https://github.com/SchoItz/COS730ASS2',
  },
  {
    name: 'Kit',
    owner: 'SchoItz',
    description:
      'Python utility toolkit providing automation scripts and general-purpose helper utilities.',
    tags: ['Python', 'Automation', 'Utilities'],
    url: 'https://github.com/SchoItz/Kit',
  },
  {
    name: 'D-S',
    owner: 'SchoItz',
    description:
      'Unity 3D game project with custom C# gameplay systems, physics interactions, and level design.',
    tags: ['Unity', 'C#', 'Game Dev', '3D'],
    url: 'https://github.com/SchoItz/D-S',
  },
  {
    name: 'GameTest',
    owner: 'SchoItz',
    description:
      'Unity game prototype environment for testing mechanics, systems, and gameplay concepts.',
    tags: ['Unity', 'C#', 'Prototype'],
    url: 'https://github.com/SchoItz/GameTest',
  },
  {
    name: 'FSWeb',
    owner: 'SchoItz',
    description:
      'This portfolio website — built with Next.js, TypeScript, and Tailwind CSS to showcase skills and experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
    url: 'https://github.com/SchoItz/FSWeb',
  },
];

const collaborativeRepos: Repo[] = [
  {
    name: 'spysx-backend',
    owner: 'OnlyCode-Capstone',
    description:
      'RESTful API backend for the SpySX intelligence platform, built with Node.js and Supabase with structured route architecture.',
    tags: ['Node.js', 'Supabase', 'REST API', 'Capstone'],
    url: 'https://github.com/OnlyCode-Capstone/spysx-backend',
  },
  {
    name: 'spysx-frontend-web',
    owner: 'OnlyCode-Capstone',
    description:
      'Web frontend for the SpySX platform, delivering a responsive UI for the intelligence and monitoring application.',
    tags: ['React', 'Web', 'Capstone'],
    url: 'https://github.com/OnlyCode-Capstone/spysx-frontend-web',
  },
  {
    name: 'spysx-frontend-mobile-app',
    owner: 'OnlyCode-Capstone',
    description:
      'Cross-platform mobile application for SpySX built with Flutter, targeting iOS and Android.',
    tags: ['Flutter', 'Dart', 'Mobile', 'iOS', 'Android'],
    url: 'https://github.com/OnlyCode-Capstone/spysx-frontend-mobile-app',
  },
  {
    name: 'NSARG_Projek-Frontend',
    owner: 'NSARG-Boys',
    description:
      'Frontend for the NSARG group project — a collaborative university software engineering assignment.',
    tags: ['Frontend', 'Team Project'],
    url: 'https://github.com/NSARG-Boys/NSARG_Projek-Frontend',
  },
  {
    name: 'NSARG_Projek-Backend',
    owner: 'NSARG-Boys',
    description:
      'Backend API for the NSARG group project, handling data management and server-side logic.',
    tags: ['Backend', 'API', 'Team Project'],
    url: 'https://github.com/NSARG-Boys/NSARG_Projek-Backend',
  },
  {
    name: 'takeazon',
    owner: 'galenmyburgh',
    description:
      'E-commerce client application with product browsing, cart management, and order flow.',
    tags: ['React', 'E-commerce', 'Collaborative'],
    url: 'https://github.com/galenmyburgh/takeazon',
  },
  {
    name: 'takeazon-server',
    owner: 'galenmyburgh',
    description:
      'Express.js server powering the Takeazon e-commerce platform with RESTful endpoints and database integration.',
    tags: ['Node.js', 'Express', 'REST API'],
    url: 'https://github.com/galenmyburgh/takeazon-server',
  },
];

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border p-5 transition-all hover:border-[#c9a22760]"
      style={{ backgroundColor: '#252525', borderColor: '#333333' }}
    >
      {/* Repo name */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3
          className="text-base font-semibold transition-colors group-hover:text-[#c9a227]"
          style={{ color: '#e0e0e0' }}
        >
          {repo.name}
        </h3>
        <span className="text-base opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: '#c9a227' }}>
          ↗
        </span>
      </div>
      <p className="text-xs mb-3" style={{ color: '#666666' }}>
        {repo.owner}
      </p>

      {/* Description */}
      <p className="text-sm leading-6 flex-1" style={{ color: '#a0a0a0' }}>
        {repo.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {repo.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: '#1e1e1e', border: '1px solid #2e2e2e', color: '#888888' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function GithubPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16" style={{ color: '#e0e0e0' }}>
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#c9a227' }}>
          Projects
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: '#e0e0e0' }}>
          GitHub Showcase
        </h1>
        <div className="w-12 h-px mt-5 mb-6" style={{ backgroundColor: '#c9a227' }} />

        {/* GitHub profile link */}
        <a
          href="https://github.com/SchoItz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition-all hover:border-[#c9a227] hover:text-[#c9a227]"
          style={{ borderColor: '#333333', color: '#a0a0a0' }}
        >
          <span>⌨</span>
          github.com/SchoItz
          <span>↗</span>
        </a>
      </div>

      {/* Personal projects */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#c9a227' }}>
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personalRepos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>
      </section>

      {/* Collaborative */}
      <section>
        <h2 className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#c9a227' }}>
          Collaborative &amp; Team Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {collaborativeRepos.map((repo) => (
            <RepoCard key={`${repo.owner}/${repo.name}`} repo={repo} />
          ))}
        </div>
      </section>

      {/* Back nav */}
      <div className="mt-16 pt-8 border-t flex items-center justify-between" style={{ borderColor: '#2a2a2a' }}>
        <Link
          href="/experience"
          className="text-sm transition-colors hover:text-[#c9a227]"
          style={{ color: '#888888' }}
        >
          ← Work Experience
        </Link>
        <Link
          href="/"
          className="text-sm transition-colors hover:text-[#c9a227]"
          style={{ color: '#888888' }}
        >
          Back to Home →
        </Link>
      </div>
    </div>
  );
}
