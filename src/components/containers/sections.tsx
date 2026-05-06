type SectionTitleProps = {
  title: string;
  em: string;
};

export function SectionTitle({ title, em }: SectionTitleProps) {
  return (
    <h2
      className='font-dm-serif-display font-regular text-ink mb-4 leading-[1.1] tracking-[-0.01em]'
      style={{
        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
      }}
    >
      {title}
      <br />
      <em className='italic'>{em}</em>
    </h2>
  );
}

type SectionLabelProps = {
  label: string;
};

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="font-dm-mono after:bg-moss-light text-moss mb-14 flex items-center gap-4 text-[0.75rem] tracking-[0.18em] after:h-px after:shrink-0 after:grow-0 after:basis-12 after:content-['']">
      {label}
    </div>
  );
}
