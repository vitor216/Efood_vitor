import { Restaurante } from '../../Pages/Home'
import Produto from '../Produto'
import * as S from './styles'

export type Props = {
  produtos: Restaurante[]
}

const ListagemDeRestaurantes = ({ produtos }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Produto
              id={produto.id}
              titulo={produto.titulo}
              avaliacao={produto.avaliacao}
              destacado={produto?.destacado}
              tipo={produto.tipo}
              descricao={produto.descricao}
              capa={produto.capa}
            />
          </li>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ListagemDeRestaurantes
