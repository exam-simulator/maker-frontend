import gql from 'graphql-tag'

export const examsByUser = gql`
  query ExamsByUser($id: ID, $orderBy: ExamOrderByInput, $skip: Int, $first: Int) {
    exams(where: { user: { id: $id } }, orderBy: $orderBy, skip: $skip, first: $first) {
      exams {
        id
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
