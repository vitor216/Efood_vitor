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
              title={cardapio.title}
              description={cardapio.description}
              image={cardapio.image}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ListagemDoCardapio
