import { formatDistance } from 'date-fns'
import React, { useEffect, useMemo } from 'react'
import {
  Button,
  Form,
  Header,
  Input,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
  TextArea,
} from 'semantic-ui-react'
import type { Task, TaskCreation } from '../../../../api/src/models'

const defaultState: TaskCreation = { title: '', description: '' }

export default function ModalExampleModal({
  isOpen,
  close,
  onAdd,
  onEdit,
  task,
}: {
  isOpen: boolean
  close: () => void
  onAdd?: (taskCreation: TaskCreation) => void
  onEdit?: (taskCreation: Task) => void
  task?: Task
}) {
  const initialState = task || defaultState
  const [taskState, setTaskState] = React.useState<Task | TaskCreation>(
    initialState
  )
  const isCreation = useMemo(() => !task, [task])
  const updatedVsCreated =
    task?.createdAt === task?.updatedAt ? 'Created' : 'Updated'

  // Title editing
  const [isEditingTitle, setIsEditingTitle] = React.useState(isCreation)
  function toggleEditingTitle() {
    setIsEditingTitle((prevState) => !prevState)
  }
  function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskState((prevTask) => ({ ...prevTask, title: event.target.value }))
  }

  // Description editing
  const [isEditingDescription, setIsEditingDescription] =
    React.useState(isCreation)
  function toggleEditingDescription() {
    setIsEditingDescription((prevState) => !prevState)
  }
  function changeDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTaskState((prevTask) => ({
      ...prevTask,
      description: event.target.value,
    }))
  }

  function handleCancel() {
    close()
  }

  function handleAdd() {
    if (onAdd) onAdd(taskState)
    close()
  }

  function handleEdit() {
    if (onEdit) onEdit(taskState as Task)
    close()
  }

  // Reset State
  useEffect(() => {
    setTaskState(initialState)
    setIsEditingTitle(isCreation)
    setIsEditingDescription(isCreation)
  }, [task, isOpen, initialState, isCreation])

  return (
    <Modal onClose={close} open={isOpen} dimmer="blurring">
      <ModalHeader>
        {isEditingTitle ? (
          <Input
            name="title"
            action={
              !isCreation && { icon: 'check', onClick: toggleEditingTitle }
            }
            onChange={changeTitle}
            value={taskState.title}
            placeholder="Title..."
          />
        ) : (
          <>
            {taskState.title}
            <Button
              style={{ marginLeft: '1rem' }}
              circular
              basic
              icon="edit"
              onClick={toggleEditingTitle}
            />
          </>
        )}
      </ModalHeader>
      <ModalContent>
        <ModalDescription>
          <Header as="h4">Description</Header>
          {isEditingDescription ? (
            <Form>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextArea
                  name="description"
                  value={taskState.description}
                  placeholder="Description..."
                  onChange={changeDescription}
                />
                {!isCreation && (
                  <Button
                    style={{ marginLeft: '1rem' }}
                    circular
                    basic
                    icon="check"
                    onClick={toggleEditingDescription}
                  />
                )}
              </div>
            </Form>
          ) : (
            <>
              {taskState.description}
              <Button
                style={{ marginLeft: '1rem' }}
                circular
                basic
                icon="edit"
                onClick={toggleEditingDescription}
              />
            </>
          )}
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        {task &&
          `${updatedVsCreated} ${formatDistance(task.updatedAt, new Date(), {
            addSuffix: true,
          })}`}
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={isCreation ? handleAdd : handleEdit} positive>
          {isCreation ? 'Add' : 'Save'}
        </Button>
      </ModalActions>
    </Modal>
  )
}
