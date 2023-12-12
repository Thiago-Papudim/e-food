import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const FooterStyle = styled.footer`
  background-color: ${cores.corSecondary};
  height: 296px;
  width: 100%;

  p {
    margin: 0 auto;
    text-align: center;
    color: ${cores.corPrimary};
    max-width: 480px;
    font-size: 10px;
    font-weight: 400;
    margin-top: 80px;
    line-height: 11.72px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 40px;
    }
  }
`

export const Images = styled.div`
  display: grid;
  justify-items: center;

  img {
    margin-top: 32px;
  }
`
