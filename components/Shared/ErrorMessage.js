import styled from 'styled-components'
import { darken } from 'polished'
import PropTypes from 'prop-types'

const ErrorMessageStyles = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  background: white;
  color: ${props => darken(0.1, props.theme.secondary)};
  padding: 1rem;
  border-left: 5px solid ${props => props.theme.secondary};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows[5]};
  margin-top: -1rem;
  margin-bottom: 1rem;
  p {
    margin: 0;
    text-transform: uppercase;
    font: 1rem 'Open Sans Bold';
  }
`

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorMessageStyles key={i}>
        <p>{error.message.replace('GraphQL error: ', '')}</p>
      </ErrorMessageStyles>
    ))
  }
  return (
    <ErrorMessageStyles>
      <p>{error.message.replace('GraphQL error: ', '')}</p>
    </ErrorMessageStyles>
  )
}

ErrorMessage.defaultProps = {
  error: {}
}

ErrorMessage.propTypes = {
  error: PropTypes.object
}

export default ErrorMessage
