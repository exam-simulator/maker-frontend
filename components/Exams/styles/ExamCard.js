import styled, { css } from 'styled-components'
import { darken } from 'polished'
import Media from '../../Page/Media'

function highlight() {
  return css`
    font: 1rem 'Open Sans Semi';
    text-transform: uppercase;
    color: ${props => props.theme.grey[5]};
    border: 1px solid ${props => props.theme.grey[2]};
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.grey[0]};
    transition: 0.3s;
  `
}

export const ExamCardStyles = styled.div`
  position: relative;
  width: 55rem;
  display: grid;
  grid-template-columns: 5rem 1fr 5rem;
  grid-gap: 2rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${props => props.theme.grey[2]};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 2rem;
  ${Media.phone`
    width: 30rem;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr 2rem;
    justify-items: center;  
    grid-gap: 1rem;
  `};
  .edit {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.2rem 1rem;
    ${highlight()}
    &:hover {
      color: ${props => props.theme.grey[10]};
      border: 1px solid ${props => props.theme.grey[5]};
    }
    & > :first-child {
      margin-right: 0.5rem;
    }
  }
  .image {
    width: 5rem;
    height: 5rem;
  }
  .main {
    .stat {
      ${highlight()}
      padding: 0.1rem 0.25rem;
      margin-right: 0.25rem;
    }
    .title {
      width: 40rem;
      font: 1.75rem 'Open Sans Bold';
      color: ${props => props.theme.grey[12]};
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      ${Media.phone`
        width: 30rem;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      `};
    }
    .description {
      width: 40rem;
      font: 1.1rem 'Open Sans';
      text-align: justify;
      margin-bottom: 0.5rem;
      ${Media.phone`
        width: 30rem;
         margin-bottom: 1rem;
      `};
    }
    .meta {
      display: flex;
      align-items: center;
      margin-top: 0.25rem;
      .date {
        font: 1rem 'Open Sans Semi';
        color: ${props => props.theme.grey[5]};
      }
      .name-red {
        font: 1rem 'Open Sans Semi';
        color: ${props => props.theme.secondary};
        margin-right: 0.5rem;
        &:hover {
          color: ${props => darken(0.1, props.theme.secondary)};
        }
      }
      .name {
        font: 1rem 'Open Sans Semi';
        color: ${props => props.theme.grey[5]};
        margin-right: 0.5rem;
      }
      .avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
    }
  }
  .actions {
    align-self: flex-end;
    justify-self: flex-end;
    cursor: pointer;
    svg {
      color: ${props => props.theme.grey[5]};
      &:hover {
        color: ${props => props.theme.grey[10]};
      }
    }
  }
`
