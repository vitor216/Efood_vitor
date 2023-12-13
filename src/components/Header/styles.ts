import styled from 'styled-components'
import { cores } from '../../styles'

export const Hedaer = styled.header`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    color: ${cores.vermelho};
    text-decoration: none;
    font-weight: bold;
    margin-top: -15px;
    margin-left: 350px;
  }
`
export const img = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 39px;
  margin-bottom: 64.5px;
  margin-left: 250px;
`
export const Campo = styled.div`
  max-width: 109px;
  height: 21px;
  margin-top: 58px;
  margin-bottom: 83px;
`
export const Titulo = styled.h1`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  font-family: Roboto;
`
