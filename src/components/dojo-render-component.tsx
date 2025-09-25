import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import RenderTable from "./table-renderer"
import useFetchData from "./use-fetch-data"

interface DojoProps
{
    adminToken : string
    baseUrl : string
    ticketColHeaders : any[]
    singlePageUrl : string
    sorts ?: { column: string; order: string }[]
    filters ?: { column: string; relation: string; filt_value: string }[]
}

export default function DojoRender( { adminToken, baseUrl, ticketColHeaders, singlePageUrl, sorts = [], filters = [] } : DojoProps)
{
    const navigate = useNavigate()
    const goToSinglePage = (row : any) => 
    {
        navigate({to : singlePageUrl, params : { recordId : String(row.id) }})
    }
    
    const [currPage, setCurrPage] = useState(1)
    const pageSize = 10

    const sortParam =
    sorts.length > 0
        ? sorts.map((s) => `&${s.column}_sort=${s.order}`).join("")
        : "";

    const filterParam =
    filters.length > 0
        ? filters
            .map(
            (f) =>
                `&${encodeURIComponent(f.column)}=${encodeURIComponent(
                f.filt_value
                )}`
            )
            .join("")
        : "";


    const url = `${baseUrl}?page=${currPage}&pageSize=${pageSize}${sortParam}${filterParam}`

    // const { data, loading, error } = useFetchData(url, adminToken)
    const { data, isLoading, error } = useFetchData(url, adminToken)
    const recordsData : {}[] = data?.records ?? []
    const totalPages = Math.ceil(data?.total_count / data?.page_size)
    const prevPage = () => setCurrPage((p) => Math.max(p - 1, 0))
    const nextPage = () => setCurrPage((p) => Math.min(p + 1, totalPages))


    if (isLoading) return <p>Loading ...</p>
    if (error) return <p>Error: {error.message} </p>

    return (
        <>
            <RenderTable colHeaders={ticketColHeaders} tableData={recordsData} onRowClick={goToSinglePage} />
            <div className="nxt-prev-btns">
                <button id="prevBtn" onClick={prevPage} disabled={currPage === 0} className={`gen-btn pri-btn ${currPage === 1 ? "sec-btn" : "pri-btn"}`}>
                    Prev
                </button>

                <span id="pageInfo">
                    Page {currPage} of {totalPages}
                </span>
                
                <button id="nextBtn" onClick={nextPage} disabled={currPage === totalPages} className={`gen-btn pri-btn ${currPage === totalPages ? "sec-btn" : "pri-btn"}`}>
                    Next
                </button>
            </div>
        </>
    )
}