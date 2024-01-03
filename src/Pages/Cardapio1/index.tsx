import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoCardapio from '../../components/ListagemDoCardapio'
import Banner from '../../components/Banners/Banner'
import { useEffect, useState } from 'react'

export type Pratos = {
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
  id: number
}

const Perfil = () => {
  const [Pratos, setPratos] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])

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
