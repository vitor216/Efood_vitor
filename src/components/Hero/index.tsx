import { Imagem, Titulo, Campo } from './styles'
import * as S from './styles'
import imagemdeFundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${imagemdeFundo})` }}>
    <S.img src={logo} />
    <Campo>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </Campo>
  </Imagem>
)

export default Hero
