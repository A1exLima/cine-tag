import { styled } from 'styled-components'

export const SideBarContainer = styled.aside`
  position: absolute;
  z-index: 9999;

  .sideBar-open {
    transform: translateX(-25rem);
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 27.4rem;
  height: 100vh;
  padding: 4rem 0 0 4rem;
  background-color: ${(props) => props.theme['background-side-bar']};

  transition: transform 0.6s ease-in-out;

  box-shadow: 0rem 0rem 1.3rem -0.2rem rgba(0, 0, 0, 0.75);
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 5.8rem;

  > svg {
    display: flex;
    font-size: 3.4rem;
    color: ${(props) => props.theme.purple};
    margin-bottom: 0.55rem;
  }

  > p {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${(props) => props.theme.white};
    letter-spacing: 0.1rem;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > a > li {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.gray};

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.gray};
  cursor: pointer;

  > svg {
    font-size: 2.6rem;
  }
`
