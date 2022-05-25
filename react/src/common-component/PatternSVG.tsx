export default function PatternSVG() {
  return (
    <svg className="w-full h-full">
      <defs>
        <pattern id="doodad" width="40" height="40" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
          <rect width="100%" height="100%" fill="#2a4365" />
          <path d="M0 29a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11zM0 69a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11z" fill="#1a202c" />
          <path d="M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z" fill="#ecc94b" />
        </pattern>
      </defs>
      <rect fill="url(#doodad)" height="100%" width="100%" />
    </svg>
  );
}
