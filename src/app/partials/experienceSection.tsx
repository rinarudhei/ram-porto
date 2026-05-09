import MotionWrapper from '@/components/containers/motionWrapper';
import { SectionLabel, SectionTitle } from '@/components/containers/sections';
import { experiences } from '@/lib/constants';
import clsx from 'clsx';

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='experience mx-auto max-w-300 items-start gap-24 border-t border-[rgba(61,90,71,0.1)] px-8 py-16 sm:px-16 sm:py-24'
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
              'relative flex flex-col gap-2 border-b border-[rgba(61,90,71,0.1)] py-10 sm:grid sm:grid-cols-[180px_1fr] sm:gap-8',
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
