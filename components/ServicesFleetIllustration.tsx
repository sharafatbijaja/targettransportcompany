"use client";

import React from "react";

interface ServicesFleetIllustrationProps {
  lang?: "en" | "ar";
  className?: string;
}

export default function ServicesFleetIllustration({
  lang = "en",
  className = "",
}: ServicesFleetIllustrationProps) {
  const titleText =
    lang === "ar"
      ? "خدمات تأجير الحافلات وتويوتا كوستر والنقل بين المدن في الرياض والسعودية - شركة تارجت للنقل"
      : "Bus and Toyota Coaster fleet transport network, airport shuttles, and intercity routes in Riyadh Saudi Arabia";

  const descText =
    lang === "ar"
      ? "رسم توضيحي متحرك بخلفية شفافة يوضح شبكة مسارات الحافلات والتوصيل بين المدن والمطارات والشركات"
      : "Minimal transparent-background animated square illustration depicting highway bus routes, shuttle stops, and fleet dispatch across Saudi Arabia";

  return (
    <div
      className={`relative aspect-square w-full max-w-[500px] mx-auto flex items-center justify-center bg-transparent ${className}`}
      role="img"
      aria-label={titleText}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://w3.org"
        className="w-full h-full block overflow-visible"
      >
        <title>{titleText}</title>
        <desc>{descText}</desc>

        <defs>
          <filter id="fleetGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#4a71c1" floodOpacity="0.2" />
          </filter>
          <filter id="fleetGlowGreen" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#55a13e" floodOpacity="0.2" />
          </filter>
        </defs>

        <style>{`
          @keyframes roadFlow {
            to { stroke-dashoffset: -32; }
          }
          @keyframes shuttleMove1 {
            0% { offset-distance: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { offset-distance: 100%; opacity: 0; }
          }
          @keyframes shuttleMove2 {
            0% { offset-distance: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { offset-distance: 100%; opacity: 0; }
          }
          @keyframes stationBob {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes hubBreath {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.04); }
          }

          .highway-dash {
            stroke-dasharray: 8 8;
            animation: roadFlow 1.5s linear infinite;
          }
          .shuttle-dot-1 {
            offset-path: path("M 92 340 C 145 340, 175 250, 250 250 C 325 250, 355 155, 412 155");
            animation: shuttleMove1 4.2s ease-in-out infinite;
          }
          .shuttle-dot-2 {
            offset-path: path("M 105 148 C 175 148, 200 250, 250 250 C 305 250, 330 355, 405 355");
            animation: shuttleMove2 4.6s ease-in-out 1.2s infinite;
          }
          .station-float-a {
            animation: stationBob 3.4s ease-in-out infinite;
          }
          .station-float-b {
            animation: stationBob 3.4s ease-in-out 1s infinite;
          }
          .central-depot {
            transform-origin: 250px 250px;
            animation: hubBreath 3.8s ease-in-out infinite;
          }
        `}</style>

        {/* 1. SUBTLE RADAR / COVERAGE RINGS */}
        <circle
          cx="250"
          cy="250"
          r="185"
          stroke="#4a71c1"
          strokeWidth="1.2"
          strokeOpacity="0.14"
          strokeDasharray="4 8"
        />
        <circle
          cx="250"
          cy="250"
          r="125"
          stroke="#55a13e"
          strokeWidth="1.2"
          strokeOpacity="0.15"
        />

        {/* 2. HIGHWAY TRANSPORT CORRIDORS (CURVED MULTI-ROUTE ROADS) */}
        {/* Route Corridor 1: Bottom-Left to Top-Right */}
        <path
          d="M 92 340 C 145 340, 175 250, 250 250 C 325 250, 355 155, 412 155"
          stroke="#4a71c1"
          strokeOpacity="0.14"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 92 340 C 145 340, 175 250, 250 250 C 325 250, 355 155, 412 155"
          stroke="#4a71c1"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="highway-dash"
        />

        {/* Route Corridor 2: Top-Left to Bottom-Right */}
        <path
          d="M 105 148 C 175 148, 200 250, 250 250 C 305 250, 330 355, 405 355"
          stroke="#55a13e"
          strokeOpacity="0.14"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 105 148 C 175 148, 200 250, 250 250 C 305 250, 330 355, 405 355"
          stroke="#55a13e"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="highway-dash"
        />

        {/* 3. MOVING SHUTTLE PULSES ON ROUTES */}
        <g className="shuttle-dot-1">
          <circle r="10" fill="#4a71c1" fillOpacity="0.22" />
          <circle r="6" fill="#4a71c1" stroke="#FFFFFF" strokeWidth="2" />
        </g>
        <g className="shuttle-dot-2">
          <circle r="10" fill="#55a13e" fillOpacity="0.22" />
          <circle r="6" fill="#55a13e" stroke="#FFFFFF" strokeWidth="2" />
        </g>

        {/* 4. CENTRAL FLEET DISPATCH HUB (Bus/Coaster Front Emblem - No Text) */}
        <g className="central-depot" filter="url(#fleetGlowBlue)">
          <circle cx="250" cy="250" r="54" fill="#FFFFFF" stroke="#4a71c1" strokeWidth="2.5" />
          <circle cx="250" cy="250" r="42" fill="#4a71c1" />

          {/* Clean Minimal Bus/Coaster Front Pictogram */}
          <rect x="234" y="232" width="32" height="31" rx="6" fill="#FFFFFF" />
          {/* Windshield */}
          <rect x="238" y="236" width="24" height="12" rx="2.5" fill="#4a71c1" />
          {/* Headlights */}
          <circle cx="241" cy="255" r="2.3" fill="#55a13e" />
          <circle cx="259" cy="255" r="2.3" fill="#55a13e" />
          {/* Grille line */}
          <line x1="246" y1="255" x2="254" y2="255" stroke="#4a71c1" strokeWidth="2" strokeLinecap="round" />
          {/* Tires */}
          <rect x="238" y="263" width="5" height="4.5" rx="1.5" fill="#CBD5E1" />
          <rect x="257" y="263" width="5" height="4.5" rx="1.5" fill="#CBD5E1" />
        </g>

        {/* 5. FOUR TRANSPORT DESTINATION STATIONS (NO TEXT) */}
        {/* Station 1 (Top-Left): Corporate & Staff Shuttle Hub */}
        <g className="station-float-a" filter="url(#fleetGlowGreen)">
          <rect x="72" y="114" width="66" height="66" rx="20" fill="#FFFFFF" stroke="#55a13e" strokeWidth="2" />
          <rect x="83" y="125" width="44" height="44" rx="12" fill="#55a13e" fillOpacity="0.12" />
          {/* Building / Office Icon */}
          <rect x="96" y="135" width="18" height="24" rx="2.5" stroke="#55a13e" strokeWidth="2.2" />
          <line x1="101" y1="141" x2="109" y2="141" stroke="#4a71c1" strokeWidth="2" strokeLinecap="round" />
          <line x1="101" y1="147" x2="109" y2="147" stroke="#55a13e" strokeWidth="2" strokeLinecap="round" />
          <line x1="101" y1="153" x2="109" y2="153" stroke="#4a71c1" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Station 2 (Top-Right): Airport & Aviation Transfer Terminal */}
        <g className="station-float-b" filter="url(#fleetGlowBlue)">
          <rect x="378" y="122" width="66" height="66" rx="20" fill="#FFFFFF" stroke="#4a71c1" strokeWidth="2" />
          <rect x="389" y="133" width="44" height="44" rx="12" fill="#4a71c1" fillOpacity="0.1" />
          {/* Minimal Plane Pictogram */}
          <path
            d="M411 142 L411 166 M400 153 L422 153 M405 164 L417 164"
            stroke="#4a71c1"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="411" cy="142" r="2" fill="#55a13e" />
        </g>

        {/* Station 3 (Bottom-Left): Passenger Pick-up Stop Pin */}
        <g className="station-float-b" filter="url(#fleetGlowBlue)">
          <rect x="58" y="306" width="66" height="66" rx="20" fill="#FFFFFF" stroke="#4a71c1" strokeWidth="2" />
          <rect x="69" y="317" width="44" height="44" rx="12" fill="#4a71c1" fillOpacity="0.1" />
          {/* Location Pin Pictogram */}
          <path
            d="M91 326 C84.9 326 80 330.9 80 337 C80 344.8 91 353 91 353 C91 353 102 344.8 102 337 C102 330.9 97.1 326 91 326 Z"
            fill="#4a71c1"
          />
          <circle cx="91" cy="336.5" r="4" fill="#FFFFFF" />
        </g>

        {/* Station 4 (Bottom-Right): Group Drop-off & Fleet Handover */}
        <g className="station-float-a" filter="url(#fleetGlowGreen)">
          <rect x="372" y="322" width="66" height="66" rx="20" fill="#FFFFFF" stroke="#55a13e" strokeWidth="2" />
          <rect x="383" y="333" width="44" height="44" rx="12" fill="#55a13e" fillOpacity="0.12" />
          {/* Multi-Passenger Dots */}
          <circle cx="405" cy="349" r="4" fill="#55a13e" />
          <path d="M398 362 C398 357, 412 357, 412 362" stroke="#55a13e" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="395" cy="352" r="2.8" fill="#4a71c1" />
          <circle cx="415" cy="352" r="2.8" fill="#4a71c1" />
        </g>
      </svg>
    </div>
  );
}
