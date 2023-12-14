import styled from 'styled-components'
import { cores } from '../../styles'

export const Hedaer = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    color: ${cores.vermelho};
    text-decoration: none;
    font-weight: bold;
  }
`
export const Container = styled.div`
  width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const img = styled.img`
  width: 125px;
  height: 57.5px;
`
export const Campo = styled.div`
  max-width: 109px;
  height: 21px;
`
export const Titulo = styled.h1`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  font-family: Roboto;
`
