import styled from 'styled-components'

export const NodeInputStyles = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr 4rem;
  .variants {
    width: 7.5rem;
    height: 2rem;
    display: flex;
    border: 1px solid ${props => props.theme.grey[2]};
  }
  & > :last-child {
    justify-self: center;
    margin-top: 0.5rem;
    color: ${props => props.theme.grey[10]};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`

export const Option = styled.div`
  width: 3rem;
  display: grid;
  justify-items: center;
  align-items: center;
  background: ${props => (props.highlight ? props.theme.primary : props.theme.grey[0])};
  color: ${props => props.theme.grey[10]};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.primary};
  }
  svg {
    color: inherit;
  }
`
