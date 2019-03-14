import styled from 'styled-components'
import { lighten } from 'polished'
import { Mutation } from 'react-apollo'
import { requestVerification } from '../../../../apollo/mutation/requestVerification'
import { examById } from '../../../../apollo/query/exam'
import { VerifiedUser } from 'styled-icons/material/VerifiedUser'
import { Unverified } from 'styled-icons/octicons/Unverified'
import { Action } from './styles'
import ActionLoading from '../../ActionLoading'

const VerifyStyles = styled(Action)`
  background: ${props =>
    props.verified
      ? props.theme.tertiary
      : props.verificationPending
      ? lighten(0.2, props.theme.tertiary)
      : 'transparent'};
  border: 2px solid ${props => (props.verified ? props.theme.grey[10] : props.theme.grey[5])};
  color: ${props => (props.verified ? props.theme.grey[10] : props.theme.grey[5])};
`

export default ({ id, verified, verificationPending }) => (
  <Mutation
    mutation={requestVerification}
    variables={{ id }}
    refetchQueries={[{ query: examById, variables: { id } }]}
  >
    {(requestVerification, { loading }) => (
      <VerifyStyles
        title={
          verified
            ? 'Verified'
            : verificationPending
            ? 'Verification Pending'
            : 'Request Verification'
        }
        verified={verified}
        verificationPending={verificationPending}
        onClick={!verified && !verificationPending ? requestVerification : null}
      >
        {loading ? (
          <ActionLoading size={1.5} />
        ) : verificationPending ? (
          <Unverified size={20} />
        ) : (
          <VerifiedUser size={20} />
        )}
      </VerifyStyles>
    )}
  </Mutation>
)
