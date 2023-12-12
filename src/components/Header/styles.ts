import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import background from '../../assets/images/backgroundHome.svg'

export const HeaderStyle = styled.header`
  background-image: url(${background});
  padding-bottom: 40px;
  text-align: center;
  padding-top: 64px;
  height: 384px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    height: 176px;
    padding-top: 32px;
  }

  img {
    padding-bottom: 136px;

    @media (max-width: ${breakpoints.tablet}) {
      padding-bottom: 8px;
      width: 80px;
    }
  }

  p {
    font-weight: bold;
    line-height: 40px;
    font-size: 32px;
    color: ${cores.corPrimary};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }
`
