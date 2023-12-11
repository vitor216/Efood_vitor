import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Italiana from './Pages/Italiana'
import Espanhola from './Pages/Espanhola'
import Japonesa from './Pages/Japonesa'
import Inglesa from './Pages/Inglesa'
import Francesa from './Pages/Francesa'
import Holandesa from './Pages/Holandesa'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Italiana" element={<Italiana />} />
    <Route path="/Espanhola" element={<Espanhola />} />
    <Route path="/Japonesa" element={<Japonesa />} />
    <Route path="/Inglesa" element={<Inglesa />} />
    <Route path="/Francesa" element={<Francesa />} />
    <Route path="/Holandesa" element={<Holandesa />} />
  </Routes>
)

export default Rotas
