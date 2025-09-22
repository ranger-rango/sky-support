import { createFileRoute } from '@tanstack/react-router'
import TasksPage from '../../../../../pages/the-dojo/tasks'

export const Route = createFileRoute('/_protected/the-dojo/admin/tasks/')({
  component: RouteComponent,
})

function RouteComponent()
{
  return (
    <>
      <TasksPage />
    </>
  )
}
