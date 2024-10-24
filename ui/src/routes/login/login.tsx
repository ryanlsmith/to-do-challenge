import axios, { type AxiosError } from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormField, Header, Input } from 'semantic-ui-react'
import type { User, UserCreation } from '../../../../api/src/models/user'
import { UserContext } from '../../global-state/user-provider'

async function getExistingUser(name: string) {
  try {
    const { data } = await axios.get(`http://localhost:3000/users?name=${name}`)
    return data as User
  } catch (error) {
    if ((error as AxiosError).status === 404) return null
  }
}
async function createUser(newUser: UserCreation) {
  const response = await axios.post('http://localhost:3000/users', newUser)
  return response.data as User
}

export default function Login() {
  const [userName, setUserName] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value)
  }

  function createOrFindUser() {
    getExistingUser(userName).then((user) => {
      if (user) {
        setUser(user)
        navigate('/tasks')
      } else {
        createUser({ name: userName }).then((newUser) => {
          setUser(newUser)
          navigate('/tasks')
        })
      }
    })
  }

  return (
    <>
      <Header>What's your name?</Header>
      <Form style={{ maxWidth: '400px' }}>
        <FormField control={Input} label='Name' placeholder='Name' onChange={updateUserName} />
        <Button onClick={createOrFindUser}>Continue</Button>
      </Form>
    </>
  )
}
