import Router from 'next/router'
import styled from 'styled-components'
import { BannerTop, BannerTitle } from '../Shared/Banner'
import ExamCard from '../Exams/ExamCard'

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

export default class MyExams extends React.Component {
  onEdit = id => Router.push({ pathname: '/maker', query: { id } })

  render() {
    const {
      props: { user }
    } = this
    return (
      <div>
        <BannerTop>
          <BannerTitle>My Exams</BannerTitle>
        </BannerTop>
        <MainContent>
          <div className="exams">
            {user.exams ? (
              user.exams
                .reverse()
                .map((e, i) => (
                  <ExamCard key={e.id} exam={e} edit={true} onEdit={() => this.onEdit(e.id)} />
                ))
            ) : (
              <div>no exams</div>
            )}
          </div>
        </MainContent>
      </div>
    )
  }
}
