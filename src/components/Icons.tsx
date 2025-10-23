import React from "react";

interface IconProps {
  className?: string;
  [key: string]: any;
}

export const GithubIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width="256" height="256" fill="#fff" rx="60" />
      <rect width="256" height="256" fill="#0A66C2" rx="60" />
      <circle cx="68" cy="88" r="20" fill="#fff" />
      <path fill="#fff" d="M48 128h40v112H48z" />
      <path
        fill="#fff"
        d="M108 128h38v16h.5c5.5-10.5 19-21.5 39-21.5 42 0 49.5 27.5 49.5 63.5V240h-40v-52c0-15-.5-34.5-21-34.5s-24.5 16.5-24.5 33.5V240h-40V128z"
      />
    </g>
  </svg>
);

export const MediumIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width="256" height="256" fill="#12100E" rx="60" />
      <path
        fill="#fff"
        d="M71.5 142a.8.8 0 0 1 0-.1c0-27.9 22.6-50.5 50.5-50.5s50.5 22.6 50.5 50.5-22.6 50.5-50.5 50.5-50.5-22.6-50.5-50.4zM184.1 142c0-26.3 11.3-47.5 25.3-47.5s25.3 21.3 25.3 47.5-11.3 47.5-25.3 47.5-25.3-21.2-25.3-47.5z"
      />
      <path
        fill="#fff"
        d="M225.9 142c0-23.6 4-42.6 9-42.6s9 19.1 9 42.6-4 42.6-9 42.6-9-19-9-42.6z"
      />
    </g>
  </svg>
);

export const DevIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width="256" height="256" fill="#0A0A0A" rx="60" />
      <path
        fill="#fff"
        d="M141.5 71.5H114L97.5 184.5h27.5l3.2-21.5h23.3l3.2 21.5H182L141.5 71.5zm-21.5 71.5L128 100l7.9 43h-15.9zm57.9-43h27.5v21.5h-27.5V100zm0 32.2h27.5v21.5h-27.5v-21.5zm0 32.3h27.5V186h-27.5v-21.5z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <circle cx="12" cy="12" r="3">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.4s"
          dur="0.4s"
          values="0;1"
        />
      </circle>
    </g>
  </svg>
);

export const MoonIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.09L18.5 13.06L20.2 14.09L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="6" fill="#000">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="6;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;5"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const InstagramIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <defs>
      <radialGradient id="instagram-gradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#833ab4" />
        <stop offset="50%" stopColor="#fd1d1d" />
        <stop offset="100%" stopColor="#fcb045" />
      </radialGradient>
    </defs>
    <rect width="256" height="256" fill="url(#instagram-gradient)" rx="60" />
    <rect x="48" y="48" width="160" height="160" fill="none" stroke="#fff" strokeWidth="16" rx="32" />
    <circle cx="128" cy="128" r="40" fill="none" stroke="#fff" strokeWidth="16" />
    <circle cx="180" cy="76" r="12" fill="#fff" />
  </svg>
);

export const TikTokIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect width="256" height="256" fill="#000" rx="60" />
    <path
      fill="#ff0050"
      d="M133.5 56.5v80.3c0 22.4-18.2 40.6-40.6 40.6s-40.6-18.2-40.6-40.6 18.2-40.6 40.6-40.6c4.5 0 8.8.7 12.8 2.1V76.8c-4.1-.6-8.3-.9-12.8-.9-37.3 0-67.5 30.2-67.5 67.5s30.2 67.5 67.5 67.5 67.5-30.2 67.5-67.5V101c14.7 10.5 32.7 16.7 52.1 16.7V91.3c-19.4 0-35.1-15.7-35.1-35.1H133.5z"
    />
    <path
      fill="#25f4ee"
      d="M160.4 56.2H133.5v80.3c0 22.4-18.2 40.6-40.6 40.6-7.1 0-13.8-1.8-19.6-5.1 7.8 12.2 21.4 20.3 36.7 20.3 22.4 0 40.6-18.2 40.6-40.6V96.8c14.7 10.5 32.7 16.7 52.1 16.7V87.1c-19.4 0-35.1-15.7-35.1-35.1-5.2 2.7-11.1 4.2-17.2 4.2z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect width="256" height="256" fill="#1d9bf0" rx="60" />
    <path
      fill="#fff"
      d="M199.572 91.411c.11 1.587.11 3.174.11 4.776 0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.348 5.85.52 8.79.51a74.103 74.103 0 0 0 45.865-15.839 36.994 36.994 0 0 1-34.501-25.645 36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.463a36.64 36.64 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582 36.995 36.995 0 0 1 62.971-33.746A74.535 74.535 0 0 0 212.985 60.2a37.246 37.246 0 0 1-16.227 20.424A73.42 73.42 0 0 0 218 77.261a75.128 75.128 0 0 1-18.428 19.15Z"
    />
  </svg>
);