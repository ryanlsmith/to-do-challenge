import { formatDistance } from 'date-fns'
import { Card, Icon } from 'semantic-ui-react'
import type { Task } from '../../../../api/src/models'

export default function TaskCard({
  onClick,
  ...task
}: Task & {
  onClick?: () => void
}) {
  const updatedVsCreated =
    task.createdAt === task.updatedAt ? 'Created' : 'Updated'
  return (
    <Card
      header={task.title}
      meta={`${updatedVsCreated} ${formatDistance(task.updatedAt, new Date(), {
        addSuffix: true,
      })}`}
      description={task.description}
      onClick={onClick}
      extra={
        <a>
          <Icon name="user" />
          Gabriel Konkle
        </a>
      }
    />
  )
}
