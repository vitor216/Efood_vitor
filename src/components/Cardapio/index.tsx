import Button from '../Button'
import Fechar from '../../assets/images/close.png'
import { useState } from 'react'

import * as S from './styles'

type Props = {
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}
const ProdutoDoPerfil = ({ nome, descricao, foto }: Props) => {
  const [ModalEstaAberto, setModalEstaAberto] = useState(false)
  const [ModalImage, setModalImage] = useState('')

  return (
    <S.Card>
      <S.img src={foto} alt={nome} />
      <S.Titulo>{nome}</S.Titulo>
      <S.Texto>{descricao}</S.Texto>
      <S.Botao>
        <Button
          variant="secondary"
          type="button"
          title="clique aqui para saber mais detalhes"
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
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br />
                <br />
                Serve: de 2 a 3 pessoas
              </S.Description>
              <Button
                variant="secondary"
                type="button"
                title="clique aqui para adcionar ao carrinho"
              >
                Adicionar ao Carrinho - R$ 60,90
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

export default ProdutoDoPerfil
