import Link from 'next/link'
import { HeaderStyles, HeaderLink } from './styles/Header'
import Signin from './Signin'
import { logoURL } from '../../config'

export default ({ user, onShowModal }) => (
  <HeaderStyles>
    <div>
      <Link href="/">
        <img className="logo" src={logoURL} />
      </Link>
      <div className="links">
        <Link href="/maker?id=create">
          <HeaderLink>Create</HeaderLink>
        </Link>
        <Link href="/schema">
          <HeaderLink>Schema</HeaderLink>
        </Link>
        <Link href="/exams">
          <HeaderLink>Exams</HeaderLink>
        </Link>
        <Signin user={user} onClick={onShowModal} />
      </div>
    </div>
  </HeaderStyles>
)
