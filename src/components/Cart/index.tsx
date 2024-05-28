import Button from '../Button'

import { Overlay, CartContainer, Sidebar, Prices, Produto } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ListagemDoCardapio'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPreco = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Produto key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </Produto>
          ))}
        </ul>
        <Prices>
          Valor Total <span>{formataPreco(getTotalPreco())}</span>
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
