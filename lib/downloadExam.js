function cleanup(x) {
  delete x.id
  delete x.__typename
}

function formatLabel(x) {
  if (x.variant === 2) {
    x.choices = x.choices.filter((c, i) => c.text.length > 0)
  } else if (x.variant === 3) {
    x.choices = x.choices.map((c, i) => {
      return { label: i + 1, text: c.text }
    })
  }
}

function cleanAll(x) {
  x.cover.forEach(cleanup)
  x.test.forEach(n => {
    cleanup(n)
    n.question.forEach(cleanup)
    n.choices.forEach(cleanup)
    n.explanation.forEach(cleanup)
    formatLabel(n)
  })
}

export default exam => {
  cleanAll(exam)
  const filename =
    exam.title
      .toLowerCase()
      .trim()
      .replace(/\s/g, '-')
      .replace(/[^a-z0-9-]/g, '') + '.json'
  const dataLink = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(exam))}`
  const node = document.createElement('a')
  node.setAttribute('href', dataLink)
  node.setAttribute('download', filename)
  document.body.appendChild(node)
  node.click()
  node.remove()
}
