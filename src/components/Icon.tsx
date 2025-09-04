// Navigation Icons
export const ArrowUpRight = ({
  className = 'w-6 h-6',
}: {
  className?: string
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow pointing up and right</title>
      <path
        d="M3 13L13 3L12.6428 3.35715"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M4.42773 3H12.9992V11.5715"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export const ChevronLeft = ({
  className = 'w-6 h-6',
}: {
  className?: string
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron pointing left</title>
      <path
        d="M13.9998 6L7.99976 12L13.9998 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export const ChevronRight = ({
  className = 'w-6 h-6',
}: {
  className?: string
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron pointing right</title>
      <path
        d="M10 6L16 12L10 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}

export const ChevronDown = ({
  className = 'w-6 h-6',
}: {
  className?: string
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron pointing down</title>
      <g clipPath="url(#clip0_3226_1461)">
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_3226_1461">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const ChevronUp = ({
  className = 'w-6 h-6',
}: {
  className?: string
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chevron pointing up</title>
      <g clipPath="url(#clip0_3226_1589)">
        <path
          d="M6 15L12 9L18 15"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_3226_1589">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

// Social Media Icons
export const Facebook = ({ className = 'w-6 h-6' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facebook</title>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export const Twitter = ({ className = 'w-6 h-6' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X (Twitter)</title>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export const Instagram = ({
  className = 'w-6 h-6',
}: {
  className?: string
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instagram</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.903 4.903 0 001.153 1.772 4.903 4.903 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.901 4.901 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.504.207 1.857.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.054.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.975-.207 1.504-.344 1.857a3.097 3.097 0 01-.748 1.15 3.098 3.098 0 01-1.15.748c-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058-2.67 0-2.987-.01-4.041-.058-.975-.045-1.504-.207-1.857-.344a3.098 3.098 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04 0-2.67.01-2.987.058-4.041.045-.975.207-1.504.344-1.857.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.041-.058zm0 3.064a5.134 5.134 0 100 10.268 5.134 5.134 0 000-10.268zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
      />
    </svg>
  )
}

export const LinkedIn = ({ className = 'w-6 h-6' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path
        d="M4.98292 6.376C6.19132 6.376 7.17092 5.3964 7.17092 4.188C7.17092 2.9796 6.19132 2 4.98292 2C3.77452 2 2.79492 2.9796 2.79492 4.188C2.79492 5.3964 3.77452 6.376 4.98292 6.376Z"
        fill="currentColor"
      />
      <path
        d="M9.23673 8.03437V20.1734H13.0057V14.1704C13.0057 12.5864 13.3037 11.0524 15.2677 11.0524C17.2047 11.0524 17.2287 12.8634 17.2287 14.2704V20.1744H20.9997V13.5174C20.9997 10.2474 20.2957 7.73438 16.4737 7.73438C14.6387 7.73438 13.4087 8.74137 12.9057 9.69438H12.8547V8.03437H9.23673ZM3.09473 8.03437H6.86973V20.1734H3.09473V8.03437Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const YouTube = ({ className = 'w-6 h-6' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>YouTube</title>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
