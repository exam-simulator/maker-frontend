import { Mutation } from 'react-apollo'
import { Add } from 'styled-icons/material/Add'
import { createQuestion } from '../../../apollo/mutation/createQuestion'
import { examById } from '../../../apollo/query/exam'
import { Box } from '../styles/Controls'
import ActionLoading from '../ActionLoading'

export default ({ id, onClick }) => (
  <Mutation
    mutation={createQuestion}
    variables={{ id }}
    refetchQueries={[{ query: examById, variables: { id } }]}
    awaitRefetchQueries={true}
  >
    {(createQuestion, { loading }) => (
      <Box onClick={() => onClick(createQuestion)}>
        {loading ? <ActionLoading size={2.5} /> : <Add className="add" />}
      </Box>
    )}
  </Mutation>
)
