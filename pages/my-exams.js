import MyExams from '../components/MyExams'
import PleaseSignIn from '../components/Shared/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <MyExams {...props} />
  </PleaseSignIn>
)
