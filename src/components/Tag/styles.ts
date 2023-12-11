import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.amarelo};
  font-size: ${(props) =>
    props.size === 'small' ? '12' : props.size === 'big' ? '24' : '18'};
  font-weight: 700;
  padding: ${(props) =>
    props.size === 'small'
      ? '4px 6px'
      : props.size === 'big'
        ? '4px 6px'
        : '6px 4px'};
  display: inline-block;
`
