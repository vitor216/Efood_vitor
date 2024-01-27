import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ListagemDeRestaurantes from '../../components/ListagemDeRestaurantes'
import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurante = {
  id: number
  titulo: string
  avaliacao: number
  destacado?: string | undefined
  tipo: string
  descricao: string
  capa: string
}

const Home = () => {
  const { data: Restaurante } = useGetRestaurantesQuery()

  if (Restaurante) {
    return (
      <>
        <Hero />
        <ListagemDeRestaurantes produtos={Restaurante} />
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
