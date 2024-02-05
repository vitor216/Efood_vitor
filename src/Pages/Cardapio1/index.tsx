import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoCardapio from '../../components/ListagemDoCardapio'
import Banner from '../../components/Banners/Banner'
import { useParams } from 'react-router-dom'
import { useGetPratosQuery } from '../../services/api'

export type Pratos = {
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
  id: number
}

const Perfil = () => {
  const { id } = useParams()
  const { data: Pratos } = useGetPratosQuery(id)

  if (Pratos) {
    return (
      <>
        <Header />
        <Banner />
        <ListagemDoCardapio cardapios={Pratos} />
        <Footer />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Perfil
