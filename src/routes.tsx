import { createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import NotFound from './pages/404'

const routes = createBrowserRouter([
  {path: '/', errorElement: <NotFound/>},
  {path: '/sobre', element:<Sobre />}
])

export default routes //prof usou router
