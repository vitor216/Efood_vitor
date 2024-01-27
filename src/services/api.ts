import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../Pages/Home'
import { Pratos } from '../Pages/Cardapio1'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Pratos[], void>({
      query: () => 'id'
    })
  })
})

export const { useGetRestaurantesQuery, useGetCardapioQuery } = api

export default api
