import MotionWrapper from '@/components/containers/motionWrapper';
import ProjectCard from '@/components/containers/projectCard';
import { SectionLabel, SectionTitle } from '@/components/containers/sections';
import { indexToNumberString } from '@/lib/utils';
import { title } from 'process';

const projects = [
  {
    title: 'My Portofolio',
    desc: 'My portofolio website. Designed by claude.ai, coded by human, built with Next.js.',
    tag: 'landing-page',
    url: '',
  },
  {
    title: 'Rock, Scissor, Paper',
    desc: 'A classic game, rebuilt. Because even simple ideas deserve to be executed well.',
    tag: 'game',
    url: 'https://suten-omega.vercel.app',
  },
  {
    title: 'Sociality',
    desc: 'A social media app in the spirit of instagram. Built to understand what it takes to engineer social systems — feeds, follow, media uploads.',
    tag: 'full-stack',
    url: 'https://sociality-beta.vercel.app',
  },
  {
    title: 'pom-cli',
    desc: 'A Pomodoro timer that lives in your terminal. Built with Go. Because the best tools stay out of your way.',
    tag: 'Go · TUI · CLI',
    url: 'https://github.com/rinarudhei/pomcli',
  },
  {
    title: 'godict-cli',
    desc: 'Lightweight English dictionary command-line application with audio pronunciation.',
    tag: 'Go · CLI',
    url: 'https://github.com/rinarudhei/godict-cli',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id='projects'
      className='mx-auto max-w-300 items-start gap-24 border-t border-[rgba(61,90,71,0.1)] px-16 py-24'
    >
      <MotionWrapper>
        <SectionLabel label='selected works' />
        <SectionTitle title="Things I've" em='built' />
      </MotionWrapper>

      {/* Projects grid */}
      <MotionWrapper className='mt-12 grid grid-cols-[repeat(3,1fr)] gap-0.5'>
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            desc={p.desc}
            tag={p.tag}
            cardNumber={indexToNumberString(i + 1)}
            url={p.url}
          />
        ))}
      </MotionWrapper>

      <MotionWrapper className="font-dm-mono text-ink-faint after:bg-moss-light before:bg-moss-light mt-10 flex items-center justify-center gap-4 text-center text-[0.78rem] tracking-[0.06em] before:h-px before:w-12 before:shrink-0 before:content-[''] after:h-px after:w-12 after:shrink-0 after:content-['']">
        more coming — I like to build things
      </MotionWrapper>
    </section>
  );
}
