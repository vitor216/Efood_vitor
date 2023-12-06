import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'produtos2'>>`
  backgrond-color: ${cores.vermelho};
  width: 1024px;
  height: 708px;
  margin-left: 172px;
  margin-bottom: 120px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
`
