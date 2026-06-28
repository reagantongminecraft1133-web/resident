import { cn } from '@/lib/utils'

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <a
      href="#home"
      className={cn('group flex items-center gap-2.5', className)}
      aria-label="The Room Residence — home"
    >
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white transition-colors group-hover:bg-[#C5A880] group-hover:text-black group-hover:border-[#C5A880]',
          inverted
            ? 'border-white/20 bg-white/10 text-white group-hover:bg-white group-hover:text-foreground'
            : 'border-black/10 bg-oat bg-transparent text-white border-white/100 group-hover:border-black/20',
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 10.5 12 4l8 6.5" />
          <path d="M6 9.5V20h12V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-[15px] font-semibold tracking-tight',
            inverted ? 'text-white' : 'text-foreground',
          )}
        >
          The Room Residence
        </span>
        <span
          className={cn(
            'mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em]',
            inverted ? 'text-white/55' : 'text-foreground/45',
            
          )}
        >
          Sibu
        </span>
      </span>
    </a>
  )
}
