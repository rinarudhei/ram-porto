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
    <div className='bg-sand relative flex min-h-70 cursor-none flex-col justify-between overflow-hidden px-8 py-10'>
      <p className='font-dm-mono text-ink-faint mb-6 text-[0.7rem] tracking-[0.15em]'>
        {cardNumber}
      </p>
      <p className='font-outfit font-regular text-ink mb-4 text-[1.5rem] leading-[1.2]'>
        {title}
      </p>
      <p className='font-outfit text-ink-muted mb-6 flex-1 text-[0.88rem] leading-[1.7] font-light'>
        {desc}
      </p>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <p className='font-dm-mono text-ink-faint rounded-xs border border-[rgba(61,90,71,0.15)] px-2 py-[0.2rem] text-[0.68rem] tracking-[0.08em]'>
          {tag}
        </p>
        <Link
          href={url}
          className='font-dm-mono text-moss decoration-moss/30 text-[0.7rem] tracking-[0.08em] underline decoration-1 underline-offset-4'
        >
          view →
        </Link>
      </div>
    </div>
  );
}
