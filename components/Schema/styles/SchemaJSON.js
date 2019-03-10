import styled from 'styled-components'
import { transparentize, lighten } from 'polished'

export const SchemaBlock = styled.div`
  padding: 1rem;
  .block-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.grey[10]};
    text-transform: uppercase;
    font: 1rem 'Open Sans Semi';
    padding: 1rem 2rem;
    border: 1px solid ${props => props.theme.grey[2]};
    border-bottom: 0;
    & > :last-child {
      color: ${props => props.theme.grey[5]};
    }
  }
`

export const SchemaPre = styled.pre`
  font: 1rem 'Roboto Mono';
  background: ${props => transparentize(0.65, lighten(0.1, props.theme.primary))};
  white-space: pre-wrap;
  padding: 1rem;
  border: 1px solid ${props => props.theme.grey[2]};
  border-top: 0;
`
