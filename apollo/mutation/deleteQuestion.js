import gql from 'graphql-tag'

export const deleteQuestion = gql`
  mutation deleteQuestion($id: ID!) {
    deleteQuestion(id: $id) {
      success
    }
  }
`
