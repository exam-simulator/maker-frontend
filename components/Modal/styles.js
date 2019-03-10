import styled, { keyframes } from 'styled-components'

const grow = keyframes`
  from {
    transform: translate(-50%, 1000px);
  }
  to {
    transform: translate(-50%, -50%);
  }
`

export const ModalWindow = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${props =>
    props.color === 'light'
      ? 'rgba(255, 255, 255, 0.5)'
      : props.color === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'transparent'};
`

export const ModalMain = styled.div`
  position: fixed;
  max-width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: top left;
  animation: ${grow} 500ms ease;
`
