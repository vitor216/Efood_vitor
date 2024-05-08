import Button from '../Button'
import pizza1 from '../../assets/images/pizza1.png'

import { Overlay, CartContainer, Sidebar, Prices, Produto } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <Produto>
            <img src={pizza1} />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <button type="button" />
          </Produto>
          <Produto>
            <img src={pizza1} />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <button type="button" />
          </Produto>
          <Produto>
            <img src={pizza1} />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <button type="button" />
          </Produto>
        </ul>
        <Prices>
          Valor Total <span>R$ 182,70</span>
        </Prices>
        <Button
          title="clique aqui para continuar"
          type="button"
          size="small"
          variant="secondary"
        >
          Continuar com a Entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
