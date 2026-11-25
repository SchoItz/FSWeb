import Link from 'next/link';
import projects from '@/data/projects.json';

interface Repo {
  name: string;
  owner: string;
  description: string;
  tags: string[];
  url: string;
}

// Edit src/data/projects.json to choose which projects appear.
// Set "show": false to hide one; the order in the file is the order on the page.
const visible = (projects as (Repo & { group: string; show: boolean })[]).filter((p) => p.show);
const personalRepos = visible.filter((p) => p.group === 'personal');
const collaborativeRepos = visible.filter((p) => p.group === 'collaborative');

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

      {/* Collaborative (only shown when at least one team repo is public) */}
      {collaborativeRepos.length > 0 && (
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
      )}

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
