import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoCardapio from '../../components/ListagemDoCardapio'
import Cardapio from '../../models/Cardapio'

import Pizza from '../../assets/images/Pizza.png'
import Banner from '../../components/Banners/Banner'

const cardapio: Cardapio[] = [
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: Pizza,
    id: 1,
    preco: 69.9,
    porcao: 'de 2 a 3 Pessoas'
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: Pizza,
    id: 2,
    preco: 69.9,
    porcao: 'de 2 a 3 Pessoas'
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: Pizza,
    id: 3,
    preco: 69.9,
    porcao: 'de 2 a 3 Pessoas'
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: Pizza,
    id: 4,
    preco: 69.9,
    porcao: 'de 2 a 3 Pessoas'
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: Pizza,
    id: 5,
    preco: 69.9,
    porcao: 'de 2 a 3 Pessoas'
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: Pizza,
    id: 6,
    preco: 69.9,
    porcao: 'de 2 a 3 Pessoas'
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <ListagemDoCardapio cardapio={cardapio} />
    <Footer />
  </>
)

export default Perfil
