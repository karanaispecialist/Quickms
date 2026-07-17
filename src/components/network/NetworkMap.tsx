"use client";

import { motion } from "framer-motion";

interface NetworkMapProps {
  activeStat: number;
}

export default function NetworkMap({ activeStat }: NetworkMapProps) {
  // Hub nodes coordinates relative to our 600x300 viewport grid
  const hubs = [
    { id: "BOM", name: "Mumbai (HQ)", x: 375, y: 155, isCentral: true },
    { id: "NYC", name: "New York", x: 170, y: 105, isCentral: false },
    { id: "ROT", name: "Rotterdam", x: 310, y: 85, isCentral: false },
    { id: "SIN", name: "Singapore", x: 440, y: 185, isCentral: false },
    { id: "SYD", name: "Sydney", x: 520, y: 245, isCentral: false },
  ];

  // Route path curves originating from Mumbai (BOM)
  const routes = [
    { id: "bom-nyc", d: "M 375 155 Q 260 100 170 105", focusStat: 1 }, // Global focus
    { id: "bom-rot", d: "M 375 155 Q 330 110 310 85", focusStat: 1 }, // Global focus
    { id: "bom-sin", d: "M 375 155 Q 410 170 440 185", focusStat: 1 }, // Global focus
    { id: "bom-syd", d: "M 375 155 Q 460 200 520 245", focusStat: 1 }, // Global focus
  ];

  // Map highlights based on active stat
  // Stat 0: 181+ Countries (Global reach) -> global opacity high
  // Stat 1: 12K+ Partners (Global routes) -> routes draw prominently
  // Stat 2: 29+ Locations (India Hubs) -> India node pulses extra bright
  const globalOpacity = activeStat === 0 ? 1 : activeStat === 1 ? 0.8 : 0.6;
  const routeOpacity = activeStat === 1 ? 1 : activeStat === 0 ? 0.6 : 0.2;
  const indiaHighlight = activeStat === 2;

  return (
    <div className="relative w-full aspect-[2/1] bg-neutral-light/30 border border-neutral-200/50 rounded-[3px] p-4 sm:p-6 overflow-hidden shadow-sm">
      {/* Background geographic grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
        </svg>
      </div>

      {/* Stylized Vector World Map Container */}
      <svg
        viewBox="0 0 600 300"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Continent Polygons (Architectural, premium outline look) */}
        <g className="fill-neutral-200/40 stroke-neutral-300/60 stroke-[0.75] transition-opacity duration-500" style={{ opacity: globalOpacity }}>
          {/* North America */}
          <path d="M 60 50 L 130 45 L 195 70 L 175 110 L 140 95 L 120 130 L 90 120 L 50 85 Z" />
          {/* South America */}
          <path d="M 120 135 L 155 130 L 175 160 L 155 230 L 135 250 L 125 210 Z" />
          {/* Africa */}
          <path d="M 270 120 L 320 120 L 340 145 L 325 215 L 295 240 L 280 200 L 260 160 Z" />
          {/* Eurasia */}
          <path d="M 230 65 L 420 50 L 510 80 L 490 145 L 450 145 L 400 165 L 350 160 L 305 135 L 285 105 Z" />
          {/* Australia */}
          <path d="M 475 220 L 525 220 L 540 250 L 495 260 Z" />
          {/* Greenland */}
          <path d="M 180 20 L 220 20 L 205 50 L 175 40 Z" />
        </g>

        {/* Dynamic Route Connection Lines */}
        <g className="transition-opacity duration-500" style={{ opacity: routeOpacity }}>
          {routes.map((route) => (
            <motion.path
              key={route.id}
              d={route.d}
              fill="none"
              stroke="#FF5A09"
              strokeWidth="1.25"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          ))}
        </g>

        {/* Pulsing Network Hub Markers */}
        <g>
          {hubs.map((hub) => {
            const isBOM = hub.isCentral;
            const animatePulse = isBOM && indiaHighlight;

            return (
              <g key={hub.id} className="cursor-default">
                {/* Node Outer Pulsing Circle */}
                <motion.circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isBOM ? 7 : 4}
                  fill="#FF5A09"
                  initial={{ opacity: 0.15 }}
                  animate={{
                    opacity: [0.15, 0.45, 0.15],
                    scale: animatePulse ? [1, 2.5, 1] : isBOM ? [1, 1.8, 1] : [1, 1.5, 1],
                  }}
                  transition={{
                    duration: animatePulse ? 1.2 : 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Node Core Dot */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isBOM ? 3.5 : 2}
                  fill={isBOM ? "#FF5A09" : "#0A1128"}
                  stroke="#FF5A09"
                  strokeWidth="1"
                />

                {/* Small technical ID label */}
                <text
                  x={hub.x + (isBOM ? 9 : 6)}
                  y={hub.y + 3}
                  className="font-mono text-[8px] tracking-wider fill-neutral-dark/70 font-semibold"
                >
                  {hub.id}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Stylized legend card inside the map box */}
      <div className="absolute bottom-4 left-4 font-mono text-[7px] tracking-widest text-neutral-muted/70 bg-white/90 border border-neutral-200/50 py-1.5 px-2 rounded-[2px] pointer-events-none select-none uppercase">
        <span>Central Hub // BOM (Mumbai, IN)</span>
        <br />
        <span className="opacity-60">Global Agent Network Routes Active</span>
      </div>
    </div>
  );
}
