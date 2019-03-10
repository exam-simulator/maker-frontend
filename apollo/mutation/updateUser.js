import gql from 'graphql-tag'

export const updateUser = gql`
  mutation UpdateUser($id: ID!, $data: UserUpdateInput) {
    updateUser(id: $id, data: $data) {
      success
    }
  }
`
