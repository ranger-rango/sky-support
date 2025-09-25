import { useState } from "react";
import DojoRender from "../../components/dojo-render-component";
import { VisibilityProvider } from "../../components/dojo-sort-filter-context";
import { FilterWrapper } from "../../components/dojo-filter-wrapper";
import { SortWrapper } from "../../components/dojo-sort-wrapper";
import { DojoCreate } from "../../components/dojo-create";
// import useMutateData from "../../components/use-mutate-data";
import useUpdateDojoRecord from "../../components/update-dojo-record";

export default function SubjectsPage()
{
    const ticketColHeaders = [
        {
            id : "id",
            columnName : "Id",
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
            id : "description",
            columnName : "Dsscription",
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
    
    
    const adminToken : string = import.meta.env.VITE_ADMIN_TOKEN
    const baseUrl : string = import.meta.env.VITE_BASE_URL
    const subjectsEndpoint : string = import.meta.env.VITE_SUBJECTS_ENDPOINT
    const url : string = `${baseUrl}${subjectsEndpoint}/`

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

    const formFields = ["name", "description"]
    // const [payload, setPayload] = useState<any>(null)
    // const [endpoint, setEndpoint] = useState<string | null>(null)
    // const { data, loading, error } = useMutateData(endpoint ?? "", adminToken, "POST", payload)
    const { CUDFunc, data, loading, error } = useUpdateDojoRecord(url, adminToken, "POST", "")

    const createRecord = (formData : FormData) => 
    {
        console.log({ data, loading, error })
        const formObject : Record<string, any> = {}
        
        for (const [key, value] of  formData.entries())
        {
            formObject[key] = value           
        }
        CUDFunc(formObject)
        // setEndpoint(url)
        // setPayload(formObject)
    }

    return (
    <>
        <div className="main-header">
            <h3>
                Dojo Subjects
            </h3>
            <div>
                <VisibilityProvider>
                    <SortWrapper fields={ticketColHeaders} onApply={handleApplySorts} />
                </VisibilityProvider>
                <VisibilityProvider>
                    <FilterWrapper fields={ticketColHeaders} onApply={handleApplyFilters} />
                </VisibilityProvider>
                <VisibilityProvider>
                    <DojoCreate fields={formFields} btnLabel="Create Subject" onCreate={createRecord} />
                </VisibilityProvider>
            </div>
        </div>
        <section className="main-body">
            <DojoRender adminToken={adminToken} baseUrl={url} ticketColHeaders={ticketColHeaders} singlePageUrl="/the-dojo/admin/subjects/$recordId" sorts={sorts} filters={filters} />
        </section>

    </>
    )

}