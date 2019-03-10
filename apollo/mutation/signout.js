import gql from 'graphql-tag'

export const signout = gql`
  mutation Signout {
    signout {
      success
    }
  }
`
