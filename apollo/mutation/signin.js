import gql from 'graphql-tag'

export const signin = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      success
    }
  }
`
