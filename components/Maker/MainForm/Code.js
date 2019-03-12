import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateExam } from '../../../apollo/mutation/updateExam'
import Input from '../../Shared/Input'

export default React.memo(({ id, code, onChange }) => (
  <Mutation mutation={updateExam} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateExam, { loading }) => (
      <Input
        type="text"
        width={300}
        label={loading ? 'Saving...' : 'Code'}
        hint="Certification Code e.g. 601-902"
        value={code}
        inputProps={{ name: 'code', maxLength: 8, spellCheck: false }}
        onChange={e => onChange(e, updateExam)}
      />
    )}
  </Mutation>
))
