import Button from '../Button'

import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
}
const ProdutoDoPerfil = ({ title, description, image }: Props) => (
  <S.Card>
    <S.img src={image} alt={title} />
    <S.Titulo>{title}</S.Titulo>
    <S.Texto>{description}</S.Texto>
    <S.Botao>
      <Button
        variant="secondary"
        type="button"
        title="clique aqui para saber mais detalhes"
      >
        Mais detalhes
      </Button>
    </S.Botao>
  </S.Card>
)

export default ProdutoDoPerfil
