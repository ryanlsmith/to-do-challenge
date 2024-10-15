import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Task } from '../../../../api/src/models'
import TaskCard from '../../components/task-card'
import TaskModal from '../../components/task-modal'
import useTasks from './use-tasks'

export default function Tasks() {
  const { tasks, createTask, updateTask } = useTasks()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>()

  function openCreationModal() {
    setTaskToEdit(undefined)
    setIsModalOpen(true)
  }

  const openEditModal = (task: Task) => () => {
    setTaskToEdit(task)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <div>
      <TaskModal
        task={taskToEdit}
        isOpen={isModalOpen}
        onAdd={createTask}
        onEdit={updateTask}
        close={closeModal}
      />
      <h1>My Tasks</h1>
      {tasks.map((task) => (
        <TaskCard {...task} onClick={openEditModal(task)} />
      ))}
      <Button onClick={openCreationModal}>Add Task</Button>
    </div>
  )
}
