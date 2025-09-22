import Nav from "../components/nav";
import MainBody from "../components/main-body";
import NavigationLink from "../components/nav-link";
import SideNavComponent from "../components/side-nav-comp";
import RenderTable from "../components/table-renderer";
import Button from "../components/btn";
import BuildSortFilter from "../components/buildSortFilter";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";

import { VisibilityProvider, Exp } from "../components/exp";

export default function IndexPage()
{

    let ticketData : any[] = JSON.parse(localStorage.getItem("ticketData") || "[]")
    const ticketColHeaders = [
        {
            id : "main_category",
            columnName : "Main Category",
            hide : false,
            render : false
        },
        {
            id : "sub_category",
            columnName : "Sub Category",
            hide : false,
            render : false
        },
        {
            id : "problem_issue",
            columnName : "Problem/Issue",
            hide : false,
            render : false
        },
        {
            id : "description",
            columnName : "Description",
            hide : false,
            render : false
        }
    ]

    const [isSortOpen, setIsSortOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const handleSortApply = (criteria: { [key: string]: string }) =>
    {
        localStorage.setItem("sortCriteria", JSON.stringify(criteria))
        setIsSortOpen(false)
        window.location.reload()
    };

    const handleFilterApply = (criteria: { [key: string]: string }) =>
    {
        localStorage.setItem("filterCriteria", JSON.stringify(criteria))
        setIsFilterOpen(false)
        window.location.reload()
    };

    const savedFilter = JSON.parse(localStorage.getItem("filterCriteria") || "{}")
    const savedSort = JSON.parse(localStorage.getItem("sortCriteria") || "{}")

    let filteredData = ticketData;
    if (savedFilter.column && savedFilter.relation && savedFilter.filt_value)
    {
        const col = savedFilter.column;
        const val = savedFilter.filt_value.toLowerCase()

            filteredData = filteredData.filter((row) =>
            {
                const cell = String(row[col] ?? "").toLowerCase()

                switch (savedFilter.relation)
                {
                    case "equals":
                        return cell === val
                    case "contains":
                        return cell.includes(val)
                    case "starts with":
                        return cell.startsWith(val)
                    case "ends with":
                        return cell.endsWith(val)
                    default:
                        return true;
                }
            });
    }

    if (savedSort.column)
    {
        const col = savedSort.column;
        const order = savedSort.order || "asc";
        filteredData = [...filteredData].sort((a, b) =>
            {
            const av = String(a[col] ?? "").toLowerCase()
            const bv = String(b[col] ?? "").toLowerCase()
            if (av < bv) return order === "asc" ? -1 : 1;
            if (av > bv) return order === "asc" ? 1 : -1;
            return 0;
        });
    }

    const navigate = useNavigate()
    const handleRowClick = (row : any) => 
    {
        navigate({to : `/ticketpage/${row.id}`})
        // navigate({to : "/ticketpage/$ticketId", params : { ticketId : String(row.id) }})
    }

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
                            <VisibilityProvider>
                                <Exp />
                            </VisibilityProvider>

                            {
                                savedSort?.column ? 
                                (
                                    <Button onClick={() => {localStorage.removeItem("sortCriteria"); window.location.reload();}} className="x-btn sort-btn gen-btn pri-btn" id="sort-btn" type="button" label= 
                                        {
                                            <>
                                                Sort
                                                <svg className="x-reset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ff0033" d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
                                            </>
                                        }
                                    />
                                ) : (
                                    <Button onClick={() => setIsSortOpen(true)} className="sort-btn gen-btn pri-btn" id="sort-btn" type="button" label="Sort" />
                                )}

                                {savedFilter?.column ? 
                                (
                                    <Button onClick={() => {localStorage.removeItem("filterCriteria");  window.location.reload();}} className="x-btn filter-btn gen-btn pri-btn"  id="filter-btn" type="button" label=
                                        {
                                            <>
                                                Filter
                                                <svg className="x-reset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ff0033" d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
                                            </>
                                        }
                                    />
                                ) : (
                                    <Button onClick={() => setIsFilterOpen(true)} className="filter-btn gen-btn pri-btn" id="filter-btn" type="button" label="Filter" />
                                )
                            }
                            <NavigationLink href="/raise-ticket" label="Add Ticket" className="create-ticket-btn" />
                        </div>
                    </div>

                    <section className="main-body">
                        {/* <RenderTable colHeaders={columnHeaders} tableData={data} /> */}
                        <RenderTable colHeaders={ticketColHeaders} tableData={filteredData} onRowClick={handleRowClick}/>
                    </section>
                </>
            } />

            <BuildSortFilter
                isOpen={isSortOpen}
                title="Sort"
                fields={ticketColHeaders}
                onClose={() => setIsSortOpen(false)}
                onApply={handleSortApply}
            />

            <BuildSortFilter
                isOpen={isFilterOpen}
                title="Filter"
                fields={ticketColHeaders}
                onClose={() => setIsFilterOpen(false)}
                onApply={handleFilterApply}
            />

        </>
    );
}
// routing - file based (tanstack routing)
//     login
//     register
//     forgot password

//     dashboard
//     ticket List - ticketpage/ticket_id
//     oData - people-page/username
//     logout
// preview attachments.

// hooks 
// beforeload 
// prop drilling
// react context 

// Login
// Dashboard
// Users 
//     list
//     single user 
// Subjects 
//     list 
//     single 
// All tasks 
//     list 

// fetch / submit API - useFetchData / useMutateData 

// Forms 
// Tables / Datatable