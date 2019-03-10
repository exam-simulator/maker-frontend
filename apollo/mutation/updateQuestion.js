import gql from 'graphql-tag'

export const updateQuestion = gql`
  mutation updateQuestion($id: ID!, $data: QuestionUpdateInput) {
    updateQuestion(id: $id, data: $data) {
      success
    }
  }
`
