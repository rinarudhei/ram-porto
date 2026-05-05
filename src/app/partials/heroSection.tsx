import { Button } from '@/components/ui/button';
import HeroGrid from './heroGrid';
import { MoveDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='relative mx-auto flex min-h-screen max-w-300 items-center px-16 pt-32 pb-24'>
      <div>
        {/* Hero content */}
        <div className='mb-6 flex items-center gap-3'>
          <div className='bg-moss h-px w-8' />
          <p className='text-moss font-regular font-dm-mono text-[0.78rem] tracking-[0.15em]'>
            software engineer
          </p>
        </div>

        <h1
          className='font-dm-serif-display text-ink leading-none tracking-tight'
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          }}
        >
          Rinaldi <br />
          <span className='text-moss italic'>Adrian</span>
          <br />
          Mohammad
        </h1>

        <p className='text-ink-muted font-outfit mt-8 max-w-120 text-[17.6px] leading-7 font-light'>
          I build things. Backend systems, CLI tools, web apps — if it can be
          engineered, I'm interested in building it well.
        </p>

        {/* Hero CTA */}
        <div className='mt-12 flex items-center gap-6'>
          <Button
            asChild
            className='transition duration-200 hover:-translate-y-0.5'
          >
            <Link href=''>view work</Link>
          </Button>
          <Button asChild variant='ghost' className='m-0 p-0'>
            <Link href=''>
              get in touch <MoveDown />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero grid */}
      <div className='absolute top-[50%] right-16 translate-y-[-50%] opacity-18'>
        <HeroGrid />
      </div>
    </section>
  );
}
