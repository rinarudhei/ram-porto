import Link from 'next/link';

type ProjectCardProps = {
  cardNumber: string;
  title: string;
  desc: string;
  tag: string;
  url: string;
};
export default function ProjectCard({
  cardNumber,
  title,
  desc,
  tag,
  url,
}: ProjectCardProps) {
  return (
    <div
      id='project-card'
      className='bg-sand after:bg-moss group relative flex min-h-70 cursor-default flex-col justify-between overflow-hidden px-8 py-10 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0 after:transition-[height] after:duration-300 after:ease-in-out hover:after:h-full motion-reduce:after:transition-none'
    >
      <p className='font-dm-mono text-ink-faint relative z-10 mb-6 text-[0.7rem] tracking-[0.15em] group-hover:text-[rgba(253,250,244,0.9)]'>
        {cardNumber}
      </p>
      <p className='font-dm-serif-display font-regular text-ink relative z-10 mb-4 text-[1.5rem] leading-[1.2] group-hover:text-[rgba(253,250,244,0.9)]'>
        {title}
      </p>
      <p className='font-outfit text-ink-muted relative z-10 mb-6 flex-1 text-[0.88rem] leading-[1.7] font-light group-hover:text-[rgba(253,250,244,0.9)]'>
        {desc}
      </p>
      <div className='relative z-10 flex flex-wrap items-center justify-between gap-2'>
        <p className='font-dm-mono text-ink-faint rounded-xs border border-[rgba(61,90,71,0.15)] px-2 py-[0.2rem] text-[0.68rem] tracking-[0.08em] group-hover:border-[rgba(253,250,244,0.2)] group-hover:text-[rgba(253,250,244,0.6)]'>
          {tag}
        </p>
        <Link
          target='_blank'
          href={url}
          className='font-dm-mono text-moss decoration-moss/30 relative z-10 cursor-pointer text-[0.7rem] tracking-[0.08em] underline decoration-1 underline-offset-4 group-hover:text-[rgba(253,250,244,0.8)] group-hover:decoration-[rgba(253,250,244,0.6)]'
        >
          view →
        </Link>
      </div>
    </div>
  );
}
