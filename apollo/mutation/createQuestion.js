import gql from 'graphql-tag'

export const createQuestion = gql`
  mutation createQuestion($id: ID!) {
    createQuestion(id: $id) {
      success
    }
  }
`
