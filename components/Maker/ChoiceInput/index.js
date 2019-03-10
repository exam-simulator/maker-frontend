import { withApollo } from 'react-apollo'
import isequal from 'lodash.isequal'
import debounce from 'lodash.debounce'
import { ChoiceInputStyles } from '../styles/ChoiceInput'
import Check from './Check'
import Text from './Text'
import Delete from './Delete'

class ChoiceInput extends React.Component {
  state = {
    id: '',
    text: '',
    answer: false
  }

  componentDidMount() {
    this.setChoiceState()
  }

  componentDidUpdate(prevProps) {
    if (
      !isequal(prevProps.choice, this.props.choice) ||
      !isequal(prevProps.answer, this.props.answer)
    ) {
      this.setChoiceState()
    }
    if (prevProps.variant !== this.props.variant) {
      console.log('question variant changed')
    }
  }

  setChoiceState = () => {
    const { choice, answer } = this.props
    this.setState({ id: choice.id, text: choice.text, answer })
  }

  onAnswerClick = async (updateQuestion, answer) => {
    let { questionId, answers, index } = this.props
    answers[index] = answer
    await updateQuestion({
      variables: { id: questionId, data: { answer: { set: answers } } }
    })
  }

  onChange = ({ target: { name, value } }, updateNode) => {
    this.setState({ [name]: value })
    this.onTextChange(updateNode, value)
  }

  onTextChange = debounce(async (updateNode, text) => {
    const {
      choice: { id }
    } = this.props
    await updateNode({
      variables: { type: 'choices', id, text }
    })
  }, 5000)

  onDelete = async deleteNode => {
    const {
      props: {
        choice: { id },
        answers,
        index,
        questionId
      }
    } = this
    const newAnswers = answers.filter((a, i) => i !== index)
    await deleteNode({
      variables: { type: 'choices', id, answers: newAnswers, questionId }
    })
  }

  render() {
    const {
      props: { id, index },
      state: { text, answer }
    } = this
    return (
      <ChoiceInputStyles>
        <Check id={id} answer={answer} onClick={this.onAnswerClick} />
        <Text id={id} text={text} index={index} onChange={this.onChange} />
        {index ? <Delete id={id} onClick={this.onDelete} /> : <div />}
      </ChoiceInputStyles>
    )
  }
}

export default withApollo(ChoiceInput)
