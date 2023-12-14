import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoPerfil from '../../components/ListagemDoPerfil'
import ProdutosDoPerfil from '../../models/ProdutosDoPerfil'

import Polvo from '../../assets/images/restaurante4-inglaterra.jpg'
import Banner4 from '../../components/Banners/Banner4'

const produto2: ProdutosDoPerfil[] = [
  {
    title: 'Polvo com arroz negro',
    description:
      'Polvo tostado com arroz negro cremoso, crocante de bacon, mel de engenho e legumes da parrilla.',
    image: Polvo,
    id: 1
  },
  {
    title: 'Polvo com arroz negro',
    description:
      'Polvo tostado com arroz negro cremoso, crocante de bacon, mel de engenho e legumes da parrilla.',
    image: Polvo,
    id: 2
  },
  {
    title: 'Polvo com arroz negro',
    description:
      'Polvo tostado com arroz negro cremoso, crocante de bacon, mel de engenho e legumes da parrilla.',
    image: Polvo,
    id: 3
  },
  {
    title: 'Polvo com arroz negro',
    description:
      'Polvo tostado com arroz negro cremoso, crocante de bacon, mel de engenho e legumes da parrilla.',
    image: Polvo,
    id: 4
  },
  {
    title: 'Polvo com arroz negro',
    description:
      'Polvo tostado com arroz negro cremoso, crocante de bacon, mel de engenho e legumes da parrilla.',
    image: Polvo,
    id: 5
  },
  {
    title: 'Polvo com arroz negro',
    description:
      'Polvo tostado com arroz negro cremoso, crocante de bacon, mel de engenho e legumes da parrilla.',
    image: Polvo,
    id: 6
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner4 />
    <ListagemDoPerfil produtos2={produto2} />
    <Footer />
  </>
)

export default Perfil
