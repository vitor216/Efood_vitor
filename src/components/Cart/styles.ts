import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 16px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 360px;
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 16px;

  span {
    margin-left: 200px;
  }
`
export const Produto = styled.li`
  display: flex;
  border-bottom: 1px solid red;
  position: relative;
  background-color: ${cores.amarelo};
  max-width: 344px;
  width: 100%;
  height: 100px;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
    margin-left: 8px;
    margin-top: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 16px;
    margin-top: 8px;
  }

  p {
    display: block;
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 14px;
    margin-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 8px;
    font-family: Roboto;
    font-weight: 700;
    cursor: pointer;
  }
`
export const Qtd = styled.input`
  background-color: transparent;
  border: none;
  color: ${cores.vermelho};
  width: 30px;
`
export const Qtd2 = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 16px;

  span {
    margin-left: 200px;
  }
`
