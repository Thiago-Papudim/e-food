import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <ButtonStyle type="submit" onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  background-color: ${cores.corSecondary};
  color: ${cores.corPrimary};
  padding: 4px 8px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
