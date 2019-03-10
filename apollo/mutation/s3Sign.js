import gql from 'graphql-tag'

export const s3Sign = gql`
  mutation S3Sign($filename: String!, $filetype: String!) {
    s3Sign(filename: $filename, filetype: $filetype) {
      requestURL
      fileURL
    }
  }
`
