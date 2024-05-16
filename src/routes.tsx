import { createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import AdmUser from './pages/admUser'
import AdmClient from './pages/admClient'

const routes = createBrowserRouter([
  {path: '/', errorElement: <NotFound/>},
  {path: '/sobre', element:<Sobre />},
  {path: '/admUser', element:<AdmUser />},
  {path: '/admClient', element:<AdmClient />}
])

export default routes //prof usou router
