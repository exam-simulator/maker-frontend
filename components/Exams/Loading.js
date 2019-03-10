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
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${rotate} 1s infinite;
  color: ${props => props.theme.secondary} !important;
`

const LoadingStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({ size }) => (
  <LoadingStyles>
    <SpinnerRed size={size} />
  </LoadingStyles>
)
