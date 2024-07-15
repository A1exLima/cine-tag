import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme['background-header-footer']};
  > p {
    padding: 2rem;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.gray};
  }
`
