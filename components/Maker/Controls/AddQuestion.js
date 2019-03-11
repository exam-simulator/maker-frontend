import { Mutation } from 'react-apollo'
import { Add } from 'styled-icons/material/Add'
import { createQuestion } from '../../../apollo/mutation/createQuestion'
import { Box } from '../styles/Controls'
import styled, { keyframes } from 'styled-components'
import { Spinner2 as Spinner } from 'styled-icons/icomoon/Spinner2'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
transform: rotate(360deg);
  }
`

const SpinnerRed = styled(Spinner)`
  width: 2.5rem;
  height: 2.5rem;
  animation: ${rotate} 1s infinite;
  color: ${props => props.theme.secondary} !important;
`

export default ({ id, onClick }) => (
  <Mutation mutation={createQuestion}>
    {(createQuestion, { loading }) => (
      <Box onClick={() => onClick(createQuestion, id)}>
        {loading ? <SpinnerRed /> : <Add className="add" />}
      </Box>
    )}
  </Mutation>
)
