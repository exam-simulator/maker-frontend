import styled from 'styled-components'
import { withApollo, Mutation } from 'react-apollo'
import debounce from 'lodash.debounce'
import { examsByTerm } from '../../apollo/query/examsByTerm'
import { updateExam } from '../../apollo/mutation/updateExam'
import { BannerTop, BannerTitle } from '../Shared/Banner'
import ExamCard from './ExamCard'
import Pagination from './Pagination'
import SearchInput from './SearchInput'
import Loading from './Loading'
import downloadExam from '../../lib/downloadExam'

const ExamsStyles = styled.div`
  height: calc(100vh - 6rem);
  overflow: auto;
`

const MainContent = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  background: ${props => props.theme.white};
  .exams {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const NoResults = styled.div`
  display: grid;
  justify-items: center;
  & > :first-child {
    font: 2rem 'Open Sans Semi';
    color: ${props => props.theme.grey[10]};
    background: ${props => props.theme.grey[1]};
    border: 1px solid ${props => props.theme.grey[5]};
    padding: 1rem;
  }
`

class Exams extends React.Component {
  state = {
    loading: false,
    exams: [],
    term: '',
    first: 10,
    skip: 0
  }

  componentDidMount() {
    // this.getExams()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.skip !== this.state.skip) {
      this.getExams()
    }
  }

  getExams = async () => {
    await this.setState({ loading: true })
    const {
      props: { client },
      state: { term, skip, first }
    } = this
    const res = await client.query({
      query: examsByTerm,
      variables: { term, skip, first }
    })
    const { exams, count } = res.data.exams
    this.setState({ loading: false, exams, count })
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
    this.onTermChange()
  }

  onTermChange = debounce(async () => {
    await this.getExams()
  }, 2000)

  onKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      this.getExams()
    }
  }

  onPaginate = next => {
    const { count, skip, first } = this.state
    const page = skip / first + 1
    const totalPages = Math.ceil(count / first)
    if (next && page < totalPages) {
      this.setState({ skip: skip + first })
    } else if (!next && skip > 0) {
      this.setState({ skip: skip - first })
    }
  }

  onDownloadExam = async (i, updateExam) => {
    const { exams } = this.state
    const exam = exams[i]
    await updateExam({
      variables: { id: exam.id, data: { downloads: exam.downloads + 1 } }
    })
    const download = {
      id: exam.id,
      author: {
        id: exam.user.id,
        name: exam.user.name,
        image: exam.user.image
      },
      title: exam.title,
      code: exam.code,
      pass: Number(exam.pass),
      time: Number(exam.time),
      image: exam.image,
      cover: exam.cover,
      test: exam.test,
      createdAt: exam.createdAt
    }
    downloadExam(download)
  }

  render() {
    const {
      state: { loading, exams, count, term, skip, first }
    } = this
    return (
      <ExamsStyles>
        <BannerTop>
          <BannerTitle>Exams</BannerTitle>
        </BannerTop>
        <MainContent>
          <SearchInput term={term} onChange={this.onChange} onKeyDown={this.onKeyDown} />
          {loading ? (
            <Loading size={50} />
          ) : exams.length ? (
            <React.Fragment>
              <Pagination count={count} skip={skip} first={first} onPaginate={this.onPaginate} />
              <div className="exams">
                {exams.map((e, i) => (
                  <Mutation key={e.id} mutation={updateExam}>
                    {(updateExam, { loading }) => (
                      <ExamCard
                        exam={e}
                        onDownloadExam={() => this.onDownloadExam(i, updateExam)}
                      />
                    )}
                  </Mutation>
                ))}
              </div>
              <Pagination count={count} skip={skip} first={first} onPaginate={this.onPaginate} />
            </React.Fragment>
          ) : (
            <NoResults>
              <div>No Results</div>
            </NoResults>
          )}
        </MainContent>
      </ExamsStyles>
    )
  }
}

export default withApollo(Exams)
