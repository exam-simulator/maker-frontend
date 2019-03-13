import { Mutation } from 'react-apollo'
import { Delete } from 'styled-icons/material/Delete'
import { examsByUser } from '../../../../apollo/query/examsByUser'
import { deleteExam } from '../../../../apollo/mutation/deleteExam'
import { Action } from './styles'
import ActionLoading from '../../ActionLoading'

export default ({ user, onDeleteExam }) => (
  <Mutation
    mutation={deleteExam}
    refetchQueries={[{ query: examsByUser, variables: { id: user.id } }]}
  >
    {(deleteExam, { loading }) => (
      <Action onClick={() => onDeleteExam(deleteExam)}>
        {loading ? <ActionLoading size={2} /> : <Delete size={20} />}
      </Action>
    )}
  </Mutation>
)
