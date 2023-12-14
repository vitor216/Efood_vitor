import * as S from './styles'
import imagemdeFundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <S.Imagem style={{ backgroundImage: `url(${imagemdeFundo})` }}>
    <S.Container>
      <S.img src={logo} />
      <S.Campo>
        <S.Titulo>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Titulo>
      </S.Campo>
    </S.Container>
  </S.Imagem>
)

export default Hero
