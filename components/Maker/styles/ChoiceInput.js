import styled from 'styled-components'

export const ChoiceInputStyles = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr 4rem;
  & > :first-child {
    justify-self: flex-start;
    margin-top: 0.5rem;
    color: ${props => props.theme.grey[10]};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.black};
    }
  }
  & > :last-child {
    justify-self: center;
    color: ${props => props.theme.grey[10]};
    margin-top: 0.5rem;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`
