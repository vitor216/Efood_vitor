import Button from '../Button'
import pizza1 from '../../assets/images/pizza1.png'

import { Overlay, CartContainer, Sidebar, Prices, Produto } from './styles'
const Cart = () => (
  <CartContainer>
    <Overlay />
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

export default Cart
