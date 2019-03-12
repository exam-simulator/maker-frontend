import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateExam } from '../../../apollo/mutation/updateExam'
import Input from '../../Shared/Input'

export default React.memo(({ id, image, onChange }) => (
  <Mutation mutation={updateExam} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateExam, { loading }) => (
      <Input
        type="text"
        width={300}
        label={loading ? 'Saving...' : 'Logo URL'}
        hint="Image with 1:1 size ratio"
        value={image}
        inputProps={{ name: 'image', spellCheck: false }}
        onChange={e => onChange(e, updateExam)}
      />
    )}
  </Mutation>
))
