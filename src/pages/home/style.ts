import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;

  > h1 {
    padding: 4rem 4rem 0;
    font-size: 2.6rem;
    font-weight: 600;
    color: ${(props) => props.theme.gray};
    text-align: center;
  }
`

export const Content = styled.article`
  display: flex;
  justify-content: center;

  > section {
    margin: 0 auto;
    width: 118rem;
    padding: 4rem;

    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(25.5rem, 1fr));
    gap: 2rem;
  }
`
