import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: 298px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffebd9;
  margin-top: 120px;
`
export const Campo = styled.div`
  display: block;
`
export const Imglogo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-left: 170px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 130px;
  }
`
export const Imgicone = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`
export const Campo2 = styled.div`
  width: 110px;
  height: 24px;
  margin-top: 28.5px;
  margin-left: 180px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 140px;
  }
`
export const Titulo = styled.h2`
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  font-family: Roboto;
  max-width: 480px;
  height: 24px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 25px;
  }
`
