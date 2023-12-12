import styled from 'styled-components'
import { cores } from '../../../styles'

export const BennerStyle = styled.div`
  position: relative;
  height: 280px;
  background-color: rgba(0, 0, 0, 0.5);

  img {
    position: absolute;
    width: 100%;
    height: 280px;
    object-fit: cover;
    z-index: -1;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    color: ${cores.corTexto};
    font-size: 32px;
    line-height: 37.5px;

    h2 {
      font-weight: 900;
    }

    h3 {
      font-weight: 100;
    }
  }
`
