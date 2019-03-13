import { Mutation } from 'react-apollo'
import { FileDownload } from 'styled-icons/material/FileDownload'
import { examById } from '../../../../apollo/query/exam'
import { updateExam } from '../../../../apollo/mutation/updateExam'
import { Action } from './styles'
import ActionLoading from '../../ActionLoading'

export default ({ id, onDownloadExam }) => (
  <Mutation mutation={updateExam} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateExam, { loading }) => (
      <Action onClick={() => onDownloadExam(updateExam)}>
        {loading ? <ActionLoading size={2} /> : <FileDownload size={20} />}
      </Action>
    )}
  </Mutation>
)
