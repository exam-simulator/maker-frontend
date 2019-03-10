import { HeaderLink } from './styles'
import Avatar from './Avatar'

export default ({ user, onClick }) => {
  if (user) {
    return <Avatar user={user} />
  } else {
    return <HeaderLink onClick={onClick}>Sign up</HeaderLink>
  }
}
