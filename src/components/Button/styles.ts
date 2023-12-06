import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  width: 295px;
  height: 24px;
  background-color: ${cores.amarelo};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  font-family: Roboto;
  padding: 4px 6px;
  border: none;
`
export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  background-color: ${cores.vermelho};
  color: ${cores.amarelo};
  font-size: 14px;
  font-weight: 700;
  font-family: roboto;
  padding: 6px 4px;
  text-decoration: none;
  text-align: center;
`
