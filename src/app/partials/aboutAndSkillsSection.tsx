import { SectionLabel, SectionTitle } from '@/components/containers/sections';

export default function AboutAndSkillsSection() {
  return (
    <section className='mx-auto grid max-w-300 grid-cols-[1fr_1.2fr] items-center gap-24 px-16 py-24'>
      <AboutSection />
      <SkillsSection />
    </section>
  );
}

function AboutSection() {
  return (
    <div>
      <SectionLabel label='about me' />
      <SectionTitle title='Builder by' em='instict' />
      <div className='text-ink-muted font-outfit text-base leading-[1.85] font-light'>
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
    </div>
  );
}

function SkillsSection() {
  return <div></div>;
}
