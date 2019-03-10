import styled from 'styled-components'

export const ControlsStyles = styled.div`
  position: fixed;
  bottom: 0;
  left: ${props => `calc(100vw - ${props.theme.maxWidth / 2})`};
  height: 6rem;
  width: ${props => props.theme.maxWidth};
  display: grid;
  grid-template-columns: repeat(3, 4.4rem) 1fr 5rem;
  grid-gap: 1rem;
  align-items: center;
  background: ${props => props.theme.grey[0]};
  .questions {
    overflow: hidden;
    .wrapper {
      display: grid;
      grid-template-columns: ${props => `repeat(${props.items}, 4.4rem)`};
      grid-gap: 1rem;
      align-items: center;
      transform: ${props => `translateX(-${props.width * props.shift}px)`};
      transition: 1s cubic-bezier(0, 1, 1, 1);
    }
  }
`

export const Box = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.grey[5]};
  border-radius: 2px;
  outline: 2px solid ${props => (props.highlight ? props.theme.primary : 'transparent')};
  color: ${props => props.theme.grey[5]};
  font: 1.5rem 'Open Sans Semi';
  cursor: pointer;
  margin: 0.2rem;
  &:hover {
    outline: 2px solid ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.grey[10]};
    color: ${props => props.theme.grey[10]};
  }
  .add,
  .settings,
  .cover,
  .arrow {
    width: 2rem;
    height: 2rem;
    color: inherit;
  }
`

export const ArrowBox = styled(Box)`
  border: 2px solid ${props => (props.disable ? props.theme.grey[2] : props.theme.grey[5])};
  color: ${props => (props.disable ? props.theme.grey[2] : props.theme.grey[5])};
  &:hover {
    outline: 2px solid ${props => (props.disable ? 'transparent' : props.theme.primary)};
    border: 2px solid ${props => (props.disable ? props.theme.grey[2] : props.theme.grey[10])};
    color: ${props => (props.disable ? props.theme.grey[2] : props.theme.grey[10])};
  }
`
