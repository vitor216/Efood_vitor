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
    title: 'Hioki Sushi ',
    nota: '4.9',
    informacao: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: ComidaJaponesa,
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    informacao: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ComidaItaliana,
    id: 2
  },
  {
    title: 'Oro Bianco',
    nota: '5.0',
    informacao: ['Espanhola'],
    description:
      'Peça já o melhor da culinária Espanhola no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária Espanhola sem sair do lar com nosso delivery!',
    image: ComidaEspanhola,
    id: 3
  },
  {
    title: 'Silversmiths Restaurant',
    nota: '4.3',
    informacao: ['Inglesa'],
    description:
      'Peça já o melhor da culinária inglesa no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária inglesa sem sair do lar com nosso delivery!',
    image: ComidaInglesa,
    id: 4
  },
  {
    title: 'Le Gabriel',
    nota: '5.0',
    informacao: ['Francesa'],
    description:
      'Peça já o melhor da culinária Francesa no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária Francesa sem sair do lar com nosso delivery!',
    image: ComidaFrancesa,
    id: 5
  },
  {
    title: 'Arca Amsterdam',
    nota: '4.2',
    informacao: ['Holandesa'],
    description:
      'Peça já o melhor da culinária Holandesa no conforto da sua casa! deliciosos pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a culinária Holandesa sem sair do lar com nosso delivery!',
    image: ComidaHolandesa,
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
