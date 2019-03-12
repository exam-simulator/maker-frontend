import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateExam } from '../../../apollo/mutation/updateExam'
import Input from '../../Shared/Input'

export default React.memo(({ id, title, onChange }) => (
  <Mutation mutation={updateExam} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateExam, { loading }) => (
      <Input
        type="text"
        width={300}
        label={loading ? 'Saving...' : 'Title'}
        value={title}
        inputProps={{ name: 'title', maxLength: 50, spellCheck: false }}
        onChange={e => onChange(e, updateExam)}
      />
    )}
  </Mutation>
))
