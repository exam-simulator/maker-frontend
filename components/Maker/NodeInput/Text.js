import { Mutation } from 'react-apollo'
import { updateNode } from '../../../apollo/mutation/updateNode'
import { examById } from '../../../apollo/query/exam'
import Input from '../../Shared/Input'

export default React.memo(({ id, text, variant, onChange }) => (
  <Mutation mutation={updateNode} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateNode, { loading }) => (
      <Input
        type="textarea"
        width={400}
        label={
          loading
            ? 'Saving...'
            : variant === 0
            ? 'Source URL'
            : variant === 1
            ? 'Normal Text'
            : 'Header Text'
        }
        value={text}
        onChange={e => onChange(e, updateNode)}
        inputProps={{ name: 'text', spellCheck: false }}
      />
    )}
  </Mutation>
))
