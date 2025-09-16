import HandleSubmit from "./handle-submit";

interface EditProps
{
    ticketId : string
}

export default function EditForm(editProps : EditProps)
{

    let ticketData : any[] = JSON.parse(localStorage.getItem("ticketData") || "[]")
    let rowData : any = ticketData.find(row => row.ticket_id === editProps.ticketId)
    const attachments = Array.isArray(rowData?.["attachment[]"])
    ? rowData["attachment[]"]
    : rowData?.["attachment[]"]
    ? [rowData["attachment[]"]]
    : [];

    const handleChange = () => {}
    const handleFileChange = () => {}
    return (
        <>
            <form action={HandleSubmit} className="" id="edit-form">
                <h3 className="">Edit Ticket</h3>

                <input
                name="main_category" type="text" value={rowData.main_category} onChange={handleChange} />

                <input name="sub_category" type="text" value={rowData.sub_category} onChange={handleChange} />

                <input name="problem_issue" type="text" value={rowData.problem_issue} onChange={handleChange} />

                <textarea name="description" value={rowData.description} onChange={handleChange} />

                <div>
                    <label className="">Attachments</label>
                    <input type="file" multiple onChange={handleFileChange} />
                    {attachments.length > 0 && (
                    <ul className="file-prev-cont" >
                        {attachments.map((f : any, i : number) => (
                            <li key={f.id}>
                                <embed className="file-prev" src={f.data} type={f.type} />
                                <a href={f.data} target="_blank"  rel="noreferrer" className="dwn-link" download={f.name || `attachment-${i}`}>
                                    {f.name  || "Download file"}
                                </a>
                            </li>
                        ))}
                    </ul>
                    )}
                </div>

            </form>

        </>
    );
}
