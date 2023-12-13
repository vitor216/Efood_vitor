import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    position: relative;
  }

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
export const Titulo1 = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  color: #ffffff;
  padding-top: 25px;
  margin-left: 440px;
`
export const Titulo2 = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
  padding-top: 156.5px;
  margin-left: 440px;
`
