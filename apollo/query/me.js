import gql from 'graphql-tag'

export const me = gql`
  query {
    me {
      id
      name
      email
      image
      homepage
      role
      createdAt
      exams {
        id
        published
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
          variant
          answer
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
          explanation {
            id
            variant
            text
          }
        }
      }
    }
  }
`
