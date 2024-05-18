import * as S from './styles'
import imagemdeFundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

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
        <S.ButtonCart onClick={openCart}>
          {items.length} - Produto(s) no Carrinho
        </S.ButtonCart>
      </S.Container>
    </S.Hedaer>
  )
}

export default Header
