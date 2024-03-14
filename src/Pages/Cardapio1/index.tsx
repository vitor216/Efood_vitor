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
  const { data } = useGetPratosQuery(id!)

  if (data) {
    return (
      <>
        <Header />
        <Banner />
        <ListagemDoCardapio cardapios={data} />
        <Footer />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Perfil
