import styled from 'styled-components'

import close from '../../../assets/images/lixeira.svg'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${cores.corPrimary};
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;

  &.is-closed {
    display: none;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${cores.corSecondary};
    display: block;
    margin-bottom: 8px;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input {
    background-color: ${cores.corSecondary};
    height: 32px;
    padding: 8px;
    border: none;
    width: 100%;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: black;

    &.error {
      border: 2px solid red;
      color: red;
    }
  }

  small {
    display: block;
    margin-bottom: 16px;
    color: ${cores.corTexto};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.corSecondary};
    margin-bottom: 16px;
  }
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${cores.corSecondary};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 34px;

  #cardNumber {
    width: 228px;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.corBackground};
  margin-bottom: 24px;
  margin-top: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  span {
    color: ${cores.corBackground};
  }
`
export const CartItem = styled.li`
  display: flex;
  gap: 16px;
  border-bottom: 1px solid ${cores.corBackground};
  padding: 8px;
  position: relative;
  background-color: ${cores.corSecondary};
  margin: 8px 0;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: ${cores.corSecondary};
  color: ${cores.corPrimary};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`
