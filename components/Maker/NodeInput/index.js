import isequal from 'lodash.isequal'
import debounce from 'lodash.debounce'
import { NodeInputStyles } from '../styles/NodeInput'
import Variant from './Variant'
import Text from './Text'
import Delete from './Delete'

export default class NodeInput extends React.PureComponent {
  state = {
    variant: 0,
    text: ''
  }

  componentDidMount() {
    this.setNodeState()
  }

  componentDidUpdate(prevProps) {
    if (!isequal(prevProps.node, this.props.node)) {
      this.setNodeState()
    }
  }

  setNodeState = () => {
    const { variant, text } = this.props.node
    this.setState({ variant, text })
  }

  onChange = ({ target: { name, value } }, updateNode) => {
    this.setState({ [name]: value })
    this.onTextChange(updateNode, value)
  }

  onVariantChange = async (updateNode, variant) => {
    const {
      node: { id },
      type
    } = this.props
    this.setState({ variant })
    await updateNode({
      variables: { type, id, variant }
    })
  }

  onTextChange = debounce(async (updateNode, text) => {
    const {
      node: { id },
      type
    } = this.props
    await updateNode({
      variables: { type, id, text }
    })
  }, 5000)

  onDeleteClick = async deleteNode => {
    const {
      node: { id },
      type
    } = this.props
    await deleteNode({
      variables: { type, id }
    })
  }

  render() {
    const {
      props: { id, index },
      state: { variant, text }
    } = this
    return (
      <NodeInputStyles>
        <Variant id={id} variant={variant} onClick={this.onVariantChange} />
        <Text id={id} variant={variant} text={text} onChange={this.onChange} />
        {index ? <Delete id={id} onClick={this.onDeleteClick} /> : <div />}
      </NodeInputStyles>
    )
  }
}
