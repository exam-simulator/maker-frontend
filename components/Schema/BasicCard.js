import { BasicCardStyles } from './styles/BasicCard'

export default ({ heading, content }) => (
  <BasicCardStyles>
    <div className="heading">{heading}</div>
    {content}
  </BasicCardStyles>
)
