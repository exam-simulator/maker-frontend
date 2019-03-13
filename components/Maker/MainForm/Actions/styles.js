import styled from 'styled-components'

export const Action = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 2px;
  border: 2px solid ${props => props.theme.grey[5]};
  color: ${props => props.theme.grey[5]};
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    outline: 2px solid ${props => props.theme.primary};
    color: ${props => props.theme.grey[10]};
    border: 2px solid ${props => props.theme.grey[10]};
  }
  svg {
    color: inherit;
  }
`
