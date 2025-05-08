import Image from 'next/image'

export type LogoStyle = 'e2b' | 'fragments'

export default function Logo({
  style = 'e2b',
  width = 24,
  height = 24,
  ...props
}: {
  style?: LogoStyle
  width?: number
  height?: number
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const logoSrc =
    style === 'fragments'
      ? '/thirdparty/logos/fragments-logo.png'
      : '/thirdparty/logos/e2b-logo.png'

  return (
    <Image
      src={logoSrc}
      alt={`${style} logo`}
      width={width}
      height={height}
      priority
      className="object-contain"
      {...props}
    />
  )
}
