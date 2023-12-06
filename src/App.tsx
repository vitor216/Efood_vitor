import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App
