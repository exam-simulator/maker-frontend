import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateExam } from '../../../apollo/mutation/updateExam'
import Input from '../../Shared/Input'

export default React.memo(({ id, pass, onChange }) => (
  <Mutation mutation={updateExam} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateExam, { loading }) => (
      <Input
        type="number"
        width={300}
        label={loading ? 'Saving...' : 'Passing Score'}
        hint="Percentage [ 0 - 100 ]"
        value={pass}
        inputProps={{ name: 'pass', min: 0, max: 100 }}
        onChange={e => onChange(e, updateExam)}
      />
    )}
  </Mutation>
))
