'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export default function NavWrapper({ children }: React.PropsWithChildren) {
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
      {children}
    </div>
  );
}
