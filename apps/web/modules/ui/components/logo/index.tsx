export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 124 24" role="img" aria-label="Reedline" {...props}>
      <rect width="24" height="24" rx="5" fill="#00665b" />
      <path d="M5 18l3-13h3L8 18zm6 0 3-10h3l-3 10zm6 0 2-6h2l-2 6z" fill="white" />
      <text x="30" y="18" fontFamily="inherit" fontWeight="650" fontSize="19" fill="currentColor">Reedline</text>
    </svg>
  );
};
