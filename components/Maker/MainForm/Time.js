import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateExam } from '../../../apollo/mutation/updateExam'
import Input from '../../Shared/Input'

export default React.memo(({ id, time, onChange }) => (
  <Mutation mutation={updateExam} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateExam, { loading }) => (
      <Input
        type="number"
        width={300}
        label={loading ? 'Saving...' : 'Time Limit'}
        hint="Minutes"
        value={time}
        inputProps={{ name: 'time', min: 0, max: 1000 }}
        onChange={e => onChange(e, updateExam)}
      />
    )}
  </Mutation>
))
