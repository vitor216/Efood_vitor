import ProdutosDoPerfilM from '../../models/ProdutosDoPerfil'
import ProdutosDoPerfil from '../ProdutoDoPerfil'
import { Container, List } from './styles'

export type Props = {
  produtos2: ProdutosDoPerfilM[]
}

const ListagemDoPerfil = ({ produtos2 }: Props) => (
  <Container>
    <List>
      {produtos2.map((produto2) => (
        <ProdutosDoPerfil
          key={produto2.id}
          title={produto2.title}
          description={produto2.description}
          image={produto2.image}
        />
      ))}
    </List>
  </Container>
)

export default ListagemDoPerfil
