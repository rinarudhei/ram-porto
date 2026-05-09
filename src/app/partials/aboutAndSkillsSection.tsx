import MotionWrapper from '@/components/containers/motionWrapper';
import { SectionLabel, SectionTitle } from '@/components/containers/sections';
import { SkillTag } from '@/components/containers/skillTag';
import React, { PropsWithChildren } from 'react';

export default function AboutAndSkillsSection() {
  return (
    <section
      id='about'
      className='mx-auto flex max-w-300 flex-col items-start gap-24 px-8 py-16 sm:grid sm:grid-cols-[1.2fr_1fr] sm:px-16 sm:py-24 lg:grid-cols-[1fr_1.2fr]'
    >
      <AboutSection />
      <SkillsSection />
    </section>
  );
}

function AboutSection() {
  return (
    <MotionWrapper>
      <SectionLabel label='about me' />
      <SectionTitle title='Builder by' em='instict' />
      <div className='text-ink-muted font-outfit mt-12 text-base leading-[1.85] font-light sm:mt-0'>
        <p>
          Software engineer with a background that spans automotive engineering
          at <strong className='text-ink font-medium'>Subaru Japan</strong> to
          building backend systems across startups and enterprise at{' '}
          <strong className='text-ink font-medium'>Accenture</strong>.
        </p>
        <br />
        <p className='mt-1'>
          I gravitate toward the{' '}
          <strong className='text-ink font-medium'>backend</strong> — the
          plumbing, the systems, the invisible work that makes things reliable.
          But I care enough about the full stack to ship things end-to-end.
        </p>
        <br />
        <p className='mt-1'>
          Currently at{' '}
          <strong className='text-ink font-medium'>Accenture</strong>, working
          on engineering problems that matter at scale. I keep building on the
          side — because I like building things.
        </p>
      </div>
    </MotionWrapper>
  );
}

const skills = [
  { category: 'backend', skills: ['Go', 'Node.js'] },
  {
    category: 'frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'ShadCN'],
  },
  {
    category: 'interests',
    skills: ['CLI tools', 'System design', 'TUI', 'APIs'],
  },
];

function SkillsSection() {
  return (
    <MotionWrapper delay={0.2}>
      <SectionLabel label='skills' />

      <div className='mt-10'>
        {skills.map((s) => (
          <div
            key={s.category}
            className='grid grid-cols-[100px_1fr] gap-4 border-t border-[rgba(61,90,71,0.12)] py-4 last:border-b'
          >
            <SkillsCatLabel label={s.category} />
            <SkillsTags>
              {s.skills.map((skill) => (
                <React.Fragment key={skill}>
                  <SkillTag skill={skill} />
                </React.Fragment>
              ))}
            </SkillsTags>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}

type SkillsCatLabelProps = {
  label: string;
};
export function SkillsCatLabel({ label }: SkillsCatLabelProps) {
  return (
    <div className='text-ink-faint pt-0.75 text-[0.7rem] tracking-widest'>
      {label}
    </div>
  );
}

export function SkillsTags({ children }: PropsWithChildren) {
  return <div className='flex flex-wrap gap-2'>{children}</div>;
}
