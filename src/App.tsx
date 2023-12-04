import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Footer from './components/Footer'
import Hero from './components/Hero'
import Produto from './components/Produto'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <Produto />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <RouterProvider router={rotas} />
        <Footer />
      </div>
    </>
  )
}

export default App
