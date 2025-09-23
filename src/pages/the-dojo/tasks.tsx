import { useState } from "react";
import DojoRender from "../../components/dojo-render-component";
import { VisibilityProvider } from "../../components/dojo-sort-filter-context";
import { FilterWrapper } from "../../components/dojo-filter-wrapper";
import { SortWrapper } from "../../components/dojo-sort-wrapper";
import { DojoCreate } from "../../components/dojo-create";
import useMutateData from "../../components/use-mutate-data";

export default function TasksPage()
{
    const ticketColHeaders = [
        {
            id : "id",
            columnName : "Id",
            hide : false,
            render : false
        },
        {
            id : "subject_id",
            columnName : "Subject Id",
            hide : false,
            render : false
        },
        {
            id : "title",
            columnName : "Title",
            hide : false,
            render : false
        },
        {
            id : "description",
            columnName : "Description",
            hide : false,
            render : false
        },
        {
            id : "requirements",
            columnName : "Requirements",
            hide : false,
            render : false
        },
        {
            id : "due_date",
            columnName : "Due Date",
            hide : false,
            render : false
        },
        {
            id : "max_score",
            columnName : "Max Score",
            hide : false,
            render : false
        },
        {
            id : "created_by",
            columnName : "Created By",
            hide : false,
            render : false
        },
        {
            id : "created_by_name",
            columnName : "Created By Name",
            hide : false,
            render : false
        },
        {
            id : "is_active",
            columnName : "Is Active",
            hide : false,
            render : (isActive : boolean) => 
                { 
                    const status : string = isActive === true ? "True" : "False"
                    return status
                }
        }
    ]
    
    
    const adminToken : string = "0b008ea4-07fa-435f-906d-76f134078e3d-mdcedoc7"
    const baseUrl : string = "/api"
    const url : string = `${baseUrl}/admin/tasks/`

    const [sorts, setSorts] = useState<{ column: string; order: string }[]>([]);
    const [filters, setFilters] = useState<{ column: string; relation: string; filt_value: string }[]>([]);

    const handleApplySorts = (sorts: { column: string; order: string }[]) =>
    {
        setSorts([...sorts]);
    }

    const handleApplyFilters = (filters: { column: string; relation: string; filt_value: string }[]) => 
    {
        setFilters([...filters]);
    }

    const formFields = [ "subject_id", "title", "description", "requirements", "due_date", "max_score"]
    const [payload, setPayload] = useState<any>(null)
    const [endpoint, setEndpoint] = useState<string | null>(null)
    const { data, loading, error } = useMutateData(endpoint ?? "", adminToken, "POST", payload)

    const createRecord = (formData : FormData) => 
    {
        console.log({ data, loading, error })
        const formObject : Record<string, any> = {}
        
        for (const [key, value] of  formData.entries())
        {
            const num = Number(value)
            formObject[key] =  isNaN(num) ? value : num           
        }
        setEndpoint(url)
        setPayload(formObject)
    }

    return (
        <>
            <div className="main-header">
                <h3>
                    Dojo Tasks
                </h3>
                <div>
                    <VisibilityProvider>
                        <SortWrapper fields={ticketColHeaders} onApply={handleApplySorts} />
                    </VisibilityProvider>
                    <VisibilityProvider>
                        <FilterWrapper fields={ticketColHeaders} onApply={handleApplyFilters} />
                    </VisibilityProvider>
                    <VisibilityProvider>
                        <DojoCreate fields={formFields} btnLabel="Create Task" onCreate={createRecord} />
                    </VisibilityProvider>
                </div>
            </div>
            <section className="main-body">
                <DojoRender adminToken={adminToken} baseUrl={url} ticketColHeaders={ticketColHeaders} singlePageUrl="/the-dojo/admin/tasks/$recordId" sorts={sorts} filters={filters} />
            </section>
        </>
    )

}