import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Tasks } from './tasks/tasks'
import { Login } from './login/login'
import { ErrorPage } from '../components/error-page/error-page'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} errorElement={<ErrorPage />} />,
      <Route path='/tasks' element={<Tasks />} errorElement={<ErrorPage />} />
    </>,
  ),
)

export function Routes() {
  return <RouterProvider router={router} />
}
