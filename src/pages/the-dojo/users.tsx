// import useFetchData from "../../components/use-fetch-data";
// import RenderTable from "../../components/table-renderer";
// import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FilterWrapper } from "../../components/dojo-filter-wrapper";
import DojoRender from "../../components/dojo-render-component";
import { VisibilityProvider } from "../../components/dojo-sort-filter-context";
import { SortWrapper } from "../../components/dojo-sort-wrapper";

export default function UsersPage()
{
    const ticketColHeaders = [
        {
            id : "id",
            columnName : "Id",
            hide : false,
            render : false
        },
        {
            id : "email",
            columnName : "Email Address",
            hide : false,
            render : false
        },
        {
            id : "name",
            columnName : "Name",
            hide : false,
            render : false
        },
        {
            id : "google_id",
            columnName : "Google Id",
            hide : false,
            render : false
        },
        {
            id : "status",
            columnName : "Status",
            hide : false,
            render : false
        }
    ]
    
    
    const adminToken : string = "0b008ea4-07fa-435f-906d-76f134078e3d-mdcedoc7"
    const baseUrl : string = "/api"
    const url : string = `${baseUrl}/admin/users/`

    const [sorts, setSorts] = useState<{ column: string; order: string }[]>([]);
    const [filters, setFilters] = useState<{ column: string; relation: string; filt_value: string }[]>([]);

    const handleApplySorts = (sorts: { column: string; order: string }[]) =>
    {
        console.log("Sorts applied:", sorts);
        setSorts([...sorts]);
    }

    const handleApplyFilters = (filters: { column: string; relation: string; filt_value: string }[]) => 
    {
        console.log("Filters applied:", filters);
        setFilters([...filters]);
    }

    return (
        <>
            <div className="main-header">
                <h3>
                    Dojo Users
                </h3>
                <div>
                    <VisibilityProvider>
                        <SortWrapper fields={ticketColHeaders} onApply={handleApplySorts} />
                    </VisibilityProvider>
                    <VisibilityProvider>
                        <FilterWrapper fields={ticketColHeaders} onApply={handleApplyFilters} />
                    </VisibilityProvider>
                </div>
            </div>
            <section className="main-body">
                <DojoRender adminToken={adminToken} baseUrl={url} ticketColHeaders={ticketColHeaders} singlePageUrl="/the-dojo/admin/users/$recordId" sorts={sorts} filters={filters} />
            </section>
        </>
    )
}