import Link from 'next/link';

const programmingSkills = [
  { name: 'Java', level: 'Proficient' },
  { name: 'JavaScript', level: 'Proficient' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'SQL & MySQL', level: 'Intermediate' },
  { name: 'React', level: '' },
  { name: 'Node.js', level: '' },
];

const cyberSkills = [
  'Network Security',
  'Cybersecurity',
  'IT Infrastructure',
  'Threat Detection',
  'Incident Response',
  'Network Administration',
];

const navCards = [
  {
    href: '/education',
    title: 'Education',
    desc: 'Academic qualifications and degrees',
    icon: '🎓',
  },
  {
    href: '/experience',
    title: 'Experience',
    desc: 'Professional work history',
    icon: '💼',
  },
  {
    href: '/github',
    title: 'GitHub',
    desc: 'Projects and open-source work',
    icon: '⌨️',
  },
];

export default function Home() {
  return (
    <div style={{ color: '#e0e0e0' }}>
      {/* ── Hero ── */}
      <section
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24"
        style={{
          background:
            'linear-gradient(180deg, #111111 0%, #1a1a1a 60%, #1a1a1a 100%)',
        }}
      >
        <p className="text-sm uppercase tracking-[0.25em] mb-4" style={{ color: '#888888' }}>
          Portfolio
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3" style={{ color: '#c9a227' }}>
          Francois Scholtz
        </h1>
        <p className="text-xl sm:text-2xl font-light mb-6" style={{ color: '#c0c0c0' }}>
          Cybersecurity &amp; IT Professional
        </p>

        {/* Gold divider */}
        <div className="w-16 h-px my-6" style={{ backgroundColor: '#c9a227' }} />

        <p className="max-w-xl text-base leading-7" style={{ color: '#a0a0a0' }}>
          Cybersecurity and software development professional with hands-on experience in IT
          infrastructure, network security, and full-stack programming. Proficient in Java,
          JavaScript, React, and Node.js, with a working knowledge of Python and SQL. Currently
          completing an Honours degree in Computer Science at the University of Pretoria,
          conducting research on insider threat detection and actively developing a detection
          framework.
        </p>

        {/* Contact row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm" style={{ color: '#888888' }}>
          <a
            href="mailto:francois121.fs@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-[#c9a227]"
          >
            <span>✉</span> francois121.fs@gmail.com
          </a>
          <span style={{ color: '#333' }}>|</span>
          <span className="flex items-center gap-2">
            <span>📞</span> 076 272 1484
          </span>
          <span style={{ color: '#333' }}>|</span>
          <span className="flex items-center gap-2">
            <span>📍</span> South Africa
          </span>
          <span style={{ color: '#333' }}>|</span>
          <a
            href="https://github.com/SchoItz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[#c9a227]"
          >
            <span>⌨</span> github.com/SchoItz
          </a>
        </div>
      </section>

      {/* ── Navigation Cards ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-xs uppercase tracking-[0.2em] mb-8 text-center" style={{ color: '#c9a227' }}>
          Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-lg border p-6 flex flex-col gap-3 transition-all"
              style={{ backgroundColor: '#252525', borderColor: '#333333' }}
            >
              <span className="text-3xl">{card.icon}</span>
              <h3
                className="text-lg font-semibold transition-colors group-hover:text-[#c9a227]"
                style={{ color: '#e0e0e0' }}
              >
                {card.title}
              </h3>
              <p className="text-sm" style={{ color: '#888888' }}>
                {card.desc}
              </p>
              <span className="text-sm mt-auto transition-colors group-hover:text-[#c9a227]" style={{ color: '#666666' }}>
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="border-t pt-12" style={{ borderColor: '#2a2a2a' }}>
          <h2 className="text-xs uppercase tracking-[0.2em] mb-10 text-center" style={{ color: '#c9a227' }}>
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming */}
            <div
              className="rounded-lg border p-6"
              style={{ backgroundColor: '#252525', borderColor: '#333333' }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#c9a227' }}>
                Programming
              </h3>
              <div className="flex flex-col gap-3">
                {programmingSkills.map((s) => (
                  <div key={s.name} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: '#e0e0e0' }}>
                      {s.name}
                    </span>
                    {s.level && (
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ backgroundColor: '#c9a22720', color: '#c9a227', border: '1px solid #c9a22740' }}
                      >
                        {s.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cybersecurity */}
            <div
              className="rounded-lg border p-6"
              style={{ backgroundColor: '#252525', borderColor: '#333333' }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#c9a227' }}>
                Cybersecurity &amp; IT
              </h3>
              <div className="flex flex-wrap gap-2">
                {cyberSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: '#1e1e1e', border: '1px solid #333', color: '#c0c0c0' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
