import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoCardapio from '../../components/ListagemDoCardapio'
import Cardapio from '../../models/Cardapio'

import Pizza from '../../assets/images/Pizza.png'
import Banner from '../../components/Banners/Banner'

const cardapio: Cardapio[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 1
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 2
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 3
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 4
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 5
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    id: 6
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
