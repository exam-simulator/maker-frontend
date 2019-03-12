import styled, { keyframes } from 'styled-components'
import { Spinner2 as Spinner } from 'styled-icons/icomoon/Spinner2'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
transform: rotate(360deg);
  }
`

const SpinnerRed = styled(Spinner)`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  animation: ${rotate} 1s infinite;
  color: ${props => props.theme.secondary} !important;
`

export default React.memo(({ size }) => <SpinnerRed size={size} />)
