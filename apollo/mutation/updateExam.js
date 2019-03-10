import gql from 'graphql-tag'

export const updateExam = gql`
  mutation updateExam($id: ID!, $data: ExamUpdateInput) {
    updateExam(id: $id, data: $data) {
      success
    }
  }
`
