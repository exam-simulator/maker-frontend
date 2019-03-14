import AdminOnly from '../components/Shared/AdminOnly'
import Admin from '../components/Admin'

export default props => (
  <AdminOnly>
    <Admin {...props} />
  </AdminOnly>
)
