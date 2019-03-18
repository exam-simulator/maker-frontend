import MyProfile from '../components/MyProfile'
import PleaseSignIn from '../components/Wrappers/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <MyProfile {...props} />
  </PleaseSignIn>
)
