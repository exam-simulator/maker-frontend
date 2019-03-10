import gql from 'graphql-tag'

export const updateNode = gql`
  mutation updateNode($id: ID!, $type: String, $variant: Int, $text: String) {
    updateNode(id: $id, type: $type, variant: $variant, text: $text) {
      success
    }
  }
`
