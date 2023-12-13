import ProdutosDoPerfilM from '../../models/ProdutosDoPerfil'
import ProdutosDoPerfil from '../ProdutoDoPerfil'
import * as S from './styles'
import Pizza from '../../assets/images/Pizza.svg'
import Fechar from '../../assets/images/close.png'
export type Props = {
  produtos2: ProdutosDoPerfilM[]
}

const ListagemDoPerfil = ({ produtos2 }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {produtos2.map((produto2) => (
            <ProdutosDoPerfil
              key={produto2.id}
              title={produto2.title}
              description={produto2.description}
              image={produto2.image}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ListagemDoPerfil
