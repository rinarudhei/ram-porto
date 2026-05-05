import HeroGrid from './heroGrid';

export default function HeroSection() {
  return (
    <section className='relative mx-auto max-h-300 max-w-300 px-16 pt-32 pb-24'>
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
        <div className='mt-12'>
          <button>Tryme</button>
        </div>
      </div>

      {/* Hero grid */}
      <div className='absolute top-[50%] right-16 translate-y-[-50%] opacity-18'>
        <HeroGrid />
      </div>
    </section>
  );
}
