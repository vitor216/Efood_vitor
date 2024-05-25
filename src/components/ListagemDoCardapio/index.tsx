import Cardapio from '../Cardapio'
import { Pratos } from '../../Pages/Cardapio'
import * as S from './styles'

export type Props = {
  prato: Pratos[]
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListagemDoCardapio = ({ prato }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {prato.map((prato) => (
            <Cardapio
              key={prato.id}
              id={prato.id}
              nome={prato.nome}
              descricao={prato.descricao}
              foto={prato.foto}
              preco={prato.preco}
              porcao={prato.porcao}
              prato={prato}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ListagemDoCardapio
