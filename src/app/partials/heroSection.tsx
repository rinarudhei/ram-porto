'use client';
import { Button } from '@/components/ui/button';
import HeroGrid from '../../components/containers/heroGrid';
import { MoveDown } from 'lucide-react';
import { motion, useInView } from 'motion/react';

export default function HeroSection() {
  return (
    <section className='relative mx-auto flex min-h-screen max-w-300 items-center px-8 pt-24 pb-16 sm:px-16 sm:pt-32 sm:pb-24'>
      <div>
        {/* Hero content */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-6 flex items-center gap-3'
        >
          <div className='bg-moss h-px w-8' />
          <p className='text-moss font-regular font-dm-mono text-[0.78rem] tracking-[0.15em]'>
            software engineer
          </p>
        </motion.div>

        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          animate={{ opacity: 1, y: 0 }}
          className='font-dm-serif-display text-ink leading-none tracking-tight'
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
          }}
        >
          Rinaldi <br />
          <span className='text-moss italic'>Adrian</span>
          <br />
          Mohammad
        </motion.h1>

        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-ink-muted font-outfit mt-8 max-w-120 text-[17.6px] leading-7 font-light'
        >
          I build things. Web application, back end system, CLI tools — if it
          can be engineered, I'm interested in building it well.
        </motion.p>

        {/* Hero CTA */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
          animate={{ opacity: 1, y: 0 }}
          className='mt-12 flex items-center gap-6'
        >
          <Button
            asChild
            className='transition duration-200 hover:-translate-y-0.5'
          >
            <a href='#projects'>view work</a>
          </Button>
          <Button asChild variant='ghost' className='m-0 p-0'>
            <a href='#contact'>
              get in touch <MoveDown />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Hero grid */}
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 }}
        animate={{ opacity: 0.18 }}
        className='absolute top-[50%] right-16 translate-y-[-50%] opacity-18'
      >
        <HeroGrid />
      </motion.div>
    </section>
  );
}
