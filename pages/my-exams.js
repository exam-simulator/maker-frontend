import MyExams from '../components/MyExams'
import PleaseSignIn from '../components/Wrappers/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <MyExams {...props} />
  </PleaseSignIn>
)
