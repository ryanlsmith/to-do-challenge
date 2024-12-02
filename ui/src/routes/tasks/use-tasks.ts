import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import type { Task, TaskCreation } from '../../../../api/src/models'
import { UserContext } from '../../global-state/user-provider'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (user?.id) {
      axios
        .get('http://localhost:3000/tasks', {
          params: { userId: user?.id },
        })
        .then(({ data }) => setTasks(data))
    }
  }, [user?.id])

  async function createTask(newTask: TaskCreation) {
    const response = await axios.post('http://localhost:3000/tasks', newTask)
    const task = response.data as Task
    setTasks((prevTasks) => [...prevTasks, task])
  }

  async function updateTask(updatedTask: Task) {
    const response = await axios.patch(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask)
    const task = response.data as Task
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => (prevTask.id === task.id ? task : prevTask)),
    )
  }

  return { tasks, createTask, updateTask }
}
