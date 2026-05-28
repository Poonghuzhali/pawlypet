export default function Logo({ className = '', serif = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="19" cy="19" r="19" fill="#8B2E2E" />
        <ellipse cx="12.5" cy="11" rx="3.2" ry="3.8" fill="#FFFFFF" />
        <ellipse cx="25.5" cy="11" rx="3.2" ry="3.8" fill="#FFFFFF" />
        <ellipse cx="8.5" cy="18.5" rx="2.8" ry="3.4" fill="#FFFFFF" />
        <ellipse cx="29.5" cy="18.5" rx="2.8" ry="3.4" fill="#FFFFFF" />
        <ellipse cx="19" cy="26.5" rx="6.5" ry="5.5" fill="#FFFFFF" />
      </svg>
      <span
        className={`text-[1.65rem] font-extrabold leading-none tracking-tight ${serif ? 'font-serif' : 'font-sans'}`}
        style={{ color: '#8B2E2E' }}
      >
        Pawly
      </span>
    </span>
  )
}
