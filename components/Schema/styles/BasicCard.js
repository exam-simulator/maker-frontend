import styled from 'styled-components'

export const BasicCardStyles = styled.div`
  margin-bottom: 2rem;
  .heading {
    font: 2rem 'Open Sans';
    text-align: center;
  }
  .content {
    font: 1.2rem 'Open Sans';
    text-align: justify;
    padding: 1.5rem 2rem;
    em {
      font-style: italic;
    }
    a {
      color: ${props => props.theme.secondary};
      font: 1.2rem 'Open Sans Semi';
    }
  }
`
