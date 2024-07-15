import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${(props) => props.theme['background-header-footer']};

  > nav {
    margin: 0 auto;
    max-width: 118rem;
    padding: 2rem 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > a > p {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.05rem;
      color: ${(props) => props.theme.gray};

      > svg {
        display: flex;
        font-size: 2.4rem;
        color: ${(props) => props.theme.gray};
        margin-bottom: 0.4rem;
      }
    }

    ul {
      display: flex;
      gap: 2rem;

      > a > li {
        color: ${(props) => props.theme.gray};
        font-size: 1.8rem;
        font-weight: 500;

        transition: filter 0.3s ease-in-out;

        &:hover {
          filter: brightness(150%);
        }
      }
    }
  }
`
