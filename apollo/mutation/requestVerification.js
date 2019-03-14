import gql from 'graphql-tag'

export const requestVerification = gql`
  mutation RequestVerification($id: ID!) {
    requestVerification(id: $id) {
      success
    }
  }
`
