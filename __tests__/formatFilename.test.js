import formatFilename from '../lib/formatFilename'

const folder = 'folder'
const id = 'id'
const type = 'type'

describe('formatFilename', () => {
  test('takes folder, id, type, filename parameters', () => {
    const result = formatFilename(folder, id, type, 'filename.ext')
    expect(result).toBe('folder/id/type/filename.ext')
  })

  test('trims leading/trailing spaces from filename', () => {
    const result = formatFilename(folder, id, type, ' filename.ext ')
    expect(result).toBe('folder/id/type/filename.ext')
  })

  test('replaces spaces with "-"', () => {
    const result = formatFilename(folder, id, type, 'file name.ext')
    expect(result).toBe('folder/id/type/file-name.ext')
  })

  test('replaces non letters/numbers with "-"', () => {
    const result = formatFilename(folder, id, type, 'fi*le!na#me.ext')
    expect(result).toBe('folder/id/type/fi-le-na-me.ext')
  })

  test('converts characters to lowercase', () => {
    const result = formatFilename(folder, id, type, 'FILENAME.EXT')
    expect(result).toBe('folder/id/type/filename.ext')
  })
})
