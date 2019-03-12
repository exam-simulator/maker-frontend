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
    const {
      query,
      user: { exams }
    } = this.props
    if (!query.id) {
      Router.push('/')
    } else if (query.id === 'create') {
      this.setState({ loading: false, create: true })
    } else {
      const examIds = exams.map(e => e.id)
      const isOwner = examIds.includes(query.id)
      if (isOwner) {
        this.setState({ loading: false })
      } else {
        Router.push('/')
      }
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
          return <ExamMaker exam={data.exam} user={user} />
        }}
      </Query>
    )
  }
}
