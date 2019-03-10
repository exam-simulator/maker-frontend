import { PersonPin } from 'styled-icons/material/PersonPin'
import { School } from 'styled-icons/material/School'
import { ExitToApp } from 'styled-icons/material/ExitToApp'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import { MenuStyles } from './styles'
import { signout } from '../../apollo/mutation/signout'
import { me } from '../../apollo/query/me'

export default class UserMenu extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.show && this.props.show) {
      document.body.addEventListener('click', this.props.onClose)
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.props.onClose)
  }

  render() {
    const {
      props: { show }
    } = this
    return (
      <MenuStyles show={show}>
        <div className="item" onClick={() => Router.push('/my-profile')}>
          <PersonPin size={15} />
          <span>Profile</span>
        </div>
        <div className="item" onClick={() => Router.push('/my-exams')}>
          <School size={15} />
          <span>My Exams</span>
        </div>
        <Mutation mutation={signout} refetchQueries={[{ query: me }]}>
          {(signout, { loading }) => (
            <div className="item" onClick={signout}>
              <ExitToApp size={15} />
              <span>Sign out</span>
            </div>
          )}
        </Mutation>
      </MenuStyles>
    )
  }
}
