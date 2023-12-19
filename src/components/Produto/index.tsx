import Nota from '../Nota'
import Tag from '../Tag'
import Tag2 from '../Tag2'
import Button from '../Button'

import * as S from './styles'

type Props = {
  titulo: string
  avaliacao: number
  destacado: string
  tipo: string
  descricao: string
  capa: string
}
const Produto = ({
  titulo,
  avaliacao,
  destacado,
  tipo,
  descricao,
  capa
}: Props) => {
  const getTag = (item: Props) => {
    if (item.destacado === true) return 'Destaque da semana'
  }
  return (
    <S.Card>
      <S.img src={capa} alt={titulo} />
      <S.Container>
        <S.Infos>
          <Tag>{destacado}</Tag>
          <Tag2>{tipo}</Tag2>
        </S.Infos>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Infos2>
          <Nota>{avaliacao}</Nota>
        </S.Infos2>
        <S.Campo>
          <S.Texto>{descricao}</S.Texto>
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
}

export default Produto
