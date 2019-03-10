import { ModalWindow, ModalMain } from './styles'

export default class Modal extends React.Component {
  modal = React.createRef()

  componentDidUpdate(prevProps) {
    if (!prevProps.show && this.props.show) {
      document.body.addEventListener('click', this.onClickAway)
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickAway)
  }

  onClickAway = e => {
    if (e.target === this.modal.current) {
      this.props.onClose()
    }
  }

  render() {
    const {
      props: { children, show, color }
    } = this
    return (
      <ModalWindow ref={this.modal} show={show} color={color}>
        <ModalMain>{children}</ModalMain>
      </ModalWindow>
    )
  }
}
