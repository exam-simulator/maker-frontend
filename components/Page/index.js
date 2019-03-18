import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import theme from './Theme'
import GlobalStyle from './GlobalStyle'
import Meta from './Meta'
import Header from '../Header'
import User from '../Wrappers/User'
import SigninModal from '../Header/SigninModal'
import Loading from '../Shared/Loading'

export default class Page extends React.Component {
  state = {
    showModal: false
  }

  componentDidMount() {
    Router.onRouteChangeStart = pathname => {
      NProgress.start()
    }

    Router.onRouteChangeComplete = pathname => {
      NProgress.done()
    }
  }

  onShowModal = () => this.setState({ showModal: true })

  onCloseModal = () => this.setState({ showModal: false })

  render() {
    const {
      props: { pathname },
      state: { showModal }
    } = this
    return (
      <ThemeProvider theme={theme}>
        <User>
          {({ loading, data }) => {
            if (loading) return <Loading size={50} />
            return (
              <div>
                <Meta pathname={pathname} />
                <GlobalStyle />
                <Header user={data.me} onShowModal={this.onShowModal} />
                <main>
                  {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, {
                      user: data.me
                    })
                  )}
                </main>
                <SigninModal show={showModal} onClose={this.onCloseModal} />
              </div>
            )
          }}
        </User>
      </ThemeProvider>
    )
  }
}
