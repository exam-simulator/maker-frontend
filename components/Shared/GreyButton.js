import styled from 'styled-components'

export const GreyButton = styled.button`
  color: ${props => props.theme.grey[3]};
  background: ${props => props.theme.white};
  text-transform: uppercase;
  font: 1.2rem 'Open Sans Semi';
  border: 2px solid ${props => props.theme.grey[3]};
  padding: 0.75rem 2rem;
  transition: 0.33s;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.grey[5]};
    border: 2px solid ${props => props.theme.grey[5]};
  }
`
