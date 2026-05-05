import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menus = ['about', 'experience', 'projects', 'contact'];
export default function Navbar() {
  return (
    <div className='font-dm-mono fixed top-0 right-0 left-0 z-40 flex w-screen items-center justify-between bg-transparent px-16 py-6'>
      {/* Nav logo */}
      <Link
        href=''
        className='font-dm-mono font-regular text-ink-muted cursor-none text-[0.85rem] tracking-wider'
      >
        RAM<span className='text-moss'>.</span>
      </Link>
      {/* Nav menus */}
      <ul className='flex gap-10'>
        {menus.map((m) => (
          <li key={m}>
            <Button asChild variant='link' size='link' className='font-dm-mono'>
              <Link href=''>{m}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
