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
            titulo={produto.titulo}
            avaliacao={produto.avaliacao}
            destacado={produto?.destacado}
            tipo={produto.tipo}
            descricao={produto.descricao}
            capa={produto.capa}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default Listagem
