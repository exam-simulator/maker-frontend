import { Query } from 'react-apollo'
import Router from 'next/router'
import styled from 'styled-components'
import { examsByUser } from '../../apollo/query/examsByUser'
import { BannerTop, BannerTitle } from '../Shared/Banner'
import ExamCard from '../Exams/ExamCard'
import Loading from '../Shared/Loading'

const MainContent = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  background: ${props => props.theme.white};
  .exams {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
`

export default React.memo(({ user }) => (
  <Query query={examsByUser} variables={{ id: user.id }}>
    {({ data, loading, error }) => {
      if (loading) {
        return <Loading size={50} />
      }
      const { exams } = data.exams
      return (
        <div>
          <BannerTop>
            <BannerTitle>My Exams</BannerTitle>
          </BannerTop>
          <MainContent>
            <div className="exams">
              {exams.length ? (
                exams
                  .reverse()
                  .map((e, i) => (
                    <ExamCard
                      key={e.id}
                      exam={e}
                      edit={true}
                      onEdit={() => Router.push({ pathname: '/maker', query: { id: e.id } })}
                    />
                  ))
              ) : (
                <div>no exams</div>
              )}
            </div>
          </MainContent>
        </div>
      )
    }}
  </Query>
))
