import MyExams from '../components/MyExams'
import PleaseSignIn from '../components/Page/PleaseSignIn'

export default props => (
  <PleaseSignIn>
    <MyExams {...props} />
  </PleaseSignIn>
)
