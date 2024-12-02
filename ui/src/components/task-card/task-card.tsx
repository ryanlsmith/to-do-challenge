import { formatDistance } from 'date-fns'
import { Card, Icon } from 'semantic-ui-react'
import type { Task } from '../../../../api/src/models'
import { UserContext } from '../../global-state/user-provider'
import { useContext } from 'react'

export function TaskCard({
  onClick,
  ...task
}: Task & {
  onClick?: () => void
}) {
  const { user } = useContext(UserContext)
  const updatedVsCreated = task.createdAt === task.updatedAt ? 'Created' : 'Updated'
  return (
    <Card
      header={task.title}
      meta={`${updatedVsCreated} ${formatDistance(task.updatedAt, new Date(), {
        addSuffix: true,
      })}`}
      description={task.description}
      onClick={onClick}
      extra={
        <>
          <Icon name='user' />
          {user?.name}
        </>
      }
    />
  )
}
