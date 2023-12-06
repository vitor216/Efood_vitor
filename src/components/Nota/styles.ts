import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const Notas = styled.div<Props>`
  background-color: ${cores.branca};
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 700;
  font-family: roboto;
`
export const ImgEstrela = styled.div`
  background-color: ${cores.branca};

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`
