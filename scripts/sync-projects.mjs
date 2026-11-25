// Keeps src/data/projects.json in line with GitHub:
//   - public repos of USER that aren't listed yet are added with "show": true
//   - any listed repo that isn't public (private, renamed or deleted) is set to "show": false
// A public repo you hide by hand stays hidden.
//
// Usage: npm run projects:sync   (add --show-all-public to switch every public repo back on)

import { readFileSync, writeFileSync } from 'node:fs';

const USER = 'SchoItz';
const FILE = new URL('../src/data/projects.json', import.meta.url);

const SHOW_ALL_PUBLIC = process.argv.includes('--show-all-public');
const HEADERS = { Accept: 'application/vnd.github+json', 'User-Agent': 'fsweb-projects-sync' };

const projects = JSON.parse(readFileSync(FILE, 'utf8'));
const known = new Set(projects.map((p) => p.url.toLowerCase()));

const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`, {
  headers: HEADERS,
});
if (!res.ok) {
  console.error(`GitHub API error ${res.status}: ${await res.text()}`);
  process.exit(1);
}
const repos = await res.json();

const added = [];
for (const r of repos) {
  if (r.fork || known.has(r.html_url.toLowerCase())) continue;
  projects.push({
    name: r.name,
    owner: r.owner.login,
    group: 'personal',
    show: true,
    description: r.description ?? '',
    tags: r.language ? [r.language] : [],
    url: r.html_url,
  });
  added.push(r.name);
}

// Work out which listed repos are public. USER's repos come from the listing above;
// repos owned by others (team projects) are checked one by one — private ones return 404.
const publicUrls = new Set(repos.map((r) => r.html_url.toLowerCase()));
async function isPublic(p) {
  if (p.owner === USER) return publicUrls.has(p.url.toLowerCase());
  const r = await fetch(`https://api.github.com/repos/${p.owner}/${p.name}`, { headers: HEADERS });
  if (r.status === 404) return false;
  if (!r.ok) throw new Error(`GitHub API error ${r.status} checking ${p.owner}/${p.name}`);
  return !(await r.json()).private;
}

const hidden = [];
const shown = [];
for (const p of projects) {
  const pub = await isPublic(p);
  if (!pub && p.show) {
    p.show = false;
    hidden.push(p.name);
  } else if (pub && !p.show && SHOW_ALL_PUBLIC) {
    p.show = true;
    shown.push(p.name);
  }
}

writeFileSync(FILE, JSON.stringify(projects, null, 2) + '\n');

console.log(added.length ? `Added: ${added.join(', ')}` : 'No new repos.');
if (hidden.length) console.log(`Hidden (not public on GitHub): ${hidden.join(', ')}`);
if (shown.length) console.log(`Switched on (public): ${shown.join(', ')}`);
const off = projects.filter((p) => !p.show).map((p) => p.name);
if (off.length) console.log(`Currently hidden: ${off.join(', ')}`);
