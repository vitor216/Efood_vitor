import Nota from '../Nota'
import Tag from '../Tag'
import Button from '../Button'

import { Texto, Titulo, Card, Infos, Infos2, Container, Botao } from './styles'
import * as S from './styles'

type Props = {
  title: string
  nota: string
  pais: string
  description: string
  destaque: string
  image: string
  botao: string
}
const Produto = ({
  title,
  nota,
  pais,
  description,
  destaque,
  image,
  botao
}: Props) => (
  <Card>
    <S.img src={image} alt={title} />
    <Container>
      <Infos>
        <Tag>{destaque}</Tag>
        <Tag>{pais}</Tag>
      </Infos>
      <Titulo>{title}</Titulo>
      <Infos2>
        <Nota>{nota}</Nota>
      </Infos2>
      <Texto>{description}</Texto>
      <Botao>
        <Button type="link" to="/produto" title="clique aqui para saber mais">
          {botao}
        </Button>
      </Botao>
    </Container>
  </Card>
)

export default Produto
