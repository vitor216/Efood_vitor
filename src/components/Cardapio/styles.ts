import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
`
export const img = styled.img`
  width: 304px;
  height: 167px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
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
  left: 0;
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 50px;
  }

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
  left: 740px;
  top: 8px;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    left: 380px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    left: 180px;
  }
`
export const Modall = styled.div`
  width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${cores.vermelho};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    width: 768px;
    margin-left: -359px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: -163px;
  }

  img {
    width: 280px;
    height: 280px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 220px;
      height: 220px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 110px;
      height: 110px;
      margin-left: 220px;
      margin-top: -100px;
    }
  }
`
export const Titulo2 = styled.h2`
  font-size: 18px;
  font-family: Roboto;
  font-weight: 900;
  line-height: 21.09px;
  color: ${cores.branca};
`
export const Description = styled.p`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.branca};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 65%;
  }
`
export const Campo = styled.div`
  margin-top: 23px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 100px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 100px;
    margin-left: -380px;
  }
`
export const Campo1 = styled.div`
  margin-top: 16px;
  margin-left: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 65%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 50%;
  }
`
export const Campo2 = styled.div`
  margin-left: 24px;
  margin-top: -121px;
`
