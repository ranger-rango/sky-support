import type { ReactNode } from "react";
interface RenderTableProps
{
    colHeaders : any[]
    tableData : any[]
    onRowClick ?: (row: any) => void
}
export default function RenderTable(table : RenderTableProps)
{
    const tableScafold : ReactNode = (
        <table>
            <thead>
                <tr>
                    {
                        table.colHeaders.filter((col) => !col.hide)
                        .map((col) => (
                            <th key={col.columnName}>{col.columnName}</th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    table.tableData.map((row) => (
                        <tr key={row.ticket_id} onClick={() => table.onRowClick && table.onRowClick(row)} className={table.onRowClick ? "cursor-pointer" : ""} >
                            {
                                table.colHeaders.map((col) => 
                                {
                                    if (!col.hide && typeof row[col.id] !== "undefined")
                                    {
                                        return (
                                            <td key={col.id}>
                                                {row[col.id]}
                                            </td>
                                        )
                                    }
                                    else
                                    {
                                        return (
                                            <td key={col.id}>-</td>
                                        )
                                    }
                                })
                            }
                        </tr>
                    ))
                }
            </tbody>
            
        </table>
    );
    
    return (
        <>
            {tableScafold}
        </>
    );
}