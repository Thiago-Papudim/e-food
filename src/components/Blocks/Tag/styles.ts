import styled from 'styled-components'
import { cores } from '../../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corPrimary};
  color: ${cores.corSecondary};
  display: flex;
  font-weight: bold;
  padding: 6px 4px;
  font-size: 12px;
`
