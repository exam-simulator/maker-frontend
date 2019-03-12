import Router from 'next/router'
import { Query } from 'react-apollo'
import { examById } from '../../apollo/query/exam'
import CreateExam from './CreateExam'
import ExamMaker from './ExamMaker'
import Loading from '../Shared/Loading'

export default class Maker extends React.PureComponent {
  state = {
    loading: true,
    create: false
  }

  componentDidMount() {
    this.setMode()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query.id !== this.props.query.id) {
      this.setMode()
    }
  }

  setMode = () => {
    const { query } = this.props
    if (!query.id) {
      Router.push('/')
    } else if (query.id === 'create') {
      this.setState({ loading: false, create: true })
    } else {
      this.setState({ loading: false })
    }
  }

  render() {
    const {
      props: {
        query: { id },
        user
      },
      state: { loading, create }
    } = this
    if (loading) {
      return <Loading size={50} />
    }
    if (create) {
      return <CreateExam />
    }
    return (
      <Query query={examById} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loading size={50} />
          if (error) return <div>{error.message}</div>
          const { exam } = data
          if (exam.user.id !== user.id) {
            return Router.push('/')
          }
          return <ExamMaker exam={exam} />
        }}
      </Query>
    )
  }
}
