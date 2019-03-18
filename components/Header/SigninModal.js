import { withApollo, Mutation } from 'react-apollo'
import { GoogleLogin } from 'react-google-login'
import { Google } from 'styled-icons/boxicons-logos/Google'
import { Close } from 'styled-icons/material/Close'
import { SigninModalStyles, GoogleButton, DarkGreyButton } from './styles/SigninModal'
import { googleClientID, logoURL } from '../../config'
import { googleSignin } from '../../apollo/mutation/googleSignin'
import { me } from '../../apollo/query/me'
import { signup } from '../../apollo/mutation/signup'
import { signin } from '../../apollo/mutation/signin'
import Modal from '../Modal'
import Input from '../Shared/Input'
import ErrorMessage from '../Shared/ErrorMessage'

const error = 'Error authenticating with Google Sign In'

class SigninModal extends React.Component {
  state = {
    signupMode: true,
    name: '',
    email: '',
    password: ''
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.show && this.props.show) {
      this.resetState()
    }
  }

  resetState = () => {
    this.setState({ signupMode: true, name: '', email: '', password: '' })
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  toggleSignupMode = () => this.setState(({ signupMode }) => ({ signupMode: !signupMode }))

  onSuccess = async response => {
    const {
      profileObj: { googleId: googleID, email, imageUrl: image, name }
    } = response
    const data = { googleID, email, name, image, homepage: '', role: 'USER' }
    const res = await this.props.client.mutate({
      mutation: googleSignin,
      variables: { data },
      refetchQueries: [{ query: me }]
    })
    if (!res.data.googleSignin.success) {
      alert(error)
    }
    this.props.onClose()
  }

  onFailure = res => {
    console.log(res)
  }

  onSignup = async signup => {
    const { name, email, password } = this.state
    const res = await signup({
      variables: { name, email, password }
    })
    if (res.data.signup.success) {
      this.resetState()
      this.props.onClose()
    }
  }

  onSignin = async signin => {
    const { email, password } = this.state
    const res = await signin({
      variables: { email, password }
    })
    if (res.data.signin.success) {
      this.resetState()
      this.props.onClose()
    }
  }

  render() {
    const {
      props: { show, onClose },
      state: { signupMode, name, email, password }
    } = this
    return (
      <Modal show={show} color="dark" onClose={onClose}>
        <SigninModalStyles>
          <Close className="close" onClick={onClose} />
          <div className="top" />
          <div className="content">
            <div className="traditional">
              <img src={logoURL} />
              <div className="toggle" onClick={this.toggleSignupMode}>
                {signupMode ? 'Already have account? Sign in.' : 'Create new account. Sign up.'}
              </div>
              {signupMode ? (
                <Input
                  type="text"
                  width={250}
                  label="Name"
                  value={name}
                  inputProps={{ name: 'name', spellCheck: false }}
                  onChange={this.onChange}
                />
              ) : null}
              <Input
                type="text"
                width={250}
                label="Email Address"
                value={email}
                inputProps={{ name: 'email', spellCheck: false }}
                onChange={this.onChange}
              />
              <Input
                type="password"
                width={250}
                label="Password"
                hint="Must be at least 8 characters"
                value={password}
                inputProps={{ name: 'password', spellCheck: false }}
                onChange={this.onChange}
              />
              {signupMode ? (
                <Mutation mutation={signup} refetchQueries={[{ query: me }]}>
                  {(signup, { loading, error }) => (
                    <>
                      <DarkGreyButton onClick={() => this.onSignup(signup)}>Sign up</DarkGreyButton>
                      <ErrorMessage error={error} />
                    </>
                  )}
                </Mutation>
              ) : (
                <Mutation mutation={signin} refetchQueries={[{ query: me }]}>
                  {(signin, { loading, error }) => (
                    <>
                      <DarkGreyButton onClick={() => this.onSignin(signin)}>Sign in</DarkGreyButton>
                      <ErrorMessage error={error} />
                    </>
                  )}
                </Mutation>
              )}
            </div>
            <div className="divider">
              <span />
              <span className="middle">or</span>
              <span />
            </div>
            <GoogleLogin
              clientId={googleClientID}
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
              scope="profile email"
              render={props => (
                <GoogleButton onClick={props.onClick}>
                  <Google /> <span>Sign {signupMode ? 'up' : 'in'} with google</span>
                </GoogleButton>
              )}
            />
          </div>
        </SigninModalStyles>
      </Modal>
    )
  }
}

export default withApollo(SigninModal)
