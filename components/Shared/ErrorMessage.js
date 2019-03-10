import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorMessageStyles = styled.div`
  background: ${props => props.theme.grey[0]};
  color: ${props => props.theme.grey[10]};
  padding: 1rem;
  border-left: 5px solid ${props => props.theme.secondary};
  margin-top: 1rem;
  box-shadow: ${props => props.theme.shadows[1]};
  p {
    margin: 0;
    font: 1.2rem 'Open Sans Semi';
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
