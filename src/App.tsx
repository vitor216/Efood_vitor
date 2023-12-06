import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './Pages/Home'
import Header from './components/Header'
import Banner from './components/Banner'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
