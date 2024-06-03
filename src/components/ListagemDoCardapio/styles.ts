import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'prato'>>`
  backgrond-color: ${cores.vermelho};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: -50px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 25px;
    margin-bottom: -90px;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 40px;
    margin-left: -35px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 25px;
  }
`
