import Maker from '../components/Maker'
import PleaseSignIn from '../components/Shared/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <Maker {...props} />
  </PleaseSignIn>
)
