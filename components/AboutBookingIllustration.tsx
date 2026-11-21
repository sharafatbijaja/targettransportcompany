"use client";

interface AboutBookingIllustrationProps {
  lang?: "en" | "ar";
  className?: string;
}

export function AboutBookingIllustration({
  lang = "en",
  className = "",
}: AboutBookingIllustrationProps) {
  const titleText =
    lang === "ar"
      ? "خدمات تأجير الحافلات وتوصيل الركاب بعقود شهرية ويومية في الرياض - شركة تارجت للنقل"
      : "Corporate bus rental, monthly lease, and passenger drop-off route illustration in Riyadh";

  const descText =
    lang === "ar"
      ? "رسم توضيحي بسيط بخلفية شفافة يوضح مسار النقل من نقطة الانطلاق إلى الوصول وتوصيل الركاب"
      : "Minimal transparent-background animated illustration showing a route line connecting two location pins with passenger dots arriving at the destination";

  return (
    <div
      className={`relative aspect-square w-full max-w-[500px] mx-auto flex items-center justify-center bg-transparent ${className}`}
      role="img"
      aria-label={titleText}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block overflow-visible"
      >
        <title>{titleText}</title>
        <desc>{descText}</desc>

        <defs>
          <filter id="softGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#4a71c1" floodOpacity="0.18" />
          </filter>
          <filter id="softGlowGreen" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#55a13e" floodOpacity="0.2" />
          </filter>
        </defs>

        <style>{`
          @keyframes dashMove {
            to { stroke-dashoffset: -36; }
          }
          @keyframes shuttleDot {
            0% { offset-distance: 0%; opacity: 0; transform: scale(0.6); }
            12% { opacity: 1; transform: scale(1); }
            85% { opacity: 1; transform: scale(1); }
            100% { offset-distance: 100%; opacity: 0; transform: scale(0.7); }
          }
          @keyframes pinFloatA {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes pinFloatB {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes rippleRing {
            0% { transform: scale(0.7); opacity: 0.75; }
            100% { transform: scale(1.8); opacity: 0; }
          }
          @keyframes dotDrop1 {
            0%, 55% { opacity: 0.25; transform: translateY(-8px) scale(0.8); }
            75%, 95% { opacity: 1; transform: translateY(0px) scale(1); }
            100% { opacity: 0.25; transform: translateY(-8px) scale(0.8); }
          }
          @keyframes dotDrop2 {
            0%, 62% { opacity: 0.25; transform: translateY(-8px) scale(0.8); }
            82%, 95% { opacity: 1; transform: translateY(0px) scale(1); }
            100% { opacity: 0.25; transform: translateY(-8px) scale(0.8); }
          }
          @keyframes dotDrop3 {
            0%, 69% { opacity: 0.25; transform: translateY(-8px) scale(0.8); }
            88%, 95% { opacity: 1; transform: translateY(0px) scale(1); }
            100% { opacity: 0.25; transform: translateY(-8px) scale(0.8); }
          }
          @keyframes floatBadge {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          .route-dashed {
            stroke-dasharray: 8 10;
            animation: dashMove 1.6s linear infinite;
          }
          .shuttle-pulse {
            offset-path: path("M 118 310 C 195 310, 215 178, 358 188");
            animation: shuttleDot 3.6s ease-in-out infinite;
          }
          .pin-a {
            animation: pinFloatA 3.4s ease-in-out infinite;
          }
          .pin-b {
            animation: pinFloatB 3.4s ease-in-out 0.6s infinite;
          }
          .ripple-a {
            transform-origin: 118px 322px;
            animation: rippleRing 2.6s ease-out infinite;
          }
          .ripple-b {
            transform-origin: 358px 202px;
            animation: rippleRing 2.6s ease-out 1.3s infinite;
          }
          .passenger-1 {
            animation: dotDrop1 3.6s ease-out infinite;
          }
          .passenger-2 {
            animation: dotDrop2 3.6s ease-out infinite;
          }
          .passenger-3 {
            animation: dotDrop3 3.6s ease-out infinite;
          }
          .lease-badge {
            animation: floatBadge 4s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .route-dashed,
            .shuttle-pulse,
            .pin-a,
            .pin-b,
            .ripple-a,
            .ripple-b,
            .passenger-1,
            .passenger-2,
            .passenger-3,
            .lease-badge {
              animation: none;
            }
          }
        `}</style>

        <circle
          cx="250"
          cy="255"
          r="178"
          stroke="#4a71c1"
          strokeWidth="1.2"
          strokeOpacity="0.12"
          strokeDasharray="4 8"
        />
        <circle
          cx="250"
          cy="255"
          r="122"
          stroke="#55a13e"
          strokeWidth="1.2"
          strokeOpacity="0.14"
        />

        <g className="lease-badge" filter="url(#softGlowBlue)">
          <rect
            x="176"
            y="66"
            width="148"
            height="54"
            rx="27"
            fill="#FFFFFF"
            stroke="#4a71c1"
            strokeOpacity="0.22"
            strokeWidth="1.5"
          />
          <rect x="196" y="80" width="26" height="26" rx="7" fill="#4a71c1" fillOpacity="0.12" />
          <rect x="201" y="86" width="16" height="14" rx="3" stroke="#4a71c1" strokeWidth="1.8" />
          <line x1="201" y1="91" x2="217" y2="91" stroke="#4a71c1" strokeWidth="1.6" />
          <circle cx="206" cy="95" r="1.4" fill="#55a13e" />
          <circle cx="212" cy="95" r="1.4" fill="#55a13e" />

          <line x1="232" y1="93" x2="264" y2="93" stroke="#4a71c1" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />

          <rect x="274" y="80" width="26" height="26" rx="7" fill="#55a13e" fillOpacity="0.14" />
          <circle cx="284" cy="92" r="4.5" stroke="#55a13e" strokeWidth="1.8" />
          <path d="M288 95 L295 101 M292 98 L295 95" stroke="#55a13e" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        <path
          d="M 118 310 C 195 310, 215 178, 358 188"
          stroke="#4a71c1"
          strokeOpacity="0.18"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 118 310 C 195 310, 215 178, 358 188"
          stroke="#4a71c1"
          strokeWidth="3"
          strokeLinecap="round"
          className="route-dashed"
        />

        <g className="shuttle-pulse">
          <circle r="11" fill="#55a13e" fillOpacity="0.22" />
          <circle r="6.5" fill="#4a71c1" stroke="#FFFFFF" strokeWidth="2" />
        </g>

        <ellipse cx="118" cy="322" rx="22" ry="7" fill="#4a71c1" fillOpacity="0.15" />
        <ellipse cx="118" cy="322" rx="16" ry="5" stroke="#4a71c1" strokeWidth="1.5" className="ripple-a" />

        <g transform="translate(64, 326)">
          <circle cx="10" cy="8" r="5" fill="#4a71c1" />
          <path d="M2 23 C2 17, 18 17, 18 23" stroke="#4a71c1" strokeWidth="3.5" strokeLinecap="round" />

          <circle cx="30" cy="11" r="4.5" fill="#4a71c1" fillOpacity="0.7" />
          <path d="M23 24 C23 19, 37 19, 37 24" stroke="#4a71c1" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g className="pin-a" filter="url(#softGlowBlue)">
          <path
            d="M118 236 C98.12 236 82 252.12 82 272 C82 296.5 118 322 118 322 C118 322 154 296.5 154 272 C154 252.12 137.88 236 118 236 Z"
            fill="#4a71c1"
          />
          <circle cx="118" cy="271" r="13" fill="#FFFFFF" />
          <circle cx="118" cy="271" r="5.5" fill="#4a71c1" />
        </g>

        <ellipse cx="358" cy="202" rx="24" ry="7.5" fill="#55a13e" fillOpacity="0.18" />
        <ellipse cx="358" cy="202" rx="18" ry="5.5" stroke="#55a13e" strokeWidth="1.5" className="ripple-b" />

        <g className="pin-b" filter="url(#softGlowGreen)">
          <path
            d="M358 112 C337.01 112 320 129.01 320 150 C320 175.8 358 202 358 202 C358 202 396 175.8 396 150 C396 129.01 378.99 112 358 112 Z"
            fill="#55a13e"
          />
          <circle cx="358" cy="149" r="14" fill="#FFFFFF" />
          <path
            d="M352 149 L356 153 L364.5 144.5"
            stroke="#55a13e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <g transform="translate(314, 234)">
          <rect
            x="0"
            y="44"
            width="116"
            height="10"
            rx="5"
            fill="#55a13e"
            fillOpacity="0.16"
          />

          <g className="passenger-1">
            <circle cx="24" cy="14" r="7" fill="#55a13e" />
            <path
              d="M12 37 C12 27, 36 27, 36 37"
              stroke="#55a13e"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </g>

          <g className="passenger-2">
            <circle cx="58" cy="14" r="7" fill="#4a71c1" />
            <path
              d="M46 37 C46 27, 70 27, 70 37"
              stroke="#4a71c1"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </g>

          <g className="passenger-3">
            <circle cx="92" cy="14" r="7" fill="#55a13e" />
            <path
              d="M80 37 C80 27, 104 27, 104 37"
              stroke="#55a13e"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g transform="translate(178, 412)">
          <rect x="0" y="0" width="32" height="8" rx="4" fill="#4a71c1" />
          <rect x="40" y="0" width="16" height="8" rx="4" fill="#55a13e" />
          <rect x="64" y="0" width="44" height="8" rx="4" fill="#4a71c1" fillOpacity="0.35" />
          <rect x="116" y="0" width="28" height="8" rx="4" fill="#55a13e" fillOpacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

export default AboutBookingIllustration;
