import { createFileRoute } from '@tanstack/react-router'
import Nav from '../../../components/nav';
import MainBody from '../../../components/main-body';
import "/front-end/react/sky-support/src/index.css"
import EditForm from '../../../components/edit-ticket';
import Button from '../../../components/btn';

export const Route = createFileRoute('/_protected/ticketpage/$ticketId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ticketId } = Route.useParams();
  return (
    <>
      <Nav navTitle="Help Desk - Sky World Limited" party="VENDOR" className="nav-vendor" />
      <MainBody page="raise-ticket" htmlEl={
          <>
              <div className="main-header">
                  <h3>Ticket {ticketId} </h3>
              </div>
              <section className="main-body">
                <EditForm ticketId={ticketId} />
              </section>
              <div className="form-footer">
                  <Button id="" className="gen-btn pri-btn row-action-btn" label="Edit" type="submit" form='edit-form' />
              </div>
            </>
        }
      />
      
    </>
  )
}
