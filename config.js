export const endpointHttp =
  process.env.NODE_ENV === 'production'
    ? 'https://exam-maker-backend.herokuapp.com/graphql'
    : 'http://localhost:8081/graphql'
export const endpointWs =
  process.env.NODE_ENV === 'production'
    ? 'wss://exam-maker-backend.herokuapp.com/graphql'
    : 'ws://localhost:8081/graphql'
export const frontend =
  process.env.NODE_ENV === 'production'
    ? 'https://exam-maker.herokuapp.com'
    : 'http://localhost:8080'
export const googleClientID =
  '162812165284-hvi6iqeqtatt48d2cv824d3bl4n9b5ig.apps.googleusercontent.com'
export const logoURL = 'https://s3.amazonaws.com/electron-exam/general/icon-red.png'
