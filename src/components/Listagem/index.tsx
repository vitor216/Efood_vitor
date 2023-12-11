import Produtos from '../../models/Produtos'
import Produto from '../Produto'
import { Container, List } from './styles'

export type Props = {
  produtos: Produtos[]
}

const Listagem = ({ produtos }: Props) => (
  <Container>
    <List>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          title={produto.title}
          nota={produto.nota}
          informacao={produto.informacao}
          description={produto.description}
          image={produto.image}
        />
      ))}
    </List>
  </Container>
)

export default Listagem
