import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { endpointHttp } from '../config'

function createClient({ headers }) {
  return new ApolloClient({
    uri: endpointHttp,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      })
    }
  })
}

export default withApollo(createClient)
