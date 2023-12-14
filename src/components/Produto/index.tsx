import Nota from '../Nota'
import Tag from '../Tag'
import Button from '../Button'

import * as S from './styles'

type Props = {
  title: string
  nota: string
  informacao: string[]
  description: string
  image: string
}
const Produto = ({ title, nota, informacao, description, image }: Props) => (
  <S.Card>
    <S.img src={image} alt={title} />
    <S.Container>
      <S.Infos>
        {informacao.map((info) => (
          <Tag size="small" key={info}>
            {info}
          </Tag>
        ))}
      </S.Infos>
      <S.Titulo>{title}</S.Titulo>
      <S.Infos2>
        <Nota>{nota}</Nota>
      </S.Infos2>
      <S.Campo>
        <S.Texto>{description}</S.Texto>
      </S.Campo>
      <S.Botao>
        <Button
          variant="primary"
          type="button"
          title="clique aqui para saber mais"
          size="small"
        >
          Saiba Mais
        </Button>
      </S.Botao>
    </S.Container>
  </S.Card>
)

export default Produto
