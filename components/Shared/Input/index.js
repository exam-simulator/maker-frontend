import { InputStyles, Label, Underline, Hint, Length } from './styles'

export default class Input extends React.Component {
  state = {
    focus: false
  }

  componentDidMount() {
    this.text.addEventListener('input', this.resize)
    if (this.text.scrollHeight > 20) {
      this.resize()
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.value && this.props.value && this.text.scrollHeight > 20) {
      this.resize()
    }
  }

  componentWillUnmount() {
    this.text.removeEventListener('input', this.resize)
  }

  resize = () => {
    this.text.style.height = 'auto'
    this.text.style.height =
      this.text.scrollHeight > 20
        ? this.text.scrollHeight + 2 + 'px'
        : this.text.scrollHeight + 'px'
  }

  onFocus = () => this.setState({ focus: true }, () => this.text.focus())

  onBlur = () => this.setState({ focus: false })

  render() {
    const {
      props: { type, width, value, label, hint, inputProps, onChange },
      state: { focus }
    } = this
    return (
      <InputStyles
        width={width}
        focus={focus}
        value={Boolean(value)}
        hint={Boolean(hint)}
        bottom={inputProps.hasOwnProperty('maxLength')}
      >
        <Label focus={focus} value={Boolean(value)} onClick={this.onFocus}>
          {label}
        </Label>
        {type === 'textarea' ? (
          <textarea
            ref={el => (this.text = el)}
            {...inputProps}
            rows={1}
            value={value}
            onChange={onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        ) : (
          <input
            type={type}
            ref={el => (this.text = el)}
            {...inputProps}
            value={value}
            onChange={onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        )}
        <Underline focus={focus}>
          <div />
          <div />
        </Underline>
        <Hint show={Boolean(hint)} focus={focus}>
          {hint}
        </Hint>
        <Length show={inputProps && inputProps.hasOwnProperty('maxLength')} focus={focus}>
          {value ? value.length : 0}/{inputProps.maxLength || 0}
        </Length>
      </InputStyles>
    )
  }
}
