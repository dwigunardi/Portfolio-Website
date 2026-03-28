import React from 'react';

export function LogoGeometric({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dgm-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38b6ff" /> {/* Biru khas portofolio Anda */}
            <stop offset="1" stopColor="#8b5cf6" /> {/* Ungu modern */}
          </linearGradient>
        </defs>

        {/* Outline D & G */}
        <path
          d="M 20 80 V 20 H 50 C 75 20 85 35 85 50 C 85 65 75 80 50 80 H 20"
          stroke="url(#dgm-grad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Garis tengah untuk mempertegas huruf G */}
        <path
          d="M 65 50 H 85"
          stroke="url(#dgm-grad)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Siluet huruf M di bagian dalam */}
        <path
          d="M 35 75 V 35 L 50 50 L 65 35 V 75"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Teks opsional di sebelahnya */}
      <span className="text-xl font-bold tracking-widest text-white hidden md:block">
        DGM<span className="text-blue-500">.</span>
      </span>
    </div>
  );
}

export function LogoTech({ className = "w-auto h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simbol Abstrak Chevron / Code (</>) */}
      <path
        d="M 15 12 L 30 25 L 15 38"
        stroke="#38b6ff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 28 12 L 43 25 L 28 38"
        stroke="#8b5cf6"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tipografi "DGM" */}
      <text
        x="60"
        y="36"
        fill="currentColor"
        className="text-neutral-900 dark:text-white"
        fontSize="28"
        fontWeight="900"
        fontFamily="system-ui, sans-serif"
        letterSpacing="2"
      >
        DGM
      </text>

      {/* Aksen Titik Biru Kecil di akhir teks */}
      <circle cx="138" cy="35" r="4.5" fill="#38b6ff" />
    </svg>
  );
}

export function LogoFavicon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="fav-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stop-color="#38b6ff" />
          <stop offset="1" stop-color="#8b5cf6" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="14" fill="#0a0a0a" />

      <path d="M 20 18 V 46 H 32 C 43 46 48 39 48 32 C 48 25 43 18 32 18 H 20 Z"
        stroke="url(#fav-grad)"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round" />

      <circle cx="32" cy="32" r="4" fill="#38b6ff" />
    </svg>
  );
}