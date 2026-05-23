export const menus = ['about', 'experience', 'projects', 'contact'];

export const skills = [
  { category: 'backend', skills: ['Go', 'Node.js'] },
  {
    category: 'frontend',
    skills: [
      'React',
      'TypeScript',
      'vite',
      'Next.js',
      'Tailwind CSS',
      'ShadCN',
    ],
  },
  {
    category: 'interests',
    skills: ['Web Development', 'CLI tools', 'System design', 'TUI', 'APIs'],
  },
];

export const experiences = [
  {
    time: '2022 — present',
    detail: {
      title: 'Software Engineer',
      company: 'Accenture',
      description:
        'Building and maitaining software systems for enterprise clients. Working accross backend services, APIs, and full-stack solustions at scale.',
    },
  },
  {
    time: '2021 — 2022',
    detail: {
      title: 'Backend Developer',
      company: 'Telkom Indonesia',
      description:
        "Worked on backend services for one of Indonesia's largest telecommunications companies. Built robust APIs and data pipelines.",
    },
  },
  {
    time: '2021',
    detail: {
      title: 'Fullstack Engineer',
      company: 'Feedloop',
      description:
        'Early-staged startup work. Owned the backend while contributing to the frontend when needed.',
    },
  },
  {
    time: '2016 — 2020',
    detail: {
      title: 'ADAS Engineer',
      company: 'Subaru Japan',
      description:
        'Advanced Driver Assistance Systems Engineering. Working on safety-critical embedded software taught me what precision in engineering really means.',
    },
  },
];

export const projects = [
  {
    title: 'My Portofolio',
    desc: 'My portofolio website. Designed by claude.ai, coded by human, built with Next.js.',
    tag: 'landing-page',
    url: '',
  },
  {
    title: 'Rock, Scissor, Paper',
    desc: 'A classic game, rebuilt. Because even simple ideas deserve to be executed well.',
    tag: 'web-game',
    url: 'https://suten-omega.vercel.app',
  },
  {
    title: 'Sociality',
    desc: 'A social media app in the spirit of instagram. Built to understand what it takes to engineer social systems — feeds, follow, media uploads.',
    tag: 'social-media',
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
