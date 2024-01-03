import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Cardapio from './Pages/Cardapio1'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Cardapio/:id" element={<Cardapio />} />
  </Routes>
)

export default Rotas
