import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "group/button font-dm-mono inline-flex shrink-0 items-center justify-center rounded-[2px]  whitespace-nowrap   outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20   [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 cursor-none no-underline",
  {
    variants: {
      variant: {
        default:
          'bg-moss text-cream hover:bg-ink text-[0.8rem] tracking-[0.1em]',
        ghost:
          'text-ink-muted hover:text-ink aria-expanded:text-ink-muted text-[0.8rem] tracking-[0.1em]',
        link: "text-ink-muted hover:text-ink underline underline-offset-4 hover:underline font-regular text-[0.78rem] tracking-[0.08em] relative after:content-[''] after:w-0 after:h-px after:absolute after:bottom-0 after:left-0 after:bg-moss hover:after:w-full pb-0.5",
      },
      size: {
        default:
          'h-11 gap-1.5 px-[2rem] py-[0.85rem] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4',
        link: 'pb-0.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
