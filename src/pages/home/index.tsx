import { Content, HomeContainer } from './style'

import { Banner } from '../../components/banner'
import { Card } from '../../components/card'
import { BiCameraMovie } from 'react-icons/bi'

export function Home() {
  return (
    <HomeContainer>
      <Banner movieIcon={<BiCameraMovie />} />
      <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      <Content>
        <section>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </Content>
    </HomeContainer>
  )
}
