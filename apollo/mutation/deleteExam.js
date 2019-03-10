import gql from 'graphql-tag'

export const deleteExam = gql`
  mutation deleteExam($id: ID!) {
    deleteExam(id: $id) {
      success
    }
  }
`
