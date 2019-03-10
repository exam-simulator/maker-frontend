import styled from 'styled-components'

export const BannerTop = styled.div`
  height: 100px;
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${props => props.theme.grey[0]};
`

export const BannerTitle = styled.div`
  width: ${props => props.theme.maxWidth};
  font: 3rem 'Open Sans Light';
`
