import styled from 'styled-components'
import banner from '../../images/banner.jpg'

export const BannerContainer = styled.div`
  height: 30rem;
  margin-top: 6.5rem;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  > div {
    width: 118rem;
    padding: 2rem 4rem;

    > svg {
      display: flex;
      font-size: 6rem;
      color: ${(props) => props.theme.gray};
    }
  }
`
