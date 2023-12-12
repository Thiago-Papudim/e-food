import styled from 'styled-components'
import { cores } from '../../styles'

export const RestauranteStyle = styled.div`
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
export const CardapioStyle = styled.div`
  margin-top: 64px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
export const ImageStyle = styled.img`
  width: 300px;
  height: 168px;
  object-fit: cover;
`

export const PratoStyle = styled.div`
  background-color: ${cores.corPrimary};
  color: ${cores.corSecondary};
  position: relative;
  padding: 8px;

  img {
    width: 300px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    margin: 8px 0 64px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    background-color: ${cores.corSecondary};
    color: ${cores.corPrimary};
    position: absolute;
    padding: 4px 0;
    bottom: 8px;
    right: 8px;
    left: 8px;
    border: none;
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &.visivel {
    display: flex;
  }
`
export const ModalContent = styled.div`
background-color: ${cores.corPrimary};
color: ${cores.corTexto};
align-items: center;
position: relative;
width: 100%;
display: flex;
padding: 32px;
gap: 24px;


  h3 {
      font-size: 14px;
      font-weight: bold;
    }

    p {
      width: 656px;
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 300;
      line-height: 22px;
    }
  }
`
export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalSobre = styled.div`
  a {
    background-color: ${cores.corSecondary};
    color: ${cores.corPrimary};
    padding: 4px 8px;
    font-size: 14px;
    font-weight: bold;
    line-height: 16.41px;
    cursor: pointer;
  }
`

export const ModalDescription = styled.div`
  margin-bottom: 16px;
`

export const Close = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`
