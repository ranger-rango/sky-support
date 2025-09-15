// import { useState } from "react";
import Button from "./btn";
import HandleSubmit from "./handle-submit";

interface EditProps
{
    ticketId : string
}

export default function EditForm(editProps : EditProps)
{

    let ticketData : any[] = JSON.parse(localStorage.getItem("ticketData") || "[]")
    let rowData : any = ticketData.find(row => row.ticket_id === editProps.ticketId)

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
                    {rowData.attachment.length > 0 && (
                    <ul >
                        {rowData.attachment.map((f : any, i : number) => (
                            <li key={f.id}>
                                <embed src={f.data} type={f.type} />
                                <a href={f.url} target="_blank"  rel="noreferrer" className="" download={f.name || `attachment-${i}`}>
                                    {f.name  || "Download file"}
                                </a>
                            </li>
                        ))}
                    </ul>
                    )}
                </div>
                
                {/* <div className="edit-btns">
                    <Button id="" className="gen-btn sec-btn" type="button" label="Cancel" onClick={onCancel} />
                    <Button id="" className="gen-btn pri-btn row-action-btn" label="Save" type="submit" />
                </div> */}

            </form>

        </>
    );
}
