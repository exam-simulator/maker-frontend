import { Mutation } from 'react-apollo'
import { CheckBoxOutlineBlank } from 'styled-icons/material/CheckBoxOutlineBlank'
import { CheckBox } from 'styled-icons/material/CheckBox'
import { examById } from '../../../apollo/query/exam'
import { updateQuestion } from '../../../apollo/mutation/updateQuestion'

export default ({ id, answer, onClick }) => (
  <Mutation mutation={updateQuestion} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateQuestion, { loading }) => {
      if (answer)
        return (
          <CheckBox className="checked" size={15} onClick={() => onClick(updateQuestion, false)} />
        )
      else return <CheckBoxOutlineBlank size={15} onClick={() => onClick(updateQuestion, true)} />
    }}
  </Mutation>
)
