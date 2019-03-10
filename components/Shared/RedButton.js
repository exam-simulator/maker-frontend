import styled from 'styled-components'
import { darken } from 'polished'

export const RedButton = styled.button`
  text-transform: uppercase;
  color: ${props => props.theme.white};
  background: ${props => props.theme.secondary};
  padding: 1.25rem 2.5rem;
  font: 1.1rem 'Open Sans Semi';
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${props => darken(0.1, props.theme.secondary)};
  }
`
