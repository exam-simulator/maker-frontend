import { Mutation } from 'react-apollo'
import { ArrowDropDown } from 'styled-icons/material/ArrowDropDown'
import { updateQuestion } from '../../../apollo/mutation/updateQuestion'
import { examById } from '../../../apollo/query/exam'
import { TypeStyles, Options, Option } from '../styles/SelectType'

export default class SelectType extends React.PureComponent {
  state = {
    show: false,
    questionID: '',
    variant: 0
  }

  componentDidMount() {
    this.setQuestionState()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.variant !== this.props.variant) {
      this.setQuestionState()
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onHide)
  }

  setQuestionState = () => {
    const { questionID, variant } = this.props
    this.setState({ questionID, variant })
  }

  onShow = () => {
    this.setState({ show: true })
    document.body.addEventListener('click', this.onHide)
  }

  onHide = () => {
    this.setState({ show: false })
    document.body.removeEventListener('click', this.onHide)
  }

  onSelect = async (updateQuestion, variant) => {
    const { questionID } = this.state
    this.setState({ variant })
    await updateQuestion({
      variables: { id: questionID, data: { variant } }
    })
  }

  renderVariant = variant => {
    switch (variant) {
      case 0:
        return 'Multiple Choice'
      case 1:
        return 'Multiple Answer'
      case 2:
        return 'Fill In The Blank'
      case 3:
        return 'Ordered List'
    }
  }

  render() {
    const {
      props: { id },
      state: { show, variant }
    } = this
    return (
      <TypeStyles>
        <div onClick={this.onShow}>
          <span>{this.renderVariant(variant)}</span>
          <ArrowDropDown size={15} />
        </div>
        <Mutation
          mutation={updateQuestion}
          refetchQueries={[{ query: examById, variables: { id } }]}
        >
          {(updateQuestion, { loading }) => (
            <Options show={show}>
              <Option onClick={() => this.onSelect(updateQuestion, 0)}>Multiple Choice</Option>
              <Option onClick={() => this.onSelect(updateQuestion, 1)}>Multiple Answer</Option>
              <Option onClick={() => this.onSelect(updateQuestion, 2)}>Fill In The Blank</Option>
              <Option onClick={() => this.onSelect(updateQuestion, 3)}>Ordered List</Option>
            </Options>
          )}
        </Mutation>
      </TypeStyles>
    )
  }
}
