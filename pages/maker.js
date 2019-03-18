import Maker from '../components/Maker'
import PleaseSignIn from '../components/Wrappers/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <Maker {...props} />
  </PleaseSignIn>
)
