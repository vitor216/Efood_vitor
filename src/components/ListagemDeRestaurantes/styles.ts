import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, cores } from '../../styles'

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

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 10px;
    row-gap: 20px;
    margin-left: -20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    margin-left: -10px;
    margin-bottom: -80px;
  }
`
