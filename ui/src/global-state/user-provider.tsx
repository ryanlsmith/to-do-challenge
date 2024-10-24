import { createContext, useState, ReactNode, useEffect } from 'react'
import { User } from '../../../api/src/models/user'

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user))
    } else {
      sessionStorage.removeItem('user')
    }
  }, [user])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
