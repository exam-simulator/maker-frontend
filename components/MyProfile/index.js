import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import axios from 'axios'
import isequal from 'lodash.isequal'
import debounce from 'lodash.debounce'
import { PhotoCamera } from 'styled-icons/material/PhotoCamera'
import { updateUser } from '../../apollo/mutation/updateUser'
import { s3Sign } from '../../apollo/mutation/s3Sign'
import { me } from '../../apollo/query/me'
import { BannerTop, BannerTitle } from '../Shared/Banner'
import Input from '../Shared/Input'
import formatFilename from '../../lib/formatFilename'

const MainContent = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 3rem auto;
  background: ${props => props.theme.white};
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageUpload = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  background-image: ${props => (props.image ? `url("${props.image}")` : 'none')};
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid ${props => props.theme.grey[1]};
  border-radius: 50%;
  background-color: ${props => props.theme.grey[0]};
  margin-bottom: 3rem;
  transition: 0.2s;
  cursor: pointer;
  span {
    position: absolute;
    top: calc(6rem - 2rem);
    left: calc(6rem - 2rem);
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    transition: 0.2s;
    svg {
      color: ${props => props.theme.white};
      margin: 1rem;
    }
  }
  input {
    display: none;
  }
  &:hover {
    border: 2px solid ${props => props.theme.grey[3]};
  }
  &:hover span {
    opacity: 1;
  }
`

export default class MyProfile extends React.Component {
  state = {
    id: '',
    name: '',
    email: '',
    image: '',
    homepage: ''
  }

  componentDidMount() {
    this.setProfile()
  }

  componentDidUpdate(prevProps) {
    if (!isequal(prevProps.user, this.props.user)) {
      this.setProfile()
    }
  }

  setProfile = () => {
    const { id, name, email, image, homepage } = this.props.user
    this.setState({ id, name, email, image, homepage })
  }

  onChange = ({ target: { name, value } }, updateUser) => {
    this.setState({ [name]: value })
    this.onInputChange(updateUser)
  }

  onInputChange = debounce(async updateUser => {
    const { id, name, email, homepage } = this.state
    await updateUser({
      variables: { id, data: { name, email, homepage } },
      refetchQueries: [{ query: me }]
    })
  }, 5000)

  onImageChange = async ({ target: { files } }, s3Sign, updateUser) => {
    const { id } = this.state
    const file = files[0]
    const filename = formatFilename('user', id, 'avatars', file.name)
    const filetype = file.type
    const res1 = await s3Sign({
      variables: { filename, filetype }
    })
    const { requestURL, fileURL } = res1.data.s3Sign
    if (!requestURL) {
      return
    }
    await axios({
      method: 'PUT',
      url: requestURL,
      data: file,
      headers: {
        'Content-Type': filetype
      }
    })
    await updateUser({
      variables: { id, data: { image: fileURL } },
      refetchQueries: [{ query: me }]
    })
  }

  render() {
    const {
      state: { name, email, image, homepage }
    } = this
    return (
      <div>
        <BannerTop>
          <BannerTitle>My Profile</BannerTitle>
        </BannerTop>
        <MainContent>
          <Center>
            <Mutation mutation={s3Sign}>
              {s3Sign => (
                <Mutation mutation={updateUser}>
                  {(updateUser, { loading }) => (
                    <ImageUpload image={image} onClick={() => this.file.click()}>
                      <span>
                        <PhotoCamera size={20} />
                      </span>
                      <input
                        ref={el => (this.file = el)}
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={e => this.onImageChange(e, s3Sign, updateUser)}
                      />
                    </ImageUpload>
                  )}
                </Mutation>
              )}
            </Mutation>
            <Mutation mutation={updateUser}>
              {(updateUser, { loading }) => (
                <Input
                  type="input"
                  width={300}
                  label={loading ? 'Saving...' : 'Name'}
                  value={name}
                  inputProps={{ name: 'name', spellCheck: false }}
                  onChange={e => this.onChange(e, updateUser)}
                />
              )}
            </Mutation>
            <Mutation mutation={updateUser}>
              {(updateUser, { loading }) => (
                <Input
                  type="input"
                  width={300}
                  label={loading ? 'Saving...' : 'Email'}
                  value={email}
                  inputProps={{ name: 'email', spellCheck: false }}
                  onChange={e => this.onChange(e, updateUser)}
                />
              )}
            </Mutation>

            <Mutation mutation={updateUser}>
              {(updateUser, { loading }) => (
                <Input
                  type="input"
                  width={300}
                  label={loading ? 'Saving...' : 'Homepage'}
                  hint="URL of your personal website"
                  value={homepage}
                  inputProps={{ name: 'homepage', spellCheck: false }}
                  onChange={e => this.onChange(e, updateUser)}
                />
              )}
            </Mutation>
          </Center>
        </MainContent>
      </div>
    )
  }
}
