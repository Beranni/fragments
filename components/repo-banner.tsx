import { GitHubIcon } from './icons'
// import { Separator } from './ui/separator' // Not used in this specific component
import { cn } from '@/lib/utils'

// import { StarFilledIcon } from '@radix-ui/react-icons' // Not used in this specific component

const REPO_URL = 'https://scyai.com'

export function RepoBanner({
  className,
  hidden = false,
}: {
  className?: string
  hidden?: boolean
}) {
  if (hidden) return null
  return (
    // 1. Add a wrapper div to handle the right alignment of the banner itself
    <div className={cn('flex justify-end', className)}>
      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View Fragments repository on GitHub`}
        className={cn(
          'bg-background overflow-hidden px-3 py-1 rounded-t-2xl',
          // 2. Change 'flex' to 'inline-flex' so the banner wraps its content tightly
          //    'gap-2 flex items-center border border-b-0',
          'gap-2 inline-flex items-center border border-b-0', // Key change here
          'transform-y-1 group relative',
          'before:absolute before:inset-0 dark:before:bg-[radial-gradient(circle_at_10%_-50%,rgba(255,255,255,0.1),transparent_10%)] before:rounded-t-2xl before:pointer-events-none',
          // Note: The className prop is now on the outer div. If you need to pass specific styles
          // to the <a> tag itself from outside, you might need another prop e.g., anchorClassName
        )}
      >
        {/* 3. Remove the flex-grow div */}
        {/* <div className="flex-grow"></div> */}
        <p className="text-sm font-medium text-foreground tracking-wide">
          Explore Use Cases
        </p>
        <div
          className="flex items-center gap-1 text-foreground/80"
          role="status"
          aria-live="polite"
        >
          <GitHubIcon
            className="w-4 h-4 transition-transform group-hover:text-[#e4b340] duration-200 ease-in-out"
            aria-label="GitHub stars" // This label is slightly confusing if it's not showing stars
            // Consider changing if it's just an icon for "use cases"
          />
        </div>
      </a>
    </div>
  )
}
