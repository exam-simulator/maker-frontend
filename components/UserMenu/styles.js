import styled from 'styled-components'

export const MenuStyles = styled.div`
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 1;
  width: 13rem;
  display: ${props => (props.show ? 'block' : 'none')};
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows[1]};
  & > :first-child {
    margin-top: 0.25rem;
  }
  & > :last-child {
    margin-bottom: 0.25rem;
  }
  .item {
    display: flex;
    align-items: center;
    font: 1.25rem 'Open Sans Semi';
    color: ${props => props.theme.grey[10]};
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: ${props => props.theme.grey[1]};
    }
    svg {
      margin-right: 1rem;
    }
  }
`
