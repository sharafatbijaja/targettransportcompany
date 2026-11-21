"use client";

import React from "react";

interface ContactNetworkIllustrationProps {
  lang?: "en" | "ar";
  className?: string;
}

export default function ContactNetworkIllustration({
  lang = "en",
  className = "",
}: ContactNetworkIllustrationProps) {
  const titleText =
    lang === "ar"
      ? "التواصل مع فريق شركة تارجت للنقل في الرياض - الهاتف والرسائل والموقع"
      : "Contact Target Transport Company in Riyadh by phone, message, or location";
  const descText =
    lang === "ar"
      ? "رسم توضيحي شفاف يربط مركز تشغيل شركة تارجت للنقل بعقد الهاتف والرسائل وموقع المكتب في الرياض"
      : "Transparent communication hub illustration connecting Target Transport dispatch in Riyadh to phone, message, and office location nodes";

  return (
    <div
      className={`relative aspect-square w-full max-w-[500px] mx-auto flex items-center justify-center bg-transparent ${className}`}
      role="img"
      aria-label={titleText}
    >
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block overflow-visible">
        <title>{titleText}</title>
        <desc>{descText}</desc>
        <defs>
          <filter id="contactGlowBlue" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#4a71c1" floodOpacity="0.18" />
          </filter>
          <filter id="contactGlowGreen" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#55a13e" floodOpacity="0.18" />
          </filter>
          <style>{`
            @keyframes contactPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
            @keyframes contactFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
            @keyframes contactFlow { to { stroke-dashoffset: -28; } }
            .contact-hub { transform-origin: 250px 250px; animation: contactPulse 4s ease-in-out infinite; }
            .contact-node-a { animation: contactFloat 3.8s ease-in-out infinite; }
            .contact-node-b { animation: contactFloat 3.8s ease-in-out .9s infinite; }
            .contact-node-c { animation: contactFloat 3.8s ease-in-out 1.8s infinite; }
            .contact-line { stroke-dasharray: 7 9; animation: contactFlow 1.8s linear infinite; }
          `}</style>
        </defs>

        <circle cx="250" cy="250" r="178" stroke="#4a71c1" strokeWidth="1.2" strokeOpacity="0.13" strokeDasharray="5 9" />
        <circle cx="250" cy="250" r="112" stroke="#55a13e" strokeWidth="1.2" strokeOpacity="0.15" />
        <path d="M250 250L112 128" stroke="#4a71c1" strokeWidth="2.5" strokeLinecap="round" className="contact-line" />
        <path d="M250 250L388 128" stroke="#55a13e" strokeWidth="2.5" strokeLinecap="round" className="contact-line" />
        <path d="M250 250L250 372" stroke="#4a71c1" strokeWidth="2.5" strokeLinecap="round" className="contact-line" />

        <g className="contact-hub" filter="url(#contactGlowBlue)">
          <circle cx="250" cy="250" r="58" fill="#FFFFFF" stroke="#4a71c1" strokeWidth="2.5" />
          <circle cx="250" cy="250" r="44" fill="#4a71c1" />
          <circle cx="250" cy="250" r="19" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="250" cy="250" r="6" fill="#55a13e" />
          <path d="M250 231V219M250 281V269M231 250H219M281 250H269" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g className="contact-node-a" filter="url(#contactGlowBlue)">
          <rect x="74" y="90" width="76" height="76" rx="22" fill="#FFFFFF" stroke="#4a71c1" strokeOpacity="0.32" strokeWidth="1.8" />
          <rect x="86" y="102" width="52" height="52" rx="14" fill="#4a71c1" fillOpacity="0.1" />
          <path d="M101 116C101 113 104 111 107 112L112 114C114 115 115 117 114 119L112 123C111 125 112 128 114 130C117 133 120 135 122 134L126 132C128 131 130 132 131 134L133 139C134 142 132 145 129 145C115 145 101 131 101 116Z" fill="#4a71c1" />
        </g>

        <g className="contact-node-b" filter="url(#contactGlowGreen)">
          <rect x="350" y="90" width="76" height="76" rx="22" fill="#FFFFFF" stroke="#55a13e" strokeOpacity="0.32" strokeWidth="1.8" />
          <rect x="362" y="102" width="52" height="52" rx="14" fill="#55a13e" fillOpacity="0.12" />
          <rect x="374" y="114" width="28" height="22" rx="7" stroke="#55a13e" strokeWidth="2.4" />
          <circle cx="384" cy="125" r="2" fill="#4a71c1" />
          <circle cx="392" cy="125" r="2" fill="#4a71c1" />
          <path d="M382 136L378 142V136" stroke="#55a13e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className="contact-node-c" filter="url(#contactGlowBlue)">
          <rect x="212" y="334" width="76" height="76" rx="22" fill="#FFFFFF" stroke="#4a71c1" strokeOpacity="0.32" strokeWidth="1.8" />
          <rect x="224" y="346" width="52" height="52" rx="14" fill="#4a71c1" fillOpacity="0.1" />
          <path d="M250 357C241 357 234 364 234 373C234 384 250 397 250 397C250 397 266 384 266 373C266 364 259 357 250 357Z" fill="#4a71c1" />
          <circle cx="250" cy="373" r="6" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
