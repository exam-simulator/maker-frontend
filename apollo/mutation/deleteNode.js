import gql from 'graphql-tag'

export const deleteNode = gql`
  mutation deleteNode($id: ID!, $type: String, $questionId: ID, $answers: [Boolean]) {
    deleteNode(id: $id, type: $type, questionId: $questionId, answers: $answers) {
      success
    }
  }
`
