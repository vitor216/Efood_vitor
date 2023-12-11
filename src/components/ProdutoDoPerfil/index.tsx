import Button from '../Button'

import { Texto, Titulo, Card, Botao } from './styles'
import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
}
const ProdutoDoPerfil = ({ title, description, image }: Props) => (
  <Card>
    <S.img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Texto>{description}</Texto>
    <Botao>
      <Button
        variant="secondary"
        type="button"
        title="clique aqui para saber mais detalhes"
      >
        Mais detalhes
      </Button>
    </Botao>
  </Card>
)

export default ProdutoDoPerfil
