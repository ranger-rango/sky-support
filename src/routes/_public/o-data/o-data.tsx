import { createFileRoute } from '@tanstack/react-router'
import Odata from '../../../pages/o-data/o-data'
import NavigationLink from '../../../components/nav-link'
import SideNavComponent from '../../../components/side-nav-comp'
import MainBody from '../../../components/main-body'
import Nav from '../../../components/nav'
import Button from '../../../components/btn'
import { useState } from 'react'

export const Route = createFileRoute('/_public/o-data/o-data')({
  component: RouteComponent,
})

function RouteComponent() {

    const [showForm, setShowForm] = useState(false);
    return (
        <>
                <Nav navTitle="Help Desk - Sky World Limited" party="VENDOR" className="nav-vendor" htmlEl={
                    <select name="sacco-select" id="sacco-select">
                        <option value="">Select Sacco</option>
                        <option value="apstar-sacco">Apstar SACCO Limited</option>
                    </select>
                } />

                <MainBody page="tickets-display" htmlEl={
                    <>
                        <div className="side-nav-header">
                            <h3>
                                All Tickets
                            </h3>
                        </div>

                        <aside className="side-nav-nav">
                            <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#1098AD"/></svg>} label="All" tickCount="0" />
                            <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#FD7E14"/></svg>} label="Open" tickCount="0" />
                            <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#1C7ED6"/></svg>} label="In Progess" tickCount="0" />
                            <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#37B24D"/></svg>} label="Resolved" tickCount="0" />
                            <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#0CA678"/></svg>} label="Closed" tickCount="0" />
                            <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#F03E3E"/></svg>} label="Dropped" tickCount="0" />
                            <SideNavComponent box={<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="14" height="14" rx="2" fill="#5C5F66"/></svg>} label="On Hold" tickCount="0" />
                        </aside>

                        <div className="main-header">
                            <h3>
                                All Tickets
                            </h3>
                            <div>
                                <Button type='button' id='o-data-fs' className='o-data-fs pri-btn gen-btn' label="Filter/Sort" onClick={() => setShowForm(true)} />
                                <NavigationLink href="/raise-ticket" label="Add Ticket" className="create-ticket-btn" />
                            </div>
                        </div>

                        <section className="main-body">
                            <Odata showForm={showForm} onCloseForm={() => setShowForm(false)} />
                        </section>
                    </>
                } />

            </>
    )
}
