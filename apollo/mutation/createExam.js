import gql from 'graphql-tag'

export const createExam = gql`
  mutation createExam($data: ExamCreateInput) {
    createExam(data: $data) {
      id
    }
  }
`
