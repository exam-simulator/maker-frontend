import styled from 'styled-components'

export const AvatarStyles = styled.div`
  position: relative;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid transparent;
    background: ${props => props.theme.grey[0]};
    margin-right: 3rem;
    cursor: pointer;
    &:hover {
      border: 1px solid ${props => props.theme.secondary};
    }
  }
`
