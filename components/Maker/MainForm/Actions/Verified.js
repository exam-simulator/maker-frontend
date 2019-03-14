import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { VerifiedUser } from 'styled-icons/material/VerifiedUser'
import { Action } from './styles'

const VerifyStyles = styled(Action)`
  background: ${props =>
    props.verified
      ? props.theme.tertiary
      : props.verificationPending
      ? props.theme.primary
      : 'transparent'};
  border: 2px solid
    ${props =>
      props.verified || props.verificationPending ? props.theme.grey[10] : props.theme.grey[5]};
  color: ${props =>
    props.verified || props.verificationPending ? props.theme.grey[10] : props.theme.grey[5]};
`

export default ({ id, verified, verificationPending }) => (
  <VerifyStyles
    title={
      verified ? 'Verified' : verificationPending ? 'Verification Pending' : 'Request Verification'
    }
    verified={true}
    verificationPending={verificationPending}
  >
    <VerifiedUser size={20} />
  </VerifyStyles>
)
