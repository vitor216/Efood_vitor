import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'produtos'>>`
  backgrond-color: ${cores.branca};
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
