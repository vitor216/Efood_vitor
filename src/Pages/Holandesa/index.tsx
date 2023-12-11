import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoPerfil from '../../components/ListagemDoPerfil'
import ProdutosDoPerfil from '../../models/ProdutosDoPerfil'

import Quiche from '../../assets/images/restaurante6-holanda.jpg'
import Banner from '../../components/Banner'

const produto2: ProdutosDoPerfil[] = [
  {
    title: 'Quiche lorraine',
    description:
      'É uma tradicional receita da Lorena, região ao nordeste da França. É uma torta de queijo salgada coberta com uma mistura de nata e ovos, toucinho (bacon) pimenta do reino e noz moscada. A quiche lorraine é normalmente servida quente como prato principal.',
    image: Quiche,
    id: 1
  },
  {
    title: 'Quiche lorraine',
    description:
      'É uma tradicional receita da Lorena, região ao nordeste da França. É uma torta de queijo salgada coberta com uma mistura de nata e ovos, toucinho (bacon) pimenta do reino e noz moscada. A quiche lorraine é normalmente servida quente como prato principal.',
    image: Quiche,
    id: 2
  },
  {
    title: 'Quiche lorraine',
    description:
      'É uma tradicional receita da Lorena, região ao nordeste da França. É uma torta de queijo salgada coberta com uma mistura de nata e ovos, toucinho (bacon) pimenta do reino e noz moscada. A quiche lorraine é normalmente servida quente como prato principal.',
    image: Quiche,
    id: 3
  },
  {
    title: 'Quiche lorraine',
    description:
      'É uma tradicional receita da Lorena, região ao nordeste da França. É uma torta de queijo salgada coberta com uma mistura de nata e ovos, toucinho (bacon) pimenta do reino e noz moscada. A quiche lorraine é normalmente servida quente como prato principal.',
    image: Quiche,
    id: 4
  },
  {
    title: 'Quiche lorraine',
    description:
      'É uma tradicional receita da Lorena, região ao nordeste da França. É uma torta de queijo salgada coberta com uma mistura de nata e ovos, toucinho (bacon) pimenta do reino e noz moscada. A quiche lorraine é normalmente servida quente como prato principal.',
    image: Quiche,
    id: 5
  },
  {
    title: 'Quiche lorraine',
    description:
      'É uma tradicional receita da Lorena, região ao nordeste da França. É uma torta de queijo salgada coberta com uma mistura de nata e ovos, toucinho (bacon) pimenta do reino e noz moscada. A quiche lorraine é normalmente servida quente como prato principal.',
    image: Quiche,
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
