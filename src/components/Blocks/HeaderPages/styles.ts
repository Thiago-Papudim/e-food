import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'
import background from '../../../assets/images/background.svg'

export const Header = styled.header`
  background-image: url(${background});
  width: 100%;
`

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 184px;
  padding: 64px 0;

  @media (max-width: ${breakpoints.tablet}) {
    height: 128px;
  }

  img {
    @media (max-width: ${breakpoints.tablet}) {
      width: 80px;
    }
  }

  h2,
  span {
    color: ${cores.corPrimary};
    line-height: 22px;
    font-weight: 900;
    font-size: 16px;
    width: 96px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 32px;
    }
  }

  h2 {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  a {
    color: ${cores.corPrimary};
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }
  }
`
