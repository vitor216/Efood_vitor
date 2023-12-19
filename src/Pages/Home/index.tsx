import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'
import Produtos from '../../models/Produtos'

import ComidaJaponesa from '../../assets/images/restaurante1-japão.svg'
import ComidaItaliana from '../../assets/images/restaurante2-italia.svg'
import ComidaEspanhola from '../../assets/images/restaurante3-espanha.png'
import ComidaInglesa from '../../assets/images/restaurante4-inglaterra.jpg'
import ComidaFrancesa from '../../assets/images/restaurante5-frança.jpg'
import ComidaHolandesa from '../../assets/images/restaurante6-holanda.jpg'

const produto: Produtos[] = [
  {
    titulo: 'Hioki Sushi ',
    avaliacao: 4.9,
    destacado: 'destaque da semana',
    tipo: 'Japonesa',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: ComidaJaponesa,
    id: 1
  },
  {
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    tipo: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: ComidaItaliana,
    id: 2
  },
  {
    titulo: 'Oro Bianco',
    avaliacao: 5.0,
    tipo: 'Espanhola',
    descricao:
      'Peça já o melhor da culinária Espanhola no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária Espanhola sem sair do lar com nosso delivery!',
    capa: ComidaEspanhola,
    id: 3
  },
  {
    titulo: 'Silversmiths Restaurant',
    avaliacao: 4.3,
    tipo: 'Inglesa',
    descricao:
      'Peça já o melhor da culinária inglesa no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária inglesa sem sair do lar com nosso delivery!',
    capa: ComidaInglesa,
    id: 4
  },
  {
    titulo: 'Le Gabriel',
    avaliacao: 5.0,
    tipo: 'Francesa',
    descricao:
      'Peça já o melhor da culinária Francesa no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária Francesa sem sair do lar com nosso delivery!',
    capa: ComidaFrancesa,
    id: 5
  },
  {
    titulo: 'Arca Amsterdam',
    avaliacao: 4.2,
    tipo: 'Holandesa',
    descricao:
      'Peça já o melhor da culinária Holandesa no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária Holandesa sem sair do lar com nosso delivery!',
    capa: ComidaHolandesa,
    id: 6
  }
]

const Home = () => (
  <>
    <Hero />
    <Listagem produtos={produto} />
    <Footer />
  </>
)

export default Home
