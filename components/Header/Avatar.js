import { AvatarStyles } from './styles'
import UserMenu from '../UserMenu'

export default class Avatar extends React.Component {
  state = {
    show: false
  }

  onOpen = () => this.setState({ show: true })

  onClose = () => this.setState({ show: false })

  render() {
    const {
      props: { user },
      state: { show }
    } = this
    return (
      <AvatarStyles>
        <img src={user.image} onClick={this.onOpen} />
        <UserMenu show={show} user={user} onClose={this.onClose} />
      </AvatarStyles>
    )
  }
}
