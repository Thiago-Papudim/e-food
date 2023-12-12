import styled from 'styled-components'
import { cores } from '../../../styles'

export const ImageStyle = styled.img`
  width: 300px;
  height: 168px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const PratoStyle = styled.div`
  background-color: ${cores.corPrimary};
  color: ${cores.corSecondary};
  position: relative;
  padding: 8px;

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
  position: relative;
  width: 100%;
  display: flex;
  padding: 32px;
  gap: 24px;
`
export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalSobre = styled.div`
  h2 {
    margin-top: 2px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    width: 656px;
    margin: 16px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const Close = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`
