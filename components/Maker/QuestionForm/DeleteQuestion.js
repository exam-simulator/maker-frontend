import { Mutation } from 'react-apollo'
import { Delete } from 'styled-icons/material/Delete'
import { deleteQuestion } from '../../../apollo/mutation/deleteQuestion'
import { examById } from '../../../apollo/query/exam'
import { Action } from '../MainForm/Actions/styles'
import ActionLoading from '../ActionLoading'

export default React.memo(({ examID, questionID, onClick }) => (
  <Mutation
    mutation={deleteQuestion}
    variables={{ id: questionID }}
    refetchQueries={[{ query: examById, variables: { id: examID } }]}
  >
    {(deleteQuestion, { loading }) => (
      <Action onClick={() => onClick(deleteQuestion)}>
        {loading ? <ActionLoading size={2.5} /> : <Delete size={20} />}
      </Action>
    )}
  </Mutation>
))
