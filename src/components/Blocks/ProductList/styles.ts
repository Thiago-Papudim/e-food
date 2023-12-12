import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 32px;
  column-gap: 32px;
  margin-top: 64px;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
