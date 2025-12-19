'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'EXPERTISE', href: '#expertise' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-light" style={{borderColor: 'rgba(26, 35, 50, 0.1)'}}>
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 w-8 h-8 rounded-full opacity-80" style={{backgroundColor: 'var(--color-accent-blue)'}}></div>
      
      <nav className="container-custom py-4 md:py-6 flex items-center justify-between relative z-10">
        <Link href="/" className="text-2xl md:text-3xl font-semibold text-dark hover:opacity-75 transition-opacity" style={{fontFamily: "'Fraunces', serif"}}>
          Pat Gallagher
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-semibold text-sm text-dark px-3 py-1 transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'var(--color-accent-blue)'}}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 transition-colors"
          style={{borderColor: 'var(--color-dark)'}}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-light" style={{borderColor: 'rgba(26, 35, 50, 0.1)'}}>
          <div className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-semibold text-sm text-dark px-3 py-2 block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
