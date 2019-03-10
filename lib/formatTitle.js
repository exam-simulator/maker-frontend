export default pathname => {
  switch (pathname) {
    case '/':
      return 'Home'
    case '/maker':
      return 'Editor'
    case '/schema':
      return 'Schema'
    case '/exams':
      return 'Exams'
    case '/my-exams':
      return 'My Exams'
    case '/my-profile':
      return 'My Profile'
    default:
      return 'Home'
  }
}
