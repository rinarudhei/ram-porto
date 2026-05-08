'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // handle mouse event to update cursor position state
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    globalThis.addEventListener('mousemove', handleMouseMove);

    return () => {
      globalThis.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          left: pos.x,
          top: pos.y,
        }}
        className={clsx(
          'border-moss cursor-ring pointer-events-none fixed z-49 h-8 w-8 -translate-1/2 rounded-[50%] border opacity-50 transition-all ease-in-out'
        )}
      />
      <div
        style={{
          left: pos.x,
          top: pos.y,
        }}
        className={clsx(
          'bg-moss cursor pointer-events-none fixed z-50 h-2 w-2 -translate-1/2 rounded-[50%] border-none transition-[width,height,background-color] delay-200 motion-reduce:transition-none'
        )}
      />
    </>
  );
}
