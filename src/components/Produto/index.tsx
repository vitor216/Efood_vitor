import Nota from '../Nota'
import Tag from '../Tag'
import Button from '../Button'

import { Texto, Titulo, Card, Infos, Infos2, Container, Botao } from './styles'
import * as S from './styles'

type Props = {
  title: string
  nota: string
  informacao: string[]
  description: string
  image: string
}
const Produto = ({ title, nota, informacao, description, image }: Props) => (
  <Card>
    <S.img src={image} alt={title} />
    <Container>
      <Infos>
        {informacao.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Infos2>
        <Nota>{nota}</Nota>
      </Infos2>
      <Texto>{description}</Texto>
      <Botao>
        <Button
          variant="primary"
          type="button"
          title="clique aqui para saber mais"
        >
          Saiba Mais
        </Button>
      </Botao>
    </Container>
  </Card>
)

export default Produto
