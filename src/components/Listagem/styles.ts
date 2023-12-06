import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'produtos'>>`
  backgrond-color: ${cores.branca};
  width: 1024px;
  height: 1290px;
  margin-left: 170px;
  margin-bottom: 120px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;
`
