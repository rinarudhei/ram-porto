'use client';

import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const menus = ['about', 'experience', 'projects', 'contact'];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // handle mouse scroll event to update scrollPoss state
  useEffect(() => {
    const handleMouseScroll = () => {
      if (globalThis.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    globalThis.addEventListener('scroll', handleMouseScroll);

    return () => {
      globalThis.removeEventListener('scroll', handleMouseScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        'font-dm-mono fixed top-0 right-0 left-0 z-40 flex w-screen items-center justify-between bg-transparent px-16 py-6',
        scrolled && 'border-b bg-[rgba(253,250,244,0.9)] backdrop-blur-md'
      )}
    >
      {/* Nav logo */}
      <Link
        href=''
        className='font-dm-mono font-regular text-ink-muted cursor-none text-[0.85rem] tracking-wider'
      >
        RAM<span className='text-moss'>.</span>
      </Link>
      {/* Nav menus */}
      <ul className='flex gap-10'>
        {menus.map((m) => (
          <li key={m}>
            <Button asChild variant='link' size='link' className='font-dm-mono'>
              <Link href=''>{m}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
