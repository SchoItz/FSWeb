// Adds any public GitHub repos that aren't in src/data/projects.json yet.
// New repos are added with "show": false so nothing appears on the site
// until you switch it on. Existing entries are never changed.
//
// Usage: npm run projects:sync

import { readFileSync, writeFileSync } from 'node:fs';

const USER = 'SchoItz';
const FILE = new URL('../src/data/projects.json', import.meta.url);

const projects = JSON.parse(readFileSync(FILE, 'utf8'));
const known = new Set(projects.map((p) => p.url.toLowerCase()));

const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`, {
  headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'fsweb-projects-sync' },
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
    show: false,
    description: r.description ?? '',
    tags: r.language ? [r.language] : [],
    url: r.html_url,
  });
  added.push(r.name);
}

// Flag listed repos that GitHub doesn't show publicly (private, renamed or deleted):
// visitors clicking those links will get a 404.
const publicUrls = new Set(repos.map((r) => r.html_url.toLowerCase()));
const missing = projects.filter(
  (p) => p.show && p.owner === USER && !publicUrls.has(p.url.toLowerCase()),
);

writeFileSync(FILE, JSON.stringify(projects, null, 2) + '\n');

console.log(added.length ? `Added (hidden): ${added.join(', ')}` : 'No new repos.');
if (missing.length) {
  console.log(`Shown but not public on GitHub (links will 404): ${missing.map((p) => p.name).join(', ')}`);
}
console.log('Edit src/data/projects.json and set "show": true for the ones you want on the site.');
