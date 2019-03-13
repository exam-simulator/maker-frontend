import styled from 'styled-components'
import Published from './Published'
import Verified from './Verified'
import Download from './Download'
import Delete from './Delete'

const ActionsStyles = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

export default React.memo(({ user, id, published, onDownloadExam, onDeleteExam }) => (
  <ActionsStyles>
    <Published id={id} published={published} />
    <Verified />
    <Download id={id} onDownloadExam={onDownloadExam} />
    <Delete user={user} onDeleteExam={onDeleteExam} />
  </ActionsStyles>
))
