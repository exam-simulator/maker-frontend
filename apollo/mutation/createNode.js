import gql from 'graphql-tag'

export const createNode = gql`
  mutation createNode($id: ID!, $type: String) {
    createNode(id: $id, type: $type) {
      success
    }
  }
`
