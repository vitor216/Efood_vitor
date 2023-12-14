import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'produtos2'>>`
  backgrond-color: ${cores.vermelho};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`
