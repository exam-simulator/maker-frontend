import styled from 'styled-components'
import Router from 'next/router'
import Card from './Card'
import { RedButton } from '../Shared/RedButton'

const HomeStyles = styled.div`
  height: calc(100vh - 6rem);
  display: grid;
  grid-template-rows: 66% 34%;
  .yellow {
    background: ${props => props.theme.primary};
  }
  .grey {
    background: ${props => props.theme.grey[0]};
  }
`

const BannerYellow = styled.div`
  max-width: ${props => props.theme.maxWidth};
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  margin: 0 auto;
`

const Title = styled.div`
  align-self: flex-end;
  font: 4rem 'Open Sans Light';
  margin-bottom: 2rem;
`

const TagLine = styled.div`
  font: 1.3rem 'Open Sans';
  text-align: center;
  margin-bottom: 4rem;
`
const ReadMoreButton = styled(RedButton)`
  align-self: flex-start;
`

const BannerBottom = styled.div`
  max-width: ${props => props.theme.maxWidth};
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

export default () => (
  <HomeStyles>
    <div className="yellow">
      <BannerYellow>
        <Title>Exam Maker</Title>
        <TagLine>
          <p>The open source initiative to create a JSON-based standard for exam simulators.</p>
          <p>For developers, by developers.</p>
        </TagLine>
        <ReadMoreButton>read more</ReadMoreButton>
      </BannerYellow>
    </div>
    <div className="grey">
      <BannerBottom>
        <Card
          heading="What is this?"
          text="Exam Maker is an online test creation tool designed to empower students, teachers and developers."
          buttonText="get started"
          onClick={() => Router.push('/maker')}
        />
        <Card
          heading="Exam Database"
          text="Browse our catalog of free exams made by the community or create an exam yourself."
          buttonText="view exams"
          onClick={() => Router.push('/exams')}
        />
        <Card
          heading="Exam Simulator"
          text="Exam Simulator is a free and open source simulator and is available for Windows and MacOS."
          buttonText="download"
          onClick={() => window.open('https://exam-simulator.gitbook.io/exam-simulator/', '_blank')}
        />
      </BannerBottom>
    </div>
  </HomeStyles>
)
