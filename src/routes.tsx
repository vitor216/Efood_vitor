import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Cardapio1 from './Pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Cardapio/:id" element={<Cardapio1 />} />
  </Routes>
)

export default Rotas
