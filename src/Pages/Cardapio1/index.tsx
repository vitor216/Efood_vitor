import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemDoCardapio from '../../components/ListagemDoCardapio'
import Banner from '../../components/Banners/Banner'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCardapioQuery } from '../../services/api'

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
  const { data: cardapio } = useGetCardapioQuery()

  if (cardapio) {
    return (
      <>
        <Header />
        <Banner />
        <ListagemDoCardapio cardapios={cardapio} />
        <Footer />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Perfil
