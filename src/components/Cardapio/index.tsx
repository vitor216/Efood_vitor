import Button from '../Button'
import Fechar from '../../assets/images/close.png'
import { useState } from 'react'

import * as S from './styles'

type Props = {
  nome: string
  descricao: string
  preco: number | string
  porcao: string
  foto: string
}
const Cardapio = ({ nome, descricao, preco, foto, porcao }: Props) => {
  const [ModalEstaAberto, setModalEstaAberto] = useState(false)
  const [ModalImage, setModalImage] = useState('')
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
  }

  return (
    <S.Card>
      <S.img src={foto} alt={nome} />
      <S.Titulo>{nome}</S.Titulo>
      <S.Texto>{getDescricao(descricao)}</S.Texto>
      <S.Botao>
        <Button
          variant="secondary"
          type="button"
          title="clique aqui para adicionar item ao carrinho"
          onClick={() => {
            setModalEstaAberto(true)
            setModalImage(foto)
          }}
        >
          Adicinar ao Carrinho
        </Button>
      </S.Botao>
      <S.Modal className={ModalEstaAberto ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <S.Img
            src={Fechar}
            alt="Icone de fechar"
            onClick={() => setModalEstaAberto(false)}
          />
          <S.Modall>
            <img src={ModalImage} />
            <S.Campo>
              <S.Titulo2>{nome}</S.Titulo2>
              <S.Description>
                {descricao} <br />
                <br />
                Serve: de {porcao}
              </S.Description>
              <Button
                variant="terciario"
                type="button"
                title="clique aqui para adcionar ao carrinho"
              >
                {`Adicionar ao Carrinho - R$ ${preco as string}`}
              </Button>
            </S.Campo>
          </S.Modall>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </S.Modal>
    </S.Card>
  )
}

export default Cardapio
