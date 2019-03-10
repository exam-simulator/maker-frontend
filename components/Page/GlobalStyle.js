import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  @font-face {
    font-family: 'Open Sans Light';
    src: url('/static/OpenSans-Light.ttf') format('opentype');
    font-display: auto;
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/static/OpenSans-Regular.ttf') format('opentype');
    font-display: auto;
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans Semi';
    src: url('/static/OpenSans-SemiBold.ttf') format('opentype');
    font-display: auto;
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans Bold';
    src: url('/static/OpenSans-Bold.ttf') format('opentype');
    font-display: auto;
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Mono';
    src: url('/static/RobotoMono-Regular.ttf') format('opentype');
    font-display: auto;
    font-weight: normal;
    font-style: normal;
  }
  html, body, div, span, applet, object, iframe, table, caption, tbody, tfoot, thead, tr, th, td, 
  del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, 
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, 
  dl, dt, dd, ol, ul, li, fieldset, form, label, legend {
	  vertical-align: baseline;
	  font-family: inherit;
	  font-weight: inherit;
	  font-style: inherit;
	  font-size: 100%;
	  outline: 0;
	  padding: 0;
	  margin: 0;
	  border: 0;
	}
  /* remember to define focus styles! */
  :focus {
	outline: 0;
	}
  html {
    font-family: 'Open Sans';
    font-size: ${theme.baseFontSize};
    overflow-y: scroll;
  }
  body {
    background: ${theme.white};
    line-height: 1;
    color: ${theme.black};
    }
  ol, ul {
    list-style: none;
    }
  button {
    border: 0;
    border-radius: ${theme.borderRadius};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  /* tables still need cellspacing="0" in the markup */
  table {
    border-collapse: separate;
    border-spacing: 0;
    }
  caption, th, td {
    font-weight: normal;
    text-align: left;
    }
  /* remove possible quote marks (") from <q> & <blockquote> */
  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    }
  blockquote, q {
    quotes: "" "";
    }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.grey[0]};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.grey[5]};
  } 
  #nprogress {
    pointer-events: none;
    }
  #nprogress .bar {
    background: ${theme.secondary};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${theme.secondary}, 0 0 5px ${theme.secondary};
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
`
