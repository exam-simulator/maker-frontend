import withApollo from 'next-with-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink, split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { setContext } from 'apollo-link-context'
import { getMainDefinition } from 'apollo-utilities'
import fetch from 'isomorphic-fetch'
import ws from 'websocket'
import { endpointWs, endpointHttp } from '../config'

export default withApollo(({ headers = {} }) => {
  if (!process.browser) global.fetch = fetch

  const contextLink = setContext(async () => ({
    headers: {
      cookie: headers ? headers.cookie : ''
    }
  }))

  const httpLink = new HttpLink({
    uri: endpointHttp,
    credentials: 'include'
  })

  const wsLink = new WebSocketLink({
    uri: endpointWs,
    options: {
      reconnect: true,
      connectionParams: {}
    },
    webSocketImpl: ws.client
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  let link = ApolloLink.from([errorLink, contextLink, httpLink])
  link = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    link
  )

  const cache = new InMemoryCache()

  const ssrMode = !process.browser

  return new ApolloClient({ link, cache, ssrMode })
})
