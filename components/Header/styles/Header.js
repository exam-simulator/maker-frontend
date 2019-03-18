import styled from 'styled-components'

export const HeaderStyles = styled.header`
  height: 6rem;
  background: ${props => props.theme.primary};
  & > :first-child {
    max-width: ${props => props.theme.maxWidth};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    font: 1.4rem 'Open Sans Semi';
    .logo {
      width: 3rem;
      height: 3rem;
      margin-left: 3rem;
      cursor: pointer;
    }
    .links {
      display: flex;
      align-items: center;
    }
  }
`

export const HeaderLink = styled.a`
  font: 1.4rem 'Open Sans Semi';
  padding-right: 3rem;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.secondary};
  }
`
