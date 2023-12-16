import Cardapio from '../../models/Cardapio'
import ProdutosDoPerfil from '../Cardapio'
import * as S from './styles'

export type Props = {
  cardapio: Cardapio[]
}

const ListagemDoCardapio = ({ cardapio }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {cardapio.map((cardapio) => (
            <ProdutosDoPerfil
              key={cardapio.id}
              nome={cardapio.nome}
              descricao={cardapio.descricao}
              foto={cardapio.foto}
              preco={cardapio.preco}
              porcao={cardapio.porcao}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ListagemDoCardapio
