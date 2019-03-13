import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { Public } from 'styled-icons/material/Public'
import { examById } from '../../../../apollo/query/exam'
import { updateExam } from '../../../../apollo/mutation/updateExam'
import { Action } from './styles'
import ActionLoading from '../../ActionLoading'

const PublishedStyles = styled(Action)`
  background: ${props => (props.published ? props.theme.primary : 'transparent')};
  border: 2px solid ${props => (props.published ? props.theme.grey[10] : props.theme.grey[5])};
  color: ${props => (props.published ? props.theme.grey[10] : props.theme.grey[5])};
`

export default ({ id, published }) => (
  <Mutation
    mutation={updateExam}
    variables={{ id, data: { published: !published } }}
    refetchQueries={[{ query: examById, variables: { id } }]}
  >
    {(updateExam, { loading }) => (
      <PublishedStyles published={published} onClick={updateExam}>
        {loading ? <ActionLoading size={2} /> : <Public size={20} />}
      </PublishedStyles>
    )}
  </Mutation>
)
