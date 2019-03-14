import MyProfile from '../components/MyProfile'
import PleaseSignIn from '../components/Shared/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <MyProfile {...props} />
  </PleaseSignIn>
)
