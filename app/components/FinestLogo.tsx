export default function FinestLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 72"
      fill="none"
      className={className}
      aria-label="Finest Pool Care"
      role="img"
    >
      <defs>
        <linearGradient id="logo-blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a509e" />
          <stop offset="50%" stopColor="#3080d8" />
          <stop offset="100%" stopColor="#1a509e" />
        </linearGradient>
        <linearGradient id="logo-silver" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a7f90" />
          <stop offset="40%" stopColor="#b8ceda" />
          <stop offset="60%" stopColor="#b8ceda" />
          <stop offset="100%" stopColor="#6a7f90" />
        </linearGradient>
      </defs>

      {/* "Finest" — large bold italic serif */}
      <text
        x="4"
        y="44"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="46"
        fontWeight="700"
        fontStyle="italic"
        fill="#00327d"
      >
        Finest
      </text>

      {/* "POOL CARE" — small bold uppercase */}
      <text
        x="11"
        y="57"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="3.5"
        fill="#00327d"
      >
        POOL CARE
      </text>

      {/* Silver wave — back */}
      <path
        d="M4 63 C50 55 100 71 150 63 C185 57 205 66 218 60"
        stroke="url(#logo-silver)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Blue wave — center */}
      <path
        d="M2 67 C48 59 98 75 148 67 C183 61 203 70 218 64"
        stroke="url(#logo-blue)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Silver wave — front */}
      <path
        d="M6 70 C52 62 102 78 152 70 C187 64 206 73 218 67"
        stroke="url(#logo-silver)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 4-point sparkle star */}
      <g transform="translate(196, 65)">
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#3080d8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#3080d8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-4.2" y1="-4.2" x2="4.2" y2="4.2" stroke="#3080d8" strokeWidth="1" strokeLinecap="round" />
        <line x1="4.2" y1="-4.2" x2="-4.2" y2="4.2" stroke="#3080d8" strokeWidth="1" strokeLinecap="round" />
        <circle cx="0" cy="0" r="1.5" fill="#3080d8" />
      </g>
    </svg>
  );
}
