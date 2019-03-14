import styled from 'styled-components'
import Input from '../Shared/Input'

const SearchInputStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  .checkbox {
    display: flex;
    align-items: center;
    font: 1rem 'Open Sans Semi';
    margin-top: -3rem;
    cursor: pointer;
    span {
      user-select: none;
    }
  }
`

export default ({ term, onlyVerified, onChange, onCheckChange, onKeyDown }) => (
  <SearchInputStyles>
    <Input
      type="input"
      width={300}
      label="Search..."
      value={term}
      onChange={onChange}
      inputProps={{ name: 'term', spellCheck: false, onKeyDown }}
    />
    <div className="checkbox">
      <input type="checkbox" checked={onlyVerified} onChange={onCheckChange} />
      <span onClick={onCheckChange}>Only Search Verified Exams</span>
    </div>
  </SearchInputStyles>
)
