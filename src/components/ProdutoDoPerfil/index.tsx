import Button from '../Button'

import { Texto, Titulo, Card, Botao } from './styles'
import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  botao: string
}
const ProdutoDoPerfil = ({ title, description, image, botao }: Props) => (
  <Card>
    <S.img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Texto>{description}</Texto>
    <Botao>
      <Button
        type="button"
        title="clique aqui para adicionar o produto ao carrinho"
      >
        {botao}
      </Button>
    </Botao>
  </Card>
)

export default ProdutoDoPerfil
