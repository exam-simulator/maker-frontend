import gql from 'graphql-tag'

export const signup = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      success
    }
  }
`
