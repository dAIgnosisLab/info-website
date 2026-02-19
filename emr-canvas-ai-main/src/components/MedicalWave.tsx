export default function MedicalWave() {
  return (
    <svg
      viewBox="0 0 1200 200"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#10b981" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity={0.6} />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.6} />
          <stop offset="100%" stopColor="#10b981" stopOpacity={0.6} />
        </linearGradient>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
          <stop offset="50%" stopColor="#10b981" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.4} />
        </linearGradient>
      </defs>

      {/* Background wave pattern - smooth curves */}
      <path
        d="M0 100 Q150 50, 300 100 T600 100 T900 100 T1200 100"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
        opacity={0.3}
      />
      
      {/* Secondary wave - offset pattern */}
      <path
        d="M0 110 Q200 70, 400 110 T800 110 T1200 110"
        stroke="url(#waveGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity={0.2}
      />
      
      {/* Medical heartbeat pattern - primary */}
      <path
        d="M50 100 L150 100 L180 60 L210 140 L240 100 L340 100 L370 80 L400 120 L430 100 L530 100 L560 70 L590 130 L620 100 L720 100 L750 85 L780 115 L810 100 L910 100 L940 65 L970 135 L1000 100 L1150 100"
        stroke="url(#pulseGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0 2000"
          to="2000 0"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Secondary heartbeat pattern - variation */}
      <path
        d="M100 120 L200 120 L220 95 L240 145 L260 120 L360 120 L385 105 L410 135 L435 120 L535 120 L555 100 L575 140 L595 120 L695 120 L715 110 L735 130 L755 120 L855 120 L875 100 L895 140 L915 120 L1100 120"
        stroke="url(#glowGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.4}
      >
        <animate
          attributeName="stroke-dasharray"
          from="0 2000"
          to="2000 0"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Subtle glow effect - primary */}
      <path
        d="M50 100 L150 100 L180 60 L210 140 L240 100 L340 100 L370 80 L400 120 L430 100 L530 100 L560 70 L590 130 L620 100 L720 100 L750 85 L780 115 L810 100 L910 100 L940 65 L970 135 L1000 100 L1150 100"
        stroke="#10b981"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.2}
        filter="blur(4px)"
      />

      {/* Additional glow - blue tint */}
      <path
        d="M100 120 L200 120 L220 95 L240 145 L260 120 L360 120 L385 105 L410 135 L435 120 L535 120 L555 100 L575 140 L595 120 L695 120 L715 110 L735 130 L755 120 L855 120 L875 100 L895 140 L915 120 L1100 120"
        stroke="#3b82f6"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.15}
        filter="blur(3px)"
      />

      {/* Medical cross symbols - varied positions and colors */}
      <g opacity={0.2}>
        {/* Green crosses */}
        <rect x="100" y="95" width="2" height="10" fill="#10b981" />
        <rect x="95" y="100" width="12" height="2" fill="#10b981" />
        
        <rect x="900" y="95" width="2" height="10" fill="#10b981" />
        <rect x="895" y="100" width="12" height="2" fill="#10b981" />
        
        {/* Blue crosses */}
        <rect x="300" y="90" width="2" height="10" fill="#3b82f6" />
        <rect x="295" y="95" width="12" height="2" fill="#3b82f6" />
        
        <rect x="700" y="105" width="2" height="10" fill="#3b82f6" />
        <rect x="695" y="110" width="12" height="2" fill="#3b82f6" />
        
        {/* Mixed color crosses */}
        <rect x="500" y="95" width="2" height="10" fill="#10b981" />
        <rect x="495" y="100" width="12" height="2" fill="#3b82f6" />
        
        <rect x="1050" y="100" width="2" height="10" fill="#3b82f6" />
        <rect x="1045" y="105" width="12" height="2" fill="#10b981" />
      </g>
      
      {/* Pulse dots - animated */}
      <g opacity={0.3}>
        <circle cx="180" cy="60" r="3" fill="#10b981">
          <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="560" cy="70" r="3" fill="#3b82f6">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="940" cy="65" r="3" fill="#10b981">
          <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}
