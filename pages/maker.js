import Maker from '../components/Maker'
import PleaseSignIn from '../components/Page/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <Maker {...props} />
  </PleaseSignIn>
)
