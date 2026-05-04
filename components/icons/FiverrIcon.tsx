import type { SVGProps } from "react";

/**
 * Fiverr "f" mark, simplified for inline SVG use.
 */
export default function FiverrIcon({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M16.25 16.25h-2.5v-6.5H8.5v6.5H6V9.75H4v-2.5h2v-.75A3.5 3.5 0 0 1 9.5 3h2v2.5h-2a1 1 0 0 0-1 1v.75h7.75v9zM15 6.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  );
}
