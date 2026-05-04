import type { SVGProps } from "react";

/* ---------- Microsoft 365 — official 4-square logo ---------- */
export function M365Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

/* ---------- Oracle — stylized "O" ring (no trademark, branded color) ---------- */
export function OracleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="12" rx="9.2" ry="6.2" />
    </svg>
  );
}

/* ---------- SQL Server — stacked database cylinder ---------- */
export function SqlServerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="4" rx="8" ry="2.6" />
      <path d="M4 4v6c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6V4c0 1.4-3.6 2.6-8 2.6S4 5.4 4 4z" />
      <path
        d="M4 11v6c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6v-6c0 1.4-3.6 2.6-8 2.6S4 12.4 4 11z"
        opacity="0.75"
      />
      <path
        d="M14.5 16.4l1.4-.4-1.1-.7c-.2-.1-.3-.4-.2-.6.1-.2.4-.3.6-.2l1.7 1c.3.2.4.6.1.9-.2.2-.5.4-.8.4l-1.7.5c-.1 0-.2 0-.3-.1-.1-.2 0-.4.3-.8z"
        fill="#fff"
        opacity="0.85"
      />
    </svg>
  );
}
