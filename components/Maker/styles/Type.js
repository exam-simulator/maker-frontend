import styled from 'styled-components'

export const TypeStyles = styled.div`
  position: relative;
  & > :first-child {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.grey[5]};
    border-radius: 2px;
    color: ${props => props.theme.grey[5]};
    padding: 0.4rem 1rem;
    cursor: pointer;
    &:hover {
      outline: 2px solid ${props => props.theme.primary};
      color: ${props => props.theme.grey[10]};
    }
    span {
      font: 1.25rem 'Open Sans Semi';
      color: inherit;
    }
    svg {
      color: inherit;
    }
  }
`

export const Options = styled.div`
  position: absolute;
  top: 3rem;
  z-index: 1;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  border: 1px solid ${props => props.theme.grey[5]};
  border-radius: 2px;
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadows[5]};
`

export const Option = styled.div`
  width: 20rem;
  font: 1.25rem 'Open Sans Semi';
  color: ${props => props.theme.grey[5]};
  padding: 0.4rem 1rem;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.grey[0]};
    color: ${props => props.theme.grey[10]};
  }
`
