import MotionWrapper from '@/components/containers/motionWrapper';
import ProjectCard from '@/components/containers/projectCard';
import { SectionLabel, SectionTitle } from '@/components/containers/sections';
import { projects } from '@/lib/constants';
import { indexToNumberString } from '@/lib/utils';

export default function ProjectsSection() {
  return (
    <section
      id='projects'
      className='mx-auto max-w-300 items-start gap-24 border-t border-[rgba(61,90,71,0.1)] px-8 py-16 sm:px-16 sm:py-24'
    >
      <MotionWrapper>
        <SectionLabel label='selected works' />
        <SectionTitle title="Things I've" em='built' />
      </MotionWrapper>

      {/* Projects grid */}
      <MotionWrapper className='xs:grid-cols-[repeat(2,1fr)] mt-12 grid gap-0.5 sm:grid-cols-[repeat(3,1fr)]'>
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            desc={p.desc}
            tag={p.tag}
            cardNumber={indexToNumberString(i + 1)}
            url={p.url}
          />
        ))}
      </MotionWrapper>

      <MotionWrapper className="font-dm-mono text-ink-faint after:bg-moss-light before:bg-moss-light mt-10 flex items-center justify-center gap-4 text-center text-[0.78rem] tracking-[0.06em] before:h-px before:w-12 before:shrink-0 before:content-[''] after:h-px after:w-12 after:shrink-0 after:content-['']">
        more coming — I like to build things
      </MotionWrapper>
    </section>
  );
}
