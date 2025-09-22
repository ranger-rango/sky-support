import { createFileRoute } from '@tanstack/react-router'
import SubjectsPage from '../../../../../pages/the-dojo/subjects'

export const Route = createFileRoute('/_protected/the-dojo/admin/subjects/')({
  component: RouteComponent,
})

function RouteComponent()
{
  return (
    <>
      <SubjectsPage />
    </>
  )
}
