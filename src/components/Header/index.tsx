import { Titulo, Campo } from './styles'
import * as S from './styles'
import imagemdeFundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <S.Hedaer style={{ backgroundImage: `url(${imagemdeFundo})` }}>
    <Campo>
      <Titulo>Restaurantes</Titulo>
    </Campo>
    <S.img src={logo} />
    <a href="#">0 Produto(s) no Carrinho</a>
  </S.Hedaer>
)

export default Header
