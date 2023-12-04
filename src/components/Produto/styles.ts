import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};

  ${TagContainer} {
    marginright: 16px;
  }
`

export const Titulo = styled.h3`
  color: ${cores.vermelho};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
  margin-left: 7px;
`
export const Texto = styled.p`
  color: ${cores.vermelho};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  display: block;
`
