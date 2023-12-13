import Produtos from '../../models/Produtos'
import Produto from '../Produto'
import * as S from './styles'

export type Props = {
  produtos: Produtos[]
}

const Listagem = ({ produtos }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
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
      </S.List>
    </div>
  </S.Container>
)

export default Listagem
