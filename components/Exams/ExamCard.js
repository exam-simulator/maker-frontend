import { FileDownload } from 'styled-icons/material/FileDownload'
import { Edit } from 'styled-icons/material/Edit'
import { ExamCardStyles } from './styles/ExamCard'
import formatAgo from '../../lib/formatAgo'

export default ({ exam, edit, onEdit, onDownloadExam }) => (
  <ExamCardStyles>
    {edit ? (
      <div className="edit" onClick={onEdit}>
        <Edit size={10} />
        <span>edit</span>
      </div>
    ) : null}
    <img className="image" src={exam.image || exam.user.image} />
    <div className="main">
      <div className="title" title={exam.title}>
        {exam.title}
      </div>
      <div className="description">{exam.description}</div>
      {exam.code ? <span className="stat">Code: {exam.code}</span> : null}
      <span className="stat">Questions: {exam.test.length}</span>
      <span className="stat">Downloads: {exam.downloads}</span>
      <div className="meta">
        <span className="date">Created {formatAgo(exam.createdAt)} ago </span>
      </div>
    </div>
    <div className="actions" onClick={onDownloadExam}>
      <FileDownload size={20} />
    </div>
  </ExamCardStyles>
)
