import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ListagemDeRestaurantes from '../../components/ListagemDeRestaurantes'

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
  const [Restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <Hero />
      <ListagemDeRestaurantes produtos={Restaurante} />
      <Footer />
    </>
  )
}

export default Home
