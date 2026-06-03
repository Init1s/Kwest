type InstagramIconLinkProps = {
  /** Pixel size for both width and height of the icon. */
  size?: number;
  /** Optional class names merged onto the anchor (e.g. spacing, colour). */
  className?: string;
  /** Override the destination if needed; defaults to the brand handle. */
  href?: string;
  /** Handle for the screen-reader label; defaults to "@kwest_the_barber". */
  handle?: string;
};

const HANDLE = "@kwest_the_barber";
const INSTAGRAM_URL = "https://www.instagram.com/kwest_the_barber/";

export function InstagramIconLink({
  size = 22,
  className = "text-ash transition-colors hover:text-gold",
  href = INSTAGRAM_URL,
  handle = HANDLE,
}: InstagramIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Instagram — ${handle}`}
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
      </svg>
    </a>
  );
}
