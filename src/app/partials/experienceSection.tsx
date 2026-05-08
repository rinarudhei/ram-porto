import MotionWrapper from '@/components/containers/motionWrapper';
import { SectionLabel, SectionTitle } from '@/components/containers/sections';
import clsx from 'clsx';
import React from 'react';

const experiences = [
  {
    time: '2022 — present',
    detail: {
      title: 'Software Engineer',
      company: 'Accenture',
      description:
        'Building and maitaining software systems for enterprise clients. Working accross backend services, APIs, and full-stack solustions at scale.',
    },
  },
  {
    time: '2021 — 2022',
    detail: {
      title: 'Backend Developer',
      company: 'Telkom Indonesia',
      description:
        "Worked on backend services for one of Indonesia's largest telecommunications companies. Built robust APIs and data pipelines.",
    },
  },
  {
    time: '2021',
    detail: {
      title: 'Fullstack Engineer',
      company: 'Feedloop',
      description:
        'Early-staged startup work. Owned the backend while contributing to the frontend when needed.',
    },
  },
  {
    time: '2016 — 2020',
    detail: {
      title: 'ADAS Engineer',
      company: 'Subaru Japan',
      description:
        'Advanced Driver Assistance Systems Engineering. Working on safety-critical embedded software taught me what precision in engineering really means.',
    },
  },
];

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='experience mx-auto max-w-300 items-start gap-24 border-t border-[rgba(61,90,71,0.1)] px-16 py-24'
    >
      <MotionWrapper>
        <SectionLabel label='work history' />
        <SectionTitle title="Where I've" em='been' />
      </MotionWrapper>

      {/* Experiences */}
      <div className='mt-12 flex flex-col'>
        {experiences.map((ex) => (
          <MotionWrapper
            key={ex.time}
            className={clsx(
              'relative grid grid-cols-[180px_1fr] gap-8 border-b border-[rgba(61,90,71,0.1)] py-10',
              "before:absolute before:top-0 before:bottom-0 before:-left-16 before:w-0 before:bg-[rgba(61,90,71,0.04)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] hover:before:w-[calc(100%+8rem)] motion-reduce:before:transition-none"
            )}
          >
            <div className='text-ink-faint font-dm-mono pt-1 text-[0.75rem] tracking-wider'>
              {ex.time}
            </div>
            <div>
              <p className='font-outfit text-ink mb-1 text-[1.05rem] font-medium'>
                {ex.detail.title}
              </p>
              <p className='font-dm-mono text-moss mb-3 text-[0.78rem] tracking-[0.06em]'>
                {ex.detail.company}
              </p>
              <p className='font-outfit text-ink-muted text-[0.9rem] leading-[1.7] font-light'>
                {ex.detail.description}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
