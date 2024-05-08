import * as S from './styles'
import imagemdeFundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Hedaer style={{ backgroundImage: `url(${imagemdeFundo})` }}>
      <S.Container>
        <S.Campo>
          <S.Titulo>Restaurantes</S.Titulo>
        </S.Campo>
        <a href="/">
          <S.img src={logo} />
        </a>
        <S.ButtonCart onClick={openCart}>0 Produto(s) no Carrinho</S.ButtonCart>
      </S.Container>
    </S.Hedaer>
  )
}

export default Header
