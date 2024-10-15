import { createContext, Dispatch, useState, type ReactNode } from 'react'
import { User } from '../../../api/src/models/user'

export const UserContext = createContext<{
  user: User | null
  setUser: Dispatch<User | null>
}>({ user: null, setUser: () => null })

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
