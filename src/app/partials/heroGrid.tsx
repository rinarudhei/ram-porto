export default function HeroGrid() {
  return (
    <svg
      width='280'
      height='280'
      viewBox='0 0 280 280'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g stroke='#3D5A47' strokeWidth='0.8'>
        <line x1='0' y1='40' x2='280' y2='40' />
        <line x1='0' y1='80' x2='280' y2='80' />
        <line x1='0' y1='120' x2='280' y2='120' />
        <line x1='0' y1='160' x2='280' y2='160' />
        <line x1='0' y1='200' x2='280' y2='200' />
        <line x1='0' y1='240' x2='280' y2='240' />
        <line x1='40' y1='0' x2='40' y2='280' />
        <line x1='80' y1='0' x2='80' y2='280' />
        <line x1='120' y1='0' x2='120' y2='280' />
        <line x1='160' y1='0' x2='160' y2='280' />
        <line x1='200' y1='0' x2='200' y2='280' />
        <line x1='240' y1='0' x2='240' y2='280' />
      </g>
      <circle
        cx='140'
        cy='140'
        r='60'
        stroke='#3D5A47'
        strokeWidth='1'
        fill='none'
      />
      <circle
        cx='140'
        cy='140'
        r='100'
        stroke='#3D5A47'
        strokeWidth='0.5'
        fill='none'
        strokeDasharray='4 4'
      />
      <circle cx='140' cy='140' r='6' fill='#3D5A47' />
    </svg>
  );
}
