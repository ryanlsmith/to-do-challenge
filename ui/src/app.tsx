import './app.css'
import { Topbar } from './components/topbar/topbar'
import { UserProvider } from './global-state/user-provider'
import { Routes } from './routes/routes'

export default function App() {
  return (
    <UserProvider>
      <Topbar />
      <div style={{ padding: '2rem' }}>
        <Routes />
      </div>
    </UserProvider>
  )
}
