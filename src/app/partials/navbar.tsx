import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavWrapper from './navWrapper';

const menus = ['about', 'experience', 'projects', 'contact'];

export default function Navbar() {
  return (
    <NavWrapper>
      {/* Nav logo */}
      <Link
        href='/'
        className='font-dm-mono font-regular text-ink-muted cursor-none text-[0.85rem] tracking-wider'
      >
        RAM<span className='text-moss'>.</span>
      </Link>
      {/* Nav menus */}
      <ul className='flex gap-10'>
        {menus.map((m) => (
          <li key={m}>
            <Button
              asChild
              variant='link'
              size='link'
              className='font-dm-mono no-underline decoration-0 after:transition-[width] after:delay-300 after:ease-in-out motion-reduce:after:transition-none'
            >
              <a href={`#${m}`}>{m}</a>
            </Button>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
}
