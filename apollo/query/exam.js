import gql from 'graphql-tag'

export const examById = gql`
  query ExamById($id: ID!) {
    exam(id: $id) {
      id
      published
      verified
      verificationPending
      title
      description
      code
      pass
      time
      image
      downloads
      createdAt
      user {
        id
        name
        image
      }
      cover {
        id
        variant
        text
      }
      test {
        id
        variant
        question {
          id
          variant
          text
        }
        choices {
          id
          label
          text
        }
        answer
        explanation {
          id
          variant
          text
          href
        }
      }
    }
  }
`
