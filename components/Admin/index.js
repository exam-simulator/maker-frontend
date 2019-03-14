import styled from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import { examsPending } from '../../apollo/query/examsPending'
import Loading from '../Shared/Loading'

export default class Admin extends React.Component {
  state = {}

  render() {
    return (
      <Query query={examsPending}>
        {({ data, loading, error }) => {
          if (loading) {
            return <Loading size={50} />
          }
          const { exams, count } = data.exams
          return <div>{JSON.stringify(exams)}</div>
        }}
      </Query>
    )
  }
}
