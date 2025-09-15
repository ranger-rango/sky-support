import { createFileRoute } from '@tanstack/react-router'
import CreateTicket from '../../pages/create-ticket'

export const Route = createFileRoute('/_protected/raise-ticket')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateTicket />
}
