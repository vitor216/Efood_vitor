import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'produtos2'>>`
  backgrond-color: ${cores.vermelho};
  margin-left: 460px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1024px;
  height: 344px;
  backgrond-color: ${cores.vermelho};
`
