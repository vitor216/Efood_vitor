import * as S from './styles'
import imagemdeFundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <S.Hedaer style={{ backgroundImage: `url(${imagemdeFundo})` }}>
    <S.Container>
      <S.Campo>
        <S.Titulo>Restaurantes</S.Titulo>
      </S.Campo>
      <S.img src={logo} />
      <a href="#">0 Produto(s) no Carrinho</a>
    </S.Container>
  </S.Hedaer>
)

export default Header
