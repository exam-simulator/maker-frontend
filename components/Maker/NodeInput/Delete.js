import { Mutation } from 'react-apollo'
import { Delete } from 'styled-icons/material/Delete'
import { deleteNode } from '../../../apollo/mutation/deleteNode'
import { examById } from '../../../apollo/query/exam'

export default React.memo(({ id, onClick }) => (
  <Mutation mutation={deleteNode} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(deleteNode, { loading }) => <Delete size={15} onClick={() => onClick(deleteNode)} />}
  </Mutation>
))
