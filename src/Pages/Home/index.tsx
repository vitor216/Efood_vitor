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
    pais: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    destaque: 'Destaque da semana',
    image: ComidaJaponesa,
    botao: 'Saiba mais',
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    pais: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ComidaItaliana,
    botao: 'Saiba mais',
    id: 2
  },
  {
    title: 'Tapas españolas',
    nota: '5.0',
    pais: 'Espanha',
    description:
      'Esse prato conta com uma infinidade de variações e é basicamente composto por porções de diversas comidas. Entre as mais populares estão as patatas bravas, que consistem em batatas fritas com molho picante, presunto cru, queijos e polvo.',
    image: ComidaEspanhola,
    botao: 'Saiba mais',
    id: 3
  },
  {
    title: 'Polvo com arroz negro',
    nota: '4.3',
    pais: 'Inglrsa',
    description:
      'Em uma panela, coloque o azeite e doure a cebola. Adicione a cenoura, o pimentão, o alho-poró, o salsão, os tomates-cereja, o gengibre, os dentes de alho, as folhas de louro e o tomilho. Coloque os tentáculos de polvo, mexa e cubra com água',
    image: ComidaInglesa,
    botao: 'Saiba mais',
    id: 4
  },
  {
    title: 'Boeuf bourguignon',
    nota: '5.0',
    pais: 'Francesa',
    description:
      'Está é uma receita de comida francesa clássica, servida em diferentes restaurantes renomados em Paris. Para te auxiliar no preparo, separamos um vídeo da Tastemade Brasil.',
    image: ComidaFrancesa,
    botao: 'Saiba mais',
    id: 5
  },
  {
    title: 'Quiche lorraine',
    nota: '4.2',
    pais: 'Holandesa',
    description:
      'O quiche lorraine é mais uma das receitas clássicas francesas e pode ser preparada com facilidade e rapidamente. Para te auxiliar no preparo, separamos um vídeo do canal Receitas de Minuto. Confira!',
    image: ComidaHolandesa,
    botao: 'Saiba mais',
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
