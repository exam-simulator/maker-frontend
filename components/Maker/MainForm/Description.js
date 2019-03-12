import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateExam } from '../../../apollo/mutation/updateExam'
import Input from '../../Shared/Input'

export default React.memo(({ id, description, onChange }) => (
  <Mutation mutation={updateExam} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateExam, { loading }) => (
      <Input
        type="textarea"
        width={300}
        label={loading ? 'Saving...' : 'Description'}
        value={description}
        inputProps={{ name: 'description', maxLength: 280, spellCheck: false }}
        onChange={e => onChange(e, updateExam)}
      />
    )}
  </Mutation>
))
