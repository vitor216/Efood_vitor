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

const Cardapio = () => {
  const { id } = useParams()
  const { data: Pratos } = useGetPratosQuery(id!)

  if (!Pratos) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Header />
      <Banner />
      <ListagemDoCardapio cardapios={Pratos} />
      <Footer />
    </>
  )
}

export default Cardapio
