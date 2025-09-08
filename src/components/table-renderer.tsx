import type { ReactNode } from "react";
interface RenderTableProps
{
    colHeaders : any[]
    tableData : any[]
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
                        <tr key={row.user_name}>
                            {
                                table.colHeaders.map((col) => 
                                {
                                    if (!col.hide && typeof row[col.id] !== "undefined")
                                    {
                                        return (
                                            <td>
                                                {row[col.id]}
                                            </td>
                                        )
                                    }
                                    else
                                    {
                                        return (
                                            <td>-</td>
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