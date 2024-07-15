import { CardContainer } from './style'
import { FaHeart } from 'react-icons/fa'
import image1 from '../../images/video1.jpg'

export function Card() {
  return (
    <CardContainer $background={image1}>
      <figure></figure>
      <button>
        <FaHeart />
      </button>
      <div>
        <p>Tokio Tray</p>
        <p>2022 | Action Movie</p>
      </div>
    </CardContainer>
  )
}
