import { BannerContainer } from './style'

interface BannerProps {
  movieIcon: JSX.Element
}

export function Banner({ movieIcon }: BannerProps) {
  return (
    <BannerContainer>
      <div>{movieIcon}</div>
    </BannerContainer>
  )
}
