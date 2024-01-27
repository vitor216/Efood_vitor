import Cardapio from '../Cardapio'
import { Pratos } from '../../Pages/Cardapio1'
import * as S from './styles'

export type Props = {
  cardapios: Pratos[]
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListagemDoCardapio = ({ cardapios }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {cardapios.map((cardapio) => (
            <Cardapio
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
