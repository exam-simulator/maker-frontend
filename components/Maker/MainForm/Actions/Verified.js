import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { VerifiedUser } from 'styled-icons/material/VerifiedUser'
import { Action } from './styles'

const VerifyStyles = styled(Action)``

export default ({}) => (
  <VerifyStyles>
    <VerifiedUser size={20} />
  </VerifyStyles>
)
