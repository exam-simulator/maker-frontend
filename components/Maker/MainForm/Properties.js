import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateExam } from '../../../apollo/mutation/updateExam'
import Input from '../../Shared/Input'

const ExamProperties = styled.div`
  display: flex;
  flex-direction: column;
`

export default ({ id, title, description, code, time, pass, image, onChange }) => (
  <ExamProperties>
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
  </ExamProperties>
)
