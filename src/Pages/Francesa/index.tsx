import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoPerfil from '../../components/ListagemDoPerfil'
import ProdutosDoPerfil from '../../models/ProdutosDoPerfil'

import Boeuf from '../../assets/images/restaurante5-frança.jpg'
import Banner5 from '../../components/Banners/Banner5'

const produto2: ProdutosDoPerfil[] = [
  {
    title: 'Boeuf bourguignon',
    description:
      'A região da Borgonha na França é famosa por seus vinhos finos. Os pratos à la Bourguignonne geralmente incluem um molho feito de vinho tinto e um enfeite de cebola pequena, cogumelos e bacon e bacon.',
    image: Boeuf,
    id: 1
  },
  {
    title: 'Boeuf bourguignon',
    description:
      'A região da Borgonha na França é famosa por seus vinhos finos. Os pratos à la Bourguignonne geralmente incluem um molho feito de vinho tinto e um enfeite de cebola pequena, cogumelos e bacon e bacon.',
    image: Boeuf,
    id: 2
  },
  {
    title: 'Boeuf bourguignon',
    description:
      'A região da Borgonha na França é famosa por seus vinhos finos. Os pratos à la Bourguignonne geralmente incluem um molho feito de vinho tinto e um enfeite de cebola pequena, cogumelos e bacon e bacon.',
    image: Boeuf,
    id: 3
  },
  {
    title: 'Boeuf bourguignon',
    description:
      'A região da Borgonha na França é famosa por seus vinhos finos. Os pratos à la Bourguignonne geralmente incluem um molho feito de vinho tinto e um enfeite de cebola pequena, cogumelos e bacon e bacon.',
    image: Boeuf,
    id: 4
  },
  {
    title: 'Boeuf bourguignon',
    description:
      'A região da Borgonha na França é famosa por seus vinhos finos. Os pratos à la Bourguignonne geralmente incluem um molho feito de vinho tinto e um enfeite de cebola pequena, cogumelos e bacon e bacon.',
    image: Boeuf,
    id: 5
  },
  {
    title: 'Boeuf bourguignon',
    description:
      'A região da Borgonha na França é famosa por seus vinhos finos. Os pratos à la Bourguignonne geralmente incluem um molho feito de vinho tinto e um enfeite de cebola pequena, cogumelos e bacon e bacon.',
    image: Boeuf,
    id: 6
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner5 />
    <ListagemDoPerfil produtos2={produto2} />
    <Footer />
  </>
)

export default Perfil
