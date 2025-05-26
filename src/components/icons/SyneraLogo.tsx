import type { SVGProps } from 'react';

export function SyneraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <title>Synera Logo</title>
      {/* A stylized 'S' or abstract mark */}
      <path d="M80 20 C40 20, 40 40, 50 50 S60 80, 20 80" />
      <path d="M20 20 h60 v60 h-60 z" opacity="0.1" /> 
    </svg>
  );
}
