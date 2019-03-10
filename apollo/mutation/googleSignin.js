import gql from 'graphql-tag'

export const googleSignin = gql`
  mutation GoogleSignin($data: UserCreateInput) {
    googleSignin(data: $data) {
      success
    }
  }
`
