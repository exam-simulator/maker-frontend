function clean(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9.]/g, '-')
}

export default (folder, id, type, filename) => `${folder}/${clean(id)}/${type}/${clean(filename)}`
