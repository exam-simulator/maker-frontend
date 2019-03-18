import styled from 'styled-components'
import { GreyButton } from '../Shared/GreyButton'
import Media from '../Page/Media'

const CardStyles = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  justify-items: center;
  ${Media.tablet`
    margin: 2rem auto;
  `}
`

const Heading = styled.div`
  font: 3rem 'Open Sans Light';
  margin-bottom: 2rem;
`

const Text = styled.div`
  font: 1.3rem 'Open Sans';
  text-align: center;
`

export default ({ heading, text, buttonText, onClick }) => (
  <CardStyles>
    <Heading>{heading}</Heading>
    <Text>{text}</Text>
    <GreyButton onClick={onClick}>{buttonText}</GreyButton>
  </CardStyles>
)
