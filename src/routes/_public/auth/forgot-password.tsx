import { createFileRoute } from '@tanstack/react-router'
import ForgotPasswordPage from '../../../pages/auth/forgot-password'

export const Route = createFileRoute('/_public/auth/forgot-password')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ForgotPasswordPage />
}
