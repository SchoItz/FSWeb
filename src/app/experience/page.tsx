import Link from 'next/link';

const experiences = [
  {
    role: 'Programmer / IT & Network Security',
    company: 'UAV & Drone Solutions',
    period: 'Feb 2021 – Dec 2022',
    type: 'Full-time',
    responsibilities: [
      'Managed day-to-day IT operations and provided technical support across the organisation.',
      'Oversaw network security, including monitoring, threat detection, and incident response.',
      'Implemented and maintained cybersecurity policies and procedures to protect company assets.',
      'Administered and troubleshot network infrastructure, ensuring uptime and performance.',
      'Maintained and managed the server room, ensuring all systems remained up to date and fully operational.',
      'Trained staff on the correct use of IT equipment and internal systems.',
      'Provided helpdesk support, resolving hardware, software, and email-related issues for employees.',
    ],
    skills: [
      'Network Security',
      'IT Support',
      'Cybersecurity',
      'Threat Detection',
      'Incident Response',
      'Network Administration',
      'IT Infrastructure',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16" style={{ color: '#e0e0e0' }}>
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#c9a227' }}>
          Professional
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: '#e0e0e0' }}>
          Work Experience
        </h1>
        <div className="w-12 h-px mt-5" style={{ backgroundColor: '#c9a227' }} />
      </div>

      {/* Experience cards */}
      <div className="flex flex-col gap-8">
        {experiences.map((job, i) => (
          <div
            key={i}
            className="rounded-lg border p-8"
            style={{ backgroundColor: '#252525', borderColor: '#333333' }}
          >
            {/* Role + meta */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
              <div>
                <h2 className="text-2xl font-semibold" style={{ color: '#e0e0e0' }}>
                  {job.role}
                </h2>
                <p className="text-base mt-1 font-medium" style={{ color: '#c9a227' }}>
                  {job.company}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: '#c9a22720',
                    color: '#c9a227',
                    border: '1px solid #c9a22740',
                  }}
                >
                  {job.period}
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#1e1e1e', color: '#888888', border: '1px solid #2e2e2e' }}
                >
                  {job.type}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px my-6" style={{ backgroundColor: '#2e2e2e' }} />

            {/* Responsibilities */}
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#888888' }}>
              Responsibilities
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {job.responsibilities.map((r, ri) => (
                <li key={ri} className="flex items-start gap-3 text-sm leading-6" style={{ color: '#c0c0c0' }}>
                  <span
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                    style={{ backgroundColor: '#c9a22720', color: '#c9a227' }}
                  >
                    {ri + 1}
                  </span>
                  {r}
                </li>
              ))}
            </ul>

            {/* Skills used */}
            <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: '#888888' }}>
              Skills Applied
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
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
        ))}
      </div>

      {/* ── Research & Projects ── */}
      <section className="mt-12">
        <h2 className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: '#c9a227' }}>
          Research &amp; Projects
        </h2>
        <div
          className="rounded-lg border p-8"
          style={{ backgroundColor: '#252525', borderColor: '#333333' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <h2 className="text-2xl font-semibold" style={{ color: '#e0e0e0' }}>
                Insider Threat Detection Framework
              </h2>
              <p className="text-base mt-1 font-medium" style={{ color: '#c9a227' }}>
                Honours Research Project – University of Pretoria
              </p>
            </div>
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                backgroundColor: '#c9a22720',
                color: '#c9a227',
                border: '1px solid #c9a22740',
              }}
            >
              In Progress
            </span>
          </div>

          <div className="h-px my-6" style={{ backgroundColor: '#2e2e2e' }} />

          <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#888888' }}>
            Research Activities
          </h3>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              'Designing and building a software framework for insider threat detection, covering detection strategies, behavioural signal analysis, and trust modelling.',
              'Researching and implementing behavioural analytics techniques to identify anomalous user activity within organisational systems.',
              'Developing trust modelling algorithms to assess and quantify insider risk based on user behaviour patterns.',
              'Applying software engineering and programming skills to produce a functional, research-backed detection tool.',
            ].map((r, ri) => (
              <li key={ri} className="flex items-start gap-3 text-sm leading-6" style={{ color: '#c0c0c0' }}>
                <span
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                  style={{ backgroundColor: '#c9a22720', color: '#c9a227' }}
                >
                  {ri + 1}
                </span>
                {r}
              </li>
            ))}
          </ul>

          <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: '#888888' }}>
            Skills Applied
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Behavioural Analytics', 'Trust Modelling', 'Cybersecurity Research', 'Python', 'Software Engineering', 'Insider Threat Detection'].map((skill) => (
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
      </section>

      {/* Back / forward nav */}
      <div className="mt-16 pt-8 border-t flex items-center justify-between" style={{ borderColor: '#2a2a2a' }}>
        <Link
          href="/education"
          className="text-sm transition-colors hover:text-[#c9a227]"
          style={{ color: '#888888' }}
        >
          ← Education
        </Link>
        <Link
          href="/github"
          className="text-sm transition-colors hover:text-[#c9a227]"
          style={{ color: '#888888' }}
        >
          GitHub Projects →
        </Link>
      </div>
    </div>
  );
}
