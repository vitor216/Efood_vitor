import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getPratos: builder.query({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetPratosQuery } = api

export default api
