'use client';

import { MouseEvent , useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#experience' },
  { label: 'Contact', href: '#contact' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Blogs', href: '#blogs' },
//   { label: 'Videos', href: '#videos' },
];

const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href:string) => {
  e.preventDefault();

  const targetElement = document.getElementById(href.slice(1)); // Get the element by ID (remove '#' from href)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="fixed left-1/2 w-[100%] m-2 -translate-x-1/2 z-50 rounded-lg bg-gradient-to-b from-black/70 to-transparent backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-around items-center">
<Link href="#hero" className="text-2xl font-extrabold tracking-widest animate-shimmer">
          DΛωσσd
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gold transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

<ul className="hidden md:flex space-x-6 text-white text-lg font-medium tracking-wider">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="hover:text-white/20 transition"
            onClick={(e) => handleSmoothScroll(e, item.href)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-4 pb-4 pt-2 text-white text-lg space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
