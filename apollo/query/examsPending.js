import gql from 'graphql-tag'

export const examsPending = gql`
  query ExamsPending($orderBy: ExamOrderByInput, $skip: Int, $first: Int) {
    exams(where: { verificationPending: true }, orderBy: $orderBy, skip: $skip, first: $first) {
      exams {
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
          homepage
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
      count
    }
  }
`
