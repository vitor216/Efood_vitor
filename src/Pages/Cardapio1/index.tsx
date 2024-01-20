import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoCardapio from '../../components/ListagemDoCardapio'
import Banner from '../../components/Banners/Banner'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

  const [Pratos, setPratos] = useState<Pratos[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res.cardapio))
  }, [id])

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

export default Perfil
