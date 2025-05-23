import { cn } from '@/lib/utils'

interface IconProps {
  className?: string
}

export const GitHubIcon = ({ className }: IconProps) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 121.76 122.88"
    className={cn('w-4 h-4', className)}
    fill="currentColor"
  >
    <title>discover-explore</title>
    <path d="M55.19,0A55.18,55.18,0,0,1,101,85.93l20.74,22.61-15.69,14.34-20-22a55.72,55.72,0,0,1-9.81,5.28A55.19,55.19,0,1,1,55.19,0ZM68.47,51.5l-6.3,3.58A7.11,7.11,0,0,1,62,56.45a7,7,0,0,1-8.5,4.91,7.42,7.42,0,0,1-1.38-.53l-6.68,3.8L72.32,84.46l-3.85-33ZM41.91,58.88l6.42-3.65a6.84,6.84,0,0,1,.21-2.37A7,7,0,0,1,57,48a7,7,0,0,1,2.23,1L65,45.75,38.06,25.92l3.85,32.95ZM86.37,24A43.91,43.91,0,1,0,96,38.32,44.18,44.18,0,0,0,86.37,24Z" />
  </svg>
)
