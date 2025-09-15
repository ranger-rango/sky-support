import { createFileRoute } from '@tanstack/react-router'
import LoginPage from '../../../pages/auth/login'

export const Route = createFileRoute('/_public/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginPage />
}
