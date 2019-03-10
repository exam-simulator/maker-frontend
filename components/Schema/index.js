import styled from 'styled-components'
import { BannerTop, BannerTitle } from '../Shared/Banner'
import SchemaJSON from './SchemaJSON'
import BasicCard from './BasicCard'

const SchemaStyles = styled.div``

const MainContent = styled.div`
  width: ${props => props.theme.maxWidth};
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 3rem auto;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export default class Schema extends React.Component {
  render() {
    return (
      <SchemaStyles>
        <BannerTop>
          <BannerTitle>Schema</BannerTitle>
        </BannerTop>
        <MainContent>
          <InfoBlock>
            <BasicCard
              heading="What is JSON"
              content={
                <div className="content">
                  JavaScript Object Notation is a lightweight data exchange format. It is easy for
                  humans and machines to read and write. It is based on key/value pairs, or{' '}
                  <em>objects</em>, and lists of values, or <em>arrays</em>. JSON is based on a
                  subset of JavaScript but is supported by almost all modern programming languages.
                </div>
              }
            />
            <BasicCard
              heading="Why use JSON"
              content={
                <div className="content">
                  Community members are able to create exam files as raw JSON or use tools like Exam
                  Maker. The JSON can then be validated with open source tools like{' '}
                  <a href="http://json-schema.org/">JSON Schema</a>. From a programming perspective,
                  developers for many languages can come together and contribute.
                </div>
              }
            />
            <BasicCard
              heading="Make an Exam"
              content={
                <div className="content">
                  The easiest way to create an exam is to use the online editor on this site. You
                  can also create an exam with any text editor so long as it complies with the JSON
                  schema outlined on this page. For more information, check out the Documentation.
                </div>
              }
            />
          </InfoBlock>
          <SchemaJSON />
        </MainContent>
      </SchemaStyles>
    )
  }
}
