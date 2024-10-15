import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import ErrorPage from '../components/error-page'
import Login from './login'
import Tasks from './tasks'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} errorElement={<ErrorPage />} />,
      <Route path="/tasks" element={<Tasks />} errorElement={<ErrorPage />} />
    </>
  )
)

export default function Routes() {
  return <RouterProvider router={router} />
}
