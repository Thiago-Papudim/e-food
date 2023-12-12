import styled from 'styled-components'

import { breakpoints, cores } from '../../../styles'
import { TagContainer } from '../Tag/styles'

export const Store = styled.div`
  width: 472px;
  height: 400px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
    height: 240px;
  }

  a {
    font-weight: bold;
    font-size: 14px;
    padding: 4px 6px;
    background-color: ${cores.corPrimary};
    color: ${cores.corSecondary};
    border: none;
  }

  ${TagContainer} {
    position: absolute;
    margin-left: 8px;
    right: 8px;
    top: 8px;
  }
`
export const Capa = styled.img`
  width: 100%;
  height: 216px;
  display: block;
`

export const Description = styled.div`
  color: ${cores.corPrimary};
  position: relative;
  padding: 8px;
  padding-bottom: 12px;
  border: 1px solid ${cores.corPrimary};

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  span {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    font-weight: bold;

    img {
      margin-left: 8px;
    }
  }

  p {
    margin-top: 16px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
  }
`
