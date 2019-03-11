import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { Public } from 'styled-icons/material/Public'
import { FileDownload } from 'styled-icons/material/FileDownload'
import { Delete } from 'styled-icons/material/Delete'
import { updateExam } from '../../../apollo/mutation/updateExam'
import { deleteExam } from '../../../apollo/mutation/deleteExam'
import { examById } from '../../../apollo/query/exam'
import { me } from '../../../apollo/query/me'

const ActionsStyles = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

export const Action = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 2px;
  border: 2px solid ${props => props.theme.grey[5]};
  color: ${props => props.theme.grey[5]};
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    outline: 2px solid ${props => props.theme.primary};
    color: ${props => props.theme.grey[10]};
    border: 2px solid ${props => props.theme.grey[10]};
  }
  svg {
    color: inherit;
  }
`

const Published = styled(Action)`
  background: ${props => (props.published ? props.theme.primary : 'transparent')};
  border: 2px solid ${props => (props.published ? props.theme.grey[10] : props.theme.grey[5])};
  color: ${props => (props.published ? props.theme.grey[10] : props.theme.grey[5])};
`

export default ({ id, published, onDownloadExam, onDeleteExam }) => (
  <ActionsStyles>
    <Mutation
      mutation={updateExam}
      variables={{ id, data: { published: !published } }}
      refetchQueries={[{ query: examById, variables: { id } }]}
    >
      {(updateExam, { loading }) => (
        <Published published={published} onClick={updateExam}>
          <Public size={20} />
        </Published>
      )}
    </Mutation>
    <Mutation
      mutation={updateExam}
      refetchQueries={[{ query: me }, { query: examById, variables: { id } }]}
    >
      {(updateExam, { loading }) => (
        <Action onClick={() => onDownloadExam(updateExam)}>
          <FileDownload size={20} />
        </Action>
      )}
    </Mutation>
    <Mutation mutation={deleteExam} refetchQueries={[{ query: me }]}>
      {(deleteExam, { loading }) => (
        <Action onClick={() => onDeleteExam(deleteExam)}>
          <Delete size={20} />
        </Action>
      )}
    </Mutation>
  </ActionsStyles>
)
