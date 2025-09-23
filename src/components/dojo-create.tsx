import type { FormEvent } from "react";
import Button from "./btn";
import { showModal } from "./dojo-sort-filter-context";

interface CreateProps
{
    btnLabel : string
    fields : any[]
    onCreate : (data : any) => void
}

export function DojoCreate({ btnLabel, fields, onCreate } : CreateProps)
{
    const { visibility, toggleVisibility } = showModal();

    const handleApply = (e : FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        onCreate(formData)
        toggleVisibility()
    };
  return (
    <>
        <button onClick={toggleVisibility} className="gen-btn pri-btn"> {btnLabel} </button>

        {
            visibility && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3> {btnLabel} </h3>

                        <form id="togo-create" onSubmit={handleApply} >
                            {
                                fields.map((field) => (
                                    <div key={field}>
                                        <label htmlFor={field}> {field} </label>
                                        <input type="text" name={field} id={field} />
                                    </div>
                                ))
                            }
                        </form>

                        <div className="">
                            <Button id="dojo-create" label={btnLabel} className="gen-btn pri-btn" type="submit" form="togo-create" />
                            <button className="gen-btn pri-btn" onClick={toggleVisibility}>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  );
}