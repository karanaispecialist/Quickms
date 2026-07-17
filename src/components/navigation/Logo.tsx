"use client";

interface LogoProps {
  scrolled: boolean;
  lightHeader?: boolean;
  className?: string;
}

export default function Logo({ scrolled, lightHeader = false, className = "" }: LogoProps) {
  // Brand color variables
  const navyColor = (scrolled || lightHeader) ? "#0A1128" : "#FFFFFF";
  const orangeColor = "#FF5A09";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 375 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-102"
        aria-hidden="true"
      >
        {/* === Q ICON === */}
        {/* Navy/White main body of Q */}
        <path
          d="M 12,40 L 25.1,40 A 36,36 0 1,1 25.1,80 L 12,80 L 12,68 L 32.4,68 A 24,24 0 1,0 32.4,52 L 12,52 Z"
          fill={navyColor}
          className="transition-colors duration-500"
        />
        {/* Navy/White tail of Q */}
        <path
          d="M 75,75 L 88,88 L 95,81 L 82,68 Z"
          fill={navyColor}
          className="transition-colors duration-500"
        />
        {/* Orange slash / accent block */}
        <path
          d="M 8,66 L 24,66 L 32,54 L 16,54 Z"
          fill={orangeColor}
        />

        {/* === WORDMARK "QUICKMAS" === */}
        {/* QUICKM (Navy/White) */}
        {/* U */}
        <path
          d="M 110,40 L 120,40 L 120,70 A 10,10 0 0,0 130,70 L 130,40 L 140,40 L 140,70 A 20,20 0 0,1 110,70 Z"
          fill={navyColor}
          className="transition-colors duration-500"
        />
        {/* I */}
        <path
          d="M 150,40 L 160,40 L 160,80 L 150,80 Z"
          fill={navyColor}
          className="transition-colors duration-500"
        />
        {/* C */}
        <path
          d="M 200,45 A 15,15 0 0,0 170,60 A 15,15 0 0,0 200,75 L 200,65 A 5,5 0 0,1 180,60 A 5,5 0 0,1 200,55 Z"
          fill={navyColor}
          className="transition-colors duration-500"
        />
        {/* K */}
        <path
          d="M 210,40 L 220,40 L 220,56 L 232,40 L 244,40 L 228,58 L 245,80 L 233,80 L 220,62 L 220,80 L 210,80 Z"
          fill={navyColor}
          className="transition-colors duration-500"
        />
        {/* M */}
        <path
          d="M 250,40 L 260,40 L 267.5,60 L 275,40 L 285,40 L 285,80 L 275,80 L 275,52 L 270,68 L 265,68 L 260,52 L 260,80 L 250,80 Z"
          fill={navyColor}
          className="transition-colors duration-500"
        />

        {/* AS (Orange) */}
        {/* Stylized A */}
        <path
          d="M 310,40 L 326,80 L 316,80 L 312.5,70 C 306.5,71.5 302.5,75 299,80 L 294,80 Z M 310,48 L 314,61 C 311.5,59.5 308.5,59.5 306,61 Z"
          fill={orangeColor}
        />
        {/* S */}
        <path
          d="M 350,40 C 359,40 363,44 363,49 L 354,49 C 354,46 352,45 350,45 C 347,45 345,46 345,48 C 345,50 347,51 351,52 L 355,53 C 361,55 365,58 365,64 C 365,74 358,80 348,80 C 339,80 335,75 335,69 L 344,69 C 344,73 346,75 348,75 C 351,75 354,74 354,71 C 354,68 352,67 348,66 C 341,64 335,61 335,55 C 335,46 341,40 350,40 Z"
          fill={orangeColor}
        />

        {/* Subtitle "Integrated Logistics" */}
        <text
          x="365"
          y="95"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          fontSize="11.5"
          letterSpacing="0.08em"
          textAnchor="end"
          fill={navyColor}
          className="transition-colors duration-500"
        >
          Integrated Logistics
        </text>
      </svg>
    </div>
  );
}
