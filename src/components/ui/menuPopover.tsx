import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { menus } from '@/lib/constants';
import { Menu } from 'lucide-react';

export function MenuPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Menu size={16} className='inline-block sm:hidden' />
      </PopoverTrigger>
      <PopoverContent align='start'>
        <ul className='flex flex-col gap-4'>
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
      </PopoverContent>
    </Popover>
  );
}
