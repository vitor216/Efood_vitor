import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Italiana from './Pages/Italiana'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Italiana" element={<Italiana />} />
  </Routes>
)

export default Rotas
