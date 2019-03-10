import styled from 'styled-components'

export const InputStyles = styled.div`
  position: relative;
  width: ${props => (props.width ? `${props.width}px` : '200px')};
  margin-bottom: 4rem;
  input,
  textarea {
    width: 100%;
    border: 0;
    font: 1.3rem 'Open Sans';
    color: ${props => props.theme.black};
    resize: none;
    overflow: hidden;
    padding: 0;
    padding-bottom: 0.1rem;
    margin: 0;
  }
  .underline {
    position: relative;
    height: 2px;
    background: ${props => props.theme.grey[5]};
  }
`

export const Label = styled.span.attrs(props => ({
  style: {
    top: props.focus || props.value ? '-2rem' : '-.3rem',
    font: props.focus || props.value ? '1.1rem "Open Sans Semi"' : '1.5rem "Open Sans"',
    color: props.focus ? props.theme.black : props.theme.grey[5]
  }
}))`
  position: absolute;
  transition: all 0.2s;
`

export const Underline = styled.div.attrs(props => ({
  style: {
    width: props.focus ? '100%' : '0%',
    height: '2px'
  }
}))`
  position: absolute;
  background: ${props => props.theme.black};
  transition: 0.1s;
`

export const Hint = styled.div.attrs(props => ({
  style: {
    display: props.show ? 'block' : 'none',
    color: props.focus ? props.theme.black : props.theme.grey[5]
  }
}))`
  position: absolute;
  bottom: -1.3rem;
  left: 0;
  font: 0.9rem 'Open Sans Semi';
`

export const Length = styled.div.attrs(props => ({
  style: {
    display: props.show ? 'block' : 'none',
    color: props.focus ? props.theme.black : props.theme.grey[5]
  }
}))`
  position: absolute;
  bottom: -1.3rem;
  right: 0;
  font: 0.9rem 'Open Sans Semi';
`
