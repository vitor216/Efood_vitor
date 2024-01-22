import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  width: ${(props) =>
    props.variant === 'primary'
      ? '82px'
      : props.variant === 'terciario'
        ? '220px'
        : '304px'};
  height: 24px;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.vermelho : cores.amarelo};
  color: ${(props) =>
    props.variant === 'primary' ? cores.amarelo : cores.vermelho};
  font-size: ${(props) =>
    props.size === 'small' ? '14px' : props.size === 'big' ? '24px' : '18px'};
  font-weight: bold;
  font-family: Roboto;
  border: none;
  text-align: center;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  background-color: ${cores.vermelho};
  color: ${cores.amarelo};
  font-size: 14px;
  font-weight: 700;
  font-family: Roboto;
  padding: 6px 4px;
  text-decoration: none;
  text-align: center;
`
