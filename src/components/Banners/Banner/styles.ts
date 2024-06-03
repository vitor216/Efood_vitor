import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -23px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    content: '';
    opacity: 0.5;
  }
`
export const Container = styled.div`
  width: 1024px;
  display: block;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 60px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 10px;
  }
`
export const Titulo1 = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  color: #ffffff;
  padding-top: 25px;
`
export const Titulo2 = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
  padding-top: 156.5px;
`
