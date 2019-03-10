import { PaginationStyles } from './styles/Pagination'

export default ({ count, skip, first, onPaginate }) => {
  const page = skip / first + 1
  const totalPages = Math.ceil(count / first)
  return (
    <PaginationStyles firstPage={!Boolean(skip)} lastPage={page === totalPages}>
      <div>
        <div className="prev" onClick={() => onPaginate(false)}>
          🡄 Prev
        </div>
        <div className="page">
          {page} of {totalPages}
        </div>
        <div className="middle">Results</div>
        <div className="total">{count} Exams</div>
        <div className="next" onClick={() => onPaginate(true)}>
          Next 🡆
        </div>
      </div>
    </PaginationStyles>
  )
}
