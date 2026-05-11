import Link from 'next/link';

const degrees = [
  {
    degree: 'BSc Honours in Computer Science',
    institution: 'University of Pretoria (Tuks)',
    focus: 'Specialisation: Cybersecurity | Research: Insider Threat Detection',
    status: 'In Progress',
    statusColor: '#c9a227',
    year: 'Current',
    description:
      'Advanced honours-level study with specialisation in cybersecurity. Currently conducting original research on insider threat detection, designing a detection framework using behavioural analytics and trust modelling.',
    highlights: [
      'Cybersecurity specialisation',
      'Research: Insider Threat Detection Framework',
      'Behavioural analytics & trust modelling',
      'Network security theory and practice',
    ],
  },
  {
    degree: 'BSc in Computer Science',
    institution: 'Akademia',
    focus: '',
    status: 'Completed',
    statusColor: '#5a9e6f',
    year: 'Completed',
    description:
      'Completed a full BSc degree in Computer Science, covering core programming, data structures, software engineering, databases, and foundational IT concepts.',
    highlights: [
      'Programming fundamentals (Java, Python, JavaScript)',
      'Database design & SQL',
      'Software engineering principles',
      'Computer networking basics',
    ],
  },
];

export default function EducationPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16" style={{ color: '#e0e0e0' }}>
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#c9a227' }}>
          Qualifications
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: '#e0e0e0' }}>
          Education
        </h1>
        <div className="w-12 h-px mt-5" style={{ backgroundColor: '#c9a227' }} />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px hidden sm:block"
          style={{ backgroundColor: '#2e2e2e' }}
        />

        <div className="flex flex-col gap-12">
          {degrees.map((item, i) => (
            <div key={i} className="flex gap-8 sm:gap-12">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full mt-1.5 z-10 ring-4"
                  style={{
                    backgroundColor: item.statusColor,
                    boxShadow: `0 0 0 4px #1a1a1a`,
                  }}
                />
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-lg border p-7"
                style={{ backgroundColor: '#252525', borderColor: '#333333' }}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold" style={{ color: '#e0e0e0' }}>
                      {item.degree}
                    </h2>
                    <p className="text-sm mt-1" style={{ color: '#a0a0a0' }}>
                      {item.institution}
                    </p>
                    {item.focus && (
                      <p className="text-xs mt-0.5 italic" style={{ color: '#888888' }}>
                        {item.focus}
                      </p>
                    )}
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap"
                    style={{
                      backgroundColor: `${item.statusColor}20`,
                      color: item.statusColor,
                      border: `1px solid ${item.statusColor}40`,
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Gold divider */}
                <div className="h-px mb-5" style={{ backgroundColor: '#2e2e2e' }} />

                {/* Description */}
                <p className="text-sm leading-6 mb-5" style={{ color: '#a0a0a0' }}>
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm" style={{ color: '#c0c0c0' }}>
                      <span style={{ color: '#c9a227', marginTop: '2px' }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back nav */}
      <div className="mt-16 pt-8 border-t flex items-center justify-between" style={{ borderColor: '#2a2a2a' }}>
        <Link
          href="/"
          className="text-sm transition-colors hover:text-[#c9a227]"
          style={{ color: '#888888' }}
        >
          ← Back to Home
        </Link>
        <Link
          href="/experience"
          className="text-sm transition-colors hover:text-[#c9a227]"
          style={{ color: '#888888' }}
        >
          Work Experience →
        </Link>
      </div>
    </div>
  );
}
