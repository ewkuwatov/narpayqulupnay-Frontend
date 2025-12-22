export default function Wave2() {
  return (
    <svg
      viewBox="0 0 1300 120"
      preserveAspectRatio="none"
      className="w-full h-[100px] pointer-events-none"
    >
      {/* НИЖНИЙ — зелёный */}
      <path
        d="M0,40 C120,80 240,0 360,20 480,40 600,100 720,80 840,60 960,0 1080,20 1200,40 1320,80 1440,60 L1440,120 L0,120 Z"
        className="text-primary"
        fill="currentColor"
      />

      {/* ВЕРХНИЙ — белый */}
      <path
        d="M0,40 C120,80 240,0 360,20 480,40 600,100 720,80 840,60 960,0 1080,20 1200,40 1320,80 1440,60 L1440,0 L0,0 Z"
        className="text-surface"
        fill="currentColor"
      />
    </svg>
  )
}
