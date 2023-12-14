import styled from 'styled-components'
import { cores } from '../../styles'

export const Hedaer = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    color: ${cores.vermelho};
    text-decoration: none;
    font-weight: bold;
    margin-top: -54px;
    margin-left: 250px;
  }
`
export const img = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 18px;
  margin-bottom: 64.5px;
  margin-left: 360px;
`
export const Campo = styled.div`
  max-width: 109px;
  height: 21px;
  margin-top: 34px;
  margin-left: 440px;
  margin-bottom: 83px;
`
export const Titulo = styled.h1`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  font-family: Roboto;
`
