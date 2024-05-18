import Button from '../Button'
import Fechar from '../../assets/images/close.png'
import { useState } from 'react'

import * as S from './styles'
import { formataPreco } from '../ListagemDoCardapio'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

type Props = {
  nome: string
  descricao: string
  preco: number
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

  const getDescricao2 = (descricao: string) => {
    if (descricao.length > 230) {
      return descricao.slice(0, 227) + '...'
    }
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add())
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
              <S.Campo2>
                <S.Titulo2>{nome}</S.Titulo2>
              </S.Campo2>
              <S.Campo1>
                <S.Description>{getDescricao2(descricao)}</S.Description>
                <S.Description>Serve: de {porcao}</S.Description>
                <Button
                  variant="secondary"
                  type="button"
                  title="clique aqui para adcionar ao carrinho"
                  onClick={addToCart}
                >
                  {`Adicionar ao Carrinho - R$ ${formataPreco(preco)}`}
                </Button>
              </S.Campo1>
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
