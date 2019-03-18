import AdminOnly from '../components/Wrappers/AdminOnly'
import Admin from '../components/Admin'

export default props => (
  <AdminOnly>
    <Admin {...props} />
  </AdminOnly>
)
