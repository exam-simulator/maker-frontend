import gql from 'graphql-tag'

export const examsByTerm = gql`
  query ExamsByTerm(
    $term: String
    $orderBy: ExamOrderByInput = createdAt_DESC
    $first: Int = 10
    $skip: Int = 0
  ) {
    exams(
      where: {
        AND: [
          { published: true }
          { verified: true }
          {
            OR: [
              { title_contains: $term }
              { description_contains: $term }
              { code_contains: $term }
            ]
          }
        ]
      }
      orderBy: $orderBy
      first: $first
      skip: $skip
    ) {
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
