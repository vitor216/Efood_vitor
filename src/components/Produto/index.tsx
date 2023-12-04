import Nota from '../Nota'
import Tag from '../Tag'

import { Texto, Titulo, Card } from './styles'

const Produto = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <Titulo>Hioki Sushi</Titulo>
    <Tag>Destaque da semana</Tag>
    <Tag>Japonesa</Tag>
    <Nota>4.9</Nota>
    <Texto>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Texto>
  </Card>
)

export default Produto
