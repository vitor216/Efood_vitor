import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoPerfil from '../../components/ListagemDoPerfil'
import ProdutosDoPerfil from '../../models/ProdutosDoPerfil'

import tapas from '../../assets/images/restaurante3-espanha.png'
import Banner from '../../components/Banner'

const produto2: ProdutosDoPerfil[] = [
  {
    title: 'Tapas españolas',
    description:
      'As Tapas Espanholas são porção de alguns alimentos servidos como acompanhamento de uma bebida”. Essas porções são equivalentes aos petiscos e aperitivos, como são chamados em outros países.',
    image: tapas,
    id: 1
  },
  {
    title: 'Tapas españolas',
    description:
      'As Tapas Espanholas são porção de alguns alimentos servidos como acompanhamento de uma bebida”. Essas porções são equivalentes aos petiscos e aperitivos, como são chamados em outros países.',
    image: tapas,
    id: 2
  },
  {
    title: 'Tapas españolas',
    description:
      'As Tapas Espanholas são porção de alguns alimentos servidos como acompanhamento de uma bebida”. Essas porções são equivalentes aos petiscos e aperitivos, como são chamados em outros países.',
    image: tapas,
    id: 3
  },
  {
    title: 'Tapas españolas',
    description:
      'As Tapas Espanholas são porção de alguns alimentos servidos como acompanhamento de uma bebida”. Essas porções são equivalentes aos petiscos e aperitivos, como são chamados em outros países.',
    image: tapas,
    id: 4
  },
  {
    title: 'Tapas españolas',
    description:
      'As Tapas Espanholas são porção de alguns alimentos servidos como acompanhamento de uma bebida”. Essas porções são equivalentes aos petiscos e aperitivos, como são chamados em outros países.',
    image: tapas,
    id: 5
  },
  {
    title: 'Tapas españolas',
    description:
      'As Tapas Espanholas são porção de alguns alimentos servidos como acompanhamento de uma bebida”. Essas porções são equivalentes aos petiscos e aperitivos, como são chamados em outros países.',
    image: tapas,
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
