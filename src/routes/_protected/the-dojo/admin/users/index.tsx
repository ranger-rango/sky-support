import { createFileRoute } from '@tanstack/react-router'
import UsersPage from '../../../../../pages/the-dojo/users'

export const Route = createFileRoute('/_protected/the-dojo/admin/users/')({
  component: RouteComponent,
})

function RouteComponent()
{
  return (
    <>
      <UsersPage /> 
    </>
  )
}
