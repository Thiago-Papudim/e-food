import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Section = styled.section`
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 40px;
    margin-bottom: 280px;
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 240px;
  }
`
