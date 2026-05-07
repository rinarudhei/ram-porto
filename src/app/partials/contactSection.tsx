import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className='border-[rgba(61,90,71,0.1) flex min-h-[60vh] flex-col items-center justify-center border-t text-center'>
      <div>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          }}
          className='font-dm-serif-display font-regular mb-6 leading-[1.1]'
        >
          Let's build
          <br />
          <em className='text-moss italic'>something</em>
        </h2>
        <p className='text-ink-muted font-outfit mx-auto mt-0 mb-12 max-w-100 text-base leading-[1.7] font-light'>
          Open to interesting problems, collaborations, and conversations about
          engineering.
        </p>
        <Link
          href='mailto:rinaldiadrian5@gmail.com'
          className='font-dm-serif-display text-ink decoration-moss-light hover:text-moss hover:decoration-moss pb-1 text-[1.5rem] italic underline decoration-2 underline-offset-10'
        >
          rinaldiadrian5@gmail.com
        </Link>
      </div>
    </section>
  );
}
