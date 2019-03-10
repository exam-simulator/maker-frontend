import MyProfile from '../components/MyProfile'
import PleaseSignIn from '../components/Page/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <MyProfile {...props} />
  </PleaseSignIn>
)
