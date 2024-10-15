import axios from 'axios'
import { useEffect, useState } from 'react'
import type { Task, TaskCreation } from '../../../../api/src/models'

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/tasks').then(({ data }) => setTasks(data))
  }, [])

  async function createTask(newTask: TaskCreation) {
    const response = await axios.post('http://localhost:3000/tasks', newTask)
    const task = response.data as Task
    setTasks((prevTasks) => [...prevTasks, task])
  }

  async function updateTask(updatedTask: Task) {
    const response = await axios.patch(
      `http://localhost:3000/tasks/${updatedTask.id}`,
      updatedTask
    )
    const task = response.data as Task
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => (prevTask.id === task.id ? task : prevTask))
    )
  }

  return { tasks, createTask, updateTask }
}
