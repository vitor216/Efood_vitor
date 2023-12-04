import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const Notas = styled.div<Props>`
  background-color: ${cores.branca};
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 700;
  font-family: roboto;
  text-align: center;
  margin-top: 8px;
`
export const ImgEstrela = styled.div`
  background-color: ${cores.branca};
  margin-right: 8px;

  img {
    width: 21px;
    height: 21px;
  }
`
