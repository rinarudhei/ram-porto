import { PropsWithChildren } from 'react';

type SkillTagProps = {
  skill: string;
};

export function SkillTag({ skill }: SkillTagProps) {
  return (
    <div className='font-dm-mono text-moss rounded-xs border border-[rgba(61,90,71,0.18)] bg-[rgba(61,90,71,0.07)] px-[0.7rem] py-1 text-[0.75rem] tracking-[0.04em]'>
      {skill}
    </div>
  );
}

type SkillsCatLabelProps = {
  label: string;
};
export function SkillsCatLabel({ label }: SkillsCatLabelProps) {
  return (
    <div className='text-ink-faint pt-0.75 text-[0.7rem] tracking-widest'>
      {label}
    </div>
  );
}

export function SkillsTags({ children }: PropsWithChildren) {
  return <div className='flex flex-wrap gap-2'>{children}</div>;
}
