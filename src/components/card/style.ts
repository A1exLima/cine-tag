import { styled } from 'styled-components'

interface PropsCardContainer {
  $background: string
}

export const CardContainer = styled.div<PropsCardContainer>`
  position: relative;
  border: 1px solid ${(props) => props.theme['gray-border']};
  border-radius: 2rem;
  width: 25.5rem;
  height: 30rem;

  > figure {
    width: 100%;
    height: 100%;
    border-radius: 2rem;

    background: url(${(props) => props.$background});
    background-size: cover;
    background-repeat: no-repeat;
  }

  > button {
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 2;
    opacity: 0.8;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.2) 89%
    );

    width: 3.2rem;
    height: 3.2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.83rem;

    > svg {
      font-size: 1.4rem;
      color: ${(props) => props.theme.purple2};
    }

    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  > div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8.6rem;
    border-radius: 0 0 1.75rem 1.75rem;
    padding: 1.6rem;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.7399334733893557) 49%
    );

    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    > p {
      color: ${(props) => props.theme.dark};
    }

    > p:first-child {
      font-size: 1.6rem;
      font-weight: 600;
    }

    > p:last-child {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
`
