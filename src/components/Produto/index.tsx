import Nota from '../Nota'
import Tag from '../Tag'
import Button from '../Button'

import * as S from './styles'

type Props = {
  titulo: string
  avaliacao: number
  destacado?: string | undefined
  tipo: string
  descricao: string
  capa: string
  id: number
}
const Produto = ({
  titulo,
  avaliacao,
  destacado,
  tipo,
  descricao,
  capa,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
  }

  return (
    <S.Card>
      <S.img src={capa} alt={titulo} />
      <S.Container>
        <S.Infos>
          {destacado ? <Tag>Destaque da Semana</Tag> : null}
          <Tag>{tipo}</Tag>
        </S.Infos>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Infos2>
          <Nota>{avaliacao}</Nota>
        </S.Infos2>
        <S.Campo>
          <S.Texto>{getDescricao(descricao)}</S.Texto>
        </S.Campo>
        <S.Botao>
          <Button
            variant="primary"
            type="link"
            title="clique aqui para saber mais"
            size="small"
            to={`/cardapio/${id}`}
          >
            Saiba Mais
          </Button>
        </S.Botao>
      </S.Container>
    </S.Card>
  )
}

export default Produto
