import { createFileRoute, Outlet } from '@tanstack/react-router'
import MainBody from '../../../../components/main-body'
import Nav from '../../../../components/nav'

export const Route = createFileRoute(
  '/_protected/the-dojo/admin',
)({
  component: RouteComponent,
})

function RouteComponent()
{
  return (
    <>
        <Nav navTitle="The Dojo" className="nav-vendor" htmlEl={
            <select name="sacco-select" id="sacco-select">
                <option value="">Select Sacco</option>
                <option value="apstar-sacco">Apstar SACCO Limited</option>
            </select>
        } />

        <MainBody page="raise-ticket" htmlEl={
            <>
                <Outlet />
            </>
        } />
    </>
  )
}
