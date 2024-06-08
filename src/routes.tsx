import { createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import AdmUser from './pages/admUser'
import AdmClient from './pages/admClient'
import Vist from './pages/vist'
import VistCreate from './pages/vist-create'
import Maquina from './pages/maquina'
import Modulo from './pages/modulo'
import Login from './components/login/index'
import Home from './pages/home/index'

const routes = createBrowserRouter([
  { path: '/Home', element: <Home /> },
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/sobre', element: <Sobre /> },
  { path: '/admUser', element: <AdmUser /> },
  { path: '/admClient', element: <AdmClient /> },
  { path: '/vistoria', element: <Vist /> },
  { path: '/initVistoria', element: <VistCreate /> },
  { path: '/maquina', element: <Maquina /> },
  { path: '/modulo', element: <Modulo /> },
  { path: '/Login', element: <Login /> }

])

export default routes //prof usou router
