import { Query } from 'react-apollo'
import { me } from '../../apollo/query/me'

export default props => (
  <Query {...props} query={me}>
    {payload => props.children(payload)}
  </Query>
)
