import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const img = styled.img`
  width: 472px;
  height: 217px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 320px;
  }
}
`
export const Container = styled.div`
  border: 1px solid ${cores.vermelho};
  margin-top: -5px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 320px;
  }
`
export const Titulo = styled.h3`
  color: ${cores.vermelho};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  margin-top: 8px;
  margin-left: 7px;
`
export const Texto = styled.p`
  color: ${cores.vermelho};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-top: 13px;
  margin-left: 7px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-right: 3.5px;
  }
`
export const Campo = styled.div`
  width: 464px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 320px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
export const Infos2 = styled.div`
  display: flex;
  margin-top: -22px;
  margin-left: 408px;
  margin-right: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 258px;
  }
`
export const Botao = styled.div`
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
`
