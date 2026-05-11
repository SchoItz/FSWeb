'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/education', label: 'Education' },
  { href: '/experience', label: 'Experience' },
  { href: '/github', label: 'GitHub' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: '#111111', borderColor: '#2a2a2a' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide transition-opacity hover:opacity-80"
          style={{ color: '#c9a227' }}
        >
          FS
          <span className="hidden sm:inline ml-2 font-normal text-base" style={{ color: '#a0a0a0' }}>
            Francois Scholtz
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded text-sm font-medium transition-all"
                style={{
                  color: isActive ? '#c9a227' : '#a0a0a0',
                  backgroundColor: isActive ? '#c9a22715' : 'transparent',
                  borderBottom: isActive ? '2px solid #c9a227' : '2px solid transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
