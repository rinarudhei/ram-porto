import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mx-auto flex max-w-300 justify-between border-t border-[rgba(61,90,71,0.1)] px-16 py-8 tracking-[0.06em]'>
      <p className='font-dm-mono text-size-[0.72rem] text-ink-faint tracking-[0.06em]'>
        © 2025 Rinaldi Adrian Mohammad
      </p>

      {/* Links */}
      <div className='flex gap-6'>
        <Link
          className='font-dm-mono text-ink-faint hover:text-moss text-[0.72rem] tracking-[0.06em] no-underline decoration-0'
          href=''
        >
          Github
        </Link>
        <Link
          className='font-dm-mono text-ink-faint hover:text-moss text-[0.72rem] tracking-[0.06em] no-underline decoration-0'
          href=''
        >
          LinkedIn
        </Link>
        <Link
          className='font-dm-mono text-ink-faint hover:text-moss text-[0.72rem] tracking-[0.06em] no-underline decoration-0'
          href=''
        >
          Twitter
        </Link>
      </div>
    </footer>
  );
}
