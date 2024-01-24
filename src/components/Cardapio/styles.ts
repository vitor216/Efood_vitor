import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
`
export const img = styled.img`
  width: 304px;
  height: 167px;
}
`
export const Titulo = styled.h3`
  color: ${cores.amarelo};
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`
export const Texto = styled.p`
  color: ${cores.amarelo};
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  display: block;
  margin-top: 8px;
`
export const Botao = styled.div`
  margin-top: 8px;
`
export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
export const Img = styled.img`
  position: absolute;
  left: 1000px;
  top: 8px;
  cursor: pointer;
`
export const Modall = styled.div`
  width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${cores.vermelho};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 280px;
    height: 280px;
  }
`
export const Titulo2 = styled.h2`
  font-size: 18px;
  font-family: Roboto;
  font-weight: 900;
  line-height: 21.09px;
  color: ${cores.branca};
  margin-bottom: 16px;
`
export const Description = styled.p`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.branca};
  margin-bottom: 16px;
`
export const Campo = styled.div`
  margin-top: 23px;
`
export const Campo1 = styled.div`
  margin-left: 24px;
  margin-top: -99px;
`
