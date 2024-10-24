import { useContext } from 'react'
import { UserContext } from '../../global-state/user-provider'
import { Button } from 'semantic-ui-react'

export default function Topbar() {
  const { user, setUser } = useContext(UserContext)

  const logout = () => {
    setUser(null)
    window.location.href = '/'
  }

  const title = user ? `${user.name}'s To Do List` : 'To Do List'

  return (
    <div
      style={{
        background: 'rgb(40, 97, 227)',
        padding: '1rem',
        color: 'white',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', margin: '0' }}>{title}</h1>
        {user ? (
          <Button onClick={logout} inverted={true}>
            Log out
          </Button>
        ) : null}
      </div>
    </div>
  )
}
