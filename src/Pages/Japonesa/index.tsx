import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoPerfil from '../../components/ListagemDoPerfil'
import ProdutosDoPerfil from '../../models/ProdutosDoPerfil'

import Sushi from '../../assets/images/restaurante1-japão.svg'
import Banner from '../../components/Banner'

const produto2: ProdutosDoPerfil[] = [
  {
    title: 'Hioki Sushi',
    description:
      'O Hioki Sushi oferece o melhor da culinária japonesa, com ambiente aconchegante e climatizado, temos rodizio todos os dias tanto no almoço quanto no jantar, venha nos conhecer e desfrutar do melhor rodizio japonês da região',
    image: Sushi,
    id: 1
  },
  {
    title: 'Hioki Sushi',
    description:
      'O Hioki Sushi oferece o melhor da culinária japonesa, com ambiente aconchegante e climatizado, temos rodizio todos os dias tanto no almoço quanto no jantar, venha nos conhecer e desfrutar do melhor rodizio japonês da região',
    image: Sushi,
    id: 2
  },
  {
    title: 'Hioki Sushi',
    description:
      'O Hioki Sushi oferece o melhor da culinária japonesa, com ambiente aconchegante e climatizado, temos rodizio todos os dias tanto no almoço quanto no jantar, venha nos conhecer e desfrutar do melhor rodizio japonês da região',
    image: Sushi,
    id: 3
  },
  {
    title: 'Hioki Sushi',
    description:
      'O Hioki Sushi oferece o melhor da culinária japonesa, com ambiente aconchegante e climatizado, temos rodizio todos os dias tanto no almoço quanto no jantar, venha nos conhecer e desfrutar do melhor rodizio japonês da região',
    image: Sushi,
    id: 4
  },
  {
    title: 'Hioki Sushi',
    description:
      'O Hioki Sushi oferece o melhor da culinária japonesa, com ambiente aconchegante e climatizado, temos rodizio todos os dias tanto no almoço quanto no jantar, venha nos conhecer e desfrutar do melhor rodizio japonês da região',
    image: Sushi,
    id: 5
  },
  {
    title: 'Hioki Sushi',
    description:
      'O Hioki Sushi oferece o melhor da culinária japonesa, com ambiente aconchegante e climatizado, temos rodizio todos os dias tanto no almoço quanto no jantar, venha nos conhecer e desfrutar do melhor rodizio japonês da região',
    image: Sushi,
    id: 6
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <ListagemDoPerfil produtos2={produto2} />
    <Footer />
  </>
)

export default Perfil
